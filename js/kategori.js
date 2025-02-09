function showPMK(category) {
    const peraturanContainer = document.getElementById('peraturan-container');
    const peraturanWrapper = document.getElementById('peraturan-wrapper');
    const kategoriItems = document.querySelectorAll('.kategori-item');
    let peraturanItems = '';

    // Remove active class from all kategori items
    kategoriItems.forEach(item => item.classList.remove('active'));

    // Add active class to the clicked kategori item
    if (category) {
        document.querySelector(`.kategori-item[onclick="showPMK('${category}')"]`).classList.add('active');
    }

    // Set peraturan items based on category
    switch (category) {
        case 'sertifikat-digital':
            peraturanItems = `
                <div class="peraturan-item">
                    <h3>Peraturan Presiden Nomor 40 Tahun 2018 (Perpres 40/2018)</h3>
                </div>
                <div class="peraturan-item">
                    <h3>Peraturan Menteri Keuangan Nomor 56/PMK.03/2019 (PMK 56/2019)</h3>
                </div>
                <div class="peraturan-item">
                    <h3>Peraturan Menteri Keuangan Nomor 81 Tahun 2024 (PMK 81/2024)</h3>
                </div>
            `;
            break;
        case 'pkp':
            peraturanItems = `
                <div class="peraturan-item">
                    <h3>Peraturan Menteri Keuangan Nomor 126/PMK.03/2025</h3>
                </div>
                <div class="peraturan-item">
                    <h3>Peraturan Menteri Keuangan Nomor 127/PMK.03/2025</h3>
                </div>
            `;
            break;
        case 'pbb':
            peraturanItems = `
                <div class="peraturan-item">
                    <h3>Peraturan Menteri Keuangan Nomor 128/PMK.03/2025</h3>
                </div>
                <div class="peraturan-item">
                    <h3>Peraturan Menteri Keuangan Nomor 129/PMK.03/2025</h3>
                </div>
            `;
            break;
        case 'SPT-tahunan-badan':
            peraturanItems = `
                <div class="peraturan-item">
                    <h3>Undang-undang Nomor 7 Tahun 2021</h3>
                </div>
                <div class="peraturan-item">
                    <h3>Peraturan Presiden Nomor 40 Tahun 2018 (Perpres 40/2018)</h3>
                </div>
                <div class="peraturan-item">
                    <h3>Peraturan Mentri Keuangan Nomor 56/PMK.03/2019 (PMK 56/2019)</h3>
                </div>
                <div class="peraturan-item">
                    <h3>PMK Nomor 81 Tahun 2024</h3>
                </div>
            `;
            break;
        default:
            peraturanItems = `
                <div class="peraturan-item">
                    <h3>Peraturan yang terkait akan ditampilkan disini</h3>
                </div>
            `;
    }

    // Fade out the peraturan container
    peraturanContainer.classList.remove('show');

    // Update the peraturan items after the fade out transition
    setTimeout(() => {
        peraturanWrapper.innerHTML = peraturanItems;
        // Fade in the peraturan container
        peraturanContainer.classList.add('show');
    }, 500); // Match the transition duration
}

// Call showPMK with no arguments to display the default message on page load
showPMK();