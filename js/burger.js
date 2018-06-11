function listBurgers() {

	$.ajax({
		type: "GET",
		contentType: "application/json;charset=UTF-8",
		url: "http://localhost:8080/burgers",
		data : {  },
		dataType : "json",
		success: function(data) {
			
			for (var i = 0; i < data.length; i++) {
				$("#burger").html($("#burger").html() +"<option value=" + data[i].id + ">" + data[i].description + "</option>");
			}
			
		}, 
		error: function(e) {
		  	alert("Error " + e);
		}
		
	});
	
} 
