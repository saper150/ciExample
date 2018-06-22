import "reflect-metadata"
import { createKoaServer, useContainer as routingUserContainer } from "routing-controllers"
import { Container } from "typedi"
import { createConnection, useContainer as typeormUseContainer } from "typeorm"

import dbConfig from "../ormconfig"

routingUserContainer(Container)
typeormUseContainer(Container)

export default createConnection(<any>dbConfig).then(() =>
    createKoaServer({
        controllers: [
            `${__dirname}/controllers/*.js`,
            `${__dirname}/controllers/*.ts`
        ]
    })
)
