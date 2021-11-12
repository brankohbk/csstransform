const ranges = document.getElementsByTagName("input")
const cubo = document.querySelector(".cubo")

const rangesArray = Array.from(ranges)

rangesArray.forEach(range => range.addEventListener("change", e => handleChange(e)))

const handleChange = (e)=>{
  const eje = e.target.dataset.eje
  const grados = e.target.value
  const element = document.getElementById(`grados-${eje}`)
  element.innerText=e.target.value
  cubo.style.setProperty(`--grados-${eje}`, `${grados}deg`)  
}

function girar(eje, grados) {
  const element = document.getElementById(`grados-${eje}`)
  document.getElementById(`range-${eje}`).value = grados
  element.innerText=`${grados}`
  cubo.style.setProperty(`--grados-${eje}`, `${grados}deg`)
  grados != "0" && cubo.style.setProperty(`transform-origin`, `center`)
  grados == "-90" && eje =="x" && cubo.style.setProperty(`transform-origin`, `bottom`)
  grados == "90" && eje =="x" && cubo.style.setProperty(`transform-origin`, `top`)
  grados == "-90" && eje =="y" && cubo.style.setProperty(`transform-origin`, `left`)
  grados == "90" && eje =="y" && cubo.style.setProperty(`transform-origin`, `right`)

}


// **********************
// EXTRA
const consoleColor = Math.floor(Math.random() * (180 - 30) + 30);
console.log("%c Hello, fellow Dev! \n ( ͡° ͜ʖ ͡°)つ",`background-color: #090909; color:hsl(${consoleColor}, 94%, 51%);font-size:2em;padding:2rem`);
console.log(`
%cI hope you found this snippet useful.
In that case, you can drop a like or follow me on:
- Twitter: 🐦 @branko_h 
- Github: 🐱‍🚀 /brankohbk 
- LinkedIn: 👨‍💼 /in/branko-haberkon 
so you don´t miss when i upload a new one. 
See you soon!`
,`color:black;background-color: hsl(${consoleColor}, 94%, 51%);font-size:1.5em; padding: .5rem`);