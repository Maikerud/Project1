function showDeskripsi(category) {
    const deskripsiContainer = document.getElementById('deskripsi-container');
    const deskripsiWrapper = document.getElementById('deskripsi-wrapper');
    const kategoriItems = document.querySelectorAll('.kategori-item');
    
    let description = '';

    // Remove active class from all kategori items
    kategoriItems.forEach(item => item.classList.remove('active'));

    // Add active class to the clicked kategori item
    if (category) {
        document.querySelector(`.kategori-item[onclick="showPMK('${category}'); showDeskripsi('${category}')"]`).classList.add('active');
    }

    // Set description based on category
    switch (category) {
        case 'sertifikat-digital':
            description = `
                <p>Pemerintah telah mengeluarkan peraturan baru terkait Coretax untuk memudahkan pelaksanaan hak dan kewajiban perpajakan. Panduan ini mencakup akses Sertifikat Elektronik, Pengusaha Kena Pajak (PKP), Pajak Bumi dan Bangunan (PBB), Data Status Update, Ebupot, dan Efaktur.</p>
                <p>Sertifikat Elektronik adalah sertifikat berbasis elektronik yang berisi tanda tangan elektronik dan identitas yang menunjukkan status hukum pihak-pihak yang terlibat dalam transaksi elektronik. Sertifikat ini diterbitkan oleh penyelenggara sertifikasi elektronik.</p>
                <p>PKP (Pengusaha Kena Pajak) adalah pengusaha yang melakukan penyerahan barang kena pajak dan/atau penyerahan jasa kena pajak yang dikenai pajak berdasarkan Undang-Undang Pajak Pertambahan Nilai (UU PPN).</p>
                <p>PBB (Pajak Bumi dan Bangunan) adalah pajak atas bumi dan bangunan yang diatur dalam Undang-Undang Pajak Bumi dan Bangunan (UU PBB), kecuali PBB untuk wilayah perdesaan dan perkotaan.</p>
                <p>Data Status Update adalah fitur yang memungkinkan wajib pajak untuk memperbarui informasi terkait status perpajakan mereka secara real-time, memastikan data yang akurat dan terkini dalam sistem perpajakan.</p>
                <p>Ebupot (Elektronik Bukti Pemotongan) adalah sistem elektronik yang digunakan untuk membuat, mengelola, dan melaporkan bukti pemotongan pajak penghasilan secara digital, sehingga memudahkan proses administrasi dan meningkatkan akurasi data.</p>
                <p>Efaktur adalah faktur pajak elektronik yang diterbitkan oleh PKP melalui sistem elektronik yang disediakan oleh Direktorat Jenderal Pajak, bertujuan untuk meningkatkan efisiensi dan akurasi dalam pelaporan PPN serta mengurangi potensi kesalahan dan kecurangan.</p>
                <p>Dengan memahami dan memanfaatkan panduan ini, wajib pajak dapat lebih mudah memenuhi kewajiban perpajakan mereka sesuai dengan peraturan yang berlaku, serta memanfaatkan teknologi untuk meningkatkan efisiensi dan akurasi dalam administrasi perpajakan.</p>
            `;
            break;
        case 'Objek-Pajak':
            description =  `
                <p>Pemerintah telah mengeluarkan aturan baru terkait Coretax untuk menyederhanakan pelaksanaan hak dan kewajiban perpajakan, khususnya dalam hal pelaporan Surat Pemberitahuan Objek Pajak (SPOP). Panduan ini menjelaskan empat istilah utama yang berkaitan dengan Pajak Bumi dan Bangunan (PBB) serta pelaporannya. Pertama, Pajak Bumi dan Bangunan (PBB P5L) adalah pajak yang dikenakan atas bumi dan bangunan, sebagaimana diatur dalam Undang-Undang Pajak Bumi dan Bangunan, kecuali untuk PBB perdesaan dan perkotaan. Kedua, Objek Pajak Pajak Bumi dan Bangunan mencakup bumi dan/atau bangunan yang menjadi objek pajak di berbagai sektor, seperti perkebunan, perhutanan, pertambangan minyak dan gas bumi, pertambangan panas bumi, pertambangan mineral atau batubara, serta sektor lainnya.</p>
                <p>Ketiga, Surat Pemberitahuan Objek Pajak (SPOP) adalah dokumen yang digunakan oleh Wajib Pajak (WP) untuk melaporkan data objek pajak sesuai ketentuan Undang-Undang Pajak Bumi dan Bangunan. SPOP ini harus dilengkapi dengan lampiran yang menjadi bagian tidak terpisahkan dari surat pemberitahuan tersebut. Keempat, Surat Pemberitahuan Objek Pajak Elektronik adalah versi elektronik dari SPOP yang memungkinkan pelaporan dilakukan secara digital, sesuai dengan perkembangan teknologi dan tuntutan efisiensi dalam administrasi perpajakan.</p>
                <p>Dengan adanya panduan ini, diharapkan wajib pajak dapat lebih memahami kewajiban pelaporan SPOP dan objek pajak yang terkait dengan PBB. Hal ini juga bertujuan untuk memastikan kepatuhan pajak dan memudahkan proses administrasi perpajakan melalui pemanfaatan teknologi elektronik.</p>
            `;
            break;
        case 'Kode-Billing':
            description = `
                <p>Dalam konteks perpajakan, terdapat beberapa istilah penting yang perlu dipahami. Wajib Pajak adalah individu atau badan yang memiliki kewajiban perpajakan sesuai dengan ketentuan perundang-undangan. Masa Pajak merujuk pada periode waktu tertentu yang digunakan sebagai dasar dalam perhitungan, penyetoran, dan pelaporan pajak terutang. Nomor Pokok Wajib Pajak (NPWP) merupakan identitas resmi yang diberikan kepada Wajib Pajak untuk keperluan administrasi perpajakan. Selain itu, Nomor Induk Kependudukan (NIK) juga dapat digunakan sebagai identitas wajib pajak bagi individu, mengingat NIK bersifat unik dan melekat pada setiap penduduk Indonesia.</p>

                <p>Sistem Coretax diimplementasikan untuk meningkatkan efisiensi dan transparansi dalam administrasi perpajakan. Dengan adanya digitalisasi dalam pengelolaan pajak, pemerintah berupaya mempermudah proses pelaporan dan pembayaran pajak, mengurangi potensi kesalahan administrasi, serta memastikan kepatuhan pajak yang lebih baik. Hal ini sejalan dengan upaya modernisasi perpajakan yang bertujuan untuk menciptakan sistem yang lebih inklusif, terintegrasi, dan mudah diakses oleh seluruh lapisan masyarakat.</p>
            `
            break;

        case 'SPT-tahunan-badan':
            description = `
            <p>Pemerintah telah menetapkan ketentuan terbaru mengenai Coretax untuk menyederhanakan pelaksanaan hak dan kewajiban perpajakan. Salah satu fokus dalam panduan ini adalah pelaporan Surat Pemberitahuan Tahunan (SPT Tahunan) PPh Badan dengan menggunakan tarif umum. Panduan ini menjelaskan tiga istilah utama yang berkaitan dengan pelaporan pajak badan. Pertama, Badan didefinisikan sebagai sekumpulan orang dan/atau modal yang membentuk suatu kesatuan, baik yang melakukan usaha maupun tidak. Badan ini mencakup berbagai bentuk entitas seperti perseroan terbatas, perseroan komanditer, badan usaha milik negara (BUMN), badan usaha milik daerah (BUMD), firma, koperasi, yayasan, organisasi massa, organisasi sosial politik, serta bentuk usaha tetap dan kantor perwakilan perusahaan asing.</p>

            <p>Kedua, Surat Pemberitahuan Tahunan (SPT Tahunan) adalah dokumen yang wajib disampaikan oleh wajib pajak untuk melaporkan penghasilan dan kewajiban pajak dalam suatu Tahun Pajak atau Bagian Tahun Pajak. Ketiga, Tarif Umum adalah tarif pajak yang berlaku untuk penghasilan kena pajak bagi wajib pajak badan dalam negeri dan bentuk usaha tetap. Pada tahun pajak 2022, tarif umum ini ditetapkan sebesar 22%.</p>

            <p>Dengan adanya panduan ini, diharapkan wajib pajak badan dapat lebih memahami kewajiban pelaporan SPT Tahunan PPh Badan dan penerapan tarif umum yang berlaku. Hal ini juga bertujuan untuk meningkatkan kepatuhan pajak dan memastikan transparansi dalam pelaksanaan kewajiban perpajakan.</p>
        `;
            break;

        case 'PIP':
            description = `
                <p>Berdasarkan PMK 81/2024, instansi pemerintah yang wajib terdaftar dalam aplikasi Coretax mencakup Instansi Pemerintah Pusat, Instansi Pemerintah Daerah, dan Instansi Pemerintah Desa. Instansi Pemerintah Pusat meliputi satuan kerja di kementerian, lembaga pemerintah nonkementerian, serta badan layanan umum yang bertanggung jawab atas penggunaan Anggaran Pendapatan dan Belanja Negara (APBN) dan wajib menyusun laporan keuangan sesuai standar akuntansi pemerintahan. Instansi Pemerintah Daerah mencakup satuan kerja perangkat daerah di tingkat provinsi maupun kabupaten/kota, yang mengelola Anggaran Pendapatan dan Belanja Daerah (APBD) dengan kewajiban akuntansi yang sama. Sementara itu, Instansi Pemerintah Desa bertanggung jawab dalam penggunaan Anggaran Pendapatan dan Belanja Desa (APBDes) serta wajib menyelenggarakan akuntansi yang sesuai dengan standar yang berlaku.</p>
                <p>Dengan diterapkannya Coretax dalam pengelolaan administrasi perpajakan instansi pemerintah, diharapkan proses pencatatan dan pelaporan pajak menjadi lebih transparan dan akurat. Integrasi ini juga memungkinkan efisiensi dalam pengelolaan anggaran negara serta memastikan kepatuhan terhadap regulasi perpajakan yang telah ditetapkan. Melalui digitalisasi sistem perpajakan, Coretax mendukung modernisasi administrasi keuangan negara agar lebih akuntabel, sistematis, dan mudah diakses oleh setiap instansi yang berkewajiban.</p>
            `;
            break;

        case 'PJB':
            description = `
                <p>Dalam sistem perpajakan ini, terdapat beberapa istilah penting yang perlu dipahami. Wajib Pajak adalah individu atau badan yang memiliki kewajiban perpajakan sesuai dengan regulasi yang berlaku. Badan mencakup berbagai jenis entitas, baik yang menjalankan usaha maupun yang tidak, seperti perseroan terbatas, koperasi, yayasan, organisasi sosial politik, serta badan usaha milik negara dan daerah. Pendaftaran dan pengelolaan perpajakan badan ini dilakukan melalui Portal Wajib Pajak, yaitu platform digital yang disediakan oleh Direktorat Jenderal Pajak untuk membantu wajib pajak dalam memenuhi hak dan kewajibannya secara elektronik.</p>
                <p>Setiap Wajib Pajak memiliki Akun Wajib Pajak, yang berfungsi sebagai tempat penyimpanan dan pengelolaan dokumen perpajakan yang terhubung dengan Nomor Pokok Wajib Pajak (NPWP). NPWP digunakan sebagai identitas resmi dalam administrasi perpajakan. Selain itu, Nomor Induk Kependudukan (NIK) juga berperan sebagai identitas unik yang dapat digunakan untuk mengakses layanan perpajakan bagi individu yang terdaftar sebagai penduduk Indonesia.</p>
                <p>Dengan diterapkannya sistem digital seperti Coretax, pendaftaran dan pengelolaan pajak badan menjadi lebih transparan, aman, dan mudah diakses. Digitalisasi ini tidak hanya membantu badan usaha dalam menyusun laporan keuangan dan melaksanakan kewajiban perpajakan, tetapi juga memastikan kepatuhan terhadap peraturan yang berlaku serta meningkatkan efisiensi dalam administrasi perpajakan nasional.</p>
            `
            break;

        case 'Update-WP':
            description = `
                <p>Dalam sistem perpajakan digital ini, terdapat beberapa istilah kunci yang perlu dipahami. Wajib Pajak mengacu pada individu atau badan yang memiliki kewajiban perpajakan sesuai dengan peraturan yang berlaku. Untuk mempermudah administrasi perpajakan, Direktorat Jenderal Pajak menyediakan <b>Portal Wajib Pajak</b>, yaitu platform elektronik yang memungkinkan wajib pajak mengelola hak dan kewajibannya secara daring. Setiap Wajib Pajak memiliki <b>Akun Wajib Pajak</b>, yang digunakan untuk menyimpan, mengelola, dan menyampaikan dokumen perpajakan secara elektronik dengan identifikasi berdasarkan <b>Nomor Pokok Wajib Pajak (NPWP)</b>.</p>
                <p>Sebagai bagian dari digitalisasi administrasi perpajakan, sistem Coretax juga mengandalkan penggunaan Dokumen Elektronik, yang mencakup berbagai bentuk informasi digital, seperti tulisan, gambar, suara, atau simbol yang memiliki arti tertentu dalam transaksi perpajakan. Untuk menjamin keabsahan dokumen tersebut, digunakan Tanda Tangan Elektronik, yang berfungsi sebagai alat verifikasi dan autentikasi identitas dalam transaksi pajak. Selain itu, terdapat Kode Otorisasi, yang merupakan alat tambahan yang dikeluarkan oleh Direktorat Jenderal Pajak guna memastikan keamanan dalam penggunaan <b>Tanda Tangan Elektronik</b> yang tidak tersertifikasi.</p>
                <p>Dengan diterapkannya sistem ini, pendaftaran Wakil atau Kuasa Wajib Pajak menjadi lebih praktis, transparan, dan aman. Langkah ini juga mendukung efisiensi administrasi perpajakan dengan memanfaatkan teknologi digital untuk memastikan keakuratan data, mengurangi risiko kesalahan, serta meningkatkan kepatuhan terhadap regulasi perpajakan yang berlaku.</p>
            `
            break;

        case 'PP-PKP':
            description = `
                <p><b>Pencabutan pengukuhan PKP</b> dapat diajukan oleh PKP sendiri dengan mengajukan permohonan ke KPP tempat pengukuhannya dilakukan. Selain itu, pencabutan juga dapat dilakukan secara jabatan berdasarkan hasil penelitian administrasi oleh DJP terhadap PKP yang memenuhi beberapa kriteria tertentu, seperti:</p>
                <ol>
                    <li>PKP nonaktif, yaitu Wajib Pajak yang sudah tidak aktif secara administratif.</li>
                    <li>PKP dengan akses faktur pajak dinonaktifkan dan tidak melakukan klarifikasi dalam waktu 30 hari atau klarifikasinya ditolak.</li>
                    <li>PKP yang menyalahgunakan atau menggunakan pengukuhan PKP tanpa hak, berdasarkan putusan pengadilan yang telah berkekuatan hukum tetap.</li>
                    <li>PKP orang pribadi yang meninggal dunia tanpa meninggalkan warisan.</li>
                    <li>PKP bentuk usaha tetap yang telah menghentikan kegiatan usahanya di Indonesia.</li>
                    <li>PKP yang memenuhi keadaan tertentu sebagaimana ditetapkan oleh Direktorat Jenderal Pajak (DJP).</li>
                </ol>
                <p>Panduan ini mencakup tahapan lengkap, mulai dari cara mengakses Coretax hingga langkah-langkah permohonan pencabutan pengukuhan PKP. Selain itu, untuk memudahkan pengguna, Coretax saat ini tersedia dalam dua bahasa, yaitu Bahasa Indonesia dan Bahasa Inggris, meskipun ilustrasi gambar dalam panduan ini disajikan dalam Bahasa Inggris.</p>
            `
            break;

        case 'delete-NPWP':
            description = `
                <p>Pemerintah telah menetapkan kebijakan terbaru terkait Coretax untuk menyederhanakan pengelolaan hak dan kewajiban perpajakan, termasuk proses penghapusan Nomor Pokok Wajib Pajak (NPWP) dari administrasi Direktorat Jenderal Pajak (DJP). Penghapusan NPWP dapat diajukan oleh berbagai kategori Wajib Pajak sesuai dengan ketentuan yang berlaku. Untuk Wajib Pajak Orang Pribadi, NPWP dapat dihapus jika yang bersangkutan telah meninggal dunia tanpa meninggalkan warisan, telah meninggalkan Indonesia secara permanen, atau memiliki lebih dari satu NPWP. Sementara itu, bagi Wajib Pajak Warisan Belum Terbagi, penghapusan NPWP hanya dapat dilakukan setelah warisan selesai dibagi kepada ahli waris. Untuk Wajib Pajak Badan, penghapusan NPWP dapat diajukan jika badan usaha tersebut telah dilikuidasi atau dibubarkan, bentuk usaha tetap telah menghentikan kegiatannya di Indonesia, atau badan usaha memiliki lebih dari satu NPWP. Adapun bagi Wajib Pajak Instansi Pemerintah, NPWP dapat dihapus jika instansi tersebut tidak lagi memenuhi persyaratan sebagai pemotong atau pemungut pajak atau jika memiliki lebih dari satu NPWP. Panduan ini memberikan langkah-langkah praktis dalam mengajukan penghapusan NPWP melalui Coretax, termasuk persyaratan dokumen yang harus disiapkan dan prosedur yang harus diikuti. Dengan sistem digital ini, proses penghapusan NPWP menjadi lebih efisien, transparan, dan sesuai dengan ketentuan perpajakan yang berlaku.</p>
            `
            break;

        case 'PPSWP':
            description = `
                <p>Pemerintah telah menetapkan ketentuan terbaru mengenai Coretax untuk menyederhanakan pelaksanaan hak dan kewajiban perpajakan. Salah satu aspek penting yang diatur adalah panduan pengajuan perubahan status Wajib Pajak melalui aplikasi Coretax. Status Wajib Pajak berkaitan dengan Nomor Pokok Wajib Pajak (NPWP), yaitu nomor identifikasi yang diberikan kepada Wajib Pajak sebagai sarana administrasi perpajakan dan identitas dalam melaksanakan hak serta kewajiban perpajakan.</p>
                <p>Dalam konteks ini, Wajib Pajak Nonaktif merujuk pada Wajib Pajak yang tidak lagi memenuhi persyaratan subjektif dan/atau objektif, namun NPWP-nya belum dihapus dari administrasi Direktorat Jenderal Pajak (DJP). Melalui aplikasi Coretax, Wajib Pajak dapat mengajukan permohonan perubahan status, seperti penonaktifan atau pengaktifan kembali NPWP, dengan prosedur yang efisien dan transparan. Panduan lengkap mengenai proses ini tersedia dalam Buku Manual Coretax 2024 – Perubahan Status Wajib Pajak, yang dapat diakses melalui situs resmi DJP.</p>
            `
            break;

        case 'P-PKP':
            description = `
                <p>Pemerintah telah menetapkan ketentuan terbaru terkait Coretax untuk menyederhanakan pelaksanaan hak dan kewajiban perpajakan. Artikel ini akan membahas tata cara pengajuan pengukuhan Pengusaha Kena Pajak (PKP) melalui aplikasi Coretax. PKP adalah pengusaha yang melakukan penyerahan Barang Kena Pajak (BKP) dan/atau Jasa Kena Pajak (JKP) yang dikenai pajak berdasarkan Undang-Undang Pajak Pertambahan Nilai (UU PPN). Dengan implementasi Coretax, Direktorat Jenderal Pajak (DJP) mempermudah proses permohonan pengukuhan PKP melalui sistem digital yang lebih cepat, efisien, dan transparan. Sebelum adanya Coretax, proses pengukuhan PKP dilakukan secara manual, di mana Wajib Pajak harus mengunjungi Kantor Pelayanan Pajak (KPP) dan menyerahkan dokumen secara fisik, yang sering kali memakan waktu lama. Namun, dengan Coretax, proses ini menjadi lebih sederhana dan cepat, memberikan kemudahan bagi Wajib Pajak dalam mengajukan permohonan.</p>
                <p>Salah satu keunggulan Coretax adalah pemberitahuan hasil pengajuan secara real-time. Setelah permohonan diajukan, keputusan persetujuan atau penolakan akan dikirimkan langsung ke email serta akun Wajib Pajak di platform Coretax, sehingga pengguna mendapatkan transparansi dan kepastian waktu. DJP juga menyediakan panduan langkah demi langkah dalam Buku Manual Coretax 2024, yang dapat diakses melalui situs resmi DJP, guna membantu Wajib Pajak memahami proses pengajuan pengukuhan PKP secara lebih detail. Selain itu, tersedia video tutorial yang menjelaskan cara mengajukan pengukuhan PKP secara online melalui aplikasi Coretax, sehingga Wajib Pajak dapat dengan mudah mengikuti setiap tahapan yang diperlukan. Dengan adanya Coretax, proses administrasi perpajakan menjadi lebih modern dan efisien, mendukung digitalisasi layanan pajak di Indonesia.</p>
            
                <div class="source">
                    <p>Sumber: <a href="https://pajak.io/blog/panduan-permohonan-pengukuhan-pkp-coretax/?utm_source=chatgpt.com" target="_blank">Pajak.io</a>, <a href="https://www.pajak.go.id/sites/default/files/2025-01/Buku%20Manual%20Coretax%202024%20-%20Permohonan%20Pengukuhan%20PKP.pdf?utm_source=chatgpt.com" target="_blank">Buku Manual Coretax 2024</a></p>
                </div>
            `
            break;

        case 'update-dauwp':
            description = `
                <p>Dalam upaya menyederhanakan pelaksanaan hak dan kewajiban perpajakan, pemerintah telah menetapkan ketentuan terbaru terkait penggunaan aplikasi Coretax. Salah satu fitur penting yang disediakan adalah kemudahan dalam melakukan perubahan data Wajib Pajak, termasuk pembaruan alamat utama. Perubahan alamat ini dapat diajukan oleh Wajib Pajak Orang Pribadi, Badan, maupun Instansi Pemerintah. Perubahan data diperlukan apabila informasi yang tercatat dalam administrasi perpajakan tidak sesuai dengan kondisi aktual, seperti adanya perpindahan alamat tempat tinggal atau lokasi usaha yang menyebabkan perubahan wilayah kerja Kantor Pelayanan Pajak (KPP) tempat Wajib Pajak terdaftar. Dengan adanya kebijakan ini, pemerintah memastikan bahwa seluruh data perpajakan selalu akurat dan terkini guna mendukung administrasi perpajakan yang lebih efisien dan transparan.</p>
                <p>Proses perubahan alamat utama dapat dilakukan secara daring melalui fitur "Perubahan Alamat Utama" yang tersedia di menu "Portal Saya" pada aplikasi Coretax. Wajib Pajak hanya perlu mengisi formulir perubahan data yang mencakup detail alamat baru serta melampirkan dokumen pendukung yang relevan, seperti bukti domisili atau dokumen kepemilikan tempat usaha. Setelah permohonan diajukan, sistem akan melakukan verifikasi sebelum data diperbarui dalam sistem administrasi perpajakan. Dengan adanya sistem digital ini, Wajib Pajak tidak perlu lagi datang langsung ke KPP, sehingga menghemat waktu dan tenaga. Inovasi ini merupakan bagian dari transformasi digital Direktorat Jenderal Pajak (DJP) dalam meningkatkan efisiensi pelayanan perpajakan serta memberikan kemudahan bagi Wajib Pajak dalam memenuhi kewajibannya secara lebih praktis dan modern.</p>
            `
            break;

        case 'lapor-spt-pegawai':
            description = `
                <p>Dalam upaya menyederhanakan pelaksanaan hak dan kewajiban perpajakan, pemerintah telah menetapkan ketentuan terbaru mengenai Coretax. Artikel ini akan membahas panduan pengisian Surat Pemberitahuan (SPT) Tahunan Pajak Penghasilan (PPh) bagi pegawai melalui aplikasi Coretax. SPT adalah surat yang digunakan oleh wajib pajak untuk melaporkan penghitungan dan/atau pembayaran pajak, objek pajak dan/atau bukan objek pajak, serta harta dan kewajiban sesuai dengan ketentuan peraturan perundang-undangan di bidang perpajakan. SPT Tahunan merujuk pada SPT untuk suatu tahun pajak atau bagian tahun pajak. Wajib Pajak, dalam konteks ini, mencakup orang pribadi atau badan yang memiliki hak dan kewajiban perpajakan sesuai dengan ketentuan yang berlaku.</p>
                <p>Untuk memulai proses pelaporan SPT Tahunan PPh bagi pegawai melalui Coretax, langkah pertama adalah melakukan login ke aplikasi menggunakan akun wajib pajak orang pribadi. Setelah berhasil masuk, wajib pajak dapat memilih opsi yang sesuai untuk melaporkan SPT secara mandiri. Panduan ini disusun untuk memberikan informasi yang komprehensif, mulai dari tahap awal mengakses Coretax hingga proses pelaporan SPT Tahunan PPh bagi pegawai. Perlu dicatat bahwa aplikasi Coretax tersedia dalam dua bahasa, yaitu Bahasa Indonesia dan Bahasa Inggris, untuk memudahkan pengguna dalam memahami dan mengoperasikan sistem.</p>
            `
            break;

        case 'lapor-spt-pribadi':
            description = `
                <p>Dalam upaya menyederhanakan pelaksanaan hak dan kewajiban perpajakan, pemerintah telah menetapkan ketentuan terbaru mengenai Coretax. Artikel ini akan membahas panduan pengisian Surat Pemberitahuan (SPT) Tahunan Pajak Penghasilan (PPh) bagi Wajib Pajak Orang Pribadi yang berprofesi sebagai pengusaha dengan tarif umum. SPT adalah dokumen yang digunakan oleh wajib pajak untuk melaporkan penghitungan dan/atau pembayaran pajak, objek pajak dan/atau bukan objek pajak, serta harta dan kewajiban sesuai dengan ketentuan peraturan perundang-undangan di bidang perpajakan. SPT Tahunan merujuk pada SPT untuk suatu tahun pajak atau bagian tahun pajak. Dalam konteks ini, pengusaha adalah individu atau badan yang dalam aktivitas usahanya melakukan berbagai kegiatan seperti menghasilkan barang, mengimpor atau mengekspor barang, menjalankan usaha perdagangan, menyediakan jasa, atau menggunakan jasa dari luar daerah pabean.</p>
                <p>Untuk memfasilitasi pelaporan SPT Tahunan PPh Orang Pribadi, Direktorat Jenderal Pajak telah mengembangkan aplikasi Coretax. Aplikasi ini dirancang untuk memudahkan wajib pajak dalam memenuhi kewajiban perpajakan mereka secara elektronik. Panduan ini akan memberikan langkah-langkah detail mulai dari proses login hingga pengisian SPT Tahunan PPh bagi pengusaha dengan tarif umum. Dengan mengikuti panduan ini, diharapkan wajib pajak dapat memahami dan melaksanakan proses pelaporan pajak dengan lebih efisien dan akurat. Perlu dicatat bahwa aplikasi Coretax tersedia dalam dua bahasa, yaitu Bahasa Indonesia dan Bahasa Inggris, sehingga wajib pajak dapat memilih sesuai dengan preferensi mereka.</p>
            
                <div class="source">
                    <p>Sumber: <a href="https://youtu.be/oPjVPbT73jw" target="_blank">Tutorial Pelaporan SPT Tahunan Orang Pribadi (youtube)</a></p>
                </div>
            `
            break;

        case 'bukti-potong-Unifikasi':
            description = `
                <p>Dalam upaya menyederhanakan pelaksanaan hak dan kewajiban perpajakan, pemerintah telah menetapkan ketentuan terbaru mengenai Coretax. Artikel ini akan membahas panduan pembuatan bukti potong unifikasi pada aplikasi Coretax. Bukti potong unifikasi adalah dokumen standar yang dibuat oleh pemotong atau pemungut Pajak Penghasilan (PPh) sebagai bukti atas pemotongan atau pemungutan PPh, yang menunjukkan besarnya pajak yang telah dipotong atau dipungut. Pembuatan bukti potong PPh pada aplikasi Coretax DJP dapat dilakukan melalui tiga skema: input manual untuk setiap bukti potong (key in) di Coretax, pembuatan massal melalui unggahan file *.XML pada akun Wajib Pajak, dan pembuatan massal melalui Penyedia Jasa Aplikasi Perpajakan (PJAP).</p>
                <p>Untuk memulai proses pembuatan bukti potong, pengguna yang telah diberikan akses oleh perusahaan harus masuk ke aplikasi Coretax. Setelah login, pilih menu e-Bupot, kemudian pilih sub-menu yang sesuai dengan jenis bukti potong yang akan dibuat, seperti Bukti Potong Pajak Unifikasi (BPPU) atau Bukti Potong Non Residen (BPNR). Selanjutnya, isi formulir dengan data yang diperlukan, seperti identitas penerima penghasilan, jenis penghasilan, dan informasi lainnya yang relevan. Setelah semua data terisi dengan benar, simpan dan terbitkan bukti potong tersebut. Perlu diperhatikan bahwa akses pada Coretax hanya dapat diakses oleh pihak yang berwenang, dan SPT hanya dapat dibuat oleh orang pribadi yang diberi akses oleh perusahaan, seperti pengurus, konsultan, atau pihak ketiga yang ditunjuk.</p>
            
                <div class="source">
                    <p>Sumber: <a href="https://www.gadjian.com/blog/2025/01/30/lapor-spt-masa-pph-21-di-core-tax-membuat-bukti-potong/?utm_source=chatgpt.com" target="_blank">GADJIAN.com</a>, <a href="https://www.pajak.go.id/index.php/id/siaran-pers/pembaruan-informasi-terkini-implementasi-coretax-djp?utm_source=chatgpt.com" target="_blank">Pajak.go.id</a></p>
                </div>
                `
            break;

        case 'pwpop':
            description = `
                <p>Wajib Pajak adalah orang pribadi atau badan yang memiliki hak dan kewajiban perpajakan sesuai dengan ketentuan peraturan perundang-undangan. Portal Wajib Pajak adalah sarana bagi Wajib Pajak untuk melaksanakan hak dan memenuhi kewajiban perpajakan secara elektronik pada laman Direktorat Jenderal Pajak (DJP). Akun Wajib Pajak berfungsi sebagai tempat pencatatan, penyimpanan, dan penyampaian dokumen, data, dan/atau informasi terkait pelaksanaan hak dan pemenuhan kewajiban perpajakan, yang diidentifikasi menggunakan Nomor Pokok Wajib Pajak (NPWP).</p>
                <p>Untuk mengakses Daftar WPOP Non Karyawan, langkah pertama adalah masuk ke portal Coretax DJP melalui tautan yang tersedia. Setelah itu, Wajib Pajak perlu membuat akun dengan memilih opsi "Pendaftaran Baru" dan mengikuti proses registrasi yang ditentukan. Setelah akun berhasil dibuat dan diverifikasi, Wajib Pajak dapat mengakses menu yang tersedia untuk melihat dan mengelola data perpajakan mereka. Panduan lengkap mengenai pendaftaran WPOP Non Karyawan pada aplikasi Coretax dapat ditemukan pada sumber resmi Direktorat Jenderal Pajak.</p>
            `
            break;

        case 'SPT-PPH-21':
            description = `
                <p>SPT Masa adalah surat pemberitahuan untuk suatu masa pajak tertentu, yang digunakan oleh wajib pajak untuk melaporkan penghitungan dan/atau pembayaran pajak, objek pajak dan/atau bukan objek pajak, serta harta dan kewajiban sesuai dengan ketentuan peraturan perundang-undangan di bidang perpajakan. Masa Pajak sendiri merupakan jangka waktu yang menjadi dasar bagi wajib pajak untuk menghitung, menyetor, dan melaporkan pajak yang terutang dalam periode tertentu.</p>
                <p>Pelaporan SPT Masa PPh Pasal 21 melalui Coretax dimulai dengan login ke akun Coretax sebagai Person in Charge (PIC) perusahaan. Setelah berhasil masuk, pilih menu "Surat Pemberitahuan (SPT)" dan klik "Buat Konsep SPT". Selanjutnya, pilih jenis SPT "PPh Pasal 21/26" dan tentukan periode serta tahun pajak yang akan dilaporkan, misalnya Januari 2025. Setelah itu, pilih model SPT yang sesuai, apakah "Normal" untuk pelaporan pertama kali atau "Pembetulan" jika diperlukan perbaikan atas SPT yang telah dilaporkan sebelumnya. Setelah konsep SPT dibuat, Anda dapat mengeditnya sesuai kebutuhan sebelum melanjutkan ke proses pembayaran dan pelaporan. Pembayaran dapat dilakukan menggunakan saldo deposit atau kode billing yang tersedia.</p>

                <div class="source">
                    <p>Sumber: <a href="https://www.gadjian.com/blog/2025/01/30/lapor-spt-masa-pph-21-di-core-tax-membuat-bukti-potong/?utm_source=chatgpt.com" target="_blank">GADJIAN.com</a></p>
                </div>
            `
            break;

        case 'PDIWP':
            description = `
                <p>Akun Wajib Pajak merupakan tempat untuk mencatat, menyimpan, dan menyampaikan dokumen, data, serta informasi yang berkaitan dengan pelaksanaan hak dan pemenuhan kewajiban perpajakan Wajib Pajak. Selain itu, akun ini juga digunakan untuk mencatat informasi dari pelaksanaan tugas dan fungsi Direktorat Jenderal Pajak (DJP). Setiap Akun Wajib Pajak diidentifikasi menggunakan Nomor Pokok Wajib Pajak (NPWP), yaitu nomor yang diberikan kepada Wajib Pajak sebagai sarana dalam administrasi perpajakan. NPWP berfungsi sebagai tanda pengenal atau identitas Wajib Pajak dalam melaksanakan hak dan kewajiban perpajakannya. Untuk memudahkan proses administrasi perpajakan, DJP menyediakan Portal Wajib Pajak, yaitu sarana elektronik yang dapat diakses melalui laman DJP. Portal ini memungkinkan Wajib Pajak untuk melaksanakan hak dan memenuhi kewajiban perpajakan secara digital, seperti pelaporan SPT, pembayaran pajak, dan layanan lainnya. Dengan adanya ketiga elemen ini, diharapkan proses administrasi perpajakan menjadi lebih terstruktur, efisien, dan sesuai dengan perkembangan teknologi.</p>

                <div class="source">
                    <p>Sumber: <a href="https://www.online-pajak.com/tips-pajak/panduan-lengkap-cara-mengubah-data-wajib-pajak-di-coretax?utm_source=chatgpt.com" target="_blank">ONLINE-PAJAK.COM</a>, <a href="https://www.youtube.com/watch?v=C4A8vbXwhsM" target="_blank">Cara Ajukan Perubahan Data Identitas Wajib Pajak (YouTube)</a></p>
                </div>
            `
            break;
            
        default:
            description = 'Pilih kategori untuk melihat deskripsi dan peraturan terkait.';
    }

    deskripsiContainer.classList.remove('show');

    // Update the description after the fade out transition
    setTimeout(() => {
        deskripsiWrapper.innerHTML = description;
        // Fade in the deskripsi container
        deskripsiContainer.classList.add('show');
    }, 500); // Match the transition duration
}

// Call showDeskripsi with no arguments to display the default message on page load
showDeskripsi();