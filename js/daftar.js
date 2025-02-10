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
        case 'Objek-Pajak':
            peraturanItems = `
                <div class="peraturan-item">
                    <h3>Perpres Nomor 40 Tahun 2018</h3>
                </div>
                <div class="peraturan-item">
                    <h3>PMK Nomor 56/PMK.03/2019</h3>
                </div>
                <div class="peraturan-item" title="Ketentuan Perpajakan dalam Rangka Pelaksanaan Sistem Inti Administrasi Perpajakan.">
                    <h3>PMK Nomor 81 Tahun 2024</h3>
                </div>
            `;
            break;
        case 'Kode-Billing':
            peraturanItems = `
                <div class="peraturan-item">
                    <h3>Perpres Nomor 40 Tahun 2018</h3>
                </div>
                <div class="peraturan-item">
                    <h3>PMK Nomor 56/PMK.03/2019</h3>
                </div>
                <div class="peraturan-item">
                    <h3>PMK Nomor 81 Tahun 2024</h3>
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
        case 'PIP':
            peraturanItems = `
                <div class="peraturan-item">
                    <h3>Perpres Nomor 40 Tahun 2018</h3>
                </div>
                <div class="peraturan-item">
                    <h3>PMK Nomor 56/PMK.03/2019</h3>
                </div>
                <div class="peraturan-item">
                    <h3>PMK Nomor 81 Tahun 2024</h3>
                </div>
            `;
            break;
        case 'PJB':
            peraturanItems = `
                <div class="peraturan-item" title="Pembaruan Sistem Administrasi Perpajakan">
                    <h3>Perpres Nomor 40 Tahun 2018</h3>
                </div>
                <div class="peraturan-item" title="Pengadaan Sistem Informasi untuk Pembaruan Sistem Administrasi Perpajakan">
                    <h3>PMK Nomor 56/PMK.03/2019</h3>
                </div>
                <div class="peraturan-item" title="Ketentuan Perpajakan dalam Rangka Pelaksanaan Sistem Inti Administrasi Perpajakan.">
                    <h3>PMK Nomor 81 Tahun 2024</h3>
                </div>
            `
            break;

        case 'Update-WP':
            peraturanItems = `
                <div class="peraturan-item" title="Pembaruan Sistem Administrasi Perpajakan">
                    <h3>Perpres Nomor 40 Tahun 2018</h3>
                </div>
                <div class="peraturan-item" title="Pengadaan Sistem Informasi untuk Pembaruan Sistem Administrasi Perpajakan">
                    <h3>PMK Nomor 56/PMK.03/2019</h3>
                </div>
                <div class="peraturan-item" title="Ketentuan Perpajakan dalam Rangka Pelaksanaan Sistem Inti Administrasi Perpajakan.">
                    <h3>PMK Nomor 81 Tahun 2024</h3>
                </div>
            `
            break;

        case 'PP-PKP':
            peraturanItems = `
                <div class="peraturan-item" title="Pembaruan Sistem Administrasi Perpajakan">
                    <h3>Perpres Nomor 40 Tahun 2018</h3>
                </div>
                <div class="peraturan-item" title="Pengadaan Sistem Informasi untuk Pembaruan Sistem Administrasi Perpajakan">
                    <h3>PMK Nomor 56/PMK.03/2019</h3>
                </div>
                <div class="peraturan-item" title="Ketentuan Perpajakan dalam Rangka Pelaksanaan Sistem Inti Administrasi Perpajakan.">
                    <h3>PMK Nomor 81 Tahun 2024</h3>
                </div>
            `
            break;

        case 'delete-NPWP':
            peraturanItems = `
                <div class="peraturan-item" title="Pembaruan Sistem Administrasi Perpajakan">
                    <h3>Perpres Nomor 40 Tahun 2018</h3>
                </div>
                <div class="peraturan-item" title="Pengadaan Sistem Informasi untuk Pembaruan Sistem Administrasi Perpajakan">
                    <h3>PMK Nomor 56/PMK.03/2019</h3>
                </div>
                <div class="peraturan-item" title="Ketentuan Perpajakan dalam Rangka Pelaksanaan Sistem Inti Administrasi Perpajakan.">
                    <h3>PMK Nomor 81 Tahun 2024</h3>
                </div>
            `
            break;

        case 'PPSWP':
            peraturanItems = `
                <div class="peraturan-item" title="Pembaruan Sistem Administrasi Perpajakan">
                    <h3>Perpres Nomor 40 Tahun 2018</h3>
                </div>
                <div class="peraturan-item" title="Pengadaan Sistem Informasi untuk Pembaruan Sistem Administrasi Perpajakan">
                    <h3>PMK Nomor 56/PMK.03/2019</h3>
                </div>
                <div class="peraturan-item" title="Ketentuan Perpajakan dalam Rangka Pelaksanaan Sistem Inti Administrasi Perpajakan.">
                    <h3>PMK Nomor 81 Tahun 2024</h3>
                </div>
            `
            break;

        case 'P-PKP':
            peraturanItems = `
                <div class="peraturan-item" title="Pembaruan Sistem Administrasi Perpajakan">
                    <h3>Perpres Nomor 40 Tahun 2018</h3>
                </div>
                <div class="peraturan-item" title="Pengadaan Sistem Informasi untuk Pembaruan Sistem Administrasi Perpajakan">
                    <h3>PMK Nomor 56/PMK.03/2019</h3>
                </div>
                <div class="peraturan-item" title="Ketentuan Perpajakan dalam Rangka Pelaksanaan Sistem Inti Administrasi Perpajakan.">
                    <h3>PMK Nomor 81 Tahun 2024</h3>
                </div>
            `
            break;

        case 'update-dauwp':
            peraturanItems = `
                <div class="peraturan-item" title="Pembaruan Sistem Administrasi Perpajakan">
                    <h3>Perpres Nomor 40 Tahun 2018</h3>
                </div>
                <div class="peraturan-item" title="Pengadaan Sistem Informasi untuk Pembaruan Sistem Administrasi Perpajakan">
                    <h3>PMK Nomor 56/PMK.03/2019</h3>
                </div>
                <div class="peraturan-item" title="Ketentuan Perpajakan dalam Rangka Pelaksanaan Sistem Inti Administrasi Perpajakan.">
                    <h3>PMK Nomor 81 Tahun 2024</h3>
                </div>
            `
            break;

        case 'lapor-spt-pegawai':
            peraturanItems = `
                <div class="peraturan-item" title="Pembaruan Sistem Administrasi Perpajakan">
                    <h3>Perpres Nomor 40 Tahun 2018</h3>
                </div>
                <div class="peraturan-item" title="Pengadaan Sistem Informasi untuk Pembaruan Sistem Administrasi Perpajakan">
                    <h3>PMK Nomor 56/PMK.03/2019</h3>
                </div>
                <div class="peraturan-item" title="Ketentuan Perpajakan dalam Rangka Pelaksanaan Sistem Inti Administrasi Perpajakan.">
                    <h3>PMK Nomor 81 Tahun 2024</h3>
                </div>
            `
            break;

        case 'lapor-spt-pribadi':
            peraturanItems = `
                <div class="peraturan-item" title="Pembaruan Sistem Administrasi Perpajakan">
                    <h3>Perpres Nomor 40 Tahun 2018</h3>
                </div>
                <div class="peraturan-item" title="Pengadaan Sistem Informasi untuk Pembaruan Sistem Administrasi Perpajakan">
                    <h3>PMK Nomor 56/PMK.03/2019</h3>
                </div>
                <div class="peraturan-item" title="Ketentuan Perpajakan dalam Rangka Pelaksanaan Sistem Inti Administrasi Perpajakan.">
                    <h3>PMK Nomor 81 Tahun 2024</h3>
                </div>
            `
            break;

        case 'bukti-potong-Unifikasi':
            peraturanItems = `
                <div class="peraturan-item" title="Pembaruan Sistem Administrasi Perpajakan">
                    <h3>Perpres Nomor 40 Tahun 2018</h3>
                </div>
                <div class="peraturan-item" title="Pengadaan Sistem Informasi untuk Pembaruan Sistem Administrasi Perpajakan">
                    <h3>PMK Nomor 56/PMK.03/2019</h3>
                </div>
                <div class="peraturan-item" title="Ketentuan Perpajakan dalam Rangka Pelaksanaan Sistem Inti Administrasi Perpajakan.">
                    <h3>PMK Nomor 81 Tahun 2024</h3>
                </div>
            `
            break;

        case 'pwpop':
            peraturanItems = `
                <div class="peraturan-item" title="Pembaruan Sistem Administrasi Perpajakan">
                    <h3>Perpres Nomor 40 Tahun 2018</h3>
                </div>
                <div class="peraturan-item" title="Pengadaan Sistem Informasi untuk Pembaruan Sistem Administrasi Perpajakan">
                    <h3>PMK Nomor 56/PMK.03/2019</h3>
                </div>
                <div class="peraturan-item" title="Ketentuan Perpajakan dalam Rangka Pelaksanaan Sistem Inti Administrasi Perpajakan.">
                    <h3>PMK Nomor 81 Tahun 2024</h3>
                </div>
            `
            break;

        case 'SPT-PPH-21':
            peraturanItems = `
                <div class="peraturan-item" title="Pembaruan Sistem Administrasi Perpajakan">
                    <h3>Perpres Nomor 40 Tahun 2018</h3>
                </div>
                <div class="peraturan-item" title="Pengadaan Sistem Informasi untuk Pembaruan Sistem Administrasi Perpajakan">
                    <h3>PMK Nomor 56/PMK.03/2019</h3>
                </div>
                <div class="peraturan-item" title="Ketentuan Perpajakan dalam Rangka Pelaksanaan Sistem Inti Administrasi Perpajakan.">
                    <h3>PMK Nomor 81 Tahun 2024</h3>
                </div>
            `
            break;

        case 'PDIWP':
            peraturanItems = `
                <div class="peraturan-item" title="Pembaruan Sistem Administrasi Perpajakan">
                    <h3>Perpres Nomor 40 Tahun 2018</h3>
                </div>
                <div class="peraturan-item" title="Pengadaan Sistem Informasi untuk Pembaruan Sistem Administrasi Perpajakan">
                    <h3>PMK Nomor 56/PMK.03/2019</h3>
                </div>
                <div class="peraturan-item" title="Ketentuan Perpajakan dalam Rangka Pelaksanaan Sistem Inti Administrasi Perpajakan.">
                    <h3>PMK Nomor 81 Tahun 2024</h3>
                </div>
            `
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