const FilterBtn = ({filter, text, active, handleFilter}) => {
    return (
        <button value={filter} className={`col-2 border ${active && "active"}`} onClick={e => handleFilter(e.target)}>
            {text}
        </button>
    );
}
 
export default FilterBtn;