chrome.runtime.onInstalled.addListener((reason) => {
  if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
    console.log("Extension installed.");
    chrome.tabs.create({ url: "tutorial.html" });
  }
});
