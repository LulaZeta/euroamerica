import React from 'react';

const Travel = ({
  id,
  name,
  lastname,
  dni,
  patente,
  cuit,
  origen,
  destino,
}) => {
  return (
    <div>
      <h3>
        <strong>Chofer: </strong> {name} {lastname}
      </h3>
      <h2>
        <strong>dni: </strong> {dni}
      </h2>
      <h2>
        <strong>patente: </strong> {patente}
      </h2>
      <h2>
        <strong>Cuit Client: </strong> {cuit}
      </h2>
      <h2>
        <strong>Origen: </strong> {origen}
      </h2>
      <h2>
        <strong>Destino: </strong> {destino}
      </h2>
      <h2>
        <strong>Id: </strong> {id}
      </h2>
    </div>
  );
};

export default Travel;
