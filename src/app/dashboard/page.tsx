"use client";
import { useAuth } from "@/utils/customHooks/useAuth";
import { getCurrentUser, signOut } from "@/utils/supabase/auth";
import { useRouter } from "next/navigation";
import React from "react";
import { Button, TextField } from "@mui/material";

type Props = {};

const page = (props: Props) => {
  const user = useAuth();
  const router = useRouter()

  const handleSignout = () => {
    signOut().then(()=>{
      router.push('/login')
    })
  }
  return (
    <div>
      {user && (
        <>
 
          <Button variant="outlined" onClick={()=>{handleSignout()}}>Outlined</Button>
          <h1>Dashboard page</h1>
        </>
      )}
    </div>
  );
};

export default page;
