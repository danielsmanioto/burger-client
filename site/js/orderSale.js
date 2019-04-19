let aditionalItens = [];

let saveOrder = () => {

	 // Burger validation
	 if($("#burger").val() == -1 ) {
		 alert("Selecione um lanche.");
		 $("#burger").focus();
		 return;
	 }
	 
	 //Ingredients validation
	 var aditionalsList = [];
	 for(var i =0; i < aditionalItens.length ; i++) {
		aditionalsList.push( {id: aditionalItens[i].id } );
	 }
	
	var json = {
				   burger: {
					 "id": $("#burger").val(),
					 "ingredients": []
				   },
				   aditionals: aditionalsList
				}	
				
	// Finalizar o pedido
	var questionSave = confirm("Deseja finalizar o seu pedido?");
	if(questionSave) { 
		
		$.ajax({
			type: "POST",
			contentType: "application/json;charset=UTF-8",
			url: getUrlAPI() + "/orders",
			data : JSON.stringify(json) 
			,
			dataType : "json",
			success: function(j) {
				var totalPrice = j.totalPrice;
				var totalPriceFormatt = totalPrice.toLocaleString("pt-BR", { style: "currency" , currency:"BRL"});
				
				alert("Pedido realizado com sucesso.\nValor total: " + totalPriceFormatt );
				
				aditionalItens = [];
				$("#burger").val(-1)
				$("#adds").html("");
	
			}, 
			error: function(e) {
				alert("Error " + e);
			}
		});
	}
	
} 

let addItem = () => {
	var ingredientValue = $("#ingredients").val();
	if (ingredientValue == null || ingredientValue == -1) {
		alert("Nenhum adicional selecionado.");
		return;
	}
	
	var obj = {
		id: $("#ingredients").val() ,
		description: $("#ingredients :selected").text(),
		qtty: $("#ingredientsQtty").val()
	}
	
	for(var i=0; i< obj.qtty;i++) {
		$("#adds").html($("#adds").html() + "<label> " + obj.description +  " </label><br>")
		
		aditionalItens.push(obj);
	}

	alert(obj.description + " Adicionado.");
} 

