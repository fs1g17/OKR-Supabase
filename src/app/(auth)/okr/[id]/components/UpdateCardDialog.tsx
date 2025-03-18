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
          <DialogTitle>Update Objective</DialogTitle>
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
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
