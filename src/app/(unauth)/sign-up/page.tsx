"use client";

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
import { useRef } from "react";
import { useFormState } from "react-dom";
import { signUp } from "@/app/actions/sign-up";

const initialState = {
  success: false,
  message: "",
};

export default function SignUp() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(signUp, initialState);

  console.log(state);

  const handleSubmit = async (evt: React.FormEvent) => {
    evt.preventDefault();
    formAction(new FormData(formRef.current!));
  };

  return (
    <Card className="w-[350px] self-center justify-self-center">
      <CardHeader>
        <CardTitle>Welcome!</CardTitle>
        <CardDescription>Sign up to start making OKRs.</CardDescription>
      </CardHeader>
      <form ref={formRef} onSubmit={handleSubmit}>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="username">Username</Label>
              <Input id="username" name="username" placeholder="Username" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" placeholder="Password" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="confirm_password">Confirm Password</Label>
              <Input
                id="confirm_password"
                name="confirm_password"
                placeholder="Confirm Password"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/sign-in">
            <Button variant="outline">Sign In</Button>
          </Link>
          <Button type="submit">Sign Up</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
