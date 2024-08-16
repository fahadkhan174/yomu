"use server";

import { signOut as signout } from "@/auth";

export async function signOut() {
  return signout();
}
