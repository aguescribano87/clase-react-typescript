import { Usuario } from "../tipos"

interface Props {
    usuarios: Usuario[]
}

export const UserList = ({ usuarios }: Props) => {
    return (
        <>
            {usuarios.map((user, i) => (
                <div key={i}>
                    <h3>{user.nombre} #{user.id}</h3>
                    <img src={user.imagen} width='70' alt='...' />
                    <p>{user.mensaje}</p>
                </div>
            ))}
        </>
    )
}