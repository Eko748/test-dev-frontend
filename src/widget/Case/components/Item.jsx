import { getImageUrl } from '../utils/services';

// Komponen CaseItem berisi data case.json
export const CaseItem = ({ category, total, name, code }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 relative">
            <div className={`absolute font-semibold top-0 left-0 ml-2 mt-2 bg-gray-100 shadow-sm text-gray-400 px-2 py-1 rounded-full`}>
                {category}
            </div>
            <div className="absolute font-semibold top-0 right-6 md:right-4 lg:right-6 xl:right-7 bg-white shadow-lg text-black rounded-full w-12 h-12 flex items-center justify-center mt-3 md:mt-5 lg:mt-3 xl:mt-5 md:mr-5 xl:mr-6">
                <p className="text-green-500 font-semibold">{total}</p>
            </div>
            <div className="flex justify-center mb-4 transform transition-transform duration-300 hover:-translate-y-4">
                <img
                    src={getImageUrl(name)} // Menambahkan tampilan gambar setiap data
                    alt={name}
                    className="w-32 h-32 rounded-full shadow-lg"
                />
            </div>
            <div className="text-center">
                <h2 className="text-xl font-bold mb-2">{name}</h2>
                <p className="text-gray-600 mb-1">Kode: {code}</p>
            </div>
        </div>
    );
};

// Komponen FilteredCaseItem berisi data expectation.json
export const FilteredCaseItem = ({ filteredData }) => (
    <div>
        {/* Total Semua Kategori */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 mt-2 mb-2">
            <div className="col-span-1"></div>
            <div className="col-span-1 bg-white p-4 rounded-lg shadow-md">
                <p className="text-center text-gray-800 text-xl font-bold mb-2">Total Semua</p>
                <p className="text-center text-green-500 text-4xl font-bold">{filteredData.total}</p>
            </div>
            <div className="col-span-1"></div>
        </div>

        {/* Tampilkan data per kategori */}
        {filteredData.data.map((categoryData, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md mb-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-2">
                    {/* Elemen yang akan ditampilkan */}
                    <div className={`relative bg-gray-100 text-lg mb-4 text-gray-500 px-4 py-1 rounded`}>
                        <span className="text-center font-semibold">Kategori:</span>
                        <span className="text-green-500 font-semibold ml-1">{categoryData.category}</span>

                        <p className="text-center font-semibold float-right">Total:
                            <span className="text-green-500 font-semibold ml-1 float-right">{categoryData.total}</span>
                        </p>
                    </div>
                </div>

                {/* Tampilkan data per kode, diurutkan berdasarkan kode */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.keys(categoryData.data)
                        .sort((a, b) => a.localeCompare(b)) // Mengurutkan kunci (kode) secara alfanumerik
                        .map((code, idx) => (
                            <div key={idx} className="bg-gray-100 p-4 rounded-lg shadow-md">
                                {/* Menampilkan total per code */}
                                <div className={`relative bg-white text-lg mb-4 text-gray-400 px-1 py-1 rounded`}>
                                    <span className="text-gray-500 text-lg font-semibold mb-2 ms-2">Kode:</span>
                                    <span className="text-green-500 text-lg font-semibold mb-2 ms-2">{code}</span>
                                    <div className="float-right">
                                        <span className="text-gray-500 font-semibold me-2">Total:</span>
                                        <span className="text-green-500 font-semibold me-2">{categoryData.data[code].total}</span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4">
                                    {/* Tampilkan data item per kode, diurutkan berdasarkan nama */}
                                    {categoryData.data[code].data
                                        .sort((item1, item2) => item1.name.localeCompare(item2.name)) // Mengurutkan berdasarkan name
                                        .map((item, i) => (
                                            <div key={i} className="bg-white rounded-lg shadow-md p-4 relative">
                                                {/* Tampilkan gambar */}
                                                <div className="absolute font-semibold top-0 right-3 md:right-2 lg:right-2 xl:right-2 bg-white shadow-lg text-black rounded-full w-10 h-10 flex items-center justify-center mt-1 md:mt-3 lg:mt-1 xl:mt-3 md:mr-1 xl:mr-1">
                                                    <p className="text-green-500 font-semibold">{item.total}</p>
                                                </div>
                                                <img
                                                    src={getImageUrl(item.name)} // Ambil URL gambar berdasarkan data name
                                                    alt={item.name}
                                                    className="w-32 h-32 rounded-full shadow-lg mb-4 mx-auto transform transition-transform duration-300 hover:-translate-y-4"
                                                />
                                                <div className="text-center">
                                                    <h2 className="text-xl font-bold mb-2">{item.name}</h2>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        ))}
    </div>
);



