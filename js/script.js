
const navigation = document.querySelector('.drawer-content');
document.querySelector('.navbar-toggler').onclick = function(){
    this.classList.toggle('active');
    navigation.classList.toggle('active'); 
}

