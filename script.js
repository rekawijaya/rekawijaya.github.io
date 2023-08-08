// toggle 
const navlink = document.querySelector('.navlink')
document.querySelector('#hamburger').onclick = () => {
    navlink.classList.toggle('active')
}
const hamburger = document.querySelector('#hamburger')
document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navlink.contains(e.target)){
        navlink.classList.remove('active')
    }
})