import supabase from "./supabase";

export async function signUpNewUser(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      emailRedirectTo: "http://localhost:3000/",
    },
  });
  console.log({ data, error });
  return data || error;
}

export async function signInWithEmail(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
    options: {
      emailRedirectTo: "http://localhost:3000/",
    },
  });
}

export async function getCurrentUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut()
}

