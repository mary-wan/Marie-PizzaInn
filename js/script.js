$(document).ready(function () {
    $(".pizzaOrder").click(function (e) {
        e.preventDefault();

        function pizza(type, size, crust, topping, total) {
            this.type = type;
            this.size = size;
            this.crust = crust;
            this.topping = topping;
            this.total = total;

        }
        var inputtedType = $("#pizzaType").find(":selected").text();
        var inputtedSize = $("#pizzaSize").find(":selected").val();
        var inputtedCrust = $("#pizzaCrust").find(":selected").val();
        var inputtedTopping = $('input[name="crusts"]:checked').val();
        var homeCheckoutTotal =0
        var checkoutTotal =0;

        if (inputtedSize == ("select")) {
            alert("Please fill in all details");
            $(".display").text("Please select pizza Size");
        } else if (inputtedCrust == ("select")) {
            alert("Please fill in all details");
            $(".display").text("Please select pizza Crust");
        } else if (inputtedTopping == (undefined)) {
            alert("Please fill in all details");
            $(".display").text("Please select pizza Topping");
        } else {
            $(".display").hide();
            $("#submtOrder").hide();
            $(".orderConfirmation").fadeIn("slow");

            var totalPrice;
            var crustPrice;

            switch (inputtedCrust) {
                case "crispy":
                    crustPrice = 200;
                    break;
                case "stuffed":
                    crustPrice = 300;
                    break;
                case "gluten":
                    crustPrice = 100;
                    break;
                case "cracker":
                    crustPrice = 150;

            }
            if (inputtedSize == "large") {
                totalPrice = 1100 + crustPrice + 200;

            } else if (inputtedSize == "medium") {
                totalPrice = 750 + crustPrice + 150;
            } else if (inputtedSize == "small") {
                totalPrice = 500 + crustPrice + 100;
            }

            var pizzaOrder = new pizza(inputtedType, inputtedSize, inputtedCrust, inputtedTopping, totalPrice);

            $(".table").append("<tr><td>" + pizzaOrder.type + "</td><td>" + pizzaOrder.size + "</td><td>" +
                pizzaOrder.crust + "</td><td>" + pizzaOrder.topping + "</td><td>" + pizzaOrder.total + "</td></tr>"
            );


        }
        $("#checkout").click(function () {
            $("#add").hide();
            $("#checkout").hide();
            $(".checkoutMessage").show()

            var tbl = document.querySelector("table");
            var tableRow = tbl.getElementsByTagName("TR");
            for (let i = 1; i < tableRow.length; i++) {
                var col = tableRow[i].getElementsByTagName("TD");
                checkoutTotal += parseFloat(col[4].innerHTML);
            }
            $("#checkoutMessage").text("Your bill  is " + checkoutTotal + ". Your pizza  will be ready for pickup in 30 minutes. We look forward to serving you again. ");
            $("#homeDelivery").css("margin-top", "10px");
            $("#homeDelivery").css("margin-left", "20%");

        });
        
        $("#homeDelivery").click(function(){
            $("#homeDelivery").hide();
            $("#checkoutMessage").hide();
            $(".address").show();
            $(".table").hide();
            
        })
        $("#homeCheckout").click(function(e){
            e.preventDefault();

            homeCheckoutTotal = checkoutTotal + 150;
            var name = $("input#name").val();
            var phone = $("input#phonenum").val();
            var location = $("input#location").val()

            if((name == "" ||name == null)||(phone == "" ||phone == null) || (location == "" ||location == null)){
                alert("Please fill in all details")
            }else{
                $(".address").hide(); 
                $(".table").show();
                $("#checkoutMessage").show().text("Dear " +name + ", Your bill plus the delivery price is " + homeCheckoutTotal + ". Your order will be delivered to " +location+ " in 1 hour. Kindly provide the payment on delivery");
            }

            
            

        });
    });

});