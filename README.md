# react-learning

Using bun.

Followin tutorial:https://www.youtube.com/watch?v=GMnWXlJnbNo&ab_channel=GentlemanProgramming

Created with:
bun create vite react-learning => React + Typescript + SWC

to install dependencies:
bun install


main.tsx => strict mode (modo estricto, controlar la manera en que funciona los componentes => va a crear un componente, lo va a montar, lo va a destruir, y va a ver si después de ello vuelve a estar igual => por eso se llama a la API x2 por ejemplo; en PROD se quita!!)
    => createRoot => crea donde va a estar el root de la app, en nuestro caso en el elemento 'root' (en index.html) y va a renderizar algo por default (ie bootstraping)
    y renderiza nuestro componente App


Componente react = function que se exporta (debe exportarse! así es visible/importable en otros archivos)

export default <Name> => default = puedo cambiar el nombre en el import
    => import XXX from "./xxx.tsx" en xxx.tsx ya está el default
    => import { algo } from 'yyy' sólo importa el 'algo' => es mejor opción ya que sólo importa lo que necesitamos!


### Detección de cambios en React
React debe detectar los cambios, igual que Angular, Vue... todos los component based, para poder cumplir como SPA.

Trigger => evento que inicia un proceso de render; por ejemplo un botón, el estado de un componente, una llamada a una API...
    tipos:
    => trigger inicial: cuando se monta un componente (se carga) => se renderiza 
    => re-render: cuando algo que ya se ha montaado se vuelve a renderizar, hay que tener cuidado con ello para no re-renderizar si no es necesario


React trabaja con DOM y DOM Virtual; 
React renderiza nuestra app (en el index.html) => cuando hay un cambio, hace los cambios en el DOM Virtual y lo compara, y si hay cambios en el DOM Virtual, re renderiza el componente que ha cambiado en el DOM 

al hacer <Component/> se ejecuta el return <html> del component => eso es renderizar =>> debemos tratar de evitar los re render porque el proceso de DOM vs DOM virtual y rerender es costoso !

qué es un commit (en react) => es cuando React compara DOM vs DOM Virtual y aplica el cambio (aplicar el cambio, renderizarlo)

trigger => (user hace un pedido)
renderiza => (el chef hace el plato, ejecuta el componente)
commit => (el mozo ve la mesa que no tiene plato, y le entrega el plato)


# 4 Componentes en React

Componentes = funcion que se ejecuta y cuyo resultado se mete en el html. Ex: main.tsx => create root => mete <App/> que es una funcion... (componente)
JSX = poner html y js junto => retorna HTML con lógica

Componente : tiene que ser la MÍNIMA UNIDAD DE LÓGICA POSIBLE; 

# 5 useState
componente tonto = no estado
componente inteligente = tiene logica (y estado normalmente)

reders:
    1=mount (al montar el componente)
    2=cuando cambia el estado
    3=async (fetch)


let localCount = 0;
const increaseLocalCount = () => { localCount += 1; console.log(localCount); } => No funciona si pongo en mi button ${localcount} y {increaseLocalCount}

useState = bindear (relacionar) una variable para que luego se pueda usar en el render; también devuelve una función para modificarlo

si uso el setCount varias veces, se guardan y se ejecutan todo al final (batching):
setCount((count) => count +1) => tomo primero el (count)!! entonces funciona
en cambio setCount(count + 1) => toma el count y le añade un 1 => 

batching = el render lo hace al terminar toda la ejecución de la lógica; 
const state = {
    value : 0,
    getValue: () => value,
    setValue(val) => value = val

}

# 6 useEffect 

vamos a escribir un hook (enganche) de react; en concreto un useEffect

useState nos da un hook que crea un estado y nos da la posibilidad de leer y escribir

useEffect = "nos ayuda a controlar el ciclo de vida del componente": es para syncronizar con entidades externas (por ejemplo para operaciones async, como llamadas a API, parametros de entrada..., context...; por ejemplo el padre me pasa una prop, y uso el useEffect para que cada vez que cambie, ejecute cierte lógica)
siempre es para algo 'de afuera'; 

SE PUEDE USAR mÁS de 1 USEEFFECT, tal vez para diferentes variables...

  - acepta un metodo  => la lógica que va a ejecutar el useEffect:
        => que logica? cuando se ejecuta? se ejecuta:
        - 1 al montar el componente
        - 2 cada vez que se modifique uno de los valores del state (de los que están en el arreglo de dependencias!)
        - si no se pasa arreglo de dependencias, se ejecuta cada vez que cambia cualquier valor del state

        si pongo un return, va a ejecutarse cada vez que el componente muera; 
  - acepta un arreglo de dependencias

useEffect NO ES para variables INTERNAS!

 ej: 
 
 const [loading, setLoading] = useState(false)
 useEffect(()=>{console.info(loading) },[loading]) => MAL USADO, se va a ejecutar, pero no hace falta el useEffect...

 const consoleLoader = (loadingValue:boolean) => {
    console.info(loading)
 } => BIEN USADO, lo uso cada vez que cambio el loading, y no uso un useEffect mal;



