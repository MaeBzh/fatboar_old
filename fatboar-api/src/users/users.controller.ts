import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiCreatedResponse } from "@nestjs/swagger";
import { UpdateResult } from "typeorm";
import { User } from "./user.entity";
import { UserDto } from "./userDto";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService){}

    @Get()
    findAll() {
        return this.usersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.usersService.findOne(id);
    }

    @Post()
    @ApiCreatedResponse({
        description: 'The user has been successfully created.',
        type: User
    })
    create(@Body() userDto: UserDto) {
       return this.usersService.create(userDto);
    }    

    @Put(':id')
    @ApiCreatedResponse({
        description: 'The user has been successfully updated.',
        type: UpdateResult
    })
    update(@Param('id') id: number, @Body() userDto: UserDto) {
       return this.usersService.update(id, userDto);
    }  

    @Delete('id')
    @ApiCreatedResponse({
        description: 'The user has been successfully deleted.'      
    })
    remove(@Param('id') id: number) {
        return this.usersService.remove(id);
    }    
}