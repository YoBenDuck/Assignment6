// *** script.js for Benny's Pizza ***


/*Properties:
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
    if (name_input.value.match(/\d/) != null) { //validates input
        name_input.style.backgroundColor='red';
    } else {
        name_input.style.backgroundColor='green';
    }
}; 

addressType_input.onchange = function () {
    console.dir(addressType_input);
    if (addressType_input.value == 'wrong') {
        addressType_input.style.backgroundColor='red';
    } else {
        addressType_input.style.backgroundColor='green';
        if (addressType_input.value == 'Other') {
            otherAddress.classList.remove('hidden');
        } else {
            otherAddress.classList.add('hidden');
        }
    }
};

streetAddress.onblur = function () {
    console.dir(streetAddress.value); 
    console.log(streetAddress.value.match(/^[ 0-9a-zA-Z.-]+$/));
    if (streetAddress.value.match(/^[ 0-9a-zA-Z.-]+$/) != null) { 
        streetAddress.style.backgroundColor='green';
    } else {
       streetAddress.style.backgroundColor='red';
    }
};

aptNumber.onblur = function () {
    console.dir(aptNumber.value);       
    if (aptNumber.value.match(/^[ 0-9a-zA-Z.-]+$/) != null) { 
        aptNumber.style.backgroundColor='green';
    } else {
       aptNumber.style.backgroundColor='red';
    }
};

city_input.onblur = function () {
    console.dir(city_input.value);         
    if (city_input.value.match(/^[ 0-9a-zA-Z.:-]+$/) != null) {
        city_input.style.backgroundColor='green';
    } else {
        city_input.style.backgroundColor='red';
    }
}; 


state_input.onblur = function () {
    console.dir(state_input.value);         
    if (state_input.value.match(/^[a-zA-Z]{2}$/) != null) {
        state_input.style.backgroundColor='green';
    } else {
        state_input.style.backgroundColor='red';
    }
};

zip_input.onblur = function () {
    console.dir(zip_input.value);         
    if (zip_input.value.match(/^\b\d{5}(-\d{4})?\b$/) != null) {
        zip_input.style.backgroundColor='green';
    } else {
        zip_input.style.backgroundColor='red';
    }
};

phoneNumber_input.onblur = function () {
    console.dir(phoneNumber_input.value);         
    if (phoneNumber_input.value.match(/^\d{3}-\d{3}-\d{4}$/) != null) {
        phoneNumber_input.style.backgroundColor='green';
    } else {
        phoneNumber_input.style.backgroundColor='red';
    }
};

email_input.onblur = function () {
    console.dir(email_input.value);         
    if (email_input.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) != null) {
        email_input.style.backgroundColor='green';
    } else {
        email_input.style.backgroundColor='red';
    }
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
        
        
function createSelectSizeOptions(pizzaSizesObj) {
    var str = '<option>--Selcet a Pizza Size--</option>';
    for (var prop in pizzaSizesObj) {
        str += '<option value="' + prop + '">' + prop + ' ($' + pizzaSizesObj[prop] + ')</option>';
    } 
    pizzaSize.classList.remove('hidden');
    pizzaSize.innerHTML = str;
}




