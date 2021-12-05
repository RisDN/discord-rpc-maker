const { app, BrowserWindow } = require("electron")
const { szerverStart } = require("./server.js")
const path = require('path');

szerverStart()

let ablak, betolto
app.on("ready", () => start())
app.setAppUserModelId('Discord Rich Presence Maker')


function start() {

    betolto = new BrowserWindow({
        width: 500,
        height: 400,
        title: "Discord Rich Presence Maker",
        resizable: false,
        frame: false,
        show: true
    })

    betolto.removeMenu()
    betolto.loadFile(path.join(__dirname, "/public/load.html"))

    ablak = new BrowserWindow({
        width: 600,
        height: 500,
        title: "Discord Rich Presence Maker",
        resizable: false,
        frame: false,
        show: false
    })

    ablak.removeMenu()
    ablak.loadURL("http://localhost:3325")

    setTimeout(function() {
        betolto.close()
        ablak.show()
    }, 3500)



}