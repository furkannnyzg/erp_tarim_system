
const navigation = document.querySelector('.drawer-content');
const navigation2=document.querySelector('.drawer-header');
const content_area=document.querySelector('.content-area');
const i_frame=document.querySelector('.i-frame');
document.querySelector('.navbar-toggler').onclick = function(){
    this.classList.toggle('active');
    navigation.classList.toggle('active'); 
    navigation2.classList.toggle('active');
    content_area.classList.toggle('active');
    i_frame.classList.toggle('active');
}



