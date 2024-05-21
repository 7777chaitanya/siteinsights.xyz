console.log("executed the fetched script");

// Duplicate events should be prevented from the client
window.navigation.addEventListener("navigate", (event) => {
  console.log("location changed!", event);

  setTimeout(() => {
    // TODO: change this to my app domain name before deployment
    fetch("https://siteinsights-xyz.vercel.app/api/userLanding", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({ pathname: window.location.pathname }), // body data type must match "Content-Type" header
    });
  });
});

// this script will send a fetch request to the api to record the fact that an user has landed on the website
