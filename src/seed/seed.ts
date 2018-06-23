
import { exec as execCallback } from "child_process"
import { Connection, createConnection } from "typeorm"
import { promisify } from "util"

import * as path from "path"
import dbConfig from "../../ormconfig"
import seedCompany from "./seedCompany"
import seedUsers from "./seedUsers"

const exec = promisify(execCallback)
console.log('sdf')
console.log(`npm run ts-node ${path.join(__dirname, '..', '..', 'node_modules', 'typeorm', 'cli.js')} schema:drop`)
exec(`npm run ts-node ${path.join(__dirname, '..', '..', 'node_modules', 'typeorm', 'cli.js')} schema:drop`)
    .then(() => exec(`npm run ts-node node_modules\\typeorm\\cli.js schema:sync`))
    .then(() => createConnection(<any>dbConfig))
    .then(seed)
    .then(() => {
        console.log('done')
        process.exit()
    }).catch(console.log)


async function seed(connecion: Connection) {
    await seedCompany(connecion)
    await seedUsers(connecion)

}
