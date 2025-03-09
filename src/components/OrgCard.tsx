import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

export default function OrgCard({
  id,
  name,
  title,
}: {
  id: string;
  name: string;
  title: string;
}) {
  return (
    <Card id={id} className="min-w-[200px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{name}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button>Update</Button>
      </CardFooter>
    </Card>
  );
}
