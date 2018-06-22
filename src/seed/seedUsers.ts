import { Connection } from "typeorm"
import { Companny } from "../entity/company"
import { User } from "../entity/user"

export default async function (connection: Connection) {
    return connection.getRepository(User).save([
        {
            email: 'abc@abc.com',
            companny: await connection.getRepository(Companny).findOne({ name: '123' })
        },
        {
            email: 'cba@abc.com',
            companny: await connection.getRepository(Companny).findOne({ name: '123' })
        }
    ])
}
