const { app, BrowserWindow } = require("electron")
const { szerverStart } = require("./server.js")
const path = require('path');

szerverStart()

let ablak, betolto
app.on("ready", () => start())
app.setAppUserModelId('Tesztlap+')


function start() {

    betolto = new BrowserWindow({
        width: 500,
        height: 400,
        title: "Tesztlap+ betöltés...",
        resizable: false,
        frame: false,
        show: true
    })

    betolto.removeMenu()
    betolto.loadFile(path.join(__dirname, "/public/load.html"))

    ablak = new BrowserWindow({
        width: 600,
        height: 500,
        title: "Tesztlap+",
        resizable: false,
        frame: false,
        show: false
    })

    ablak.removeMenu()
    ablak.loadURL("http://localhost:3325")
    ablak.webContents.openDevTools()

    setTimeout(function() {
        betolto.close()
        ablak.show()
    }, 3500)



}