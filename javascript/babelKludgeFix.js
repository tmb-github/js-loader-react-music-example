// babel-standalone listens for the 'DOMContentLoaded' event to fire, which
// causes it to append a transpiled version of any JSX script blocks to the HEAD.
//
// At the end of DOM loading, if the HEAD does not have a SCRIPT, then fire the 
// DOMContentLoaded event again.
//
// NB: This is a kludge fix specific to babel-standalone; if any other library in use
// responds to DOMContentLoaded as well, its code will likely run a second time, with
// unpredictable consequences resulting.

document.onreadystatechange = function () {
	if (document.readyState === 'complete') {
// are there no scripts in the HEAD?
		if (document.querySelectorAll('head script').length === 0) {
			window.dispatchEvent(new Event('DOMContentLoaded'));
		}
	}
}
