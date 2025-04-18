import { cn } from "@/lib/utils";
import { PlusIcon } from "lucide-react";
import UpdateKeyResultDialog from "./UpdateKeyResultDialog";
import DeleteKeyResultDialog from "./DeleteKeyResultDialog";

export default function KeyResultRow({
  className,
  keyResult,
  keyResultNumber,
  updateKeyResult,
  addChildObjective,
  removeKeyResult,
}: {
  className: string;
  keyResult: string;
  keyResultNumber: number;
  updateKeyResult: (keyResult: string, keyResultNumber: number) => void;
  addChildObjective: (objective: string) => void;
  removeKeyResult: () => void;
}) {
  return (
    <div className={cn(className, "flex group")}>
      <div>{keyResult}</div>
      <div className="flex items-center ml-auto invisible group-hover:visible">
        <UpdateKeyResultDialog {...{keyResult, keyResultNumber, updateKeyResult}}/>
        <PlusIcon className="w-3 h-3" onClick={() => addChildObjective(keyResult)} />
        <DeleteKeyResultDialog keyResult={keyResult} removeKeyResult={removeKeyResult} />
      </div>
    </div>
  );
}
