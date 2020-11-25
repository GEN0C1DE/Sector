module.exports = {
	commandname: 'ExampleCommand',
	commandaliases: ['EC', 'EC1'],
	commanddescription: 'Example command for Restro.',
	example: "",
	guildonly: false,
	delay: false,
	execute: function(User, Message, Arguments) {
    		FunctionDirectory = require("/root/Restro/Functions/Example.js")
		FunctionDirectory.Execute("This is only a test.", "This is another test.")
	}
};
