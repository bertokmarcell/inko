
export default class Maantis{
    /*adattagok */
    constructor(obj=[kep,nev],szuloelem){
        /*this.kep=obj.kep
        this.nev=obj.nev*/
        this.obj=obj;
        this.szuloelem=szuloelem
        const button=document.querySelector(".kartya button")
        button.addEventListener("click",function(event){
            console.log("megvan")
        })
    }

    megjelenit(){
        let kod=`
        <div class="kartya">
            <img src="${this.obj.kep}" alt="asdgsgdagas">
            <p>${this.obj.nev}</p>
        </div>
        <button class="gomb" >kedvenc</button>
        `;
        this.szuloelem.inserAdjacentHTML("beforehand",kod)
    }
    getobj(){
        return this.obj
    }
    setobj(ertek){
        if (ertek=="oltott"){this.obj.oltott=true}
        else if(ertek=="nem oltott"){this.obj.oltott=false}
        else{console.log("nincs megfelelo ertek")}
    }
}
 