import React, { useState, useEffect } from 'react';
import '../../assets/css/mainan.css';
import { fetchToyData } from './utils/api';
import { initialButtonText, defaultButtonClickedState, colorOrder } from './utils/constants';
import { SortButton, ChangeColorButton, GetRedItemsButton } from './components/Button';
import { ButtonHandlers } from './utils/services';
import { ToyList } from './components/Item';

// Widget Toy untuk soal No. 1 - 4
const Toy = () => {
    // State untuk menyimpan data mainan, data mainan asli, teks tombol, dan status tombol
    const [toyData, setToyData] = useState([]);
    const [originalToyData, setOriginalToyData] = useState([]);
    const [buttonText, setButtonText] = useState(initialButtonText);
    const [buttonClicked, setButtonClicked] = useState(defaultButtonClickedState);

    useEffect(() => {
        // Mengambil data mainan saat komponen dimuat
        const fetchData = async () => {
            const data = await fetchToyData();
            if (data) {
                setToyData(data);
                setOriginalToyData(data);
            }
        };

        fetchData();
    }, []);

    // Menangani tombol dari custom hook ButtonHandlers
    const { sortMainanByColor, changeGreenToBlack, getRedItems } = ButtonHandlers({
        toyData, originalToyData, setToyData, setButtonText,
        setButtonClicked, buttonText, buttonClicked, colorOrder
    });

    return (
        <section id='esa' className='mb-8'>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Mainan Esa</h2>
                <h4 className="text-sm font-semibold">Soal No. 1 - 4</h4>
            </div>
            <hr className="w-full border-2 border-gray-300 mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                {/* Tombol untuk mengurutkan mainan berdasarkan warna */}
                <SortButton buttonText={buttonText} buttonClicked={buttonClicked} sortMainanByColor={sortMainanByColor} />
                {/* Tombol untuk mengubah warna hijau menjadi hitam pada mainan */}
                <ChangeColorButton buttonText={buttonText} buttonClicked={buttonClicked} changeGreenToBlack={changeGreenToBlack} />
                {/* Tombol untuk mendapatkan item mainan yang berwarna merah */}
                <GetRedItemsButton buttonText={buttonText} buttonClicked={buttonClicked} getRedItems={getRedItems} />
            </div>
            <div className="container my-auto mx-auto px-4">
                <div className="bg-white p-4 rounded shadow-md">
                    {/* Menampilkan daftar mainan */}
                    <ToyList toyData={toyData} />
                </div>
            </div>
        </section>
    );
};

export default Toy;
