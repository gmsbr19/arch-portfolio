const Nav = () => {
  return (
    <div style={{ width: "250px" }} className="vh-100 bg-light fixed-left p-3 d-flex flex-column">
      <p className="text-center mb-0">Hamilton Alves Castro Filho</p>
      <hr />
      <nav className="p-2">
        <ul className="list-unstyled ps-0">
          <li className="mb-1">
            <button
              className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#home-collapse"
              aria-expanded="false"
            >Projetos</button>
            <div className="collapse" id="home-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Arquitetônicos</a>
                </li>
                <li>
                  <a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Urbanismo</a>
                </li>
                <li>
                  <a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Reports</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="mb-1">
            <button
              className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#dashboard-collapse"
              aria-expanded="false"
            >
              Dashboard
            </button>
            <div className="collapse" id="dashboard-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a
                    href="#"
                    className="link-dark d-inline-flex text-decoration-none rounded"
                  >
                    Overview
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link-dark d-inline-flex text-decoration-none rounded"
                  >
                    Weekly
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link-dark d-inline-flex text-decoration-none rounded"
                  >
                    Monthly
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link-dark d-inline-flex text-decoration-none rounded"
                  >
                    Annually
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="border-top my-3"></li>
          <li className="mb-1">
            <button
              className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#account-collapse"
              aria-expanded="false"
            >
              Account
            </button>
            <div className="collapse" id="account-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a
                    href="#"
                    className="link-dark d-inline-flex text-decoration-none rounded"
                  >
                    New...
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link-dark d-inline-flex text-decoration-none rounded"
                  >
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link-dark d-inline-flex text-decoration-none rounded"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link-dark d-inline-flex text-decoration-none rounded"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
