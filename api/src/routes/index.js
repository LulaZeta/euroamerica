const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const { Product, Client } = require('../db');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const getDbProducts = async () => {
  return await Product.findAll({
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
        include: Product,
      });
      return client.length
        ? res.status(201).send(clients)
        : res.status(404).send('No se encontro cliente');
    } else {
      clients = await Client.findAll({
        include: Product,
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
    }

    const newTravel = await Product.create({
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

    // res.status(200).json(newTravel);
  } catch (error) {
    next(error);
  }
});

//  -------- ***BAJA TRAVEL: DELETE ***--------
router.delete('/travel/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    await Product.destroy({
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
    await Product.update(travel, {
      where: {
        id: id,
      },
    });
    return res.json({ modificado: true });
  } catch (error) {
    next(error);
  }
});

//  ---------------GET TRAVEL -----------------

router.get('/travels', async (req, res, next) => {
  try {
    let travels = await getDbProducts();
    return res.status(200).json(travels);
  } catch (error) {
    next(error);
  }
});

//-------travel by id----
router.get('/travels/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    let detailTravel = await Product.findByPk(id, {
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
