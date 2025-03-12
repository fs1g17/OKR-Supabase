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
  children,
  updateCard,
}: {
  children: React.ReactNode;
  updateCard: ({
    description,
    objective,
  }: {
    description: string;
    objective: string;
  }) => void;
}) {
  const [objective, setObjective] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update person</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col w-full gap-y-2.5">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link">Objective</Label>
            <Input
              id="link"
              value={objective}
              onChange={(e) => setObjective(e.currentTarget.value)}
            />
          </div>
          <div className="grid flex-1 gap-2">
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              value={description}
              onChange={(e) => setDescription(e.currentTarget.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button onClick={() => updateCard({ description, objective })}>
              Update
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
