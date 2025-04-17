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
import { DialogClose, DialogTrigger } from "@radix-ui/react-dialog";

export default function UpdateCardDialog({
  children,
  objective,
  updateObjective,
}: {
  children: React.ReactNode;
  objective: string;
  updateObjective: (objective: string) => void;
}) {
  const [newObjective, setNewObjective] = useState<string>(objective);

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
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
          <DialogClose>
            <Button onClick={() => updateObjective(newObjective)}>
              Update
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
