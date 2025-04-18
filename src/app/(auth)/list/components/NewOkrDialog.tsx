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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { makeOkr } from "@/supabase/supabase";

export default function NewOkrDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  const [name, setName] = useState<string>("");

  const handleSubmit = async (evt: React.FormEvent) => {
    console.log("clicked new");
    makeOkr({ name });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New OKR</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col gap-y-2.5">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Enter a name for your OKR"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose>
            <Button type="submit" onClick={handleSubmit}>
              Create OKR
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
