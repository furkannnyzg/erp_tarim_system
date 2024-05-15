
const navigation = document.querySelector('.drawer-content');
const navigation2=document.querySelector('.drawer-header');
const content_area=document.querySelector('.content-area');
const two_screen=document.querySelector('.two-screen');
document.querySelector('.navbar-toggler').onclick = function(){
    this.classList.toggle('active');
    navigation.classList.toggle('active'); 
    navigation2.classList.toggle('active');
    content_area.classList.toggle('active');
    two_screen.classList.toggle('active');
}



