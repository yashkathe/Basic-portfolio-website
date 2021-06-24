var close_button = document.querySelector('#close_button')

// console.log(close_button)

var modal = document.querySelector('.pop_contact')

// console.log(modal)

var backdrop = document.querySelector('.body_2_backdrop')

// console.log(backdrop)

var contact_button = document.querySelector('.main_child1')

// console.log(contact_button)

contact_button.addEventListener('click',
 function(){
    modal.style.display='block';
    backdrop.style.display='block';
})

backdrop.addEventListener('click',
function(){
    modal.style.display='none';
    backdrop.style.display='none';
})

close_button.addEventListener('click',
function(){
    modal.style.display='none';
    backdrop.style.display='none';
})