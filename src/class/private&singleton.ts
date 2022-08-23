export class DataBase {
    constructor(
        private host: string,
        private user: string,
        private password: string
    ) {}

    connect(): void {
        console.log(`User: ${this.user} - ${this.host}`)
    }

}

const db1 = new DataBase("LadysGoe", "LadySnow", "1234");
console.log(db1);
db1.connect();