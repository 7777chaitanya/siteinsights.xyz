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
    // useEffect(()=>{
    //     fetch('/js/script.js')
    // },[])
  return (
    <div>
        {/* // TODO: domain name will be shown in a select field, the user should be able to switch to a different domain stats from this page */}
      <h3>{params.domainId}</h3>
      <CodeSnippet />
    </div>
  );
};

export default DomainAnalytics;
