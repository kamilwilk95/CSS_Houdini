//This function defines new css property
function initVars() {
  CSS.registerProperty({
    name: "--btn-first-color",
    syntax: "<color>",
    initialValue: "#2196f3",
    inherits: false,
  });

  CSS.registerProperty({
    name: "--btn-second-color",
    syntax: "<color>",
    initialValue: "#f44336",
    inherits: false,
  });

  CSS.registerProperty({
    name: "--btn-gradient-length",
    syntax: "<percentage>",
    initialValue: '15%',
    inherits: false,
  });

  CSS.registerProperty({
    name: '--dotOneHeight',
    syntax: '<percentage>',
    inherits: false,
    initialValue: '100%'
  });
  
  CSS.registerProperty({
    name: '--dotTwoHeight',
    syntax: '<percentage>',
    inherits: false,
    initialValue: '100%'
  });
  
  CSS.registerProperty({
    name: '--dotThreeHeight',
    syntax: '<percentage>',
    inherits: false,
    initialValue: '100%'
  });
}