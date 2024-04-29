import React, { useState, useEffect } from 'react';
import { fetchCaseData } from './utils/api';
import { filterData } from './utils/services';
import { FilterButton } from './components/Button';
import { CaseItem, FilteredCaseItem } from './components/Item';

// Widget Case untuk soal No.5
const Case = () => {
    // State untuk menyimpan data case, filter data dan menampilkannya
    const [caseData, setCaseData] = useState([]);
    const [filteredData, setFilteredData] = useState(null);
    const [showFilteredData, setShowFilteredData] = useState(false);

    useEffect(() => {
        // Mengambil data case saat komponen dimuat
        const fetchData = async () => {
            const data = await fetchCaseData();
            setCaseData(data);
        };

        fetchData();
    }, []);

    // Kendali untuk melakukan filter data
    const handleFilter = () => {
        const filteredData = filterData(caseData);
        setFilteredData(filteredData);
        setShowFilteredData(true);
    };

    // Kendali untuk menghilangkan filter
    const handleResetFilter = () => {
        setShowFilteredData(false); // Menyembunyikan tampilan data yang telah difilter
    };

    return (
        <section id='case' className='mb-2'>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Case To Expectation</h2>
                <h4 className="text-sm font-semibold">Soal No. 5</h4>
            </div>
            <hr className="w-full border-2 border-gray-300 mb-4" />
            <div className="container my-auto py-4 mx-auto px-4">
                <div className="justify-start grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 mb-6 gap-4">
                    <FilterButton onClick={showFilteredData ? handleResetFilter : handleFilter} showFilteredData={showFilteredData} />
                </div>
                {/* Render filter */}
                {showFilteredData ? (
                    <FilteredCaseItem filteredData={filteredData} />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {caseData.map((item, index) => (
                            <CaseItem key={index} category={item.category} name={item.name} total={item.total} code={item.code} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Case;
