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


// Firebase yapılandırma kodu
const firebaseConfig = {
    apiKey: "AIzaSyBBWgGH9ZSkFNeVuWLlx0qogAOUcWWr8e4",
    authDomain: "erptarimsystem.firebaseapp.com",
    databaseURL: "https://erptarimsystem-default-rtdb.firebaseio.com",
    projectId: "erptarimsystem",
    storageBucket: "erptarimsystem.appspot.com",
    messagingSenderId: "997520316141",
    appId: "1:997520316141:web:60f7c15f788711880e5ee4",
    measurementId: "G-BYNHC0WR23"
  };
// Firebase'i başlatma
firebase.initializeApp(firebaseConfig);
firebase.getAnalytics(app);

// Firebase Realtime Database referansı alma
var workerFormDB = firebase.database().ref("worker-form");

// Form gönderildiğinde işçi ekleme
document.getElementById('create-farm-form').addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
    var name = getElementVal('worker-name');
    var surname = getElementVal('worker-surname');
    var number = getElementVal('worker-number');
    var mail = getElementVal('worker-mail');

    console.log(name, surname, number, mail);

    saveMessages(name, surname, number, mail);

    // Formu sıfırla ve drawer'ı kapat
    resetForm();
    closeDrawer();

    // İşçileri yeniden yükle
    fetchWorkers();
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
};

const saveMessages = (name, surname, number, mail) => {
    var newWorkerForm = workerFormDB.push();
    newWorkerForm.set({
        name: name,
        surname: surname,
        number: number,
        mail: mail
    });
};

const fetchWorkers = () => {
    workerFormDB.on('value', (snapshot) => {
        const workersList = document.getElementById('workers-list');
        workersList.innerHTML = '';

        snapshot.forEach((childSnapshot) => {
            var worker = childSnapshot.val();
            var workerElement = document.createElement('div');
            workerElement.innerText = `${worker.name} ${worker.surname} - ${worker.number} - ${worker.mail}`;
            workersList.appendChild(workerElement);
        });
    });
};

document.addEventListener('DOMContentLoaded', fetchWorkers);
