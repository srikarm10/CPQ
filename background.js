var tranId;
var procId;
var stepVar;
var ppid;
browser.runtime.onMessage.addListener((message => { //gets message from content_script, manifest.js
	console.log("In background script " + message.value + " and " + message.value2);
	tranId = message.value;
	procId = message.value2;
	stepVar = message.value3;
	ppid = message.value4;
}))
