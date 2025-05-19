// controllers/ToDoController.js
import "../../bootstrap/app.js"
import TodoModel from "../Models/TodoModel.js";

export default (function () {

    const MAX_LIMIT = 100;

    return {

        // GET /todos
        'list': async (req, res) => {

            const limit = parseInt(req.query.limit) || 100;
            const offset = parseInt(req.query.offset) || 0;

            if (limit > MAX_LIMIT) {
                return res.status(400).json({ error: 'Limit máximo: 100.' });
            }

            // TodoModel.findAll(options: {...})
            // limit: int
            // offset: int
            // order: [field, ASC or DESC]

            return res.status(200).json({
                rows: [],
                limit: limit
            });

        },

        // GET /todos/:id
        'get': async (req, res) => {




            const id = req.params.id;

            // TodoModel.findByPk(id)

            return res.status(404).json({ error: 'Tarefa não encontrada.' });
        },

        // POST /todos
        'insert': async (req, res) => {
            const title = req.body.title;
            const is_checked = req.body.is_checked;

            // TodoModel.create({ ... });

            return res.status(404).json({ error: 'Tarefa não encontrada.' });
        },

        // PUT /todos/:id
        'update': async (req, res) => {
            const id = req.params.id;
            const title = req.body.title;
            const is_checked = req.body.is_checked || false;

            // TodoModel.update({...}, {where: {...}, returning: true})
            // resposta [colunasAtualizadas, [{...}, {...}, ...]]

            return res.status(404).json({ error: 'Tarefa não encontrada.' });
        },

        // DELETE /todos/:id
        'delete': async (req, res) => {
            const { id } = req.params;

            // todo.destroy
            return res.status(404).json({ error: 'Tarefa não encontrada.' });
        },

    };
})();
