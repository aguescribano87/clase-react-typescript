import { useEffect, useState } from 'react';
import './App.css';
import { Form } from './components/form';
import { UserList } from './components/userList';
import { Persona, Usuario } from './tipos';

const IMG = "https://images.vexels.com/media/users/3/147102/isolated/preview/082213cb0f9eabb7e6715f59ef7d322a-icono-de-perfil-de-instagram.png"

function App() {
  const [usuarios, setUsuarios] = useState<Array<Usuario>>([])

  useEffect(() => {
    setUsuarios([{
      id: 1,
      nombre: 'agus',
      imagen: IMG,
      mensaje: 'Quien no prende la cámara, no quiere a la SCALONETA'
    },
    {
      id: 2,
      nombre: 'pedro',
      imagen: IMG
    }])
  }, [])

  const createNewUser = (user:Persona):void => setUsuarios([...usuarios, { ...user, id: 3, imagen: IMG }])

  return (
    <div className="App">
      {usuarios && <UserList usuarios={usuarios} />}
      <Form createNewUser={createNewUser}/>
    </div>
  );
}

export default App;
