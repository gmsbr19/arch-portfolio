import Projeto from "./Projeto";
import { projects } from './projectsData'
import { useEffect, useState } from "react";

const Projetos = () => {
    const [projectsArr, setProjectsArr] = useState([])
    useEffect(() => {
        setProjectsArr(projects)
    }, [])
    console.log(projectsArr[1])

    return (
        <div className="py-5 px-2 flex-grow-1 d-flex flex-column gap-4">
            <div className="row container w-100 gap-3 filter justify-content-center">
                <button className="col-2">
                    Arquitetônicos
                </button>
                <button className="col-2">
                    Inst. Especiais
                </button>
                <button className="col-2">
                    Paisagismo
                </button>
                <button className="col-2">
                    Interiores
                </button>
                <button className="col-2">
                    Reforma
                </button>
            </div>
            <div className="row container">
                {projectsArr.map((el, i) => (
                    <Projeto key={i} label={el.label} category={el.category} imgs={el.imgs} text={el.text} />
                ))}
            </div>
        </div>
    );
}
 
export default Projetos;