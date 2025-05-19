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