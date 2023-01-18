import Projeto from "./Projeto";
import { projects, filters } from './projectsData'
import { useEffect, useState } from "react";

const Projetos = () => {
    const [projectsArr, setProjectsArr] = useState([])
    const [filterArr, setFilterArr] = useState([])

    useEffect(() => {
        setProjectsArr(projects)
    }, [])

    const handleFilter = (e) => {
        if(!e.classList.contains("active")){
            e.classList.add("active")
        } else {
            e.classList.remove("active")
        }

        if(filterArr.includes(e.value)){
            setFilterArr(filterArr.filter(el => el !== e.value))
        } else {
            setFilterArr([...filterArr, e.value])
        }
    }

    return (
        <div className="py-5 px-2 flex-grow-1 d-flex flex-column gap-4">
            <div className="row container w-100 gap-3 filter justify-content-center">
                {filterArr.length !== 0 && <button className="col-2 border" style={{width: "43px"}}>
                    X
                </button>}
                {filters.map((el, i) => (
                    <button key={i} value={el.filter} className="col-2 border" onClick={e => handleFilter(e.target)}>
                        {el.text}
                    </button>
                ))}
            </div>
            <div className="row container">
                {projectsArr.map((el, i) => (
                    filterArr.length === 0 ? <Projeto key={i} label={el.label} category={el.category} imgs={el.imgs} text={el.text} /> : filterArr.includes(el.category) && <Projeto key={i} label={el.label} category={el.category} imgs={el.imgs} text={el.text} />
                ))}
            </div>
        </div>
    );
}
 
export default Projetos;