chrome.storage.local.get('websiteData', ({ websiteData }) => {
  const websiteList = document.getElementById('websiteList');
  for (const website in websiteData) {
    const li = document.createElement('li');
    li.textContent = `${website}: ${websiteData[website]} visits`;
    websiteList.appendChild(li);
  }
});

