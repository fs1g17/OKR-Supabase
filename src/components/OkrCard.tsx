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

export default function OkrCard({
  id,
  description,
  objective,
  updateCard,
}: {
  id: string;
  description: string;
  objective: string;
  updateCard: ({ description, objective }: { description: string; objective: string }) => void;
}) {
  console.log(updateCard);
  return (
    <Card id={id} className="min-w-[200px]">
      <CardHeader>
        <CardTitle>{objective}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <UpdateCardDialog updateCard={updateCard}>
          <Button>Update</Button>
        </UpdateCardDialog>
      </CardFooter>
    </Card>
  );
}
