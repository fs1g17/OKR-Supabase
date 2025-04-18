import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { TrashIcon } from "lucide-react";

export default function DeleteKeyResultDialog({
  keyResult,
  removeKeyResult,
}: {
  keyResult: string;
  removeKeyResult: () => void;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <TrashIcon className="w-3 h-3 text-destructive" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Key Result</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete the following key result?
            <div className="bg-gray-200">{keyResult}</div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose>
            <Button variant="destructive" onClick={removeKeyResult}>
              Delete
            </Button>
          </DialogClose>
          <DialogClose>
            <Button>Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
