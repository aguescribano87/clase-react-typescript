export interface Persona{
    nombre: string
    mensaje?: string
}

export interface Usuario extends Persona {
    id: number
    imagen: string
  }