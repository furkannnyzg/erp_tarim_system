const navigation = document.querySelector('.drawer-content');
const navigation2 = document.querySelector('.drawer-header');
const iframeContainer = document.querySelector('.iframe-container');
document.querySelector('.navbar-toggler').onclick = function() {
    this.classList.toggle('active');
    navigation.classList.toggle('active');
    navigation2.classList.toggle('active');
    iframeContainer.classList.toggle('active');
};


document.querySelectorAll('.drawer-content ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const url = this.getAttribute('data-url');
        iframe.classList.add('slide-out');
        setTimeout(() => {
            iframe.src = url;
            iframe.classList.remove('slide-out');
            iframe.classList.add('slide-in');
            setTimeout(() => {
                iframe.classList.remove('slide-in');
            }, 800);
        }, 800);
    });
});


// İframe'i seç
var iframe = document.getElementById('iframe');

// İframe'in boyutunu küçültmek için bir fonksiyon oluştur
function kucultIframe() {
    iframe.style.width = '1465px'; // İframe'in genişliğini küçült
    iframe.style.height = '699px'; // İframe'in yüksekliğini küçült
}

// İframe'i küçült fonksiyonunu çağır
kucultIframe();

