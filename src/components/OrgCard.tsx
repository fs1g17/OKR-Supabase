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

export default function OrgCard({
  id,
  name,
  title,
  updateCard,
}: {
  id: string;
  name: string;
  title: string;
  updateCard: ({ name, title }: { name: string; title: string }) => void;
}) {
  console.log(updateCard);
  return (
    <Card id={id} className="min-w-[200px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{name}</CardDescription>
      </CardHeader>
      <CardFooter>
        <UpdateCardDialog updateCard={updateCard}>
          <Button>Update</Button>
        </UpdateCardDialog>
      </CardFooter>
    </Card>
  );
}
