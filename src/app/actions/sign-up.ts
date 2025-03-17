"use server";

import { AxiosError } from "axios";
import { redirect } from "next/navigation";

import { signUp as performSignUp } from "@/api/auth";

export async function signUp(prevState: any, formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;
  const confirm_password = formData.get("confirm_password") as string;

  try {
    await performSignUp({
      username,
      password,
      confirm_password,
    });
  } catch (error) {
    const e = error as AxiosError;
    return {
      success: false,
      message: (e.response?.data as { message: string; description: string })
        ?.description,
    };
  }

  console.log("successfully signed up");
  redirect("/sign-in");
}
