'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/superbase/server'

export async function login(email: string, password: string) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email,
    password
    // email: formData.get('email') as string,
    // password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)
  console.log(error)
  return error;

  // if (error) {
  //   redirect('/error')
  // }

  // revalidatePath('/', 'layout')
  // redirect('/')
}

export async function signup(email: string, password: string) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email,
    password
    // email: formData.get('email') as string,
    // password: formData.get('password') as string,
  }
  console.log(data)

  const { error } = await supabase.auth.signUp(data)
  return error
  // if (error) {
  //   redirect('/error')
  // }

  // revalidatePath('/', 'layout')
  // redirect('/')
}

export async function logout() {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();
  return error;

  // if (error) {
  //   redirect("/error");
  // }

  // revalidatePath("/", "layout");
  // redirect("/login");
}