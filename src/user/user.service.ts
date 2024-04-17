import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './DTO/create-user.dto';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private userRepo: Repository<User>) { }
    async create(createUserDTO: CreateUserDTO): Promise<User> {
        const user = await this.userRepo.save(createUserDTO)
        return user
    }

    // findOne(){

    // }
}
