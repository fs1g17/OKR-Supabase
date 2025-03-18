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

export default function NewOkrDialog({children}:{children: React.ReactNode}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New OKR</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col gap-y-2.5">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Enter a name for your OKR" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Create OKR</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
