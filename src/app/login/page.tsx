'use client'
import { Button, TextField } from "@mui/material";
import {useState} from "react";
import styles from "./login.module.css";
import { signInWithEmail, signUpNewUser } from "@/utils/supabase/auth";
import { useRouter } from "next/navigation";


const Page = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () =>{
    console.log("handle Login", email, password)
    signInWithEmail(email, password).then(res => {
      router.push('/dashboard')
    })
  }

  return (
    <div className={styles.loginPageContainer}>
      <div className={styles.loginInputFieldsContainer}>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          className={styles.inputField}
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          className={styles.inputField}
          value=  {password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <Button variant="contained" onClick={handleLogin}>Login</Button>

      </div>
    </div>
  );
};

export default Page;
