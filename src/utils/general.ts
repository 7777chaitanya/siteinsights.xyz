export function copyToClipboard(text) {
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
  