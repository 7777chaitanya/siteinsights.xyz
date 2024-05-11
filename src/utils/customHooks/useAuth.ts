import { useState, useEffect } from "react";
import { getCurrentUser } from "../supabase/auth";
import { useRouter } from "next/navigation";

export function useAuth() {
const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const user =  getCurrentUser().then(user => {
        console.log("user in hook", user);
        setUser(user)
        if (!user) {
            router.push("/login");
          }
    })

  }, []);
  return user
}
