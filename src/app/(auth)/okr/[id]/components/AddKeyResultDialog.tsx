import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function AddKeyResultDialog({
  open,
  closeDialog,
  addKeyResult,
}: {
  open: boolean;
  closeDialog: () => void;
  addKeyResult: (keyResult: string) => void;
}) {
  const [keyResult, setKeyResult] = useState<string>("");

  return (
    <Dialog open={open} onOpenChange={closeDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Key Result</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col w-full gap-y-2.5">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="keyResult">Key Result</Label>
            <Input
              id="keyResult"
              value={keyResult}
              onChange={(e) => setKeyResult(e.currentTarget.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={() => {
              addKeyResult(keyResult);
              closeDialog();
            }}
          >
            Add Key Result
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
