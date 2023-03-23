import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postClient } from '../../redux/actions';
import { useNavigate } from 'react-router';

function AltaClient() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [client, setClient] = useState('');
  const [cuit, setCuit] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    if (client && cuit) {
      dispatch(
        postClient({
          client,
          cuit,
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
                <button type="submit" className="button primary">
                  CREAR
                </button>
              </li>
            </ul>
          </form>
        </div>
      )}
    </div>
  );
}

export default AltaClient;
