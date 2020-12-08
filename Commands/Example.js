module.exports = {
	commandname: 'ExampleCommand',
	commandaliases: ['EC', 'EC1'],
	commanddescription: 'Example command for Restro.',
	example: "",
	guildonly: false,
	delay: false,
	execute: function(User, Message, Arguments) {
    		FunctionDirectory = require("/root/Restro/Functions/Example.js")
		var ExecuteAuthority = new FunctionDirectory()
		ExecuteAuthority.FunctionOfStuff("This is developed by INE Developers.", "2020 - 2021.")
	}
};
