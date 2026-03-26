export default class Kutya {
    #obj={};
    #i=0;
    constructor(obj = {kep, nev},i, szuloElem) {
        this.#obj = obj;
        this.#i=i;
        this.szuloElem = szuloElem;
        this.megjelenit();

        this.buttonElem = document.querySelector(".kartya:last-child button");
        //console.log(this.buttonElem);
        this.buttonElem.addEventListener("click",(event)=>/*this=sajat objektum lekérdezés, események 
        esetén a function nevtelen függben akkor az eseményváltó esemény váltóra mutat mint event target, 
        nyílfügg eseten, pedig tenylegesen az osztalyból képzett objektumra */ {
            
            this.sajatesemeny()
        })
    }
    sajatesemeny(){
        
        const e=new CustomEvent("kedvencekhez",{detail:this.#i})
        window.dispatchEvent(e)
    }

    getObj(){
        return this.#obj;
    }

    setObj(ertek){
        if (ertek === "oltott") {
            this.#obj.oltott = true;
        } else if (ertek === "nem oltott"){
            this.#obj.oltott = false;
        } else {
            console.log("nem megfelelő az érték");
        }
    }

    megjelenit() {
    let kod = `
        <div class="kartya">
            <img src="${this.#obj.kep}" alt="">
            <p>${this.#obj.nev}
            <spam>${this.#obj.kedvenc?"kedvent":"!"}</spam>
            </p>
            <button>Kedvenc ${this.#obj.nev}</button>
        </div>`;
    this.szuloElem.insertAdjacentHTML("beforeend", kod);    
    }
/*kivalasztas */
}
window.addEventListener("kedvencekhez",(event)=>{
    console.log(event.detail)
})