import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="p-3 bg-white vh-100 d-none d-md-block" style={{ width: "280px" }}>
      <a
        href="/"
        className="d-flex text-center align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom"
      >
        <span className="fs-6 fw-semibold w-100">
          Hamilton Alves Castro Filho
        </span>
      </a>
      <div className="list-unstyled d-flex flex-column ps-0">
        <NavLink to="/" className="text-decoration-none">
          <button
            className="btn btn-toggle d-inline-flex align-items-center rounded border-0"
            data-bs-toggle="collapse"
            data-bs-target="#home-collapse"
            aria-expanded="true"
          >
            Projetos
          </button>
        </NavLink>
        <NavLink to="/perfil" className="text-decoration-none">
          <button
            className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#dashboard-collapse"
            aria-expanded="false"
          >
            Perfil
          </button>
        </NavLink>
        <NavLink to="/contato" className="text-decoration-none">
          <button
            className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#orders-collapse"
            aria-expanded="false"
          >
            Contato
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
