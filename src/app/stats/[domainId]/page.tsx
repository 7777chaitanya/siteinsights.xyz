"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";

function copyToClipboard(text) {
  // Create a temporary input element
  const tempInput = document.createElement("input");
  tempInput.value = text;
  document.body.appendChild(tempInput);

  // Select the text inside the input element
  tempInput.select();
  tempInput.setSelectionRange(0, 99999); // For mobile devices

  // Copy the selected text to the clipboard
  document.execCommand("copy");

  // Remove the temporary input element
  document.body.removeChild(tempInput);
}

const CodeSnippet = () => {
  const [snippet, setSnippet] = useState(
    '<script defer src="localhost:3000/js/script.js"></script>'
  );
  return (
    <div>
      <div>{snippet}</div>
      <div>
        <Button
          variant="contained"
          onClick={() => {
            copyToClipboard(snippet);
          }}
        >
          Copy snippet
        </Button>
      </div>
    </div>
  );
};

const DomainAnalytics = ({ params }) => {
    useEffect(()=>{
        fetch('/siteStats',{
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
              "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({ domainId: params.domainId }),
        })
    },[])
  return (
    <div>
        {/* // TODO: domain name will be shown in a select field, the user should be able to switch to a different domain stats from this page */}
      <h3>{params.domainId}</h3>
      <CodeSnippet />
    </div>
  );
};

export default DomainAnalytics;
