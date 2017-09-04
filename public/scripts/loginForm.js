$('#button').click(function(e){
	// prevent default action to stay in place
	e.preventDefault();
	// get the data
	let data = {
		"email": $('#email').val(),
		"password" : $('#password').val()
	}

	$.post("http://localhost:3001/login", data, function(newData) {
		console.log(newData);
		if(newData === 'success'){
			//use routes to do something here!
			window.location = 'http://localhost:3002/login';
		}
    });
})