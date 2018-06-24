import { BadRequestError } from "routing-controllers"
import { UserService } from "../services/userService"
import { UserController } from "./userController"

describe('userControllerTest', () => {

    let controller: UserController
    let userService: UserService
    beforeEach(() => {
        userService = <any>{
            addUser: jest.fn(() => Promise.resolve()),
            deleteUser: jest.fn(() => Promise.resolve()),
            updateUser: jest.fn(() => Promise.resolve()),
            getUsers: jest.fn(() => Promise.resolve()),
            getUserById: jest.fn(() => Promise.resolve({ id: 1 })),
        }
        controller = new UserController(<any>userService)
    })

    it('addUser should validate user password', () => {
        const result = controller.addUser(<any>{ email: '123' })
        expect(result instanceof BadRequestError)
    })


    it('addUser should add user if email is valid', () => {
        controller.addUser(<any>{ email: 'abc@abc.com' })
        expect(userService.addUser).toBeCalledWith({ email: 'abc@abc.com' })
    })

    it('getUserById should return user by id', () => {
        return controller.getUser(1)
            .then(user => {
                expect(userService.getUserById).toBeCalledWith(1)
                expect(user.id).toEqual(1)
            })
    })

    it('deleteUser should delete user with given id', () => {
        controller.deleteUser(2)
        expect(userService.deleteUser).toBeCalledWith(2)
    })

})
