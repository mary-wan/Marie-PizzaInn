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
        // pizza.prototype.checkoutPrice = function(){

        // }
        var inputtedType = $("#pizzaType").find(":selected").text();
        var inputtedSize = $("#pizzaSize").find(":selected").val();
        var inputtedCrust = $("#pizzaCrust").find(":selected").val();
        var inputtedTopping = $('input[name="crusts"]:checked').val();

        if (inputtedSize == ("select")) {
            $(".display").text("Please select pizza Size");
        } else if (inputtedCrust == ("select")) {
            $(".display").text("Please select pizza Crust");
        } else if (inputtedTopping == (undefined)) {
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
                pizzaOrder.crust + "</td><td>" + pizzaOrder.topping + "</td><td>" + pizzaOrder.total + "</td></tr>");


        }
        $("#checkout").click(function () {
            $("#add").hide();
            $("#checkout").hide();
            $("#checkoutMessage").show();
            var tbl = document.querySelector("table");
            var tableRow = tbl.getElementsByTagName("TR");
            var checkoutTotal = 0;
            for (let i = 1; i < tableRow.length; i++) {
                var col = tableRow[i].getElementsByTagName("TD");
                checkoutTotal += parseFloat(col[4].innerHTML);
            }
            $(".checkoutMessage").show().text("The total Price is " + checkoutTotal + ". Your pizza  will be ready for pickup in 30 minutes. We look forward to serving you again. ");
            $("#homeDelivery").css("margin-top", "70px");
            $("#homeDelivery").css("margin-left", "20%");

        });


    });




});