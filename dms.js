class DMS {
    constructor(token) {
        console.log(token);
        this.token = token;
    }
}

module.exports = (token) => { return new DMS(token); };