import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTravel } from '../../redux/actions';
import { useNavigate, useParams } from 'react-router-dom';

function EditarViaje() {
  const { id } = useParams();
  const navigate = useNavigate();
  //console.log(id);

  const dispatch = useDispatch();
  const allTravels = useSelector((state) => state.allTravels);
  const [data, setData] = useState({
    name: '',
    lastname: '',
    dni: '',
    patente: '',
    cuit: '',
    origen: '',
    destino: '',
  });

  useEffect(() => {
    const newData = allTravels.find((t) => t.id === Number(id));
    if (newData) {
      setData((old) => ({ ...old, ...newData }));
    }
  }, []);
  //   const [name, setName] = useState(
  //     allTravels.find((t) => t.id === Number(id))?.name || ''
  //   );
  //   const [lastname, setLastname] = useState(
  //     allTravels.find((t) => t.id === Number(id))?.lastname || ''
  //   );
  //   const [dni, setDni] = useState(
  //     allTravels.find((t) => t.id === Number(id))?.dni || ''
  //   );
  //   const [patente, setPatente] = useState(
  //     allTravels.find((t) => t.id === Number(id))?.patente || ''
  //   );
  //   const [cuit, setCuit] = useState(
  //     allTravels.find((t) => t.id === Number(id))?.cuit || ''
  //   );
  //   const [origen, setOrigen] = useState(
  //     allTravels.find((t) => t.id === Number(id))?.origen || ''
  //   );
  //   const [destino, setDestino] = useState(
  //     allTravels.find((t) => t.id === Number(id))?.destino || ''
  //   );

  const handleOnChange = (e) => {
    setData((d) => ({
      ...d,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateTravel({
        ...data,
        id,
      })
    )
      .then(() => navigate('/'))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <ul className="form-container">
          <li>
            <h2>Editar Viaje</h2>
          </li>
          <li>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={data.name}
              id="name"
              onChange={(e) => handleOnChange(e)}
            ></input>
          </li>
          <li>
            <label htmlFor="lastname">Apellido</label>
            <input
              type="text"
              name="lastname"
              value={data.lastname}
              id="lastname"
              onChange={(e) => handleOnChange(e)}
            ></input>
          </li>
          <li>
            <label htmlFor="dni">DNI</label>
            <input
              type="text"
              name="dni"
              value={data.dni}
              id="dni"
              onChange={(e) => handleOnChange(e)}
            ></input>
          </li>
          <li>
            <label htmlFor="name">Patente</label>
            <input
              type="text"
              name="patente"
              value={data.patente}
              id="patente"
              onChange={(e) => handleOnChange(e)}
            ></input>
          </li>
          <li>
            <label htmlFor="name">Cuit</label>
            <input
              type="text"
              name="cuit"
              value={data.cuit}
              id="cuit"
              onChange={(e) => handleOnChange(e)}
            ></input>
          </li>
          <li>
            <label htmlFor="name">Origen</label>
            <input
              type="text"
              name="origen"
              value={data.origen}
              id="origen"
              onChange={(e) => handleOnChange(e)}
            ></input>
          </li>
          <li>
            <label htmlFor="name">Destino</label>
            <input
              type="text"
              name="destino"
              value={data.destino}
              id="destino"
              onChange={(e) => handleOnChange(e)}
            ></input>
          </li>
          <li>
            <button type="submit">EDITAR</button>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default EditarViaje;
