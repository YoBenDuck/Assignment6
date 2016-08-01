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
    streetAddress: '',
    apt: 0,
    city: '',
    state: '',
    zip: 0,
    phone: 0,
    email: '',
    pizzaSize: 0,
    dough: '',
    cheese: 0,
    sauce: 0,
    toppings: 0,
    comments: '',
    price: 0,
    payment:'',
    ccNumber: 0,
    cvc: 0,
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
total = 0;

//*** Delivery Information ***
name_input.onblur = function () {
    console.log('name '+ name_input.value);   //contains text      
    if (name_input.value.match(/\d/) != null || name_input.value=='') { //validates input
        name_input.classList.add('red');
        name_input.classList.remove('green');
    } else {
        name_input.classList.remove('red');
        name_input.classList.add('green');
        pizzaOrder.name_input = name_input.value;
    }
}; 

addressType_input.onchange = function () {
    console.dir(addressType_input);
    if (addressType_input.value == 'wrong') {
        addressType_input.classList.add('red');
        addressType_input.classList.remove('green');
    } else {
       addressType_input.classList.remove('red');
        addressType_input.classList.add('green');
        if (addressType_input.value == 'Other') {
            otherAddress.classList.remove('hidden');
        } else {
            otherAddress.classList.add('hidden');
        }
        pizzaOrder.addressType = addresstype_input.value;
    }
};

streetAddress.onblur = function () {
    console.log('streetAddress '+ streetAddress.value);
    if (streetAddress.value.match(/^[ 0-9a-zA-Z.-]+$/) != null) { 
        streetAddress.classList.add('green');
        streetAddress.classList.remove('red');
        pizzaOrder.streetAddress = streetAddress.value;
    } else {
       streetAddress.classList.remove('green');
        streetAddress.classList.add('red');
    }
};

apt_Number.onblur = function () {
       
    if (apt_Number.value.match(/^[ 0-9a-zA-Z.-]+$/) != null) { 
        apt_Number.classList.add('green');
        apt_Number.classList.remove('red');
        pizzaOrder.aptNumber = apt_Number.value;
    } else {
        apt_Number.classList.remove('green');
        apt_Number.classList.add('red');
    }
};

city_input.onblur = function () {
    console.dir(city_input.value);         
    if (city_input.value.match(/^[ 0-9a-zA-Z.:-]+$/) != null) {
        city_input.classList.add('green');
        city_input.classList.remove('red');
        pizzaOrder.city = city_input.value;
    } else {
        city_input.classList.remove('green');
        city_input.classList.add('red');
    }
}; 

state_input.onblur = function () {
    console.dir(state_input.value);         
    if (state_input.value.match(/^[a-zA-Z]{2}$/) != null) {
        state_input.classList.add('green');
        state_input.classList.remove('red');
        pizzaOrder.state = state_input.value;
    } else {
        state_input.classList.remove('green');
        state_input.classList.add('red');
    }
};

zip_input.onblur = function () {
    console.dir(zip_input.value);         
    if (zip_input.value.match(/^\b\d{5}(-\d{4})?\b$/) != null) {
        zip_input.classList.add('green');
        zip_input.classList.remove('red');
        pizzaOrder.zip = zip_input.value;
    } else {
        zip_input.classList.remove('green');
        zip_input.classList.add('red');
    }
};

phoneNumber_input.onblur = function () {
    console.dir(phoneNumber_input.value);         
    if (phoneNumber_input.value.match(/^\d{3}-\d{3}-\d{4}$/) != null) {
        phoneNumber_input.classList.add('green');
        phoneNumber_input.classList.remove('red');
        pizzaOrder.phopne = phoneNumber_input.value;
    } else {
        phoneNumber_input.classList.remove('green');
        phoneNumber_input.classList.add('red');
    }
};

email_input.onblur = function () {
    console.dir(email_input.value);         
    if (email_input.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) != null) {
        email_input.classList.add('green');
        email_input.classList.remove('red');
        pizzaOrder.email = email_input.value;
    } else {
        email_input.classList.remove('green');
        email_input.classList.add('red');
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

var total = 0;

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
        pizzaSize.classList.add('red');
        pizzaSize.classList.remove('green');
    } else {
        pizzaSize.classList.remove('red');
        pizzaSize.classList.add('green');
        pizzaOrder.pizzaSize = pizzaSize.value;
        if (pizzaOrder.dough == 'handTossed') {
            pizzaOrder.price = handTossed[pizzaSize.value]; 
           updateTotal();
            console.log(pizzaOrder.price);
           
        } else if (pizzaOrder.dough == 'thinCrust') {
            pizzaOrder.price = thinCrust[pizzaSize.value];
            updateTotal();
        } else if (pizzaOrder.dough == 'newYorkStyle') {
           pizzaOrder.price = newYorkStyle[pizzaSize.value]; 
            updateTotal();
        } else if (pizzaOrder.dough == 'gluttenFree') {
           pizzaOrder.price = gluttenFree[pizzaSize.value];
            updateTotal();
        }
        console.log(pizzaOrder);
    } 
};

cheeseOptions.onchange = function () {
    
    pizzaOrder.cheese = Number(cheeseOptions.value);
    updateTotal();
    console.log(cheeseOptions.value);
    
};

sauceOptions.onchange = function () {
    pizzaOrder.sauce = Number(sauceOptions.value);
        updateTotal();
    console.log(sauceOptions.value);
};

toppings.onchange = function(event) {
    if (event.target.checked) {
        pizzaOrder.toppings += 0.99;
    } else {
        pizzaOrder.toppings -= 0.99;
    }
    updateTotal();
};

//cc validator
ccNumber.onblur = function() {
  if (validCreditCardNo(ccNumber.value)) {
      ccNumber.classList.add('green');
      ccNumber.classList.remove('red');
        pizzaOrder.ccNumber = ccNumber.value;
  } else {
      ccNumber.classList.remove('green');
      ccNumber.classList.add('red');
  }
};

cvc.onblur = function () {
    console.dir(cvc.value);         
    if (cvc.value.match(/^\d{3}$/) != null) {
      cvc.classList.add('green');
      cvc.classList.remove('red');
    } else {
      cvc.classList.remove('green');
      cvc.classList.add('red');
    }
};

ccExpirationMonth.onchange = function () {
    console.dir(ccExpirationMonth);
    if (ccExpirationMonth.value == 'selectMonth') {
        ccExpirationMonth.classList.add('red');
        ccExpirationMonth.classList.remove('green');
    } else {
        ccExpirationMonth.classList.remove('red');
        ccExpirationMonth.classList.add('green');
    }
};

ccExpirationYear.onchange = function () {
    console.dir(ccExpirationYear);
    if (ccExpirationYear.value == 'selectYear') {
        ccExpirationYear.classList.add('red');
        ccExpirationYear.classList.remove('green');
    } else {
        ccExpirationYear.classList.remove('red');
        ccExpirationYear.classList.add('green');
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

sameAsDelivery.onchange = function (event) {
   if (event.target.checked) {
    billingName.value = name_input.value;
    billingAddress.value = streetAddress.value;
    billingAptNumber.value = apt_Number.value;
    billingCity.value = city_input.value;
    billingState.value = state_input.value;
    billingZip.value = zip_input.value;
    } else {
       billingName.value = '';
    billingAddress.value = '';
    billingAptNumber.value = '';
    billingCity.value = '';
    billingState.value = '';
    billingZip.value = '';
    }
};

billingName.onchange = function () {
    console.dir(billingName.value);        
    if (billingName.value.match(/\d/) != null) { 
        billingName.style.backgroundColor='red';
    } else {
        billingName.style.backgroundColor='green';
    }
}; 

billingAddress.onchange = function () {
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

function updateTotal() {
    mytotal = Number(pizzaOrder.price) +  Number(pizzaOrder.cheese) +  Number(pizzaOrder.sauce) +  Number(pizzaOrder.toppings);
    
    displayTotal.innerHTML = mytotal.toFixed(2);

    console.log("price:" + pizzaOrder.price);
    console.log("cheese:"+ pizzaOrder.cheese);
    console.log("souce:" + pizzaOrder.sauce);
    console.log("topings:" + pizzaOrder.toppings);
    
};

orderUpButton.onclick = function() {
    console.log(name_input.classList);
    if (name_input.classList.contains('green')&&
        streetAddress.classList.contains('green')&&
        apt_Number.classList.contains('green')&&
        city_input.classList.contains('green')&&
        state_input.classList.contains('green')&&
        zip_input.classList.contains('green')&&
        phoneNumber_input.classList.contains('green')&&
        email_input.classList.contains('green')&&
        ccNumber.classList.contains('green')&&
        ccExpirationMonth.classList.contains('green')&&
        ccExpirationYear.classList.contains('green')&&
        pizzaOrder.price != 0
       )
        
        {
        alert("Your Order is on the way.")
        } else { 
            alert("Please check order for errors.")
    }
       };