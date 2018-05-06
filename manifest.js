var tranId = getId();
var procId = getProcId();
var ppid = getPPId();
var stepVar = getStepVar();
browser.runtime.sendMessage({			//sending message to background script
	value: tranId, value2: procId, value3: stepVar, value4:ppid;
});

function getId() {			//To get transaction ID from the quote page
  var input = document.getElementsByName("id");
  var tranId = input[0].value;
  return tranId;
}

function getProcId() {			//To get commerce process ID from the quote page
	var input = document.getElementsByName("bm_cm_process_id");
	var procId = input[0].value;
	return procId;
}

function getPPId(){
	var input = document.getElementsByName("pp_id");
	var ppid = input[0].value;
	return ppid;
}

function getStepVar(){
	var input = document.getElementsByName("_step_varname");
	var stepVar = input[0].value;
	return stepVar;
	
}