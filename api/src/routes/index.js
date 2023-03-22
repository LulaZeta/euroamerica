const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const axios = require('axios');

const { Product, Client } = require('../db');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const getDbClients = async () => {
  return await Client
    .findAll
    //     {
    //     include: {
    //       model: Product,
    //       attributes: [cuit],
    //       through: {
    //         attributes: [],
    //       },
    //     },
    //   }
    ();
};

const getDbProducts = async () => {
  return await Product.findAll();
};

router.post('/client/newclient', async (req, res, next) => {
  const { client, cuit } = req.body;
  try {
    if (!client) {
      res.status(401).send({ info: 'no clientName' });
      return;
    }
    if (!cuit) {
      res.status(401).send({ info: 'no cuit' });
      return;
    }
    const newClient = await Client.findOrCreate({
      where: {
        client,
        cuit,
      },
    });

    res.status(200).send(`Cliente ${client} registrado con éxito`);
  } catch (error) {
    next(error);
  }
});

//  -----*** GET CLIENT ***------
//tengo que enlazar los productos(VIAJES)de los clientes

router.get('/clients', async (req, res, next) => {
  const { client } = req.body;
  try {
    let clients = await getDbClients();
    res.status(200).json(clients);
  } catch (error) {
    next(error);
  }
});

// ****** ------- VIAJES  ------- *******

// ------     POST NEW TRAVEL    --------
router.post('/travel', async (req, res, next) => {
  const { name, lastname, dni, patente, cuit, origen, destino } = req.body;
  try {
    if (!name) {
      res.status(401).send({ info: 'nombre del chofer' });
      return;
    }
    if (!lastname) {
      res.status(401).send({ info: 'apellido del chofer' });
      return;
    }
    if (!dni) {
      res.status(401).send({ info: 'dni chofer' });
      return;
    }
    if (!patente) {
      res.status(401).send({ info: 'completar patente' });
      return;
    }
    if (!cuit) {
      res.status(401).send({ info: 'completar cuit del cliente' });
      return;
    }
    if (!origen) {
      res.status(401).send({ info: 'De dónde venimos???' });
      return;
    }
    if (!destino) {
      res.status(401).send({ info: 'A dónde vamos???' });
      return;
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
    await Client.findAll({
      where: { cuit: cuit },
    })
      .then((el) => {
        // console.log('el:', el[0]);
        newTravel.setClient(el[0]);
      })
      .then(() => {
        res.status(201).send(newTravel);
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
    let travel = await Product.destroy({
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
    let act = await Product.update(travel, {
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
    res.status(200).json(travels);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
