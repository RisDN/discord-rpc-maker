const { remote } = require('@electron/remote');

document.querySelector("#min-btn").addEventListener("click", () => {
    remote.BrowserWindow.getFocusedWindow().minimize();
})
document.querySelector("#close-btn").addEventListener("click", () => {
    window.close()
})