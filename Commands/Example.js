module.exports = {
	commandname: 'ExampleCommand',
	commandaliases: ['EC', 'EC1'],
	commanddescription: 'Example command for Restro.',
	example: "",
	guildonly: false,
	developeronly: false,
	execute: function(God, Message, Arguments) {
		// Global Functions allow for FunctionDirectory() to be called into existance using the main script.
		var ExecuteAuthority = new FunctionDirectory()
		return ExecuteAuthority.FunctionOfStuff("This is developed by INE Developers.", "2020 - 2021.");
	}
};
