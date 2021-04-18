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