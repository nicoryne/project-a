"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export async function login() {
  revalidatePath("/", "layout");
  redirect("../login/login-page");
}

export async function signup(formData: FormData) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.signUp({
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    options: {
      data: {
        first_name: formData.get("first-name") as string,
        last_name: formData.get("last-name") as string,
      },
    },
  });

  if (error) {
    console.log(error);
    redirect("/error");
  }

  revalidatePath("/");
  redirect("/");
}
