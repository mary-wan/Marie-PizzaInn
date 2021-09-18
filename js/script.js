// let map;

// function initMap() {
//     map = new google.maps.Map(document.getElementById("map"), {
//         center: {
//             lat:  -1.232667,
//             lng: 36.878592
//         },
//         zoom: 18,
//     });
// }
$(document).ready(function () {
    $("form#orderSubmit").submit(function (e) {
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

        if (inputtedSize == ("select")) {
            $(".display").text("Please select pizza Size");
        } else if (inputtedCrust == ("select")) {
            $(".display").text("Please select pizza Crust");
        } else if (inputtedTopping == (undefined)) {
            $(".display").text("Please select pizza Topping");
        } else {
            $(".display").hide();
            $("#pizzaOrder").prop("value","ADD")
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
            // alert(pizzaOrder.size);

            $(".table").append("<tr><td>" + pizzaOrder.type + "</td><td>" + pizzaOrder.size + "</td><td>" +
                pizzaOrder.crust + "</td><td>" + pizzaOrder.topping + "</td><td>" + pizzaOrder.total + "</td></tr>");


        }
        


        // alert(inputtedType);
        // alert(inputtedSize);
        // alert(inputtedCrust);
        // alert(inputtedTopping);

        // $("#type").text(inputtedType);
        // $("#size").text(inputtedSize);
        // $("#crust").text(inputtedCrust);
        // $("#topping").text(inputtedTopping);

    });




});