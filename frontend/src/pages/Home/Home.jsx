import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTravels } from '../../redux/actions';

const Home = () => {
  const travels = useSelector((state) => state.allTravels);
  const dispatch = useDispatch();

  useEffect(
    (e) => {
      dispatch(getAllTravels());
    },
    [dispatch]
  );

  return (
    <div>
      <h3>VIAJES</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
