"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { OkrListType } from "@/types/response";
import Link from "next/link";
import NewOkrDialog from "./NewOkrDialog";

export default function ListOkrs({ list }: { list: OkrListType[] }) {
  return (
    <Card className="max-w-[425px]">
      <CardHeader>
        <CardTitle>Your OKRs</CardTitle>
        <CardDescription>Here is a list of your OKRs</CardDescription>
      </CardHeader>
      <CardContent>
        {list.map(({ id, name }) => (
          <Link href={`/okr/${id}`}>{name}</Link>
        ))}
      </CardContent>
      <CardFooter className="flex justify-between">
        <NewOkrDialog>
          <Button>New OKR</Button>
        </NewOkrDialog>
      </CardFooter>
    </Card>
  );
}
