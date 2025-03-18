import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function OkrChartSpread({
  setSpread,
}: {
  setSpread: (spread: number) => void;
}) {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Spread</CardTitle>
      </CardHeader>
      <CardContent>
        <Select onValueChange={(value) => setSpread(parseInt(value))} defaultValue="1">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1x</SelectItem>
            <SelectItem value="2">2x</SelectItem>
            <SelectItem value="3">3x</SelectItem>
          </SelectContent>
        </Select>
      </CardContent>
    </Card>
  );
}
