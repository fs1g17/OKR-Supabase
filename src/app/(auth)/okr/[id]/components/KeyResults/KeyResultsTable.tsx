import { cn } from "@/lib/utils";
import KeyResultRow from "./KeyResultRow";

export default function KeyResultsTable({
  keyResults,
}: {
  keyResults: string[];
}) {
  return (
    <div
      className={cn(
        "flex flex-col",
        keyResults.length > 0 && "border border-gray-200"
      )}
    >
      {keyResults.map((keyResult, i) => (
        <KeyResultRow
          className={cn("w-full px-2", i % 2 === 1 && "bg-gray-200")}
          keyResult={keyResult}
        />
      ))}
    </div>
  );
}
