document.getElementById("id_logic_version").innerHTML = "Logic version: 2018.10.29.1";
window.addEventListener("deviceorientation", on_device_orientation);
//--------------------------------
function on_device_orientation(e)
{
	document.getElementById("id_alhpa").innerHTML=e.alpha;
	document.getElementById("id_beta").innerHTML=e.beta;
	document.getElementById("id_gamma").innerHTML=e.gamma;
}