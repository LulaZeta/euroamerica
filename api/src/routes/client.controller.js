// 'use strict';

// const {Client, Travel}=require('../db')

// export.postNewClient = async (req, res,next) =>{
//     const { client, cuit } = req.body;
//     try {
//       if (!client) {
//         return res.status(401).send({ info: 'no clientName' });
//       }
//       if (!cuit) {
//         return res.status(401).send({ info: 'no cuit' });
//       }
//       await Client.findOrCreate({
//         where: {
//           client,
//           cuit,
//         },
//       });

//       return res.status(200).send(`Cliente ${client} registrado con éxito`);
//     } catch (error) {
//       next(error);
//     }
// }
