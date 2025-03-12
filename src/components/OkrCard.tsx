import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import UpdateCardDialog from "./UpdateCardDialog";
import { PenIcon, PlusIcon } from "lucide-react";
import { useState } from "react";
import AddKeyResultDialog from "./AddKeyResultDialog";

export default function OkrCard({
  id,
  description,
  objective,
  updateCard,
  addKeyResult,
}: {
  id: string;
  description: string;
  objective: string;
  updateCard: ({
    description,
    objective,
  }: {
    description: string;
    objective: string;
  }) => void;
  addKeyResult: ({
    description,
    objective,
  }: {
    description: string;
    objective: string;
  }) => void;
}) {
  const [updateCardDialogOpen, setUpdateCardDialogOpen] =
    useState<boolean>(false);
  const [addKeyResultDialogOpen, setAddKeyResultDialogOpen] =
    useState<boolean>(false);

  return (
    <>
      <Card id={id} className="min-w-[200px]">
        <Button
          variant="ghost"
          className="absolute top-1 right-1 rounded-full p-0 w-9 h-9"
          onClick={() => setUpdateCardDialogOpen(true)}
        >
          <PenIcon />
        </Button>
        <CardHeader>
          <CardTitle>Objective: {objective}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>

        <CardFooter>
          <Button onClick={() => setAddKeyResultDialogOpen(true)}>
            <PlusIcon />
            Add Key Result
          </Button>
        </CardFooter>
      </Card>

      {updateCardDialogOpen && (
        <UpdateCardDialog
          open={updateCardDialogOpen}
          closeDialog={() => setUpdateCardDialogOpen(false)}
          {...{
            updateCard,
            objective,
            description,
          }}
        />
      )}

      {addKeyResultDialogOpen && (
        <AddKeyResultDialog
          open={addKeyResultDialogOpen}
          closeDialog={() => setAddKeyResultDialogOpen(false)}
          addKeyResult={addKeyResult}
        />
      )}
    </>
  );
}
