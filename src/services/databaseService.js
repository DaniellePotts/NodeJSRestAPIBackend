class DatabaseService{
    constructor(databaseClient){
        this.databaseClient = databaseClient;
    }

    async get(query){
        return await this.databaseClient.get(query);
    }
   
    async put(object){
        return await this.databaseClient.put(object);
    }
}

module.exports = {
    DatabaseService
}