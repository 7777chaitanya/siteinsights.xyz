"use client";
import { useAuth } from "@/utils/customHooks/useAuth";
import { getCurrentUser, signOut } from "@/utils/supabase/auth";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { Button, TextField,Paper } from "@mui/material";
import supabase from "@/utils/supabase/supabase";

type Props = {};

const page = (props: Props) => {
  const user: any = useAuth();
  const router = useRouter();
  const [domainName, setDomainName] = useState<string | null>(null);
  const [allDomainsOfTheUser, setAllDomainsOfTheUser] = useState<any[] | null>(null);
  console.log("user", user);

  const handleSignout = () => {
    signOut().then(() => {
      router.push("/login");
    });
  };

  const addNewDomainNameForUser = async () => {
    // add the domain name correspondign to the user to db
    const { data, error } = await supabase
      .from("domainNames")
      .insert([{ domainName: domainName, user: user?.id }])
      .select();
    if (data) {
      // show script pop up
      // fetch all the websites of a user and set to state. show script for each website on card hover
    }
  };

  useEffect(() => {
    if (user) {
      supabase
        .from("domainNames")
        .select("*")

        // Filters
        .eq("user", user.id)
        .then((res) => {
          console.log(res);
          let { data, error } = res;
          setAllDomainsOfTheUser(data);
          console.log("user domains data", data);
        });
    }
  }, [user]);

  return (
    <div>
      {user && (
        <>
          <Button
            variant="outlined"
            onClick={() => {
              handleSignout();
            }}
          >
            Sign out
          </Button>
          <h1>Dashboard page</h1>
          <TextField
            id="outlined-basic"
            label="Enter domain name"
            variant="outlined"
            onChange={(e) => setDomainName(e.target.value)}
          />
          {/* TODO: button should be disabled for invalid domain name format */}
          <Button variant="outlined" onClick={addNewDomainNameForUser}>
            Add New Domain Name
          </Button>
          <div>
            {allDomainsOfTheUser?.map((eachDomain) => {
              return (<div><Paper elevation={3} >
                {eachDomain.domainName}
                <Button variant="contained" onClick={()=>router.push(`/stats/${eachDomain.id}`)}>Show stats</Button>

                
                </Paper></div>)
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default page;
