"use strict";
let form = document.getElementById("form");
let table = document.getElementById("table");
let img = document.getElementById("outputimg");
let carname = ["tesla", "toyota", "chevrolet","bmw","kia","toyota","hyundai"];
let tr = document.createElement("tr");
let td = document.createElement("td");
let td1 = document.createElement("td");

function CarGarage(name, catigory, model) {
  this.name=name;
  this.catigory=catigory;
  this.model=model;
}

CarGarage.prototype.getName = function () {
  let nameInput = document.getElementById("input1");
  this.name = nameInput.value;
  this.name.toLowerCase();

  table.appendChild(tr);
  tr.appendChild(td);

  if (this.name === "tesla") {
    img.setAttribute("src","img/tesla.jpeg");
    td.appendChild(img);
  } 
  else if (this.name === "toyota") {
    img.setAttribute("src","img/toyota.jpeg");
    td.appendChild(img);
  }
   else if (this.name === "chevrolet") {
    img.setAttribute("src","img/chevr.jpeg");
    td.appendChild(img);
  }
   else if (this.name === "bmw") {
    img.setAttribute("src","img/bmw.jpeg");
    td.appendChild(img);
  }
   else if (this.name === "kia") {
    img.setAttribute("src","img/kia.jpeg");
    td.appendChild(img);
  }
   else if (this.name === "hyundai") {
    img.setAttribute("src","img/hondai.jpeg");
    td.appendChild(img);
  }

  
};

CarGarage.prototype.getinfo = function () {
let categoryInput = document.getElementById('catigory');
let modelInput =document.getElementById('model');
this.catigory=categoryInput.value ;
this.model = modelInput.value ;  

tr.appendChild(td1);
td1.textContent=`car name : ${this.catigory} \n model year : ${this.model} `;

}

let button = document.getElementById('submit');
button.addEventListener("submit" , showtable)

function showtable(event) {
    event.preventDefault();

    getName();
    getinfo();
    // console.log(getinfo);

}


// let newcar = new CarGarage(name, catigory, model);
// getName();
// getinfo();