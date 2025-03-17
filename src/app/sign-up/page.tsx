import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function SignIn() {
  return (
    <Card className="w-[350px] self-center justify-self-center">
      <CardHeader>
        <CardTitle>Welcome!</CardTitle>
        <CardDescription>Sign up to start making OKRs.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="Username" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="Password" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="confirm_password">Confirm Password</Label>
              <Input id="confirm_password" placeholder="Confirm Password" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href="/sign-in">
          <Button variant="outline">Sign In</Button>
        </Link>
        <Button type="submit">Sign Up</Button>
      </CardFooter>
    </Card>
  );
}
