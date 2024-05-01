// Block "klik kanan"
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

// Block "CTRL + F"
document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && (e.key === 'f' || e.key === 'F')) {
        e.preventDefault();
    }
});

// Block "CTRL + Shift + I"
document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
    }
});
