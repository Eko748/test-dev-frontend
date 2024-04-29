// Komponen Filter Button
export const FilterButton = ({ onClick, showFilteredData }) => {
    return (
        <button
            onClick={onClick}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded shadow-md transform transition-transform duration-300 hover:scale-105">
            {showFilteredData ? 'Sortir Ke Format Case' : 'Sortir Ke Format Expectation'}
        </button>
    );
};