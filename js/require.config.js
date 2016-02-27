require.config({
	baseUrl: './js/',
	paths:{
		'$': 'libs/jquery-2.1.4',
		'ng': 'libs/angular',
	},
	shim: {

	}
});

require(['$', 'ng'], function($, ng) {
	console.log('requirejs load successful...');
});
