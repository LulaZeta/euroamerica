## Backend

1.  POST NEWCLIENT: http://localhost:3001/client/newclient

    body:

         {
         "client": "JuanCarlos",
         "cuit": "20-25896345-6"
         }

    RETORNA:

    Cliente JuanCarlos registrado con éxito

2.  GET_ALL_CLIENT : http://localhost:3001/clients

        [
        {
        "id": 1,
        "client": "JuanCarlos",
        "cuit": "20-25896345-6",
        "createdAt": "2023-03-23T12:07:55.162Z",
        "updatedAt": "2023-03-23T12:07:55.162Z",
        "travels": [
        {
        "id": 2,
        "name": "Ramiro",
        "lastname": "Garnie",
        "dni": 59632747,
        "patente": "AB 123 58",
        "cuit": "20-25896345-6",
        "origen": "inicio",
        "destino": "final",
        "createdAt": "2023-03-23T12:08:51.764Z",
        "updatedAt": "2023-03-23T12:08:51.837Z",
        "clientId": 1
        },
        {
        "id": 1,
        "name": "Carmelo",
        "lastname": "Garnie",
        "dni": 59632746,
        "patente": "AB 123 58",
        "cuit": "20-25896345-6",
        "origen": "inicio",
        "destino": "final",
        "createdAt": "2023-03-23T12:08:38.550Z",
        "updatedAt": "2023-03-23T12:08:38.668Z",
        "clientId": 1
        }
        ]
        }
        ]

3.  GET CLIENT : http://localhost:3001/clients

    body:

         {
         "client": "JuanCarlos"
         }

RETORNA:

    [
    {
    "id": 1,
    "client": "JuanCarlos",
    "cuit": "20-25896345-6",
    "createdAt": "2023-03-23T12:07:55.162Z",
    "updatedAt": "2023-03-23T12:07:55.162Z",
    "travels": [
    {
    "id": 1,
    "name": "Carmelo",
    "lastname": "Garnie",
    "dni": 59632746,
    "patente": "AB 123 58",
    "cuit": "20-25896345-6",
    "origen": "inicio",
    "destino": "final",
    "createdAt": "2023-03-23T12:08:38.550Z",
    "updatedAt": "2023-03-23T12:08:38.668Z",
    "clientId": 1
    },
    {
    "id": 2,
    "name": "Ramiro",
    "lastname": "Garnie",
    "dni": 59632747,
    "patente": "AB 123 58",
    "cuit": "20-25896345-6",
    "origen": "inicio",
    "destino": "final",
    "createdAt": "2023-03-23T12:08:51.764Z",
    "updatedAt": "2023-03-23T12:08:51.837Z",
    "clientId": 1
    }
    ]
    }
    ]

4.  POST_TRAVEL : http://localhost:3001/travel

    Body:

        {
            "name": "Ricardo",
            "lastname": "Garcia",
            "dni": 59632748,
            "patente":"AB 123 58" ,
            "cuit": "20-25896345-6",
            "origen": "inicio",
            "destino": "final"
        }

        RETORNA:
        {
        "id": 3,
        "name": "Ricardo",
        "lastname": "Garcia",
        "dni": 59632748,
        "patente": "AB 123 58",
        "cuit": "20-25896345-6",
        "origen": "inicio",
        "destino": "final",
        "updatedAt": "2023-03-23T12:20:01.460Z",
        "createdAt": "2023-03-23T12:20:01.315Z",
        "clientId": 1

    }

5.  GET_ALL_TRAVELS: http://localhost:3001/travels

        [
        {
        "id": 2,
        "name": "Ramiro",
        "lastname": "Garnie",
        "dni": 59632747,
        "patente": "AB 123 58",
        "cuit": "20-25896345-6",
        "origen": "inicio",
        "destino": "final",
        "createdAt": "2023-03-23T12:08:51.764Z",
        "updatedAt": "2023-03-23T12:08:51.837Z",
        "clientId": 1,
        "client": {
        "id": 1,
        "client": "JuanCarlos",
        "cuit": "20-25896345-6",
        "createdAt": "2023-03-23T12:07:55.162Z",
        "updatedAt": "2023-03-23T12:07:55.162Z"
        }
        },
        {
        "id": 1,
        "name": "Carmelo",
        "lastname": "Garnie",
        "dni": 59632746,
        "patente": "AB 123 58",
        "cuit": "20-25896345-6",
        "origen": "inicio",
        "destino": "final",
        "createdAt": "2023-03-23T12:08:38.550Z",
        "updatedAt": "2023-03-23T12:08:38.668Z",
        "clientId": 1,
        "client": {
        "id": 1,
        "client": "JuanCarlos",
        "cuit": "20-25896345-6",
        "createdAt": "2023-03-23T12:07:55.162Z",
        "updatedAt": "2023-03-23T12:07:55.162Z"
        }
        }
        ]

6.  GET_TRAVEL_By_ID: http://localhost:3001/travels/1

        {
        "id": 1,
        "name": "Carmelo",
        "lastname": "Garnie",
        "dni": 59632746,
        "patente": "AB 123 58",
        "cuit": "20-25896345-6",
        "origen": "inicio",
        "destino": "final",
        "createdAt": "2023-03-23T12:08:38.550Z",
        "updatedAt": "2023-03-23T12:08:38.668Z",
        "clientId": 1,
        "client": {
        "cuit": "20-25896345-6",
        "client": "JuanCarlos"
        }
        }

7.  PUT_TRAVEL :http://localhost:3001/travel/1

    Por Body:

        {
        "name": "Jorge",
        "lastname": "Perez",
        "dni": 59632745,
        "patente":"AB 123 58" ,
        "cuit": "20-25896345-6",
        "origen": "Es lo Que ...",
        "destino": "Siempre se puede mejorar la mejora"
        }

        RETORNA:

        {
        "modificado": true

         }

8.  DELETE TRAVEL: http://localhost:3001/travel/3

    Retorna:

        {
        "delete": true

        }
