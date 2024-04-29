// Mengelompokkan kategori buah dan hewan agar buah lebih dulu ditampilkan
export const filterData = (caseData) => {
    const filtered = {
        total: 0,
        data: []
    };

    // Objek untuk menyimpan total per code
    const totalsByCode = {};

    // Filter data untuk Buah dan Hewan
    const categories = ['Buah', 'Hewan'];
    categories.forEach(category => {
        const categoryData = {
            category: category,
            total: 0,
            data: {}
        };

        const filteredItems = caseData.filter(item => item.category === category);
        filteredItems.forEach(item => {
            const { code, name, total } = item;

            // Inisialisasi total untuk kode jika belum ada
            if (!totalsByCode[code]) {
                totalsByCode[code] = 0;
            }

            // Akumulasi total untuk kode
            totalsByCode[code] += total;

            // Mengumpulkan data untuk kode
            if (!categoryData.data[code]) {
                categoryData.data[code] = {
                    total: 0,
                    data: []
                };
            }
            categoryData.data[code].total += total;
            categoryData.data[code].data.push({ name, total });

            // Akumulasi total kategori
            categoryData.total += total;
        });

        filtered.total += categoryData.total;
        filtered.data.push(categoryData);
    });

    // Tambahkan total per code ke dalam data kategori
    filtered.data.forEach(categoryData => {
        Object.keys(categoryData.data).forEach(code => {
            categoryData.data[code].total = totalsByCode[code];
        });
    });

    return filtered;
};

// Mengambil gambar sesuai dengan nama item
export const getImageUrl = (name) => {
    if (name) {
        const imageName = name.replace(/\s+/g, '_').toLowerCase() + '.png';
        return `/assets/img/${imageName}`;
    }
    return '';
};
