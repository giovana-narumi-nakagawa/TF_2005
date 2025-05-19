import { Router } from 'express';
import ApiController from '../app/Controllers/ApiController.js';
import TodoApiController from '../app/Controllers/TodoApiController.js';

export default (function () {

    const router = Router();

    router.get('/todos', TodoApiController.list);

    router.get('/todos/:id', TodoApiController.get);

    router.post('/todos', TodoApiController.insert);

    router.put('/todos/:id', TodoApiController.update);

    router.delete('/todos/:id', TodoApiController.delete);

    return router;

})();