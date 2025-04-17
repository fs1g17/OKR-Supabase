import { cn } from "@/lib/utils";
import { PenIcon, PlusIcon } from "lucide-react";
import UpdateKeyResultDialog from "./UpdateKeyResultDialog";

export default function KeyResultRow({
  className,
  keyResult,
  keyResultNumber,
  updateKeyResult,
}: {
  className: string;
  keyResult: string;
  keyResultNumber: number;
  updateKeyResult: (keyResult: string, keyResultNumber: number) => void;
}) {
  return (
    <div className={cn(className, "flex group")}>
      <div>{keyResult}</div>
      <div className="flex items-center ml-auto invisible group-hover:visible">
        <UpdateKeyResultDialog {...{keyResult, keyResultNumber, updateKeyResult}}/>
        <PlusIcon className="w-3 h-3" />
      </div>
    </div>
  );
}
