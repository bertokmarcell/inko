export function megjelenit(adat=[kep,nev],szuloelem){
let kod=`
    <div class="kartya">
            <img src="${adat.kep}" alt="asdgsgdagas">
            <p>${adat.nev}</p>
        </div>
    `;
    szuloelem.innerHTML=kod;
}
