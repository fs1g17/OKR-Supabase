import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import UpdateCardDialog from "./UpdateCardDialog";
import { PenIcon, PlusIcon } from "lucide-react";
import AddKeyResultDialog from "./AddKeyResultDialog";
import KeyResultsTable from "../KeyResults/KeyResultsTable";
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
  id: number;
  objective: string;
  keyResults: string[];
  updateObjective: (objective: string) => void;
  updateKeyResult: (keyResult: string, keyResultNumber: number) => void;
  addKeyResult: (keyResult: string) => void;
  addChildObjective: (objective: string) => void;
}) {
  return (
    <Card id={`org-card-${id}`} className="min-w-[200px]">

      <CardHeader className="group">
        <CardTitle>
          Objective: {objective}
          <UpdateCardDialog
            objective={objective}
            updateObjective={updateObjective}
          >
            <Button
              variant="ghost"
              className="invisible group-hover:visible rounded-full p-0 w-9 h-9"
            >
              <PenIcon />
            </Button>
          </UpdateCardDialog>
        </CardTitle>
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
        <AddKeyResultDialog addKeyResult={addKeyResult}>
          <Button>
            <PlusIcon />
            Add Key Result
          </Button>
        </AddKeyResultDialog>
      </CardFooter>
    </Card>
  );
}
