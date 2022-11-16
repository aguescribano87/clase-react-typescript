import { useState } from "react"
import { Persona } from "../tipos"

interface Props {
    createNewUser: (user: Persona) => void
}

export const Form = ({ createNewUser }: Props) => {
    const [inputValues, setInputValues] = useState<Persona>({
        nombre: "",
        mensaje: ""
    })

    const handleChage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setInputValues({ ...inputValues, [event.target.name]: event.target.value })

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        createNewUser(inputValues)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input name="nombre" placeholder="nombre" onChange={handleChage} />
                <textarea name="mensaje" placeholder="mensaje" onChange={handleChage} />
                <button>Crear</button>
            </form>
        </>
    )
}