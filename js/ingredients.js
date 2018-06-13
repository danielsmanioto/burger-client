function listIngredients() {
        var URL_API = "http://localhost:80";

	$.ajax({
		type: "GET",
		contentType: "application/json;charset=UTF-8",
		url: URL_API + "/ingredients",
		data : {  },
		dataType : "json",
		success: function(data) {

			for (var i = 0; i < data.length; i++) {
				var ingredient = data[i];
				var priceFormatter = ingredient.price.toLocaleString("pt-BR", { style: "currency" , currency:"BRL"});
				$("#ingredients").html($("#ingredients").html() + "<option value=" + ingredient.id + ">" + ingredient.description + " ( "  + priceFormatter + " ) </option>");
			}
		
		}, 
		error: function(e) {
		  	
		}		
	});
	
}
 

