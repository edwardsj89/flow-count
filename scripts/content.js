const currentURL = window.location.href;

chrome.storage.local.get('websiteData', ({ websiteData }) => {
  if (!websiteData[currentURL]) {
    websiteData[currentURL] = 1;
  } else {
    websiteData[currentURL]++;
  }
  chrome.storage.local.set({ websiteData });
});

