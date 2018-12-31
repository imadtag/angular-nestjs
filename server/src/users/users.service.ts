import { Injectable, Get, Post, Body, Param, Delete } from '@nestjs/common';
import * as faker from 'faker/locale/fr';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class UsersService {
  private readonly users: any[];
  constructor() {
    this.users = new Array(100)
      .fill(1)
      .map((e, i) => {
        return {
          id: i + 1,
          name : faker.name.findName(),
          email : faker.internet.email(),
        };
      });
  }

  @Get()
  getAll() {
    return this.users;
  }

  @Get()
  getUserById(userId: number) {
    return this.users.find(e => e.id === Number(userId));
  }

  @Delete()
  remove(userId) {
    const userIndex = this.users.findIndex(e => e.id === userId);
    this.users.splice(userIndex, 1);
    return this.getUserById(userId);
  }

  @Post()
  addUser(@Body() createUserDto: CreateUserDto) {
    const user = {
      id: this.generateId(),
      name: createUserDto.name,
      email: createUserDto.email,
    };
    this.users.push(user);
    return user;
  }

  @Get()
  private generateId() {
    return this.users.length > 0 ?
      Math.max(...this.users.map(e => e.id)) + 1 :
      1;
  }
}
