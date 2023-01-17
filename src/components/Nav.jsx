import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex-shrink-0 p-3 bg-white" style={{ width: "280px" }}>
      <a
        href="/"
        className="d-flex text-center align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom"
      >
        <span className="fs-6 fw-semibold w-100">
          Hamilton Alves Castro Filho
        </span>
      </a>
      <ul className="list-unstyled ps-0">
        <li className="mb-1">
          <NavLink to="/">
            <button
              className="btn btn-toggle d-inline-flex align-items-center rounded border-0"
              data-bs-toggle="collapse"
              data-bs-target="#home-collapse"
              aria-expanded="true"
            >
              Projetos
            </button>
          </NavLink>
        </li>
        <li className="mb-1">
          <NavLink to="/perfil">
            <button
              className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#dashboard-collapse"
              aria-expanded="false"
            >
              Perfil
            </button>
          </NavLink>
        </li>
        <li className="mb-1">
          <NavLink to="/contato">
            <button
              className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#orders-collapse"
              aria-expanded="false"
            >
              Contato
            </button>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
