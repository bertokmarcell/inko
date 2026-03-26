import { Kutyalista } from "./ada.js";
import { megjelenit } from "./kartya.js";
import Kutya from "./Kutya.js";
import  Kutyak  from "./Kutyak.js";

const kutya = {
    kep : "kepek/AA1BC2Vq.jpg",
    nev : "Pic Úr",
    kedvent:true
};

const kutya2 = {
    kep : "kepek/OIP.webp",
    nev : "Bodri",
    kedvent:false
};

const szuloElem = document.querySelector(".tarolo");
const kedvencElem = document.querySelector(".kedvencek");/*
const k1 = new Kutya(kutya, szuloElem);
const k2 = new Kutya(kutya2, szuloElem)*/
new Kutyak(Kutyalista,szuloElem)

//console.log(k1);
//console.log(k1.szuloElem);
/*
console.log(k1.getObj());
console.log(k2.getObj());*/
/*
k1.setObj("oltott");
k2.setObj("nem oltott");*/
const Kedvenclista =[

]
window.addEventListener("kedvencekhez",(event)=>{
    Kedvenclista.push(event.detail)
    let aki =Kedvenclista.length-1;
    new Kutyak(Kedvenclista,kedvencElem)
})














