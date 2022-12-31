export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]")
  const diasSemana = funcionamento.dataset.semana.split(",").map(Number)
  const horarioSemana = funcionamento.dataset.horario.split(",").map(Number)
  
  
  const dataAgora = new Date()
  const diaAgora = dataAgora.getDay()
  const horarioAgora = dataAgora.getHours()
  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1
  const horarioAberto = (horarioAgora < horarioSemana[1] && horarioAgora >= horarioSemana[0])
  
  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add("aberto")
  } else {
    funcionamento.classList.remove("aberto")
    funcionamento.classList.add("fechado")
  }
}








// Método para calcular os dias que faltam para alguma data definida
// const agora = new Date()
// const futuro = new Date("December 24 2022")

// function convertDays(time) {
//   return time / (24 * 60 * 60 * 1000)
// }

// const diasAgora = convertDays(agora.getTime())
// const dataNatal = convertDays(futuro.getTime())

// const faltam = dataNatal - diasAgora

// console.log(Math.floor(faltam))