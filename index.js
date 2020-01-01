if (window.CSS && CSS.paintWorklet) {
  CSS.paintWorklet.addModule('loader.js');
}

if (window.CSS && CSS.registerProperty) {
  initVars();
}
