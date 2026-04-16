// Selection logic for popup.html

// if (redirectSwitch) {
//     const select = document.getElementById("redirectSwitch");
//     select.value = redirectSwitch;
// }
document.addEventListener("DOMContentLoaded", async () => {
    const { redirectSwitch } = await chrome.storage.sync.get({"redirectSwitch": "Enabled"});

    document.getElementById("redirectSwitch").value = redirectSwitch;
});

// find html element with id "apply" and add click event listener to it
document.getElementById("apply").addEventListener("click", async () => {

    const redirectSwitch = document.getElementById("redirectSwitch").value;

    await chrome.storage.sync.set({ redirectSwitch });

    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    
    chrome.tabs.reload(tab.id);
});