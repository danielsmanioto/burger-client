function listIngredients() {
    
	$.ajax({
		type: "GET",
		contentType: "application/json;charset=UTF-8",
		url: "http://localhost:8080/ingredients",
		data : {  },
		dataType : "json",
		success: function(data) {

			for (var i = 0; i < data.length; i++) {
				$("#ingredients").html($("#ingredients").html() + "<option name="+ data[i].description + " value=" + data[i].id + ">" + data[i].description + "</option>");
			}
		
		}, 
		error: function(e) {
		  	alert("Error " + e);
		}		
	});
	
}
 

