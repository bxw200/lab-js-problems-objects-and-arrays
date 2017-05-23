// Customer Object
var Customer = function (customerInfo) {
  // ** your code here**
this.id=customer.id;
this.name=customer.name;
this.carRented=null;
};

// Car Object
var Car = function (carInfo) {
  // ** your code here**
this.id=carInfo.id;
this.producer=carInfo.producer;
this.model=carInfo.model;
this.rentalPrice=carInfo.rentalPrice;
this.available=true;
this.customer={};
this.rentalDuration=0;

function quotePrice (rentalPrice,rentalDuration){
return(this.rentalPrice*rentalDuration);
};

function reserve (customers,rentalDuration){
if(this.available){
  this.available=false;
  this.customer=customer;
  this.rentalDuration=rentalDuration;
  return true;
}else{
  return false;
}
};

function return(){
  if(this.available=true){
    return "sorry, this car have alrady been returned.";
  }else{
    this.available=true;
    this.customers=null;
    this.rentalDuration=null;
    return "Thank You"
  }
};
};





// Vendor Object
var Vendor = function(name) {
  this.name = "name";
  this.cars = [];
  this.customers = [];

  this.findCarIndex = function (carID) {
    return this.cars.findIndex(function(car){
      return car.id === carID ? true : false ;
    });
  };

  this.findCustomerIndex = function (customerID) {
    return this.customers.findIndex(function(customer){
      return customer.id === customerID ? true : false ;
    });
  };

  this.getCar = function (carID) {
    return this.cars.find(function(car){
      return car.id === carID ? true : false ;
    });
  };

  this.getCustomer = function (customerID) {
    return this.customers.find(function(customer){
      return customer.id === customerID ? true : false ;
    });
  };

  // **your code here**
  this.addCar = function (carObj){
    if(car === true){
    console.log("ID already exist");
  }else{carObj.push && "Car Added to warehouse"};
};
this.addCustormer = function (customerObj) {
   var customer = this.getCustomer(customerObj.id);
   if (customer === true) {
     console.log("ID already exists");
   } else {
     this.customers.push(customerObj);
     console.log("Customer added to records");
   }
 };
 this.removeCar = function (carID) {
  var carIndex = this.findCarIndex(carID);
  if (carIndex >= 0) {
    this.cars.splice(carIndex, 1);
    console.log("Car deleted");
  } else {
    console.log( "The carID could not be found.");
  }
};

  this.availableCars = function () {
    return this.cars.filter(function(car){
      return car.availible ? true : false ;
    });
  };

  this.rentCar = function (customerID, rentalDuration) {
    var availableCars = this.availableCars();
    if (availableCars.length === 0) {
      console.log("All our cars have been rented");
    } else {
      var customer = this.getCustomer(customerID);
      if (customer) {
        var car = availableCars[0];
        customer.carRented = car;
        car.reserve(customer, rentalDuration);
        console.log("The car has been reserved");
      } else {
        console.log("Please provide a valid customerID");
      }
    }
  };
  this.returnCar = function (customerID) {
  var customer = this.getCustomer(customerID);
  if (customer) {
    customer.carRented.return();
    customer.carRented = null;
    console.log( "Thank you for using our service");
  } else {
    console.log("Please provide a valid customerID");
  }
};

this.totalRevenue = function () {
  return this.cars.reduce(function(prevSum, currCar){
    console.log(prevSum, currCar);
    return prevSum + (currCar.rentalDuration * currCar.rentalPricePerDay);
  }, 0);
};

// Codes you can run to test your code
var customerInfo = {
  id: "001",
  name: "Sherman"
};
var customerA = new Customer(customerInfo);

var carInfo = {
  id: "001",
  producer: "Toyota",
  model: "Subra",
  rentalPrice: 200,
};
};

var carA = new Car(carInfo);

var vendor = new Vendor('Jens Limited');
vendor.addCustormer(customerA);

console.log(vendor.availableCars());
vendor.addCar(carA);
console.log(vendor.availableCars());

vendor.rentCar(customerA.id, 5);
