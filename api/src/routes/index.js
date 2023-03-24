const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const { Travel, Client } = require('../db');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const getDbTravels = async () => {
  return await Travel.findAll({
    include: Client,
  });
};

router.post('/client/newclient', async (req, res, next) => {
  const { client, cuit } = req.body;
  try {
    if (!client) {
      return res.status(401).send({ info: 'no clientName' });
    }
    if (!cuit) {
      return res.status(401).send({ info: 'no cuit' });
    }
    await Client.findOrCreate({
      where: {
        client,
        cuit,
      },
    });

    return res.status(200).send(`Cliente ${client} registrado con éxito`);
  } catch (error) {
    next(error);
  }
});

//  -----*** GET CLIENTS ***------

router.get('/clients', async (req, res, next) => {
  const { client } = req.body;
  try {
    let clients;
    if (client) {
      clients = await Client.findAll({
        where: {
          client: client,
        },
        include: Travel,
      });
      return client.length
        ? res.status(201).send(clients)
        : res.status(404).send('No se encontro cliente');
    } else {
      clients = await Client.findAll({
        include: Travel,
      });
      return clients.length
        ? res.status(200).send(clients)
        : res.status(400).send('No existen clientes');
    }
  } catch (error) {
    next(error);
  }
});

// ****** ------- VIAJES  ------- *******

// ------     POST NEW TRAVEL    --------
router.post('/travel', async (req, res, next) => {
  const { name, lastname, dni, patente, cuit, origen, destino } = req.body;
  try {
    if (
      !name ||
      !lastname ||
      !dni ||
      !patente ||
      !cuit ||
      !origen ||
      !destino
    ) {
      return res.status(401).send({ info: 'data incompleta' });
    } else {
      const checkCuit = await Client.findOne({
        where: {
          cuit: cuit,
        },
      });
      //console.log(checkCuit);
      if (checkCuit === null) {
        return res.status(401).send({ info: 'Cliente inexistente' });
      }
      {
        const newTravel = await Travel.create({
          name,
          lastname,
          dni,
          patente,
          cuit,
          origen,
          destino,
        });
        return await Client.findAll({
          where: { cuit: cuit },
        })
          .then((el) => {
            // console.log('el:', el[0]);
            newTravel.setClient(el[0]);
            return res.status(201).send(newTravel);
          })

          .catch((err) => {
            console.log('err    :', err);
            res.status(404).send({ info: err });
          });
      }
    }

    // res.status(200).json(newTravel);
  } catch (error) {
    next(error);
  }
});

//  -------- ***BAJA TRAVEL: DELETE ***--------
router.delete('/travel/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    await Travel.destroy({
      where: {
        id: id,
      },
    });
    return res.json({ delete: true });
  } catch (error) {
    next(error);
  }
});

//------------ MODIFICACION: PUT -----------------
router.put('/travel/:id', async (req, res, next) => {
  const id = req.params.id;
  const travel = req.body; //lo q me pasan por body de las propiedades activities

  try {
    if (
      !travel.name ||
      !travel.lastname ||
      !travel.dni ||
      !travel.patente ||
      !travel.cuit ||
      !travel.origen ||
      !travel.destino
    ) {
      return res.status(401).send({ info: 'data incompleta' });
    } else {
      const checkCuit = await Client.findOne({
        where: {
          cuit: travel.cuit,
        },
      });
      //console.log(checkCuit);
      if (checkCuit === null) {
        return res.status(401).send({ info: 'Cliente inexistente' });
      }
      {
        const newTravel = await Travel.update(travel, {
          where: {
            id: id,
          },
        });

        return res.status(200).send({
          modificado: true,
        });
      }
    }
  } catch (error) {
    next(error);
  }
});

//  ---------------GET TRAVEL -----------------

router.get('/travels', async (req, res, next) => {
  try {
    let travels = await getDbTravels();
    return res.status(200).json(travels);
  } catch (error) {
    next(error);
  }
});

//-------travel by id----
router.get('/travels/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    let detailTravel = await Travel.findByPk(id, {
      include: {
        model: Client,
        required: false,
        attributes: ['cuit', 'client'],
      },
    });
    return detailTravel
      ? res.status(200).send(detailTravel)
      : res.status(404).send('no se encuentra');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
