const electron = require("electron")
const {app, BrowserWindow} = require("electron")
const path = require("path")
const url = require("url")

let mainWindow = null

function createWindow(){
    mainWindow = new BrowserWindow({
        width: 600, 
        height: 400
    })
    mainWindow.loadURL(url.format({
        protocol:"file:",
        slashes:true,
        pathname: path.join(__dirname, "pokedex.html")
    }))
}

app.on("ready", createWindow)

