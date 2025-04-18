import { cn } from "@/lib/utils";
import KeyResultRow from "./KeyResultRow";

export default function KeyResultsTable({
  keyResults,
  updateKeyResult,
  addChildObjective,
  removeKeyResult,
}: {
  keyResults: string[];
  updateKeyResult: (keyResult: string, keyResultNumber: number) => void;
  addChildObjective: (objective: string) => void;
  removeKeyResult: (keyResultNumber: number) => void;
}) {
  return (
    <div
      className={cn(
        "flex flex-col w-[400px]",
        keyResults.length > 0 && "border border-gray-200"
      )}
    >
      {keyResults.map((keyResult, i) => (
        <KeyResultRow
          className={cn("w-full px-2", i % 2 === 1 && "bg-gray-200")}
          keyResult={keyResult}
          keyResultNumber={i}
          updateKeyResult={updateKeyResult}
          addChildObjective={addChildObjective}
          removeKeyResult={() => removeKeyResult(i)}
        />
      ))}
    </div>
  );
}
