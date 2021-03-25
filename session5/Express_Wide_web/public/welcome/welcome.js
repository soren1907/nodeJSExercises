//Change background color on whole page to yellow
//$("body").css("background-color","yellow");

//add the pizza "o" to the oven when a user cldicks
//handle user clicks with jquery too

let pizzas = 0;
$(document).click((event) => {
    console.log("pressed");
    pizzas++;
    $("#pizza-oven").append(`<strong id="pizza-${pizzas}" style='font-size: 50px'>o</strong>`);

    if (pizzas > 5) {
        const pizzaToRemove = pizzas-5;
        $("#pizza-"+pizzaToRemove).remove();
        $("#pizza-counter").append(`<strong style='font-size: 50px'>o</strong>`);
    }
});

