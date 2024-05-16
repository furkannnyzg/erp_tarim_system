const navigation = document.querySelector('.drawer-content');
const navigation2 = document.querySelector('.drawer-header');
const iframeContainer = document.querySelector('.iframe-container');
document.querySelector('.navbar-toggler').onclick = function() {
    this.classList.toggle('active');
    navigation.classList.toggle('active');
    navigation2.classList.toggle('active');
    iframeContainer.classList.toggle('active');
};

