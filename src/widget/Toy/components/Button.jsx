// Komponen untuk sortir mainan merah -> kuning -> hijau -> hitam -> jingga
export const SortButton = ({ buttonText, buttonClicked, sortMainanByColor }) => {
    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white shadow-md font-bold py-2 px-4 rounded shadow-3xl transform transition-transform duration-300 hover:scale-105" onClick={sortMainanByColor}>
            {buttonText.sort}
        </button>
    );
};

// Komponen untuk Mengubah data mainan lingkaran warna hijau ke hitam
export const ChangeColorButton = ({ buttonText, buttonClicked, changeGreenToBlack }) => {
    return (
        <button
            className="bg-gradient-to-r from-green-500 to-black hover:from-green-700 hover:to-black text-white shadow-md font-bold py-2 px-4 rounded shadow-3xl transform transition-transform duration-300 hover:scale-105"
            onClick={changeGreenToBlack}>
            {buttonText.changeColor}
        </button>
    );
};

// Komponen untuk Mendapatkan data mainan warna merah
export const GetRedItemsButton = ({ buttonText, buttonClicked, getRedItems }) => {
    return (
        <button className="bg-red-500 hover:bg-red-700 text-white shadow-md font-bold py-2 px-4 rounded shadow-3xl transform transition-transform duration-300 hover:scale-105" onClick={getRedItems}>
            {buttonText.getRed}
        </button>
    );
};
