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
import { useFormState } from "react-dom";
import { signIn } from "@/app/actions/sign-in";
import { useRef } from "react";

const initialState = {
  success: false,
  message: "",
};

export default function SignIn() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(signIn, initialState);

  console.log(state);

  const handleSubmit = async (evt: React.FormEvent) => {
    evt.preventDefault();
    formAction(new FormData(formRef.current!));
  };

  return (
    <Card className="w-[350px] self-center justify-self-center">
      <CardHeader>
        <CardTitle>Welcome Back!</CardTitle>
        <CardDescription>Sign in to access your OKRs.</CardDescription>
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
          </div>
          {state.message !== "" && (
            <div className="text-destructive">{state.message}</div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/sign-up">
            <Button variant="outline">Sign Up</Button>
          </Link>
          <Button type="submit">Sign In</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
