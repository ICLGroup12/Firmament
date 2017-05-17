import FMODEL from './model.js';
import FVIEW from './view.js';
import FCONTROLLER from './controller.js';
import FGUI from './gui.js';

console.log([
' ___ _ ___ __ __  __  __ __ ___ __  _ _____  ',
'| __| | _ \\  V  |/  \\|  V  | __|  \\| |_   _| ',
'| _|| | v / \\_/ | /\\ | \\_/ | _|| | | | | |   ',
'|_| |_|_|_\\_| |_|_||_|_| |_|___|_|\\__| |_|   ',
' '].join('\n'));

FMODEL.init();
FVIEW.init();
FGUI.init();
FCONTROLLER.init();

// expose global variables for debugging purposes
window.FIRMAMENT_EXPOSE = function() {
	window.fm = FMODEL;
	window.fv = FVIEW;
	window.fg = FGUI;
	window.fc = FCONTROLLER;
};
