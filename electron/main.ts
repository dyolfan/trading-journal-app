import { app, BrowserWindow } from "electron";
import installExtension, { REACT_DEVELOPER_TOOLS } from "electron-devtools-installer";
import path = require("path");

function createWindow() {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			// contextIsolation: false,
			preload: path.join(__dirname, "preload.js"),
		},
	});

	win.webContents.on("dom-ready", () => {
		disableMouseNavigation(win);
	});

	win.removeMenu();
	if (app.isPackaged) {
		// 'build/index.html'
		win.loadURL(`file://${__dirname}/../index.html#main`);
	} else {
		win.loadURL("http://localhost:3000/index.html#main");

		win.webContents.openDevTools();

		// eslint-disable-next-line @typescript-eslint/no-var-requires
		require("electron-reload")(__dirname, {
			electron: path.join(
				__dirname,
				"..",
				"..",
				"node_modules",
				".bin",
				"electron" + (process.platform === "win32" ? ".cmd" : ""),
			),
			forceHardReset: true,
			hardResetMethod: "exit",
		});
	}
}

app.whenReady().then(() => {
	// DevTools
	installExtension(REACT_DEVELOPER_TOOLS)
		.then((name) => console.log(`Added Extension:  ${name}`))
		.catch((err) => console.log("An error occurred: ", err));

	createWindow();

	app.on("activate", () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow();
		}
	});

	app.on("window-all-closed", () => {
		if (process.platform !== "darwin") {
			app.quit();
		}
	});
});

function disableMouseNavigation(win: BrowserWindow): void {
	const disableNavigationScript = `
      document.addEventListener('mouseup', (event) => {
        if (event.button === 3 || event.button === 4) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    `;
	win.webContents.executeJavaScript(disableNavigationScript);
}
