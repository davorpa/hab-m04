'use strict';

import temperatures from "./data.js";

// Temp. menor que 20: fondo azul
// Temp. entre 20 y 30: fondo naranja
// Temp. mayor de 30: fondo rojo

/*
<table>
    <caption>Temperaturas</caption>
    <thead>
        <th>Ciudad</th>
        <th>Mínima</th>
        <th>Máxima</th>
    </thead>
    <tr>
        <td>A Coruña</td>
        <td>17</td>
        <td>23</td>
    </tr>
    tr....
</table>
*/

const body = document.body;
