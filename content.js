function injectText(text) {
  console.log("injectText called");
  const textAreas = document.getElementsByTagName("textarea");
  if (textAreas.length > 0) {
    textAreas[0].value = text;
    textAreas[0].focus();

    const event = new KeyboardEvent("keydown", {
      key: "Enter",
      code: "Enter",
      keyCode: 13,
      which: 13,
      bubbles: true,
      cancelable: true
    });

    textAreas[0].dispatchEvent(event);
  } else {
    console.log("No textarea found");
  }
}

function detectTextQuery() {
  console.log("detectTextQuery called");
  const queryParams = new URLSearchParams(window.location.search);
  if (queryParams.has("text")) {
    console.log("text parameter found");

    const findModelButton = () => {
      const button = document.querySelector("button label")
   
        if (
          button
        ) {
          console.log("Model button found");
          return button;
        }
      
      return null;
    };

    const waitForModelButton = () => {
      const modelButton = findModelButton();
      if (modelButton) {
        injectText(queryParams.get("text"));
      } else {
        setTimeout(waitForModelButton, 250);
      }
    };

    waitForModelButton();
  } else {
    console.log("text parameter not found");
  }
}

window.addEventListener("load", () => {
  console.log("window.load event");
  detectTextQuery();
});
