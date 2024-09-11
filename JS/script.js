document.getElementById('form-luas').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const alas = parseFloat(document.getElementById('alas').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value);

    if (alas > 0 && tinggi > 0) {
        const luas = 0.5 * alas * tinggi;
        document.getElementById('hasil-luas').textContent = `Luas Segitiga: ${luas}`;
    } else {
        document.getElementById('hasil-luas').textContent = 'Input tidak valid. Masukkan angka yang lebih besar dari 0.';
    }
});

document.getElementById('form-keliling').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const sisi1 = parseFloat(document.getElementById('sisi1').value);
    const sisi2 = parseFloat(document.getElementById('sisi2').value);
    const sisi3 = parseFloat(document.getElementById('sisi3').value);

    if (sisi1 > 0 && sisi2 > 0 && sisi3 > 0) {
        const keliling = sisi1 + sisi2 + sisi3;
        document.getElementById('hasil-keliling').textContent = `Keliling Segitiga: ${keliling}`;
    } else {
        document.getElementById('hasil-keliling').textContent = 'Input tidak valid. Masukkan angka yang lebih besar dari 0.';
    }
});

document.getElementById('reset-luas').addEventListener('click', function() {
    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('hasil-luas').textContent = '';
});

document.getElementById('reset-keliling').addEventListener('click', function() {
    document.getElementById('sisi1').value = '';
    document.getElementById('sisi2').value = '';
    document.getElementById('sisi3').value = '';
    document.getElementById('hasil-keliling').textContent = '';
});
