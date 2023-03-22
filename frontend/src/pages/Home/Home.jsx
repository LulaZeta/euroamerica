import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTravels, deleteTravel } from '../../redux/actions';

const Home = () => {
  const travels = useSelector((state) => state.allTravels);
  const borrarTravel = useSelector((state) => state.travel);
  const dispatch = useDispatch();

  useEffect(
    (e) => {
      dispatch(getAllTravels());
    },
    [dispatch, borrarTravel]
  );

  function handleDelete(el) {
    dispatch(deleteTravel(el.id));
    alert('la actividad fue borrada');
  }

  return (
    <div>
      <h3>VIAJES</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Dni</th>
            <th>Patente</th>
            <th>Cuit</th>
            <th>Origen</th>
            <th>Destino</th>
          </tr>
        </thead>
        <tbody>
          {travels?.map((el) => (
            <tr key={el.id}>
              <td>{el.id}</td>
              <td>{el.name}</td>
              <td>{el.lastname}</td>
              <td>{el.dni}</td>
              <td>{el.patente}</td>
              <td>{el.cuit}</td>
              <td>{el.origen}</td>
              <td>{el.destino}</td>
              <td>
                {/* <button className="button" onClick={() => openModal(product)}>
                    Edit
                  </button>{' '} */}
                <button className="button" onClick={() => handleDelete(el)}>
                  BORRAR
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
