export default class Modal {

  constructor(buttonOpen, buttonClose, containerModal) {
    this.buttonOpen = document.querySelector(buttonOpen)
    this.buttonClose = document.querySelector(buttonClose)
    this.containerModal = document.querySelector(containerModal)

    //bind this ao callback para fazer a referencia da classe
    this.eventToggleModal = this.eventToggleModal.bind(this)
    this.outModal = this.outModal.bind(this)
  }

  
  toggleModal() {
    this.containerModal.classList.toggle("active")
  }

  eventToggleModal(event) {
    event.preventDefault()
    this.toggleModal()
  }
//fecha o modal ao clicar do lado de fora
  outModal(event) {
    if(event.target === this.containerModal) {
      this.toggleModal(event)
    }
  }
//adiciona os eventos aos elementos do modal
  addModalEvent() {
    this.buttonOpen.addEventListener("click", this.eventToggleModal);
    this.buttonClose.addEventListener("click", this.eventToggleModal);
    this.containerModal.addEventListener("click", this.outModal);
  }
  init () {
    if (this.buttonOpen && this.buttonClose && this.containerModal) {
      this.addModalEvent()
    }
    return this
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