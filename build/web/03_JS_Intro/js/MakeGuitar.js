
/* Make function */

function MakeGuitar(id, theName, coolness, thePrice, theColor, theImg) {

    var guitarObj = document.getElementById(id); // get reference to DOM object with the given id
    guitarObj.name = theName;          
    guitarObj.coolness = coolness;
    
    var price = thePrice;     //private property

    guitarObj.display = function ( ) { // create custom public method “display”
        // make the current properties visible on the page
        guitarObj.innerHTML = "<br/><br/><img src='" + theImg + "'>" + "<br/><br/>Guitar name: "
                + guitarObj.name + "<br/> Guitar coolness: " + guitarObj.coolness
                + "<br/>Guitar price:" + price;
        guitarObj.style.backgroundColor = theColor;
    };

    guitarObj.setName = function (newName) { // public mutator method for name
        guitarObj.name = newName;
        guitarObj.display(); // show updated property on the page
    };

    guitarObj.changeCoolness = function (changeCoolness) {
        guitarObj.coolness = changeCoolness;
        guitarObj.display();
    };
    
    guitarObj.incrementCoolness = function () { 
        guitarObj.coolness = guitarObj.coolness + 1;
        guitarObj.display();
    };
    
    guitarObj.changePrice = function (newPrice) { //public mutator method for rarity
        price = newPrice;
        guitarObj.display();
    };
    
    guitarObj.changePriceOnClick = function () {
        price = price + price * .10;
        guitarObj.display();
    };
    
    guitarObj.setPrice = function (newPrice) {
        price = newPrice;
        guitarObj.display();
    };

    guitarObj.log = function () { // create custom public method “log”
        console.log("Name of guitar with id " + guitarObj.id + " is " +
                guitarObj.Name + " and Coolness is " + guitarObj.coolness +
                " Guitar price is " + guitarObj.price);
    };

    guitarObj.display();
    return guitarObj;
}
