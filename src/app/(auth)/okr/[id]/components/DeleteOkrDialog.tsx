"use client";

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
import { deleteOkr } from "@/supabase/supabase";
import { TrashIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function DeleteOkrDialog({ id }: { id: number }) {
  const router = useRouter();

  const handleClick = () => {
    deleteOkr(id).then(() => router.push("/list"));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">
          <TrashIcon />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete OKR</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this OKR?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose>
            <Button>Cancel</Button>
          </DialogClose>
          <DialogClose>
            <Button variant="destructive" onClick={handleClick}>
              Delete
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
