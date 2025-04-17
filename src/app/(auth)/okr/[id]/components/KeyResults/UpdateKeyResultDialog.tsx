import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PenIcon } from "lucide-react";
import { useState } from "react";

export default function UpdateKeyResultDialog({
  keyResult,
  keyResultNumber,
  updateKeyResult,
}: {
  keyResult: string;
  keyResultNumber: number;
  updateKeyResult: (keyResult: string, keyResultNumber: number) => void;
}) {
  const [newKeyResult, setNewKeyResult] = useState<string>(keyResult);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <PenIcon className="w-3 h-3"/>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Key Result</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col w-full gap-y-2.5">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="keyResult">Key Result</Label>
            <Input
              id="keyResult"
              value={newKeyResult}
              onChange={(e) => setNewKeyResult(e.currentTarget.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose>
            <Button
              onClick={() => updateKeyResult(newKeyResult, keyResultNumber)}
            >
              Update Key Result
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
