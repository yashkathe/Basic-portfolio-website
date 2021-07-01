var close_button = document.getElementById('close_button')

// console.log(close_button)

var modal = document.querySelector('.pop_contact')

// console.log(modal)

var backdrop = document.querySelector('.body_2_backdrop')

// console.log(backdrop)

var contact_button = document.querySelector('.main_child1')

// console.log(contact_button)

const closeModalandBackdrop = () => {
    modal.style.display='none';
    backdrop.style.display='none';
}

const popModalandBacldrop = () => {
    modal.style.display='block';
    backdrop.style.display='block';
}

contact_button.addEventListener('click', popModalandBacldrop)

backdrop.addEventListener('click', closeModalandBackdrop)

close_button.addEventListener('click', closeModalandBackdrop)