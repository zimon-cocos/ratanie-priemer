const button = document.getElementById("novy")
const znamkabar = document.getElementById("znamka")
const start = document.getElementById("start")

znamkabar.innerText = "Klikni na start vypoctu"

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


    
}
znamkabar.innerText="Vysledny priemer je " + (sucet/delitel).toFixed(2)
console.log("Delime " + sucet + "ku " + delitel +"kou")
console.log("Mas priemer " + parseFloat(sucet/delitel))}



button.addEventListener("click", () =>{
    znamka = parseInt(prompt("Aku si dostal novu znamku"))
    hodnota = parseFloat(prompt("S akou hodnotou je"))
    sucet+= znamka*hodnota
    delitel += hodnota
    console.log("Delime " + sucet + "ku " + delitel +"kou")
    console.log("Mas novy priemer " + parseFloat(sucet/delitel))
    znamkabar.innerText="Vysledny priemer je " + (sucet/delitel).toFixed(2)

})

start.addEventListener("click",()=>{
    priemer()
})


