import { useState } from "react";

const Projeto = ({label, category, imgs, text}) => {
    const [scaleImage, setScaleImage] = useState(false)

    return (
        <div className="col-12 col-xl-3 col-lg-4 col-md-6 col-sm-6 d-flex flex-column align-items-center">
            <div onMouseEnter={() => setScaleImage(true)} onMouseLeave={() => setScaleImage(false)} className={`w-100 h-100 overflow-hidden rounded position-relative d-flex align-items-center justify-content-center ${scaleImage ? "inner-shadow" : ""}`} style={{height: "250px", maxHeight: "250px", minHeight: "250px"}}>
                <img src={imgs[0]} className="img-fluid h-100 w-100" style={{objectFit: "cover", transform: `${scaleImage ? "scale(1.1)" : ""}`}} />
                <button className="see-more-btn position-absolute px-2">Ver mais</button>
            </div>
            <p className="mt-2">{label}</p>
        </div>
    );
}
 
export default Projeto;