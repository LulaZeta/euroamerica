import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTravel, postTravel } from '../../redux/actions';
import { useNavigate, useParams } from 'react-router-dom';

function FormularioViaje() {
  const { id } = useParams();
  const navigate = useNavigate();
  //console.log(id);

  const dispatch = useDispatch();
  const allTravels = useSelector((state) => state.allTravels);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: '',
    lastname: '',
    dni: '',
    patente: '',
    cuit: '',
    origen: '',
    destino: '',
  });

  // const Validator = (name, value) => {
  //   if (name === 'name' && (typeof value === 'string' || value === '')) {
  //     return value;
  //   }
  //   if (name === 'lastname' && typeof value === 'string') {
  //     return value;
  //   }
  //   if (name === 'dni' && typeof value === 'number') {
  //     return value;
  //   }
  //   if (name === 'name' && typeof value === 'string') {
  //     return value;
  //   }
  //   if (name === 'name' && typeof value === 'string') {
  //     return value;
  //   }
  //   return null;
  // };

  useEffect(() => {
    const newData = allTravels.find((t) => t.id === Number(id));
    if (newData) {
      setData((old) => ({ ...old, ...newData }));
    }
  }, [allTravels, id]);

  const handleOnChange = (e) => {
    // if (Validator(e.target.name, e.target.value) === null) {
    //   alert('valor inválido');
    //   return;
    // }
    setData((d) => ({
      ...d,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);

    if (
      data.name &&
      data.lastname &&
      data.cuit &&
      data.destino &&
      data.dni &&
      data.origen &&
      data.patente
    ) {
      if (id) {
        dispatch(
          updateTravel({
            ...data,
            id,
          })
        )
          .then(() => {
            setLoading(false);
            navigate('/');
          })
          .catch((err) => {
            setLoading(false);
            console.log(err);
          });
      } else {
        dispatch(
          postTravel({
            ...data,
          })
        )
          .then(() => {
            setLoading(false);
            navigate('/');
          })
          .catch((err) => {
            setLoading(false);
            console.log(err);
          });
      }
    } else {
      alert('Por favor, complete los campos');
      setLoading(false);
    }
  };
  return (
    <div>
      {loading ? (
        <div>loading ....</div>
      ) : (
        <div className="form">
          <form onSubmit={submitHandler}>
            <ul className="form-container">
              <li>{id ? <h2>Editar Viaje</h2> : <h2>Alta Viaje</h2>}</li>
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
                <button type="submit" className="button primary">
                  {id ? 'EDITAR' : 'ENVIAR'}
                </button>
              </li>
            </ul>
          </form>
        </div>
      )}
    </div>
  );
}

export default FormularioViaje;
