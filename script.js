const themeOptions = document.querySelectorAll('.theme-option');
const fontOptions = document.querySelectorAll('.font-option');
const body = document.body;

// Verifica preferência salva de tema
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme !== 'light') {
    body.classList.add(savedTheme + '-theme');
}

// Verifica preferência salva de fonte
const savedFont = localStorage.getItem('font') || 'Poppins';
body.style.fontFamily = `"${savedFont}", sans-serif`;

themeOptions.forEach(option => {
    option.addEventListener('click', () => {
        // Remove todos os temas adicionais
        body.classList.remove('dark-theme', 'sepia-theme', 'ocean-theme');
        
        const selectedTheme = option.getAttribute('data-theme');
        if (selectedTheme !== 'light') {
            body.classList.add(selectedTheme + '-theme');
        }
        localStorage.setItem('theme', selectedTheme);
    });
});

fontOptions.forEach(option => {
    option.addEventListener('click', () => {
        const selectedFont = option.getAttribute('data-font');
        body.style.fontFamily = `"${selectedFont}", sans-serif`;
        localStorage.setItem('font', selectedFont);
    });
});
