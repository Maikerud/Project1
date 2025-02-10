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
        case 'Perpres-40-2018':
            peraturanItems = `
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('sertifikat-digital')">
                    <h3>Akses Sertifikat Digital, PKP, PBB, Data Status Update, Ebupot, Efaktur</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('SPT-tahunan-badan')">
                    <h3>SPT Tahunan & PPh Badan</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('Objek-Pajak')">
                    <h3>Objek Pajak</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('Kode-Billing')">
                    <h3>Kode Billing</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('PIP')">
                    <h3>Pendaftaran Instansi Pemerintah</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('PJB')">
                    <h3>Pendaftaran Wajib Pajak Badan</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('Update-WP')">
                    <h3>Pendaftaran, Perubahan dan Penghapusan Wakil/Kuasa Wajib Pajak</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('PP-PKP')">
                    <h3>Pencabutan Pengukuhan PKP</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('delete-NPWP')">
                    <h3>Penghapusan NPWP</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('PPSWP')">
                    <h3>Perubahan Status Wajib Pajak</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('P-PKP')">
                    <h3>Pengukuhan PKP</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('update-dauwp')">
                    <h3>Perubahan Data Alamat Utama Wajib Pajak</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('lapor-spt-pegawai')">
                    <h3>Lapor SPT Tahunan PPh bagi Pegawai</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('lapor-spt-pribadi')">
                    <h3>Lapor SPT tahunan PPh Pribadi</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('bukti-potong-Unifikasi')">
                    <h3>Bukti Potong Unifikasi</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('pwpop')">
                    <h3>Pendaftaran Wajib Pajak Orang Pribadi</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('SPT-PPH-21')">
                    <h3>Pembuatan SPT Masa PPh Pasal 21</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('PDIWP')">
                    <h3>Perubahan Data Identitas Wajib Pajak</h3>
                </a>
            `;
            break;

        case 'PMK-56-2019':
            peraturanItems = `
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('sertifikat-digital')">
                    <h3>Akses Sertifikat Digital, PKP, PBB, Data Status Update, Ebupot, Efaktur</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('SPT-tahunan-badan')">
                    <h3>SPT Tahunan & PPh Badan</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('Objek-Pajak')">
                    <h3>Objek Pajak</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('Kode-Billing')">
                    <h3>Kode Billing</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('PIP')">
                    <h3>Pendaftaran Instansi Pemerintah</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('PJB')">
                    <h3>Pendaftaran Wajib Pajak Badan</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('Update-WP')">
                    <h3>Pendaftaran, Perubahan dan Penghapusan Wakil/Kuasa Wajib Pajak</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('PP-PKP')">
                    <h3>Pencabutan Pengukuhan PKP</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('delete-NPWP')">
                    <h3>Penghapusan NPWP</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('PPSWP')">
                    <h3>Perubahan Status Wajib Pajak</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('P-PKP')">
                    <h3>Pengukuhan PKP</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('update-dauwp')">
                    <h3>Perubahan Data Alamat Utama Wajib Pajak</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('lapor-spt-pegawai')">
                    <h3>Lapor SPT Tahunan PPh bagi Pegawai</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('lapor-spt-pribadi')">
                    <h3>Lapor SPT tahunan PPh Pribadi</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('bukti-potong-Unifikasi')">
                    <h3>Bukti Potong Unifikasi</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('pwpop')">
                    <h3>Pendaftaran Wajib Pajak Orang Pribadi</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('SPT-PPH-21')">
                    <h3>Pembuatan SPT Masa PPh Pasal 21</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('PDIWP')">
                    <h3>Perubahan Data Identitas Wajib Pajak</h3>
                </a>
            `;
            break;

        case 'PMK-81-2024':
            peraturanItems = `
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('sertifikat-digital')">
                    <h3>Akses Sertifikat Digital, PKP, PBB, Data Status Update, Ebupot, Efaktur</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('SPT-tahunan-badan')">
                    <h3>SPT Tahunan & PPh Badan</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('Objek-Pajak')">
                    <h3>Objek Pajak</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('Kode-Billing')">
                    <h3>Kode Billing</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('PIP')">
                    <h3>Pendaftaran Instansi Pemerintah</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('PJB')">
                    <h3>Pendaftaran Wajib Pajak Badan</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('Update-WP')">
                    <h3>Pendaftaran, Perubahan dan Penghapusan Wakil/Kuasa Wajib Pajak</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('PP-PKP')">
                    <h3>Pencabutan Pengukuhan PKP</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('delete-NPWP')">
                    <h3>Penghapusan NPWP</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('PPSWP')">
                    <h3>Perubahan Status Wajib Pajak</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('P-PKP')">
                    <h3>Pengukuhan PKP</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('update-dauwp')">
                    <h3>Perubahan Data Alamat Utama Wajib Pajak</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('lapor-spt-pegawai')">
                    <h3>Lapor SPT Tahunan PPh bagi Pegawai</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('lapor-spt-pribadi')">
                    <h3>Lapor SPT tahunan PPh Pribadi</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('bukti-potong-Unifikasi')">
                    <h3>Bukti Potong Unifikasi</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('pwpop')">
                    <h3>Pendaftaran Wajib Pajak Orang Pribadi</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('SPT-PPH-21')">
                    <h3>Pembuatan SPT Masa PPh Pasal 21</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('PDIWP')">
                    <h3>Perubahan Data Identitas Wajib Pajak</h3>
                </a>
            `;
            break;
            
        case 'UU-7-2021':
            peraturanItems = `
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('SPT-tahunan-badan')">
                    <h3>SPT Tahunan & PPh Badan</h3>
                </a>
            `;
            break;
      
        default:
            peraturanItems = `
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('sertifikat-digital')">
                    <h3>Akses Sertifikat Digital, PKP, PBB, Data Status Update, Ebupot, Efaktur</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('SPT-tahunan-badan')">
                    <h3>SPT Tahunan & PPh Badan</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('Objek-Pajak')">
                    <h3>Objek Pajak</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('Kode-Billing')">
                    <h3>Kode Billing</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('PIP')">
                    <h3>Pendaftaran Instansi Pemerintah</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('PJB')">
                    <h3>Pendaftaran Wajib Pajak Badan</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('Update-WP')">
                    <h3>Pendaftaran, Perubahan dan Penghapusan Wakil/Kuasa Wajib Pajak</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('PP-PKP')">
                    <h3>Pencabutan Pengukuhan PKP</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('delete-NPWP')">
                    <h3>Penghapusan NPWP</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('PPSWP')">
                    <h3>Perubahan Status Wajib Pajak</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('P-PKP')">
                    <h3>Pengukuhan PKP</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('update-dauwp')">
                    <h3>Perubahan Data Alamat Utama Wajib Pajak</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('lapor-spt-pegawai')">
                    <h3>Lapor SPT Tahunan PPh bagi Pegawai</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('lapor-spt-pribadi')">
                    <h3>Lapor SPT tahunan PPh Pribadi</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('bukti-potong-Unifikasi')">
                    <h3>Bukti Potong Unifikasi</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('pwpop')">
                    <h3>Pendaftaran Wajib Pajak Orang Pribadi</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('SPT-PPH-21')">
                    <h3>Pembuatan SPT Masa PPh Pasal 21</h3>
                </a>
                <a href="#peraturan-container" class="kategori-item" onclick="showPMK('PDIWP')">
                    <h3>Perubahan Data Identitas Wajib Pajak</h3>
                </a>           
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