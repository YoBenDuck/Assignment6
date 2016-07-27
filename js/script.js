// *** script.js for Benny's Pizza ***

/*** Notes Section ***
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

//*** Variables ***
                            
var pizzaOrder = {
    name: '',
    addressType: '',
    toppings: 0,
    streetAddress: '',
    apt: 0,
    city: '',
    state: '',
    zip: 0,
    phoneNumber: 0,
    email: '',
    pizzaSize: '',
    dough: '',
    cheese: '',
    sauce: '',
    toppings: 0,
    comments: '',
    price: 0,
    payment:'',
    ccNumber: 0
},

//pizzaOrder = document.getElementById('pizzaOrder'),
name_input = document.getElementById('name_input'),
addresstype_input = document.getElementById('addressType_input'),
otherAddress = document.getElementById('otherAddress'),
streetAddress = document.getElementById('streetAddress'),
apt_Number = document.getElementById('apt_Number'),
city_input = document.getElementById('city_input'),
state = document.getElementById('state_input'),
zip_input = document.getElementById('zip_input'),
phoneNumber_input = document.getElementById('phoneNumber_input'),
email_input = document.getElementById('email_input'),
pizzaSize = document.getElementById('pizzaSize'),
handTossedRadio = document.getElementById('handTossedRadio'),
thinCrustRadio = document.getElementById('thinCrustRadio'),
newYorkStyleRadio = document.getElementById('newYorkStyleRadio'),
gluttenFreeRadio = document.getElementById('gluttenFreeRadio'),
cheeseOptions = document.getElementById('cheeseOptions'),
sauceOptions = document.getElementById('sauceOptions'),
toppings = document.getElementById('toppings'),
comments = document.getElementById('comments'),
paymentInfo = document.getElementById('paymentInfo'),
ccNumber = document.getElementById('ccNumber'),
ccExpirationMonth = document.getElementById('ccExpirationMonth'),
cvc = document.getElementById('cvc'),
sameAsDelivery = document.getElementById('sameAsDelivery'),
billingName = document.getElementById('billingName'),
billingAddress = document.getElementById('billingAddress'),
billingAptNumber = document.getElementById('billingAptNumber'),
billingCity = document.getElementById('billingCity'),
billingState = document.getElementById('billingState'),
billingZip = document.getElementById('billingZip'),
orderUpButton = document.getElementById('orderUpButton'),
displayTotal = document.getElementById('displayTotal'),
total = 0.00;

//*** Delivery Information ***
name_input.onblur = function () {
    console.dir(name_input.value);   //contains text      
    if (name_input.value.match(/\d/) != null) { //validates input
        name_input.style.backgroundColor='red';
    } else {
        name_input.style.backgroundColor='green';
        pizzaOrder.name_input = name_input.value;
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
        pizzaOrder.addressType = addresstype_input.value;
    }
};

streetAddress.onblur = function () {
    console.dir(streetAddress.value); 
    if (streetAddress.value.match(/^[ 0-9a-zA-Z.-]+$/) != null) { 
        streetAddress.style.backgroundColor='green';
        pizzaOrder.streetAddress = streetAddress.value;
    } else {
       streetAddress.style.backgroundColor='red';
    }
};

apt_Number.onblur = function () {
    console.dir(apt_Number.value);       
    if (apt_Number.value.match(/^[ 0-9a-zA-Z.-]+$/) != null) { 
        apt_Number.style.backgroundColor='green';
        pizzaOrder.aptNumber = apt_Number.value;
        console.log(pizzaOrder);
    } else {
       apt_Number.style.backgroundColor='red';
    }
};

city_input.onblur = function () {
    console.dir(city_input.value);         
    if (city_input.value.match(/^[ 0-9a-zA-Z.:-]+$/) != null) {
        city_input.style.backgroundColor='green';
        pizzaOrder.city = city_input.value;
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

// *** Objects ***
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
    //console.log('populate select w handtossed');
    pizzaOrder.dough = handTossedRadio.value;
    createSelectSizeOptions(handTossed);
};

thinCrustRadio.onclick = function () {
    //console.log('populate select w thinCrust');
    pizzaOrder.dough = thinCrustRadio.value;
    createSelectSizeOptions(thinCrust);
};

newYorkStyleRadio.onclick = function () {
    //console.log('populate select w newYorkStyle');
    pizzaOrder.dough = newYorkStyleRadio.value;
    createSelectSizeOptions(newYorkStyle);
};

gluttenFreeRadio.onclick = function () {
    //console.log('populate select w gluttenFree');
    pizzaOrder.dough = gluttenFreeRadio.value;
    createSelectSizeOptions(gluttenFree);
};
        
function createSelectSizeOptions(pizzaSizesObj) {
    var str = '<option>--Selcet a Pizza Size--</option>';
    for (var prop in pizzaSizesObj) {
        str += '<option value="' + prop + '">' + prop + ' ($' + pizzaSizesObj[prop] + ')</option>';
    } 
    pizzaSize.classList.remove('hidden');
    pizzaSize.innerHTML = str;
}

pizzaSize.onchange = function () {
    console.dir(pizzaSize.value);
    if (pizzaSize.value == '--Selcet a Pizza Size--') {
        pizzaSize.style.backgroundColor='red';
    } else {
        pizzaSize.style.backgroundColor='green';
        pizzaOrder.pizzaSize = pizzaSize.value;
        if (pizzaOrder.dough == 'handTossed') {
            pizzaOrder.price = handTossed[pizzaSize.value];
        } else if (pizzaOrder.dough == 'thinCrust') {
            pizzaOrder.price = thinCrust[pizzaSize.value];
        } else if (pizzaOrder.dough == 'newYorkStyle') {
           pizzaOrder.price = newYorkStyle[pizzaSize.value]; 
        } else if (pizzaOrder.dough == 'gluttenFree') {
           pizzaOrder.price = gluttenFree[pizzaSize.value];
        }
        console.log(pizzaOrder);
    } 
};

cheeseOptions.onchange = function () {
    console.dir(cheeseOptions.value);
    if (cheeseOptions.value == 'selectedCheeseOptions') {
        cheeseOptions.style.backgroundColor='red';
    } else {
        cheeseOptions.style.backgroundColor='green';
    }
};

sauceOptions.onchange = function () {
    console.dir(sauceOptions.value);
    if (sauceOptions.value == 'selectedSauceOptions') {
        sauceOptions.style.backgroundColor='red';
    } else {
        sauceOptions.style.backgroundColor='green';
        pizzaOrder.sauce == sauceOption.value;
        if (pizzaOrder.)
    }
};

toppings.onclick = function () {
    console.dir(toppings.value);
};

//cc validator
ccNumber.onblur = function() {
  if (validCreditCardNo(ccNumber.value)) {
      ccNumber.style.backgroundColor='green';
  } else {
      ccNumber.style.backgroundColor='red';
  }
};

cvc.onblur = function () {
    console.dir(cvc.value);         
    if (cvc.value.match(/^\d{3}$/) != null) {
        cvc.style.backgroundColor='green';
    } else {
        cvc.style.backgroundColor='red';
    }
};

ccExpirationMonth.onchange = function () {
    console.dir(ccExpirationMonth);
    if (ccExpirationMonth.value == 'selectMonth') {
        ccExpirationMonth.style.backgroundColor='red';
    } else {
        ccExpirationMonth.style.backgroundColor='green';
    }
};

ccExpirationYear.onchange = function () {
    console.dir(ccExpirationYear);
    if (ccExpirationYear.value == 'selectYear') {
        ccExpirationYear.style.backgroundColor='red';
    } else {
        ccExpirationYear.style.backgroundColor='green';
    }
};

// *** Extra Credit *** cc number validation with LF
    function validCreditCardNo(value) {
        if (value == '') return false; 
        if (/[^0-9-\s]+/.test(value)) return false;
// *** The Luhn Formula ***
        var nCheck = 0, nDigit = 0, bEven = false;
        value = value.replace(/\D/g, "");
        for (var n = value.length - 1; n >= 0; n--) {
            var cDigit = value.charAt(n),
            nDigit = parseInt(cDigit, 10);
            if (bEven) {
            if ((nDigit *= 2) > 9) nDigit -= 9;
            }
            nCheck += nDigit;
            bEven = !bEven;
        }
        return (nCheck % 10) == 0;
    }    

// *** cc Billing Information *** 

sameAsDelivery.onclick = function () {
    console.dir(sameAsDelivery.value);
    billingName.value = name_input.value;
    billingAddress.value = streetAddress.value;
    billingAptNumber.value = aptNumber.value;
    billingCity.value = city_input.value;
    billingState.value = state_input.value;
    billingZip.value = zip_input.value;
};

billingName.onblur = function () {
    console.dir(billingName.value);        
    if (billingName.value.match(/\d/) != null) { 
        billingName.style.backgroundColor='red';
    } else {
        billingName.style.backgroundColor='green';
    }
}; 

billingAddress.onblur = function () {
    console.dir(billingAddress.value); 
    console.log(billingAddress.value.match(/^[ 0-9a-zA-Z.-]+$/));
    if (billingAddress.value.match(/^[ 0-9a-zA-Z.-]+$/) != null) { 
        billingAddress.style.backgroundColor='green';
    } else {
       billingAddress.style.backgroundColor='red';
    }
};

billingAptNumber.onblur = function () {
    console.dir(billingAptNumber.value);       
    if (billingAptNumber.value.match(/^[ 0-9a-zA-Z.-]+$/) != null) { 
        billingAptNumber.style.backgroundColor='green';
    } else {
       billingAptNumber.style.backgroundColor='red';
    }
};

billingCity.onblur = function () {
    console.dir(billingCity.value);         
    if (billingCity.value.match(/^[ 0-9a-zA-Z.:-]+$/) != null) {
        billingCity.style.backgroundColor='green';
    } else {
        billingCity.style.backgroundColor='red';
    }
}; 

billingState.onblur = function () {
    console.dir(billingState.value);         
    if (billingState.value.match(/^[a-zA-Z]{2}$/) != null) {
        billingState.style.backgroundColor='green';
    } else {
        billingState.style.backgroundColor='red';
    }
};

billingZip.onblur = function () {
    console.dir(billingZip.value);         
    if (billingZip.value.match(/^\b\d{5}(-\d{4})?\b$/) != null) {
        billingZip.style.backgroundColor='green';
    } else {
        billingZip.style.backgroundColor='red';
    }
};