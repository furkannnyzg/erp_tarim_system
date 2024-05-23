// Drawer'ı açma ve kapatma işlevleri
function openDrawer() {
    document.querySelector('.drawer .drawer-container').classList.add('active');
    document.querySelector('.drawer .drawer-header').classList.add('active');
}

function closeDrawer() {
    document.querySelector('.drawer .drawer-container').classList.remove('active');
    document.querySelector('.drawer .drawer-header').classList.remove('active');
    resetForm();
}

// Formu sıfırlama işlevi
function resetForm() {
    document.getElementById('create-farm-form').reset();
}

