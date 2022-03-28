import React, {useState, useRef} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { FaUserPlus, FaUserLock } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import authService from '../services/auth.service';

const Signup = () => {

  const form = useRef(null);
  const navigate = useNavigate();

  const [name, setName] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);
  const [passwordConfirm, setPasswordConfirm] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();
    if(password===passwordConfirm){
        let roles =[];
        window.location.search === "?role=admin"? roles=["admin"]:roles=["customer"];
        try{
            await authService.register(username, email, password, roles, name);
            navigate("/login");
        }  
        catch(e){
            alert('Usuario ya existe')
        }
    }
  }

  return (
    <div>
        <form onSubmit={handleSubmit} ref={form}>
            <h2>Registrarse</h2>
            <div className="field">
                <FaUserPlus size="1.5em" />
                <input type="text" name="name" placeholder='Nombre' onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="field">
                <FaUserPlus size="1.5em" />
                <input type="text" name="name" placeholder='Nombre de usuario' onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className="field">
                <HiOutlineMail size="1.5em" />
                <input type="email" name="email" placeholder='Correo' onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="field">
                <FaUserLock size="1.5em" />
                <input type="password" name="password" placeholder='Contraseña' onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="field">
                <FaUserLock size="1.5em" />
                <input type="password" name="passwordConfirm" placeholder='Confirmar contraseña' onChange={(e) => setPasswordConfirm(e.target.value)}/>
            </div>
            <button>Registrarse</button>
            <Link to="/signup">
                Ya tengo una cuenta
            </Link>
        </form>
    </div>
  )
}

export default Signup