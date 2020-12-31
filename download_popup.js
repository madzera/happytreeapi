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
	var element = document.getElementById('download_popup');
	transition.begin(element, ["opacity 0.9 0 1s"], {
		onTransitionEnd: function(element, finished) {
            if (!finished) return;
            element.style.display = "none";
        }
    });
}

function openModal() {
	var element = document.getElementById('download_popup');
    transition.begin(element, ["opacity 0 0.9 1s"], {
        onBeforeChangeStyle: function(element) {
            element.style.display = "block";
        },
    });
}