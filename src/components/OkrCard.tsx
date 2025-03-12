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
import { PenIcon } from "lucide-react";
import { useState } from "react";

export default function OkrCard({
  id,
  description,
  objective,
  updateCard,
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
}) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Card id={id} className="min-w-[200px]">
        <Button
          variant="outline"
          className="absolute top-5 right-5 rounded-full p-0 w-9 h-9 bg-secondary"
          onClick={() => setOpen(true)}
        >
          <PenIcon />
        </Button>
        <CardHeader>
          <CardTitle>{objective}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardFooter></CardFooter>
      </Card>

      {open && (
        <UpdateCardDialog
          closeDialog={() => setOpen(false)}
          {...{
            updateCard,
            open,
            objective,
            description,
          }}
        />
      )}
    </>
  );
}
