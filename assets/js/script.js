window.addEventListener('scroll', function() {
    const navbar = document.getElementById('mainNav');
    
    // Eğer sayfa 50 pikselden fazla aşağı kaydırıldıysa
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled'); 
    } else {
        // Sayfa en üstteyken tamamen şeffaf olur
        navbar.classList.remove('scrolled'); 
    }
});

const scrollTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', function() {
    // Sayfa 300px aşağı kaydırılınca butonu göster
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Formspree bağlantısını tetikleyen kod
window.formspree = window.formspree || function () { (formspree.q = formspree.q || []).push(arguments); };

// Form ID'sini ve HTML'deki formun ID'sini eşleştiriyoruz
formspree('initForm', { 
  formElement: '#iletisim-formu', 
  formId: 'xgaeaajv' // Burası senin Formspree ID'n
});