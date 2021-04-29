import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Connection, Repository, UpdateResult } from "typeorm";
import { User } from "./user.entity";
import { UserDto } from "./userDto";

@Injectable()
export class UsersService {

  constructor(
    private connection: Connection,
    @InjectRepository(User)
    private usersRepo: Repository<User>,
  ) { }

  findAll(): Promise<User[]> {
    return this.usersRepo.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepo.findOneOrFail(id);
  }

  async remove(id: number): Promise<void> {
    await this.usersRepo.delete(id);
  }

  create(userDto: UserDto): Promise<User> {
    return this.connection.transaction(manager => {
      return this.usersRepo.save(userDto);
    })
  }

  update(id: number, userDto: UserDto): Promise<UpdateResult> {
    return this.connection.transaction(() => {
      return this.usersRepo.update(id, userDto);
    })
  }
}