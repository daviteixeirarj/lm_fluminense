const btnMobile = document.getElementById('btn-mobile')
const hamburguer = document.getElementById('hamburguer')
const menuItems = document.getElementById('menu-itens')

function toggleMenu(){
    hamburguer.classList.toggle('active')
    menuItems.classList.toggle('show')
}

btnMobile.addEventListener('click',toggleMenu)