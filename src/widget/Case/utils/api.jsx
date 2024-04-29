import { baseUrl } from "../../../constant";

// Mengambil data case.json
export const fetchCaseData = async () => {
    try {
        const response = await fetch(`${baseUrl}case.json`);
        const data = await response.json();
        return data['data'];
    } catch (error) {
        console.error('Gagal menampilkan data:', error);
        return null;
    }
};