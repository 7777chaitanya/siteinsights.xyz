"use client";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import styles from "./signup.module.css";
import { signUpNewUser } from "@/utils/supabase/auth";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    // magic link login
    console.log("handle Login", email, password);
    signUpNewUser(email, password);
  };

  return (
    <div className={styles.loginPageContainer}>
      <div className={styles.loginInputFieldsContainer}>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          className={styles.inputField}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          className={styles.inputField}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" onClick={handleSignup}>
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Page;
