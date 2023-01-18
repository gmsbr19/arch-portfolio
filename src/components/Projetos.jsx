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
        <div className="py-5 px-2 flex-grow-1">
            <div className="row container">
                {projectsArr.map((el, i) => (
                    <Projeto key={i} label={el.label} category={el.category} imgs={el.imgs} text={el.text} />
                ))}
            </div>
        </div>
    );
}
 
export default Projetos;