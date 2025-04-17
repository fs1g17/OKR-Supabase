import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function RemoveObjectiveDialog({
  children,
  removeObjective,
}: {
  children: React.ReactNode;
  removeObjective: () => void;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Objective</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete objective?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose>
            <Button variant="destructive" onClick={removeObjective}>
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
