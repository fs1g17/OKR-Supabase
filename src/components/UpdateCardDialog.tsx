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

export default function UpdateCardDialog({
  children,
  updateCard,
}: {
  children: React.ReactNode;
  updateCard: ({ name, title }: { name: string; title: string }) => void;
}) {
  const [title, setTitle] = useState<string>("");
  const [name, setName] = useState<string>("");

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update person</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col w-full gap-y-2.5">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link">Title</Label>
            <Input
              id="link"
              value={title}
              onChange={(e) => setTitle(e.currentTarget.value)}
            />
          </div>
          <div className="grid flex-1 gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={() => updateCard({ name, title })}>Update</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
