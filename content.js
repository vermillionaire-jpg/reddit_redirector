// content.js - logic for checking if current page is reddit and redirecting
// per user selection in popup.html, which is stored in chrome.storage.sync and accessed here in content.js
// popup.js also reloads the page after user selection, so that content.js runs again and applies the 
// new redirectSwitch setting immediately

const url = new URL(window.location.href);
const host = url.hostname;

const incompatiblePaths = [
    "/chat",
    "/discover",
    "/mod",
    "/settings",
    "/topics",
    "/rpan",
    "/appeals",
    "/media"
].some(d => url.pathname.startsWith(d));

// const isIncompatiblePath = incompatiblePaths.some(d => url.pathname.startsWith(d));

const isMediaHost =
    host.includes("preview.redd.it") ||
    host.includes("i.redd.it") ||
    host.includes("v.redd.it");

// if (host == "www.reddit.com" && !isIncompatiblePath && !isMediaHost) {
//     const newUrl = url.href.replace("www.reddit.com", "old.reddit.com");
//     window.location.replace(newUrl);
// }

chrome.storage.sync.get("redirectSwitch", ({ redirectSwitch }) => {

    if (host != "www.reddit.com" && host != "old.reddit.com") return;

    if (redirectSwitch === "Enabled" && host == "www.reddit.com" && !incompatiblePaths && !isMediaHost) {
        const newUrl = url.href.replace("www.reddit.com", "old.reddit.com");
        window.location.replace(newUrl);
    }

    if (redirectSwitch === "Disabled" && host == "old.reddit.com" && !incompatiblePaths && !isMediaHost) {
        const newUrl = url.href.replace("old.reddit.com", "www.reddit.com");
        window.location.replace(newUrl);
    }
});
