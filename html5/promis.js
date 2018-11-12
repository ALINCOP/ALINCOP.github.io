document.getElementById("id_bussiness_version").innerHTML = "Bussiness version: 2018.11.12.1";

function f(resolve, reject)
{
	//executam instructiuni
	resolve(":)");
	// reject(":(");
}

//-------------------------=-=-=-=-=-

function on_success(e)
{
	console.log("Reuslt = " + e);
}

//---------------------------=-=-=-=-=-

function on_failure(e)
{
	console.log("Reuslt = " + e);
}
function start()
{
	console.log("before promise is created");
	var promise = new Promise(f);
	promise.then(on_success).catch(on_failure);
	console.log("before end of start function");
}