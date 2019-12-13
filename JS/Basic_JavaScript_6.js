/* Work with the ternary operator, ?: */

function Ride_Function() {
  var Height, Can_ride;
  Height = document.getElementById("Height").value;
  Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
  document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() {
  var Age, Can_vote;
  Age = document.getElementById("Age").value;
  Can_vote = (Age < 18) ? "You are too young to Vote." : "You can vote!";
  document.getElementById("Vote").innerHTML = Can_vote;
}

/* Start of object oriented: new and this. */
function Vehicle(Make, Model, Year, Color) {
  this.Vehicle_Make = Make;
  this.Vehicle_Model = Model;
  this.Vehicle_Year = Year;
  this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
  document.getElementById("Keywords_and_Constructors").innerHTML =
  "Erik Drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
  " manufactured in " + Erik.Vehicle_Year;
}

/* OO 'new' and 'this' exercise: */
function Animal(Type, Color, Sound) {
  this.Animal_Type = Type;
  this.Animal_Color = Color;
  this.Animal_Sound = Sound;
}

var Kitty = new Animal("Cat", "Calico", "Meow");
var Doggy = new Animal("Dog", "Brown", "Bark");
function newAndThis() {
  var str = "My animal is a " + Kitty.Animal_Type + " which is " + Kitty.Animal_Color + "-colored and says " + Kitty.Animal_Sound;
  document.getElementById("New_and_This").innerHTML = str;
}


/* var goose = abstract; -- doesn't proceed from here */
/* document.write("The contents of goose:" + goose); */

/* Create an Object*/

function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyecolor = eyecolor;
  this.changeName = function (name) {
    this.lastName = name;
  }
}

var averagePerson = new Person("John", "Doe", 50, "blue");
averagePerson.changeName("Jones");
document.writeln(averagePerson.lastName);

/* Demo of a nested function */
function nestedFunct() {
  document.getElementById("Nested_Function").innerHTML = plusTwo();
  function plusTwo () {
    var num = 0;
    addTwo();
    function addTwo() { num += 2; }
    return num;
  }
}