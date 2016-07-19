// *** script.js for Benny's Pizza ***

// document.getElementById('text_input').setAttribute('maxlength',20);
/*
function myFunction() {
    var x = document.getElementById('text_input').maxLength;
    document.getElementById('demo').innerHTML = x;
}

console.log(demo);*/

// *** set the width of the text field ***
/*function myFunction() {
    document.getElementById('name_input').size = "30";
}

Properties:
pizzaOrder= pizza delivery price

Objects: 
pizza .size .crust .toppings  
delivery .name .adr .phonenumber 

toppings in an array ['pepperoni']
crust 'thin' 'deep-dish'
size 'S' 'M' 'L' 'XL'*/

// create a new pizza obj
// get size from size field in form
// validate a size was selected
// add it to pizza obj
// get crust
// validate a crust was selected
// add it to pizza obj
// get toppings 
// validate at least one toppings was selected
// add them to pizza obj


//create function validating size crust 


// Variables
                            
var pizzaOrder = [],
currentPizzaOrder,
pizzaOrder = document.getElementById('pizzaOrder'),
name_input = document.getElementById('name_input'),
addresstype_input = document.getElementById('addressType_input'),
otherAddress = document.getElementById('otherAddress'),
streetAddress = document.getElementById('streetAddress'),
apt_input = document.getElementById('aptNumber'),
city_input = document.getElementById('city_input'),
state = document.getElementById('state_input'),
zip_input = document.getElementById('zip_input'),
phoneNumber_input = document.getElementById('phoneNumber_input'),
email_input = document.getElementById('email_input'),
pizzaSize = document.getElementById('pizzaSize'),
handTossedRadio = document.getElementById('handTossedRadio'),
thinCrust = document.getElementById('thinCrustRadio'),
newYorkStyle = document.getElementById('newYorkStyleRadio'),
glutenFree = document.getElementById('glutenFreeRadio'),
cheeseOptions = document.getElementById('cheeseOptions'),
sauceOptions = document.getElementById('sauceOptions'),
toppings = document.getElementById('toppings'),
comments = document.getElementById('comments'),
paymentInfo = document.getElementById('paymentInfo'),
ccNumber = document.getElementById('ccNumber'),
ccExpirationMonth = document.getElementById('ccExpirationMonth'),
cvc = document.getElementById('cvc'),
sameAsDelivery = document.getElementById('sameAsDelivery'),
orderUpButton = document.getElementById('orderUpButton');

//Delivery Information
name_input.onblur = function () {
    console.dir(name_input.value);   //contains text      
};

addressType_input.onblur = function () {
    console.dir(addressType_input);
};

otherAddress.onblur = function () {
    console.dir(otherAddress);
};

streetAddress.onblur = function () {
    console.dir(streetAddress);
};

aptNumber.onblur = function () {
    console.dir(aptNumber);
};

city_input.onblur = function () {
    console.dir(city_input);
};

state_input.onblur = function () {
    console.dir(state_input);
};

zip_input.onblur = function () {
    console.dir(zip_input);
};

phoneNumber_input.onblur = function () {
    console.dir(phoneNumber_input);
};

email_input.onblur = function () {
    console.dir(email_input);
};

// Objects
var handTossed = {
    small: 9.99,
    medium: 12.99,
    large: 14.99
};
var thinCrust = {
    medium: 11.99,
    large: 13.99,
};
var newYorkStyle = {
    large: 16.99,
    extraLarge: 19.99,
}
var gluttenFree = {
    small: 10.99
};


handTossedRadio.onclick = function () {
    console.log('populate select w handtossed');
    createSelectSizeOptions(handTossed);
};

thinCrustRadio.onclick = function () {
    console.log('populate select w thinCrust');
    createSelectSizeOptions(thinCrust);
};

newYorkStyleRadio.onclick = function () {
    console.log('populate select w newYorkStyle');
    createSelectSizeOptions(newYorkStyle);
};

glutenFreeRadio.onclick = function () {
    console.log('populate select w gluttenFree');
    createSelectSizeOptions(gluttenFree);
};

pizzaSize.onblur = function () {
    console.dir(pizzaSize.value); 
};
        
        
/*function createSelectSizeOptions(pizzaSizesObj) {
    var str = '<option>--Selcet an item--</option>';
    for (var prop in pizzaSizesObj) {
        str += '<option value =' + prop + '>' + prop + ' ($' + pizzaSizesObj.prop')</option>';
    }
    sizeSelect.innerHTML = str;
}
createSelectSizeOptions(handTossed);*/



