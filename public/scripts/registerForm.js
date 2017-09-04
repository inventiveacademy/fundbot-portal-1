// jquery onclick
	// get form fields
		//client side validation
			//all fields in
		//send post request with form laid out
			// listen for status 200?
			// if(res.status === 200, then use your routes to do something)

$('#button').click(function(e){
	e.preventDefault();
	let tags = [];

	$.each($("input[name='tags']:checked"), function(){
		tags.push($(this).val());
	});

	console.log(tags);
	let data = {
		"firstName": $('#firstName').val(),
		"middleName": $('#middleName').val(),
		"lastName" : $('#lastName').val(),
		"contactPhone" : $('#contactPhone').val(),
		"email" : $('#email').val(),
		"address" : $('#address').val(),
		"zip" : $('#zip').val(),
		"city" : $('#city').val(),
		"state" : $('#state').val(),
		"password" : $('#pw').val(),
		"tags" : tags
	}
// new data
	console.log(data);
	$.post("http://localhost:3001/", data, function(newData) {
		console.log(newData);
		//use routes to do something here!
		window.location = 'http://localhost:3002/';
	
    })
})