import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postClient } from '../../redux/actions';

function AltaClient() {
  const dispatch = useDispatch();
  const saveClient = useSelector((state) => state.newClient);
  const [client, setClient] = useState('');
  const [cuit, setCuit] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      postClient({
        client,
        cuit,
      })
    );
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <ul className="form-container">
          <li>
            <h2>Alta Cliente</h2>
          </li>
          <li>
            <label htmlFor="name">Cliente</label>
            <input
              type="text"
              name="client"
              value={client}
              id="client"
              onChange={(e) => setClient(e.target.value)}
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
            <button type="submit">CREAR</button>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default AltaClient;
