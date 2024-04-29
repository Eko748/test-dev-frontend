import { baseUrl } from "../../../constant";
import { colorMapping } from "./constants";

// Mengambil data mainan.json
export const fetchToyData = async () => {
    try {
        const response = await fetch(`${baseUrl}mainan.json`);
        const data = await response.json();

        // Manipulasi warna menggunakan colorMapping
        const manipulatedData = data['data'].map(item => ({
            ...item,
            warna: colorMapping[item.warna] || item.warna // Mengganti warna jika ada di colorMapping
        }));

        return manipulatedData;
    } catch (error) {
        console.error('Gagal menampilkan data:', error);
        return null;
    }
};

// Mengambil data mainan.json dengan filter warna merah
export const filterToyData = async () => {
    try {
        const response = await fetch(`${baseUrl}mainan.json`);
        const data = await response.json();

        // Manipulasi warna menggunakan colorMapping
        const manipulatedData = data['data'].map(item => ({
            ...item,
            warna: colorMapping[item.warna] || item.warna // Mengganti warna jika ada di colorMapping
        }));

        const redItems = manipulatedData.filter(item => item.warna === 'red');
        return redItems;
    } catch (error) {
        console.error('Gagal memfilter data:', error);
        return null;
    }
};
