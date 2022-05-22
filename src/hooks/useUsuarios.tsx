import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResList, User } from "../interfaces/reqRes";

export const useUsuarios = () => {

    const [usuarios, setUsuarios] = useState<User[]>([]);

    const pageRef = useRef(1);

    useEffect(() => {
        cargarUsuarios();
    }, []);

    const cargarUsuarios = async() => {
        const resp = await reqResApi.get<ReqResList>('/users', {
            params: {
                page: pageRef.current
            }
        });
        if(resp.data.data.length > 0) {
           setUsuarios(resp.data.data);
        } else {
            pageRef.current --;
            alert('No hay más registros');
        }
        
    }

    const nextPage = () => {
        pageRef.current ++;
        cargarUsuarios();
    }

    const previousPage = () => {
        if (pageRef.current > 1) {
            pageRef.current --;
            cargarUsuarios();
        }
        
    }

    return {
        usuarios,
        nextPage,
        previousPage
    }

}
