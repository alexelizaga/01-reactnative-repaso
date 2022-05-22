export const TiposBasicos = () => {

    const nombre: string  = 'Alex';
    const edad: number = 35;
    const estaActivo: boolean = true;

    const poderes: string[] = ['Velocidad', 'Volar'];

    return (
        <div>
            <h3>Tipos básicos</h3>
            {nombre}, {edad}, { (estaActivo) ? 'true' : 'false'}
            <br/>
            {poderes.join(', ')}
        </div>
    )
}
