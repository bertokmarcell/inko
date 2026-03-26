import { megjelenit } from "./adat.js"
import Maantis from "./Maantis.js"
const mantis={
    kep:"letöltés.jpg",
    nev:"reaper mantis"
}
const kiny={
    kep:"f.jpg",
    nev:"kinyo"
}
const szuloelem=document.querySelector(".tarolo")
const mant=new Maantis(mantis,szuloelem)
const kinyo=new Maantis(kiny,szuloelem)
console.log(mant)
mant.megjelenit();
kinyo.megjelenit();
mant.megjelenit();
kinyo.megjelenit();