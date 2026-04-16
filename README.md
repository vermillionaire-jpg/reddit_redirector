# Reddit Redirector

Switch between the old and new versions of reddit seamlessly via a drop down menu. After hitting apply the page will automatically refresh to the version you selected.

**manifest.json**
- Defines extension metadata (name, version, permissions)
- Injects content.js into all reddit sites (reddit, old.reddit, etc.) at document start
- Requests `storage` and `tabs` permissions

**popup.html**
- Simple UI with a dropdown menu selecting from 2 skins (Old Reddit, New Reddit)
- "Apply" button to save and apply selection

**popup.js**
- On load: retrieves previously saved version preference from Chrome storage and updates dropdown
- On "Apply" click: saves selected version to storage, then reloads current tab to the same page with settings applied from content.js

**content.js**
- Runs on every Reddit page automatically
- Checks if page is a compatible with old reddit
- Acts as an automatic enforcer of the user's preferred version across all reddit visits
