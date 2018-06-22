import { Service } from "typedi"
import { Connection } from "typeorm"
import { InjectConnection } from "typeorm-typedi-extensions"
import { User } from "../entity/user"

@Service()
export class UserService {

    constructor(@InjectConnection() private connection: Connection) { }

    addUser(user: User) {
        return this.connection.getRepository(User).save(user)
    }

    deleteUser(id: number) {
        return this.connection.getRepository(User).delete(id)
    }

    updateUser(id: number, user: User) {
        return this.connection.getRepository(User).update(id, user)
    }

    getUsers() {
        return this.connection.getRepository(User).find()
    }

    getUserById(id: number) {
        return this.connection.getRepository(User).findOne(id)
    }
}
