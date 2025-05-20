//Custom hook to fetch data
import {useEffect, useState} from "react";

type Data<T> = T | null;
type ErrorType = Error | null;

interface Params<T> {
    //data: T | null;
    data: Data<T>;
    loading: boolean;
    error: ErrorType;
}


/*
useFetch => key  (puntero)
    => espacio de memoria
    => función generica 

    el generico hace que podamos hacer 'lo que queramos' con el método, pasandole el valor de lo que queremos
    response.json devuelve any, por eso lo pasamos a T

    de forma externa le decimos de qué tipo es la data; 
    por ejemplo cambio la url, y llamo al useFetch de nuevo, pero ahora llamando a useFetch<otroTipo>
*/
export const useFetch =  <T>(url : string): Params<T> => {


    const [data, setData] = useState<Data<T>>(null); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<ErrorType>(null);
    
    useEffect(() => {

        const controller = new AbortController();
        

        setLoading(true);

        const fetchData = async () => {
            try {
                const response = await fetch(url, controller);
                if (!response.ok) throw new Error('Error en la petición');
                const jsonData: T = await response.json();
                setData(jsonData);
                setError(null);
            } catch (error) {
                setError(error as Error)
            } finally {
                setLoading(false);
            }
        }
    
        fetchData();

        return () => {
            controller.abort();
        }
    }, [url])

    return { data, loading, error }
} 