let vorigGetal = 0;
let huidigGetal = 1;

document.getElementById("telOp").onclick = function(){
    let volgendGetal = vorigGetal + huidigGetal;
    vorigGetal = huidigGetal;
    huidigGetal = volgendGetal;
    document.getElementById("resultaat").innerHTML = volgendGetal;
}
