export default function initModal() {
  const buttonOpen = document.querySelector('[data-modal="abrir"]')
  const buttonClose = document.querySelector('[data-modal="fechar"]')
  const containerModal = document.querySelector('[data-modal="container"]')
  
  function toggleModal(event) {
    event.preventDefault()
    containerModal.classList.toggle("active")
  }

  function outModal(event) {
    if(event.target === this) {
      toggleModal(event)
    }
  }
  if(buttonOpen && buttonClose && containerModal) {


    buttonOpen.addEventListener("click", toggleModal);
    buttonClose.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", outModal);

  }
}

// Modal = {
//   open(){
//     //abrir o modal
//     //adicionar a class active ao modal
//     document.querySelectorAll("container")
//     .classList
//     .add('active')
//   },
//   close(){
//     //fechar o modal
//     //remover a class active do modal
//     document.querySelector('container')
//     .classList
//     .remove('active')
//   }
// }