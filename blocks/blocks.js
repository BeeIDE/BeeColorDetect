Blockly.defineBlocksWithJsonArray([
  // -> ColorSensor
  {
    "type": "color_sensor",
    "message0": "%3 %2 get %1 value ",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "color",
        "options": [
          [{"src": "/static/MicroBlock/images/icon/red.png", "width": 20, "height": 20, "alt": "red"}, "red"],
          [{"src": "/static/MicroBlock/images/icon/green.png", "width": 20, "height": 20, "alt": "green"}, "green"],
          [{"src": "/static/MicroBlock/images/icon/blue.png", "width": 20, "height": 20, "alt": "blue"}, "blue"],
        ]
      },
      {
        "type": "field_grid_dropdown",
        "name": "port",
        "columns": 2,
        "options": [
          ["PORT1", "PORT1"],
          ["PORT2", "PORT2"],
          ["PORT3", "PORT3"],
          ["PORT4", "PORT4"],
          ["PORT5", "PORT5"],
          ["PORT6", "PORT6"],
        ]
      },
      {
        "type": "field_image",
        "src": "/static/MicroBlock/images/icon/colorsensor.png",
        "width": 45,
        "height": 45,
        "alt": "colorsensor"
      }
    ],
    "inputsInline": true,
    "output": "Number",
    "colour": "#00c5cc",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "color_sensor_check_color",
    "message0": "%3 %2 is %1 ? ",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "color",
        "options": [
          [{"src": "/static/MicroBlock/images/icon/red.png", "width": 20, "height": 20, "alt": "red"}, "red"],
          [{"src": "/static/MicroBlock/images/icon/green.png", "width": 20, "height": 20, "alt": "green"}, "green"],
          [{"src": "/static/MicroBlock/images/icon/blue.png", "width": 20, "height": 20, "alt": "blue"}, "blue"],
        ]
      },
      {
        "type": "field_grid_dropdown",
        "name": "port",
        "columns": 2,
        "options": [
          ["PORT1", "PORT1"],
          ["PORT2", "PORT2"],
          ["PORT3", "PORT3"],
          ["PORT4", "PORT4"],
          ["PORT5", "PORT5"],
          ["PORT6", "PORT6"],
        ]
      },
      {
        "type": "field_image",
        "src": "/static/MicroBlock/images/icon/colorsensor.png",
        "width": 45,
        "height": 45,
        "alt": "colorsensor"
      }
    ],
    "inputsInline": true,
    "output": "Boolean",
    "colour": "#00c5cc",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "start_when_color_is_detected",
    "message0": "%3 when %1 detect %2",
    "args0": [
      {
        "type": "field_grid_dropdown",
        "name": "port",
        "columns": 2,
        "options": [
          ["PORT1", "PORT1"],
          ["PORT2", "PORT2"],
          ["PORT3", "PORT3"],
          ["PORT4", "PORT4"],
          ["PORT5", "PORT5"],
          ["PORT6", "PORT6"],
        ]
      },
      {
        "type": "field_dropdown",
        "name": "color",
        "options": [
          [{"src": "/static/MicroBlock/images/icon/red.png", "width": 20, "height": 20, "alt": "red"}, "red"],
          [{"src": "/static/MicroBlock/images/icon/green.png", "width": 20, "height": 20, "alt": "green"}, "green"],
          [{"src": "/static/MicroBlock/images/icon/blue.png", "width": 20, "height": 20, "alt": "blue"}, "blue"],
        ]
      },
      {
        "type": "field_image",
        "src": "/static/MicroBlock/images/icon/start.png",
        "width": 45,
        "height": 45,
        "alt": "start"
      }
    ],
    "style": {
      "hat": "cap"
    },
    "inputsInline": true,
    "nextStatement": null,
    "colour": "#F5C402",
    "tooltip": "Code start from here",
    "helpUrl": ""
  },
]);

Blockly.Blocks['start_when_color_is_detected'].init_base = Blockly.Blocks['start_when_color_is_detected'].init;
Blockly.Blocks['start_when_color_is_detected'].init = function () {
  (Blockly.Blocks['start_when_color_is_detected'].init_base.bind(this))();
  this.hat = "cap";
};