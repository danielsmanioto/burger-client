let listRequests = () => {

    $.ajax({
        type: "GET",
        contentType: "application/json;charset=UTF-8",
        url: getUrlAPI() + "/orders",
        dataType : "json",
        success: function(j) {
            
            for(var i = 0; i < j.length; i++) {
                var id = j[i].id;
                var totalPrice = j[i].totalPrice;
                var totalPriceFormated = totalPrice.toLocaleString("pt-BR", { style: "currency" , currency:"BRL"});
                
                var descricao = "";
                for(var t =0; t < j[i].itens.length; t++) {
                    descricao += j[i].itens[t].ingredient.description + "; ";
                }    

                $("#pedidos").html($("#pedidos").html() + "<tr class='something'><td> "+  id +"</td><td>" + descricao + "</td><td>" + totalPriceFormated + "</td></tr>")
                
            }
            
        }, 
        error: function(e) {
            alert("Error " + e);
        }
    });

} 

listRequests();