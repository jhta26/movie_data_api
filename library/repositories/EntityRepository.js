class EntityRepository {
    constructor({ entityName, database }) {
        this._entityName = entityName;
        this._database = database;
    }

    async getAll() {
        try {
            const allEntities = await this._database(this._entityName);
            return allEntities;
        } catch (error) {
            throw error;
        }
    }

    async create({ attributes }) {
        try {

            var [record] = await this._database(this._entityName).insert(
                attributes,
                '*'
            );

            return Object.assign({}, record);
        } catch (error) {
            throw error;
        }
    }

    async getById(id) {
        try {
            const [entity] = await this._database(this._entityName).where({ id });
            return entity;
        } catch (error) {
            throw error;
        }
    }

    async findByUserId(id) {
        try {
            const data = await this._database(this._entityName)
                .where('user_id', id);

            return data;
        } catch (error) {
            throw error;
        }
    }
    async findByMovieId(id) {
        try {
            const data = await this._database(this._entityName)
                .where('movie_id', id);

            return data;
        } catch (error) {
            throw error;
        }
    }



    async findByAttribute(attributeName, attributeValue) {
        try {
            const records = await this._database(this._entityName).where(
                attributeName,
                attributeValue
            );
            return records;
        } catch (error) {
            throw error;
        }
    }

    async updateById(id, body) {
        try {

            const [ent] = await this._database(this._entityName)
                .update(body, '*')
                .where({ id });

            return ent;
        } catch (error) {
            throw error;
        }
    }

    async deleteById(id) {
        try {
            const [ent] = await this._database(this._entityName)
                .del('*')
                .where({ id });
            return ent;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = EntityRepository;