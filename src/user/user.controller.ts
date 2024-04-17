import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { CreateUserDTO } from './DTO/create-user.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Post('')
    create(@Body() createUserDTO: CreateUserDTO): Promise<User> {
        return this.userService.create(createUserDTO);
    }
}
