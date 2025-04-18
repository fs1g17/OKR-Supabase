import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@radix-ui/react-dialog";

export default function AddKeyResultDialog({
  children,
  addKeyResult,
}: {
  children: React.ReactNode;
  addKeyResult: (keyResult: string) => void;
}) {
  const [keyResult, setKeyResult] = useState<string>("");

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
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
          <DialogClose>
            <Button onClick={() => addKeyResult(keyResult)}>
              Add Key Result
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
