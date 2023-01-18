const Projeto = ({label, category, imgs, text}) => {
    return (
        <div className="col-12 col-xl-3 col-lg-4 col-md-6 col-sm-6 d-flex flex-column align-items-center">
            <div className="w-100 h-100 overflow-hidden rounded" style={{height: "250px", maxHeight: "250px", minHeight: "250px"}}>
                <img src={imgs[0]} className="img-fluid h-100 w-100" style={{objectFit: "cover"}} />
            </div>
            <p className="mt-2">{label}</p>
        </div>
    );
}
 
export default Projeto;