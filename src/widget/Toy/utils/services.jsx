import { filterToyData } from "./api";

// Penanganan tombol
export const ButtonHandlers = ({
    toyData,
    originalToyData,
    setToyData,
    setButtonText,
    setButtonClicked,
    buttonText,
    buttonClicked,
    colorOrder
}) => {

    // Tindakan untuk sortir item mainan melalui warna
    const sortMainanByColor = () => {
        if (!buttonClicked.sort) {
            const sortedData = [...toyData].sort((a, b) => {
                return colorOrder[a.warna] - colorOrder[b.warna];
            });
            setToyData(sortedData);
            setButtonText({ ...buttonText, sort: 'Refresh' });
            setButtonClicked({ ...buttonClicked, sort: true });
        } else {
            setToyData(originalToyData);
            setButtonText({ ...buttonText, sort: 'Sortir Warna' });
            setButtonClicked({ ...buttonClicked, sort: false });
        }
    };

    // Tindakan untuk mengubah item lingkaran hijau ke hitam
    const changeGreenToBlack = () => {
        if (!buttonClicked.changeColor) {
            const updatedData = toyData.map(item => {
                if (item.bentuk === 'lingkaran' && item.warna === 'green') {
                    return { ...item, warna: 'black' };
                }
                return item;
            });
            setToyData(updatedData);
            setButtonText({ ...buttonText, changeColor: 'Refresh' });
            setButtonClicked({ ...buttonClicked, changeColor: true });
        } else {
            setToyData(originalToyData);
            setButtonText({ ...buttonText, changeColor: 'Lingkaran Hijau Menjadi Hitam' });
            setButtonClicked({ ...buttonClicked, changeColor: false });
        }
    };

    // Tindakan untuk memfilter item warna merah
    const getRedItems = async () => {
        if (!buttonClicked.getRed) {
            try {
                const data = await filterToyData(); // Memanggil api yang memfilter mainan warna merah
                setToyData([...data]); // Mendeklarasikan semua array
                setButtonText({ ...buttonText, getRed: 'Refresh' });
                setButtonClicked({ ...buttonClicked, getRed: true });
            } catch (error) {
                console.error('Gagal mengambil data merah:', error);
            }
        } else {
            setToyData(originalToyData);
            setButtonText({ ...buttonText, getRed: 'Filter Warna Merah' });
            setButtonClicked({ ...buttonClicked, getRed: false });
        }
    };

    return { sortMainanByColor, changeGreenToBlack, getRedItems };
};