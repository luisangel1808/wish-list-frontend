import { useEffect, useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import authService from "../services/auth.service";

import Logo from "../static/Carvajal.jpg";
import "../styles/Header.css";

const Header = () => {
  const [menu, setMenu] = useState(false);

  //const history = useNavigate();

  //const [currentUser, setCurrentUser] = useState(undefined);
  const [role, setRole] = useState("guest");
  useEffect(() => {
    const user = authService.getCurrentUser();
    if (user) {
      //setCurrentUser(user);
      setRole(authService.getRole())
    }
  }, []);
  const logOut = () => {
    authService.logout();
  };

  return role==="guest"? (
        <header>
          <nav className={`menu ${menu ? "n-active" : "n-inactive"}`}>
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
            {(
            <div className="in">
              <ul className={`menu ${menu ? "active" : "inactive"}`}> 
                <button className="header-item">
                  <Link to="/login">
                      Iniciar sesión
                  </Link>
                </button>
              </ul>
            </div>
            )}
            <div className="toggle">
              {menu ? (
                <FaTimes onClick={() => setMenu(!menu)} />
              ) : (
                <FaBars onClick={() => setMenu(!menu)} />
              )}
            </div>
          </nav>
        </header>
      ):
      role==="ROLE_ADMIN"?
 (        <header>
  <nav className={`menu ${menu ? "n-active" : "n-inactive"}`}>
    <Link to="/">
      <img src={Logo} alt="Logo" />
    </Link>
    {(
      <div className="in">
    <ul className={`menu ${menu ? "active" : "inactive"}`}>
      <li className="header-item">
        <Link to="/add-product" onClick={() => setMenu(false)}>
          Agregar productos
        </Link>
      </li>
      <li className="header-item">
        <Link to="/edit-products" onClick={() => setMenu(false)}>
          Editar productos
        </Link>
      </li>

      <button className="header-item" onClick={logOut}>Cerrar sesión</button>
    </ul>
    </div>
    )}
    <div className="toggle">
      {menu ? (
        <FaTimes onClick={() => setMenu(!menu)} />
      ) : (
        <FaBars onClick={() => setMenu(!menu)} />
      )}
    </div>
  </nav>
</header>
  ):
  (        <header>
    <nav className={`menu ${menu ? "n-active" : "n-inactive"}`}>
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      {(
        <div className="in">
      <ul className={`menu ${menu ? "active" : "inactive"}`}>
        <li className="header-item">
          <Link to="/" onClick={() => setMenu(false)}>
            Ver productos
          </Link>
        </li>
        <li className="header-item">
          <Link to="/wish-list" onClick={() => setMenu(false)}>
            Histórico de deseos
          </Link>
        </li>

        <button className="header-item" onClick={logOut}>Cerrar sesión</button>
      </ul>
      </div>
      )}
      <div className="toggle">
        {menu ? (
          <FaTimes onClick={() => setMenu(!menu)} />
        ) : (
          <FaBars onClick={() => setMenu(!menu)} />
        )}
      </div>
    </nav>
  </header>
)
}

export default Header