// Komponen ToyList untuk menampung data array dari mainan.json
export const ToyList = ({ toyData }) => {
    return (
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4 p-2">
            {toyData.map((item, index) => (
                <div className="bg-gray-100 p-4 rounded-lg shadow-md transform transition-transform duration-300 hover:-translate-y-2">
                    <div
                        key={index}
                        className={`bg-white ${item.bentuk}`}
                        style={{ backgroundColor: item.warna }}
                    >
                        <span className="teks font-bold">{item.jumlah}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};
