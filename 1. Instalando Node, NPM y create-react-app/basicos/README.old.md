# CREATE-REACT-APP

- Herramienta desarrollada por Facebook
- Una forma sencilla de comenzar a crear proyectos en React.
- Podrás comenzar a escribir código de React en un par de minutos.
- Te evita tener que configurar webpack, babel o parcel.
- Funciona con Mac, Windows o Linux.
- Requiere NodeJS con NPM para instalarse.
- Se puede instalar con Yarn.

## webpack

webpack es un _bundler_ (paquete) de módulos para aplicaciones JavaScript modernas.

webpack procesa la aplicación y mapea todas las dependencias de un módulo, con esto crea uno o varios paquetes o bundlers.

Con webpack podrás incorporar dependencias tales como archivos CSS, Módulos JavaScript, otras librerías JavaScript en tu proyecto, tendrás además un servidor local con Live Reload.

Además de transpilar tu código de JavaScript Moderno a versiones anteriores de JavaScript para mayor compatibilidad con Babel.

## React Hooks

Disponibles desde la versión 16.8 y seguirán en la version 17 siendo la principal forma de escribir código en React.

Te permitirán actualizar el State sin necesidad de crear un Class Component.

La cantidad de código es menor.

### USESTATE

Hooks vienen con una función llamada useState.

```jsx
import React, { useState } from "react";
```

Esta función al extraer sus valores cuenta con 2 partes:

```jsx
const [clients, saveClients] = useState([]);
```

clients = Tiene  el state actual

saveClients = Cambia el state

### Beneficios de los Hooks

Menor cantidad de código.

Mayor facilidad para implementar reducers, administrar el state y context.

### Los Hooks se dividen en 2 grupos

#### Básicos
(en 100% de tus proyectos)

`useState`

`useEffect`

#### Avanzados
(tal vez no en todos tus proyectos)

`useContext`

`useRef`

`useReducer`

`useCallback`

`useMemo`



