function clipboard(code) {
	var textarea = document.createElement('textarea');
	textarea.id = 'clipboard';
	textarea.value = code.innerText;
	textarea.display = 'block';
	var container = document.getElementsByTagName("footer")[0];
	container.appendChild(textarea);
	
	textarea.select();
	textarea.setSelectionRange(0, 99999);
	document.execCommand("copy", false, textarea.value);
	
	textarea.parentNode.removeChild(textarea);
}

function closeModal() {
	document.getElementById('download_popup').style.display='none';
}