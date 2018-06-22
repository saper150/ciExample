import { Connection } from "typeorm"
import { Companny } from "../entity/company"

export default function (connection: Connection) {
    return connection.getRepository(Companny).save([{
        name: '123'
    }])
}
