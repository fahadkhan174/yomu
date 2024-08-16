"use server";

import { signIn as signin } from "@/auth";

export async function signIn() {
  return signin("github");
}
