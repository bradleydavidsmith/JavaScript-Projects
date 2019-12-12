var Vehicle = {
  Type:"Sedan",
  Make:"Honda",
  Model:"Civic",
  Color:"Silver",
  Age:10,
  Sound: "Honk",
}

function dictFunct() {
  document.getElementById("Dictionary").innerHTML = Vehicle.Age;
}

function dictFunctID() {
  var Vehicle2 = {
    Type: "Sedan",
    Make: "Toyota",
    Make: "Ford",
  }
  document.getElementById("Dict2").innerHTML = Vehicle2.Make;
}

function dictFunctDel() {
  delete Vehicle.Color;
  document.getElementById("Dict3").innerHTML = Vehicle.Color;
}