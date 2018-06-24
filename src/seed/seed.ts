
import { exec as execCallback } from "child_process"
import { Connection, createConnection } from "typeorm"
import { promisify } from "util"
import * as dbConfig from "../../ormconfig"
import seedCompany from "./seedCompany"
import seedUsers from "./seedUsers"


const exec = promisify(execCallback)
exec(`npm run resyncSchema`)
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
