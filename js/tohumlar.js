
const seeds = [
    "Domates", "Salatalık", "Havuç", "Biber", "Patates", "Soğan", "Sarımsak", "Brokoli", "Mısır", "Kabak", "Kereviz",
    "Marul", "Karnabahar", "Kırmızı Lahana", "Pırasa", "Fasulye", "Bezelye", "Roka", "Bamya", "Domates", "Salatalık",
    "Havuç", "Biber", "Patates", "Soğan", "Sarımsak", "Brokoli", "Mısır", "Kabak"
];


window.onload = function() {
    const seedsList = document.querySelector('.seeds-list');
    seeds.forEach(seed => {
        const seedItem = document.createElement('div');
        seedItem.classList.add('seed-item');
        seedItem.textContent = seed;
        seedsList.appendChild(seedItem);
    });
};


const seedSelector = document.getElementById('seedSelector');
const seedOptions = document.querySelector('.seed-options');
seedSelector.addEventListener('click', function() {
    seedOptions.style.display = seedOptions.style.display === 'block' ? 'none' : 'block';
});


const seedOptionsDiv = document.querySelector('.seed-options');
seeds.forEach(seed => {
    const seedOption = document.createElement('div');
    seedOption.textContent = seed;
    seedOption.addEventListener('click', function() {
        document.getElementById('selectedSeed').textContent = seed;
        seedOptions.style.display = 'none';
        updateUserInfo(); 
    });
    seedOptionsDiv.appendChild(seedOption);
});


const seasonButtons = document.querySelectorAll('.season-btn');
seasonButtons.forEach(button => {
    button.addEventListener('click', function() {
        const season = this.textContent;
        document.getElementById('selectedSeason').textContent = season;
        updateUserInfo(); 
    });
});


const squareMeterInput = document.getElementById('squareMeter');
squareMeterInput.addEventListener('input', function() {
    const squareMeter = this.value;
    document.getElementById('totalSquareMeter').textContent = squareMeter;
    updateUserInfo();
});


function updateUserInfo() {
    const selectedSeed = document.getElementById('selectedSeed').textContent;
    const selectedSeason = document.getElementById('selectedSeason').textContent;
    const totalSquareMeter = document.getElementById('totalSquareMeter').textContent;
    
    const userInfoElement = document.getElementById('userInfo');
    userInfoElement.innerHTML = `
        <h2>Kullanıcı Bilgileri</h2>
        <p>Seçilen Tohum: ${selectedSeed}</p>
        <p>Seçilen Mevsim: ${selectedSeason}</p>
        <p>Arazi Metrekare: ${totalSquareMeter} m²</p>
    `;
}