import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useCallback, useState } from "react";
import { Button } from "./ui/button";
import { DialogClose } from "@radix-ui/react-dialog";

export default function UpdateCardDialog({
  open,
  objective,
  description,
  closeDialog,
  updateCard,
}: {
  open: boolean;
  objective: string;
  description: string;
  closeDialog: () => void;
  updateCard: ({
    description,
    objective,
  }: {
    description: string;
    objective: string;
  }) => void;
}) {
  const [newObjective, setNewObjective] = useState<string>(objective);
  const [newDescription, setNewDescription] = useState<string>(description);

  return (
    <Dialog open={open} onOpenChange={closeDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update person</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col w-full gap-y-2.5">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link">Objective</Label>
            <Input
              id="link"
              value={newObjective}
              onChange={(e) => setNewObjective(e.currentTarget.value)}
            />
          </div>
          <div className="grid flex-1 gap-2">
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              value={newDescription}
              onChange={(e) => setNewDescription(e.currentTarget.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              onClick={() => {
                updateCard({
                  description: newDescription,
                  objective: newObjective,
                });
                closeDialog();
              }}
            >
              Update
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
