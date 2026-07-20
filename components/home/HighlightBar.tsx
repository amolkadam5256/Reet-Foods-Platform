import { highlightBar } from "../../data/home";
import { Card, CardContent } from "../ui/card";

export function HighlightBar() {
  return (
    <section className="mb-12" aria-label="Brand highlights">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {highlightBar.map((item) => (
          <Card key={item} className="bg-gray-50 border-gray-100 shadow-none">
            <CardContent className="p-4 text-center text-sm font-semibold text-gray-900">
              {item}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
