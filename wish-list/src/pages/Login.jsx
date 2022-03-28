import React, {useState, useRef} from 'react'
import { FaUser, FaUserLock } from "react-icons/fa";
import { useNavigate, Link } from 'react-router-dom';
import authService from '../services/auth.service';

const Login = () => {

  const form = useRef(null);

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault()
    authService.login(username, password).then(
      () => {
        navigate("/");
        window.location.reload();
      },
      (error) => {
        console.log(error);
        alert('Usuario o contraseña no válido')
      }
    );
  }

  return (

      <form onSubmit={handleSubmit} ref={form}>
        <h2>Ingresar</h2>
        <div className="field">
          <FaUser size="1.5em" />
          <input type="text" name="username" placeholder='Nombre de usuario' onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="field">
          <FaUserLock size="1.5em" />
          <input type="password" name="password" placeholder='Contraseña' onChange={(e) => setPassword(e.target.value)} />
        </div>
          <button>Iniciar sesión</button>
          <Link to="/signup">
            Crear una cuenta
          </Link>
      </form>

  )
}

export default Login