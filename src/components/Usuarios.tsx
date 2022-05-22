import { useUsuarios } from "../hooks/useUsuarios";
import { User } from '../interfaces/reqRes';

export const Usuarios = () => {

    const { usuarios, nextPage, previousPage } = useUsuarios();


    const renderItem = ({id, avatar, first_name, last_name, email}: User) => {
        return(
            <tr key={id.toString()}>
                <td>
                    <img
                        src={avatar}
                        alt={first_name}
                        style={{
                            width: 35,
                            borderRadius: 100
                        }}
                    />
                </td>
                <td>{first_name} {last_name}</td>
                <td>{email}</td>
            </tr>
        )
    }
    
    return (
        <>
            <h3>Usuarios:</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map( renderItem )
                    }
                </tbody>
            </table>

            <button
                className="btn btn-primary"
                onClick={previousPage}
            >Anteriores</button>

            &nbsp;

            <button
                className="btn btn-primary"
                onClick={nextPage}
            >Siguientes</button>
        </>
    )
}
