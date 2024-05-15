import { copyToClipboard } from "@/utils/general";
import { Button } from "@mui/material";
import {useState} from 'react'

const CodeSnippet = () => {
    const [snippet, setSnippet] = useState(
      '<script defer src="localhost:3000/js/script.js"></script>'
    );
    return (
      <div style={{display: 'flex', width: '80vw', margin: 'auto', border: '1px solid lightBlue', backgroundColor: 'lightBlue', padding: '3px', alignItems: 'center', justifyContent: 'spaceBetween', borderRadius: '5px'}}>
        <div style={{flex: 1}}>{snippet}</div>
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

  export default CodeSnippet