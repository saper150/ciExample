
import { BadRequestError, Body, Controller, Delete, Get, Param, Post, Put } from "routing-controllers"
import { User } from "../entity/user"
import { UserService } from "../services/userService"

@Controller('/users')
export class UserController {

    constructor(private userService: UserService) { }

    @Post('/')
    addUser(@Body() user: User) {
        if (!this.isEmailValid(user.email)) {
            return new BadRequestError('email not valid')
        }
        return this.userService.addUser(user)
    }

    @Get('/')
    getUsers() {
        return this.userService.getUsers()
    }

    @Get('/:id')
    getUser(@Param('id') id: number) {
        return this.userService.getUserById(id)
    }

    @Delete('/:id')
    deleteUser(@Param('id') id: number) {
        return this.userService.deleteUser(id)
    }

    @Put('/:id')
    updateUser(@Param('id') id: number, @Body() user: User) {
        return this.userService.updateUser(id, user)
    }

    private isEmailValid(email: string): boolean {
        return !!(/[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm).exec(email)
    }
}
