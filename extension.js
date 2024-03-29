({
    name: "Color Module", // Category Name
    description: "Color detect sensor",
    author: "BeeBlock",
    category: "Sensors",
    version: "1.0.0",
    icon: "/static/colorsensor.png", // Category icon
    color: "#0f3058", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        "start_when_color_is_detected",
        {
            xml: `
                <block type="color_sensor">
                    <value name="color">
                        <shadow type="math_number">
                            <field name="NUM">3</field>
                        </shadow>
                    </value>
                    <value name="port">
                        <shadow type="math_number">
                            <field name="NUM">6</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="color_sensor_check_color">
                    <value name="color">
                        <shadow type="math_number">
                            <field name="NUM">3</field>
                        </shadow>
                    </value>
                    <value name="port">
                        <shadow type="math_number">
                            <field name="NUM">6</field>
                        </shadow>
                    </value>
                </block>
            `
        },
    ]
});