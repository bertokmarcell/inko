/*import { inko } from "./fuggvenyek.js";
function inkoteszt(){
    let eredmeny=inko(1234,124235);
    console.assert(eredmeny==3,"${a},${b},elvart eredmeny: 5, kapott ${eredmeny},az a nem többszöröse b-nek, de az inko>1");
}
function inkotesztb(){
    let eredmeny=inko(1234,124235);
    console.assert(eredmeny==1234,"ugyan azok a számok");
}
function inkotesztc(){
    let eredmeny=inko(-20,-30);
    console.assert(eredmeny<0,"mind a két szám negatív");
}
function inkotesztd(){
    let eredmeny=inko(-20,-40);
    console.assert(eredmeny<0,"csak az egyik negatív");
}
function lnkoteszt2(){
    const tesztesetlista=[{
        a:18,b:3,vart:3,szöv:"csak az egyik negatív"
    },
    {
        a:24,b:18,vart:6,szöv:"inko>1"
    },
    {
        a:18,b:6,vart:6,szöv:"a többszöröse b-nek"
    }]
}
for (let index = 0; index < tesztesetlista.length; index++) {
    let eredmeny = tesztesetlista[index].vart;
    console.log(
        `a=${tesztesetlista[index].a}, b=${tesztesetlista[index].b}, ` +
        `elvart: 3, kapott: ${eredmeny}, ${tesztesetlista[index].szov}`
    );
    console.log("mind lefutott")
}
*/
import { inko } from "./inko.js";

function inkoteszt() {

    const tesztesetlista = [
        { a: 18, b: 3, vart: 3, szov: "b osztója a-nak" },
        { a: 24, b: 18, vart: 6, szov: "inko > 1" },
        { a: 18, b: 6, vart: 6, szov: "a többszöröse b-nek" }
    ];

    for (let index = 0; index < tesztesetlista.length; index++) {

        let a = tesztesetlista[index].a;
        let b = tesztesetlista[index].b;
        let vart = tesztesetlista[index].vart;

        let eredmeny = inko(a, b);

        console.assert(
            eredmeny === vart,
            `a=${a}, b=${b}, elvart: ${vart}, kapott: ${eredmeny}, ${tesztesetlista[index].szov}`
        );
    }

    console.log("Minden teszt lefutott");
}

inkoteszt();