export default class BaseController {
    constructor(Model) {
        this.Model = Model;
        this.modelName = Model.modelName;
    }

    async getAll(req, res) {
        res.json(await this.Model.find({}));
    }

    async get(req, res) {
        res.json(await this.Model.findOne({_id: req.params.id}));
    }

    async create(req, res) {
        try {
            const doc = new this.Model(req.body);
            await doc.save();
            res.status(201).json({
                message: `${this.modelName} created`
            });
        } catch (err) {
            res.status(400).json({
                message: err.message
            });
        }
    }

    async deleteAll(req, res) {
        await this.Model.deleteMany({});
        res.json({
            message: `${this.modelName}s purged`
        });
    }

    async delete(req, res) {
        await this.Model.findByIdAndRemove(req.params.id);
        res.json({
            message: `${this.modelName} deleted`
        });
    }
}
