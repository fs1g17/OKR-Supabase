import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import UpdateCardDialog from "./UpdateCardDialog";
import { PenIcon, PlusIcon } from "lucide-react";
import { useState } from "react";
import AddKeyResultDialog from "./AddKeyResultDialog";
import { cn } from "@/lib/utils";
import KeyResultsTable from "./KeyResults/KeyResultsTable";
import { Label } from "@/components/ui/label";

export default function OkrCard({
  id,
  objective,
  keyResults,
  updateObjective,
  updateKeyResult,
  addKeyResult,
  addChildObjective,
}: {
  id: string;
  objective: string;
  keyResults: string[];
  updateObjective: (objective: string) => void;
  updateKeyResult: (keyResult: string, keyResultNumber: number) => void;
  addKeyResult: (keyResult: string) => void;
  addChildObjective: (objective: string) => void;
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
        </CardHeader>

        <CardContent>
          <Label>Key results</Label>
          <KeyResultsTable
            keyResults={keyResults}
            updateKeyResult={updateKeyResult}
            addChildObjective={addChildObjective}
          />
        </CardContent>

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
            objective,
            updateObjective,
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
