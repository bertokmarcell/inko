import Kutya from "./Kutya.js"
export default class Kutyak{
    #lista=[];
    constructor(lista,szülöelem){
        this.#lista=lista
        this.szülöelem=szülöelem
        this.megjelenit()
    }
    megjelenit(){
        this.szülöelem.innerHTML="";
        this.#lista.forEach((elem,i)=>{
            const k = new Kutya(elem,i, this.szülöelem);
        });
    }
}