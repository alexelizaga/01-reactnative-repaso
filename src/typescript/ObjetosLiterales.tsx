export const ObjetosLiterales = () => {

    interface Persona {
        nombreCompleto: string;
        edad: number;
        direccion: Direccion;
    }

    interface Direccion {
        pais: string;
        casaNo: 615;
    }

    const persona: Persona = {
        nombreCompleto: 'Alex',
        edad: 33,
        direccion: {
            pais: 'España',
            casaNo: 615
        }
    }

    return (
        <>
            <h3>Objetos Literales</h3>
            <code>
                <pre>
                    { JSON.stringify(persona, null, 2) }
                </pre>
            </code>
        </>
    )
}
