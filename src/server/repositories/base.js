class Repository {
    constructor(Model) {
        this.Model = Model;
    }

    async getAll() {
        return this.Model.find();
    }

    async create(data) {
        const doc = new this.Model(data);
        await doc.save();
    }

    getCount() {
        return this.Model.count();
    }

    deleteAll() {
        return this.Model.deleteMany({});
    }
}

export default Repository;
