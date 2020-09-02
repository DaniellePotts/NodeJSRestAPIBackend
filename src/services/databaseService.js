class DatabaseService {
    constructor(databaseClient) {
        this.databaseClient = databaseClient;
    }

    async get(query) {
        return this.databaseClient.get(query);
    }

    async put(object) {
        this.databaseClient.put(object);
    }
}

module.exports = {
    DatabaseService,
};
