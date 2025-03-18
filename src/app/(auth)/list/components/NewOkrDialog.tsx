"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRef } from "react";
import { useFormState } from "react-dom";
import { newOkr } from "../actions/NewOkr";

const initialState = {
  success: false,
  message: "",
};

export default function NewOkrDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(newOkr, initialState);

  const handleSubmit = async (evt: React.FormEvent) => {
    console.log("clicked new");
    evt.preventDefault();
    formAction(new FormData(formRef.current!));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form ref={formRef} onSubmit={handleSubmit}>
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
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Create OKR</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
