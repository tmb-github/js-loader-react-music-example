(function () {

	'use strict';
// *** VARIABLE AND FUNCTION DECLARATIONS *** //


// delete all scripts with unique class name:
	function deleteScriptElements() {
		Array.prototype.forEach.call(document.querySelectorAll('BODY SCRIPT'), function (script) {
			script.parentNode.removeChild(script);
		});
	}


// Delete *this* loader script if it is not deleted (removed from the DOM)
// by a calling script in the HTML.
// If this loader script has been removed removed, script.parentNode will return null:
	function selfDestruct() {
		var script = document.currentScript || document.scripts[document.scripts.length - 1];
		if (script.parentNode) {
			script.parentNode.removeChild(script);
		}
	}

// Delete all scripts loaded with this script:
	window.onload = deleteScriptElements;

// Delete this loader script:
	selfDestruct();

}());