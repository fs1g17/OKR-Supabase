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
  closeDialog,
  updateObjective,
}: {
  open: boolean;
  objective: string;
  closeDialog: () => void;
  updateObjective: (objective: string) => void;
}) {
  const [newObjective, setNewObjective] = useState<string>(objective);

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
        </div>
        <DialogFooter>
          <Button
            onClick={() => {
              updateObjective(newObjective);
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
