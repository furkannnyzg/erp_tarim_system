const create_farm=document.querySelector('.drawer-container');
const navigation2 = document.querySelector('.drawer-header');
const createFarmButton = document.querySelector('.create-worker');
const createFarmForm = document.getElementById('create-farm-form');



document.querySelector('.create-worker').onclick = function() {
    this.classList.toggle('active');
    create_farm.classList.toggle('active');
    navigation2.classList.toggle('active');
    
};

function closeDrawer() {
    create_farm.classList.remove('active');
    navigation2.classList.remove('active');
    
}

function resetForm() {
    createFarmForm.reset();
}

createFarmForm.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Farm created successfully!');
    // You can add further form submission logic here
    drawer.classList.remove('active');
});


