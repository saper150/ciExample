import { Body, Controller, Delete, Get, Param, Post, Put } from "routing-controllers"
import { User } from "../entity/user"
import { UserService } from "../services/userService"

@Controller('/users')
export class UserController {

    constructor(private userService: UserService) { }

    @Post('/')
    addUser(@Body() user: User) {
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

}
