import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postTravel } from '../../redux/actions';

function AltaViaje() {
  const dispatch = useDispatch();
  const saveTravel = useSelector((state) => state.newTravel);
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [dni, setDni] = useState('');
  const [patente, setPatente] = useState('');
  const [cuit, setCuit] = useState('');
  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      postTravel({
        name,
        lastname,
        dni,
        patente,
        cuit,
        origen,
        destino,
      })
    );
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <ul className="form-container">
          <li>
            <h2>Alta Viaje</h2>
          </li>
          <li>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              id="name"
              onChange={(e) => setName(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="lastname">Apellido</label>
            <input
              type="text"
              name="lastname"
              value={lastname}
              id="lastname"
              onChange={(e) => setLastname(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="dni">DNI</label>
            <input
              type="text"
              name="dni"
              value={dni}
              id="dni"
              onChange={(e) => setDni(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="name">Patente</label>
            <input
              type="text"
              name="patente"
              value={patente}
              id="patente"
              onChange={(e) => setPatente(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="name">Cuit</label>
            <input
              type="text"
              name="cuit"
              value={cuit}
              id="cuit"
              onChange={(e) => setCuit(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="name">Origen</label>
            <input
              type="text"
              name="origen"
              value={origen}
              id="origen"
              onChange={(e) => setOrigen(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="name">Destino</label>
            <input
              type="text"
              name="destino"
              value={destino}
              id="destino"
              onChange={(e) => setDestino(e.target.value)}
            ></input>
          </li>
          <li>
            <button type="submit">CREAR</button>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default AltaViaje;
