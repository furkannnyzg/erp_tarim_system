const create_farm=document.querySelector('.drawer-container');
const navigation2 = document.querySelector('.drawer-header');
document.querySelector('.create-farm-button').onclick = function() {
    this.classList.toggle('active');
    create_farm.classList.toggle('active');
    navigation2.classList.toggle('active');
};
