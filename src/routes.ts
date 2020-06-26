import express from 'express';

const routes = express.Router();

routes.get('/', (request, response) => {
    response.json({ message: "express /"});
});

export default routes