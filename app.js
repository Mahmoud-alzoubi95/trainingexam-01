'use strict';

let form = document.getElementById("form");
let container = document.getElementById("container");
// let img = document.getElementById("outputimg");
// let tr = document.createElement("tr");
// let td = document.createElement("td");
// let td1 = document.createElement("td");
let arrofData = [];

function CarGarage(name,catigory,model) {
  this.name=name ;
  this.catigory=catigory ;
  this.model=model ;
  arrofData.push(this);

}


CarGarage.prototype.getName = function () {
  let nameInput = document.getElementById("Name");
  this.name = nameInput.value;
//   console.log(nameInput.value);
  this.name.toLowerCase();
  let table = document.createElement('table')
  container.appendChild(table);
  let tr = document.createElement("tr");
  let td = document.createElement("td");
  let td1 = document.createElement("td");
  table.appendChild(tr);
  tr.appendChild(td);

  if (this.name === "tesla") {
   
    let tr1=document.createElement('tr');
    let td1 =document.createElement('td')
    let img1 = document.createElement("img");
    table.appendChild(tr1);
    tr1.appendChild(td1);
    td1.appendChild(img1);
    img1.setAttribute("src","img/tesla.jpeg");

  } 
  else if (this.name === "toyota") {

    let img2 = document.createElement("img");
    let tr2=document.createElement('tr');
    let td2 =document.createElement('td')
    table.appendChild(tr2);
    tr2.appendChild(td2);
    td2.appendChild(img2);
    img2.setAttribute("src","img/toyota.jpeg");
}
   else if (this.name === "chevrolet") {

    let img3 = document.createElement("img");
    let tr3=document.createElement('tr');
    let td3 =document.createElement('td')
    table.appendChild(tr3);
    tr3.appendChild(td3);
    td3.appendChild(img3);
    img3.setAttribute("src","img/chevr.jpeg");
}
   else if (this.name === "bmw") {

    let img4 = document.createElement("img");
    let tr4=document.createElement('tr');
    let td4 =document.createElement('td')
    table.appendChild(tr4);
    tr4.appendChild(td4);
    td4.appendChild(img4);
    img4.setAttribute("src","img/bmw.jpeg");
}
   else if (this.name === "kia") {

    let img5 = document.createElement("img");
    let tr5=document.createElement('tr');
    let td5 =document.createElement('td')
    table.appendChild(tr5);
    tr5.appendChild(td5);
    td5.appendChild(img5);
    img5.setAttribute("src","img/kia.jpeg");
  }
   else if (this.name === "hyundai") {

    let img6 = document.createElement("img");
    let tr6=document.createElement('tr');
    let td6 =document.createElement('td')
    table.appendChild(tr6);
    tr6.appendChild(td6);
    td6.appendChild(img6);
    img6.setAttribute("src","img/hondai.jpeg");

  }

// CarGarage.prototype.getinfo = function () {
let categoryInput = document.getElementById('catigory');
let modelInput =document.getElementById('model');
this.catigory=categoryInput.value ;
this.model = modelInput.value ;
tr.appendChild(td1);
td1.textContent=`car name : ${this.catigory}` + "\n" + `model year : ${this.model} `; 
console.log('mahmoud');
// }

saveData();

};




   console.log('mahmoud');

// let button = document.getElementById('submit');
form.addEventListener("submit" ,showTable )

function showTable(event) {
    event.preventDefault();
    // CarGarage.getName;
    // CarGarage.getinfo;
    let name = event.target.name.value
    let catigory = event.target.name.value
    let model = event.target.name.value
    let cars = new CarGarage(name , catigory,model)
    cars.getName();
}




function saveData(){

    let data =JSON.stringify(arrofData);
    localStorage.setItem('alldata', data) ;

}


function previuosData(){
    let prevData=localStorage.getItem('alldata');
    let convprevData =JSON.parse(prevData)
 
    if(convprevData){ 
        arrofData = convprevData;
   }
   CarGarage.getName();
 }

 previuosData();
 
 