# FrontEnd - Módulo 4, Ejercicio 3

## Descripción proyecto

Este proyecto consiste en una página web para un hospital ficticio, incluyendo sus diferentes servicios y personal médico.
Se continúa con el proyecto iniciado en el Ejercicio 1 de este módulo.

## Implementación de Vistas Complejas con ReactJS

Se implementan las vistas de Inicio, Doctores y Citas. Para ello se utiliza ruteo mediante `react-router`, y se accede a cada vista a través de la `Navbar`.
En la vista de Citas se validan todos los campos a ingresar, y se obtiene el listado de servicios y doctores desde los .json mediante fetch.

## Optimización del DOM Virtual y Uso de Fragmentos

Se utiliza la sintaxis `<>` en desmedro de los fragmentos para la optimización de componentes anidados, en lugar de otros componentes más pesados como `<div>`.
Además, se utiliza `useContext` para definir datos fijos (en este caso, el nombre de usuario) y que componentes anidados los puedan consumir (en este caso, `Navbar`) sin tener que pasar dicha información como props. Además, se utiliza `useState` para actualizar los estados de los componentes de manera eficiente y sólo cuando los datos sufren modificaciones.

## Uso de Referencias y Callbacks

En `AppointmentForm` se utilizan referencias tanto para enfocar el primer input del formulario, asi como también para limpiar el estado de los parámetros ingresados luego de terminar el registro.

## Manejo de Datos con API REST Simulada

Se simula solicitar datos a una API REST utilizando `fetch` desde archivos .json incluidos en el proyecto, los cuales se llaman desde el hook `useEffect` y se utilizan de manera asíncrona.

## Comprobación de Tipos con PropTypes

Se utilizan propTypes en los componentes `DoctorCard` y `ServicesList`.

## Instrucciones de uso

Requiere Node.js y npm instalados para su uso. Ejecutar el comando `npm run dev` desde la raíz del proyecto para ejecutarlo.