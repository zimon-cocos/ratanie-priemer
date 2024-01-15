const button = document.getElementById("novy")
button.style.backgroundColor = "aqua"

let sucet =  0
let delitel = 0
let znamka = 0
let hodnota = 0
function priemer(znamka,hodnota, znamky){
    znamky = parseInt(prompt("Kolko znamociek si dostal"))
    for(let i = 0; i<znamky; i++) {

        str1 = prompt("Aku si dostal znamku")
        znamka = parseFloat(str1)
        console.log("znamka " + znamka)
        str2 = prompt("S akou hodnotou")
        hodnota = parseFloat(str2)
        console.log("hodnota " + hodnota)
        sucet+= znamka*hodnota
        delitel+= hodnota
        console.log(delitel)

    
}console.log("Delime " + sucet + "ku " + delitel +"kou")
console.log("Mas priemer " + parseFloat(sucet/delitel))}

priemer()

button.addEventListener("click", () =>{
    znamka = parseInt(prompt("Aku si dostal novu znamku"))
    hodnota = parseFloat(prompt("S akou hodnotou je"))
    sucet+= znamka*hodnota
    delitel += hodnota
    console.log("Mas novy priemer " + parseFloat(sucet/delitel))

})


