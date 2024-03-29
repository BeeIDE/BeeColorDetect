Blockly.Python['color_sensor'] = function (block) {
   if (!check_if_top_block_has_hat(block)) return ['', Blockly.Python.ORDER_NONE];
   Blockly.Python.definitions_['from_BeeBrain_import_bee'] = 'from BeeBrain import bee';
   Blockly.Python.definitions_['from_BeeColorDetect_import_BeeColorDetect'] = 'from BeeColorDetect import BeeColorDetect';

   var port = block.getFieldValue('port');
   Blockly.Python.definitions_['colorSensor_BeeColorDetect'] = `colorSensor = BeeColorDetect(bee.${port})`;
   var color = block.getFieldValue('color');
   var code = `colorSensor.get_color("${color}")`;
   return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['color_sensor_check_color'] = function (block) {
   if (!check_if_top_block_has_hat(block)) return ['', Blockly.Python.ORDER_NONE];
   Blockly.Python.definitions_['from_BeeBrain_import_bee'] = 'from BeeBrain import bee';
   Blockly.Python.definitions_['from_BeeColorDetect_import_BeeColorDetect'] = 'from BeeColorDetect import BeeColorDetect';

   var port = block.getFieldValue('port');
   Blockly.Python.definitions_['colorSensor_BeeColorDetect'] = `colorSensor = BeeColorDetect(bee.${port})`;
   var color = block.getFieldValue('color');
   var code = `colorSensor.is_color('${color}')`;
   return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['start_when_color_is_detected'] = function (block) {
   if (!check_if_top_block_has_hat(block)) return ['', Blockly.Python.ORDER_NONE];

   Blockly.Python.definitions_['from_BeeBrain_import_bee'] = 'from BeeBrain import bee';

   Blockly.Python.definitions_['from_BeeColorDetect_import_BeeColorDetect'] = 'from BeeColorDetect import BeeColorDetect';

   var port = block.getFieldValue('port');
   Blockly.Python.definitions_['colorSensor_BeeColorDetect'] = `colorSensor = BeeColorDetect(bee.${port})`;
   var color = block.getFieldValue('color');
   var code = `while not colorSensor.is_color('${color}'): pass\r\n`;
   return code;
};