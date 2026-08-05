# Server Configuration & Prerender Setup

> **Site:** searchsarkarinaukri.com
> **Tech Stack:** React SPA + Prerender SSR backend | Node.js | Fastify | Ubuntu 22.04 LTS
> **Server:** Apache 2.4.56 | Nginx 1.18.0 (as reverse proxy) | Cloudflare CDN
> **Hosting:** AWS EC2 (t3.large), Mumbai region
> **SSL/TLS:** Let's Encrypt (auto-renewal)

---

## Current Server Architecture

### Component Diagram

```
[User Request] 
        → DNS Resolution → Cloudflare CDN 
                      → Origin (EC2) 
                         → Node.js Prerender Service (port 3000)
                            → Render Service → HTML Output
                                → Apache/Nginx (port 80/443) → CDN Cache → SSL Termination
                                        → Response to User
```

### Prerender Service Configuration

**Primary Function:** Convert React SPA URLs to prerendered HTML for crawlers and users without JavaScript.

**Server Configuration Details:**

```nginx
# Nginx config for prerender service (upstream)
upstream prerender_node {
    server 127.0.0.1:3000 max_fails=3 fail_timeout=5s;
}

server {
    listen 80;
    server_name www.searchsarkarinaukri.com;

    location / {
        proxy_pass http://prerender_node;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_valid 200 301 3 months;
        proxy_cache_use_stale error timeout updating;
        add_header Cache-Control "public, max-age=93600";
    }

    # Serve static content directly
    location /static/ {
        root /var/www/searchsarkarinaukri.com/build;
        try_files $uri $uri/ =404;
    }
}

# SSL termination (if using reverse proxy)
server {
    listen 443 ssl;
    server_name www.searchsarkarinaukri.com;
    
    ssl_certificate /etc/letsencrypt/live/www.searchsarkarinaukri.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/www.searchsarkarinaukri.com/privkey.pem;
    
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;
    
    include /etc/nginx/sites-enabled/redirect_and_ssl.conf;
}
```

**Prerender Environment Variables:**

```env
# .env file for prerender service
PORT=3000
PRERENDER_NUM_RENDERERS=4
PRERENDER_FEATURE_FLAGS='ui_text_selector=false'
PRERENDER_TIMEOUT=60000
PRERENDER_ORIGIN=https://www.searchsarkarinaukri.com
PRERENDER_HOST=https://www.searchsarkarinaukri.com
PRERENDER_SECRET=your-secret-key-for-admin-routes
```

### Server Performance & Hardening

**Security Headers:**

```nginx
# Security headings (in main server block)
add_header X-Frame-Options DENY;
add_header X-Content-Type-Options "nosniff";
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload";
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.onesignal.com https://api.searchsarkarinaukri.com https://fonts.googleapis.com https://fonts.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https://www.searchsarkarinaukri.com https://cdn.onesignal.com https://fonts.gstatic.com; font-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.gstatic.com; connect-src 'self' https://api.searchsarkarinaukri.com https://cdn.onesignal.com wss://wss.one-signal.com; img-src 'self' data: https://www.searchsarkarinaukri.com https://cdn.onesignal.com https://fonts.gstatic.com; object-src 'none'; frame-ancestors 'none'";
```

**Custom Headers:**

```nginx
add_header Referrer-Policy "strict-origin-when-cross-origin";
add_header X-DNS-Prefetch-Control "off";
add_header Cross-Origin-Resource-Policy "same-origin";
add_header Permissions-Policy "camera=(), document=(), geolocation=(), microphone=(), fullscreen=()";
```

### Prerender Service Management

**Process Management (systemd):**

```ini
# /etc/systemd/system/prerender.service
[Unit]
Description=Prerender Service for React SPA SEO
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/var/www/searchsarkarinaukri.com/prerender-node
ExecStart=/usr/bin/node index.js
Restart=always
RestartSec=5
StandardOutput=journal
StandardError=journal
SyslogIdentifier=prerender

[Install]
WantedBy=multi-user.target

# Commands to manage
sudo systemctl start prerender
sudo systemctl stop prerender
sudo systemctl restart prerender
sudo systemctl enable prerender  # Enable on boot
sudo journalctl -u prerender -f  # Monitor logs
```

**Health Check Endpoints:**

```javascript
// Prerender service health endpoints
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
  
  // Check specific route
  app.get('/health/jobs', async (req, res) => {
    const jobs = await getRecentJobs();
    res.json({ status: jobs.length > 0 ? 'healthy' : 'warning' });
  });
```

### Server Performance Metrics (Baseline)

| Metric | Target | Current Baseline | Improvement Goal |
|--------|--------|------------------|-------------------|
| TTFB (Time to First Byte) | < 250ms | 210ms | < 200ms |
| Full HTML Response | < 500ms | 420ms | < 350ms |
| Server Uptime | 99.9% | Current 99.7% | 99.9% |
| Error Rate (5xx) | < 0.1% | 0.02% | < 0.01% |
| CPU Utilization | < 70% avg | 45% avg | < 60% avg |
| Memory Usage | Peak < 1GB | 650MB | < 750MB |
| Request Concurrency | 100+ | 200 concurrent | 300 concurrent |
| API Latency (Prerender Service) | < 300ms | 250ms | < 200ms |

### Monitoring & Alerting

**Prometheus Configuration Snippet:**

```yaml
# prometheus.yml
scrape_configs:
  - job_name: 'prerender-service'
    static_configs:
      - targets: ['localhost:3000']
    metrics_path: '/health'
    
  - job_name: 'nginx'
    static_configs:
      - targets: ['localhost']
    metrics_path: /status
    params:
      format: [prometheus]

  - job_name: 'google-search-console'
    metrics_path: /metrics
    scheme: https
```

**Alert Rules:**

```yaml
# alerting rules
- alert: PrerenderServiceDown
  expr: prerender_service_up{job="prerender-service"} == 0
  for: 5m
  labels:
    severity: critical
  annotations:
    summary: "Prerender service is down"
    description: "Prerender service has been unavailable for more than 5 minutes"

- alert: HighCrawlErrors
  expr: increase(nginx_http_status{status=5xx}[5m]) > 10
  for: 1m
  labels:
    severity: warning
  annotations:
    summary: "High number of 5xx responses"
    description: "{{ $labels.instance }} returned {{ $value }} 5xx errors in the last 5 minutes"

- alert: HighCrawlLatency
  expr: 
    histogram_quantile(0.95, 
      rate(nginx_http_request_duration_seconds_bucket[1m])
      /\  
      nginx_http_request_duration_secondsbucket{code!~"2.."}[300s]
    > 1.2
  for: 5m
  labels:
    severity: warning
  annotations:
    summary: "95th percentile request latency is high (>1.2s)"
    description: "Mobile users may experience slow page loads"

Prometheus Rules Automations
```

### TLS Configuration Checklist

| Item | Requirement | Implementation |
|------|-------------|----------------|
| SSL Protocol | TLS 1.2+, no TLS 1.0/1.1 | `ssl_protocols TLSv1.2 TLSv1.3;` |
| Cipher Suite | Modern ciphers (AES-GCM, CHACHA20) | `ssl_ciphers HIGH:!aNULL:!MD5; reorder;` |
| HSTS | `max-age=31536000; includeSubDomains; preload;` | Set in config |
| OCSP Stapling | Enabled | `ssl_stapling on;` |
| Redirect All HTTP → HTTPS | Standard 301 redirects | `RewriteCond %{HTTPS} off` |
| External HSTS Include | `preload` directive | Add to header: `add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;` |
| HSTS Preload Eligibility | Must have preload directive | Must satisfy https://hstspreload.org/ requirements |

### Backups & Recovery

| Strategy | Details |
|----------|---------|
| Daily File Backup | `rsync` to `/backup/www/` with 7-day retention |
| Database Backup | PostgreSQL/JavaDB dump daily + hourly transaction log |
| Binary Backup | `tar -czf /backup/www/$(date +%F).tar.gz /var/www/searchsarkarinaukri.com/` |
| Disaster Recovery Test | Quarterly DR test in staging environment |
| Configuration Management | Ansible playbooks for repeatable setup |

### Server Optimization Tools

| Tool | Purpose | Installation |
|------|---------|--------------|
| `htop` | Process monitoring | `apt install htop` |
| `nmon` | Real-time system metrics | `apt install nmon` |
| `iostat` | Disk I/O monitoring | `apt install sysstat` |
| `vtop` | Interactive process monitoring | `npm install -g vtop` |
| `goaccess` | Real-time log analyzer | `apt install goaccess` |
| `fail2ban` | Brute-force protection | `apt install fail2ban` |
| `certbot` | Let's Encrypt auto-renewal | `apt install certbot` |

---

## Implementation Roadmap

### Phase 1: Baseline Setup (Week 1)
- [ ] Verify server configuration files
- [ ] Confirm SSL/TLS setup and headers
- [ ] Validate prerender service health
- [ ] Set up basic monitoring (CPU, RAM, uptime)

### Phase 2: SEO & Performance Tuning (Weeks 2-3)
- [ ] Optimize prerender caching strategy
- [ ] Implement compression (Gzip/Brotli)
- [ ] Enable HTTP/2 multiplexing
- [ ] Tune node.js event loop parameters
- [ ] Add custom nginx headers
- [ ] Configure SSL best practices

### Phase 3: Security Hardening (Weeks 4-5)
- [ ] Implement WAF-like protection with mod_security
- [ ] Set up fail2ban for brute-force protection
- [ ] Harden system parameters (sysctl.conf)
- [ ] Configure detailed logging
- [ ] Implement configuration backups

### Phase 6: Continuous Monitoring (Ongoing)
- [ ] Set up real-time dashboards (Grafana + Prometheus)
- [ ] Implement alerting for critical metrics
- [ ] Quarterly security audits
- [ ] Annual server performance review

---

## Related Resources

- [Nginx Security Best Practices](https://nginx.org/en/docs/http/ngx_http_secure_link_module.html)
- [Let's Encrypt Security Recommendations](https://letsencrypt.org/en/directory/)
- [OWASP Security Headers Project](https://owasp.org/www-project-security-headers/)
- [Cloudflare Security Features](https://www.cloudflare.com/plans/security/)
- [Node.js Performance Best Practices](https://nodejs.org/en/performance/)

---

*Document Version: 1.0 | Updated: July 2026*