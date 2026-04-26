const video = document.getElementById('video');
const scanBtn = document.getElementById('scan-btn');
const scanLine = document.querySelector('.scan-line');
const statusText = document.getElementById('status-text');
const subText = document.getElementById('sub-text');

// Kamerayı başlat
async function initCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
    } catch (err) {
        statusText.innerText = "SİSTEM HATASI";
        subText.innerText = "Kamera erişimi reddedildi.";
    }
}

// Tarama Butonu Tetikleyici
scanBtn.addEventListener('click', () => {
    // Görsel efektleri başlat
    scanLine.style.display = 'block';
    scanBtn.style.display = 'none';
    
    statusText.innerText = "TARANIYOR...";
    statusText.style.color = "#00f2ff";
    subText.innerText = "Veri tabanıyla eşleştiriliyor...";

    // 4 Saniye simüle et (Normalde burada Firebase'e gidilir)
    setTimeout(() => {
        completeAction();
    }, 4500);
});

function completeAction() {
    scanLine.style.display = 'none';
    
    // Onay Efekti
    statusText.innerText = "ERİŞİM ONAYLANDI";
    statusText.style.color = "#00ff88";
    statusText.style.textShadow = "0 0 15px #00ff88";
    subText.innerText = "Hoş geldin, Enes Deva. Yetki seviyesi: Admin";
    
    // 3 saniye sonra butonu geri getir (veya başka sayfaya yönlendir)
    setTimeout(() => {
        // window.location.href = "dashboard.html"; // İstersen buraya yönlendirme ekleriz
    }, 3000);
}

// Sayfa yüklendiğinde kamerayı aç
initCamera();
