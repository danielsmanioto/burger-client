function listBurgers() {

        var URL_API = "http://localhost:80";
	
	$.ajax({
		type: "GET",
		contentType: "application/json;charset=UTF-8",
		url: URL_API + "/burgers",
		data : {  },
		dataType : "json",
		success: function(data) {
			
			for (var i = 0; i < data.length; i++) {
				var burger = data[i];
				var priceFormatter = burger.priceTotal.toLocaleString("pt-BR", { style: "currency" , currency:"BRL"});
				$("#burger").html($("#burger").html() +"<option value=" + burger.id + ">" + burger.description + " - ( " +  priceFormatter + " ) </option>");
			}
			
		}, 
		error: function(e) {
		  	
		}
		
	});
	
} 
