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
import { useRef, useState } from "react";
import { signUp } from "@/supabase/supabase";
import { useRouter } from "next/navigation";

const initialState = {
  success: false,
  message: "",
};

export default function SignUp() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (evt: React.FormEvent) => {
    evt.preventDefault();

    if (password !== confirmPassword) {
      console.log("wrong password");
      return;
    }

    const resposne = await signUp({ email, password });
    console.log({ user: resposne.data });
    router.push("/list");
  };

  return (
    <Card className="w-[350px] self-center justify-self-center">
      <CardHeader>
        <CardTitle>Welcome!</CardTitle>
        <CardDescription>Sign up to start making OKRs.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="confirm_password">Confirm Password</Label>
            <Input
              id="confirm_password"
              name="confirm_password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.currentTarget.value)}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href="/sign-in">
          <Button variant="outline">Sign In</Button>
        </Link>
        <Button type="submit" onClick={handleSubmit}>
          Sign Up
        </Button>
      </CardFooter>
    </Card>
  );
}
