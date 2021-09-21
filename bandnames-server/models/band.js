const { v4: uuidv4 } = require('uuid'); // npm i uuid: para generar ids

class Band {

    constructor( name ) {
        
        this.id = uuidv4();
        this.name = name;
        this.votes = 0;

    }

}

module.exports = Band;