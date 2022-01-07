// 'use strict';
// 7.11 project 2 modal window
// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.close-modal');
// const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal);
// for (let i = 0; i < btnsOpenModal.length; i++) {
//     console.log(btnsOpenModal[i].textContent);
// }
// 7.12 lesson working with class

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// const openModal = function () {
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
// };

// const closeModal = function () {
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// };

// for (let i = 0; i < btnsOpenModal.length; i++) {
//     btnsOpenModal[i].addEventListener('click', openModal);
// }

// // [...btnsOpenModal].map(btn => btn.addEventListener('click', openModal));

// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// // 7.13 handling an esc keypress event
// document.addEventListener('keydown', function (e) {
//     console.log(e.key);
//     if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//         closeModal();
//     }
// });

class Modal {
    constructor(modal, overlay, closeButton, openButtons) {
        this.modal = modal;
        this.overlay = overlay;
        this.closeButton = closeButton;
        this.openButtons = openButtons;
        this.addEventListeners();
    }

    addEventListeners() {
		for (let i = 0; i < this.openButtons.length; i++) {
            this.openButtons[i].addEventListener('click', this.open.bind(this));
        }

		this.closeButton.addEventListener('click', this.close.bind(this));
		this.overlay.addEventListener('click', this.close.bind(this));

        document.addEventListener('keydown', (function (e) {
            if (e.key === 'Escape' && !this.modal.classList.contains('hidden')) {
                this.close();
            }
        }).bind(this));
    }

    open() {
		console.log(this.modal);
        this.modal.classList.remove('hidden');
        this.overlay.classList.remove('hidden');
    }

    close() {
        this.modal.classList.add('hidden');
        this.overlay.classList.add('hidden');
    }
}

let messageModal = new Modal(modal, overlay, btnCloseModal, btnsOpenModal);
