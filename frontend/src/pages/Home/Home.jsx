import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Travel from '../../components/Travel/Travel';
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
      {travels?.map((el) => {
        return (
          <Travel
            id={el.id}
            name={el.name}
            lastname={el.lastname}
            dni={el.dni}
            patente={el.patente}
            cuit={el.cuit}
            origen={el.origen}
            destino={el.destino}
          />
        );
      })}
    </div>
  );
};

export default Home;
