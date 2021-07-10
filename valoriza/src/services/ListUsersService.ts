import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";
import { classToPlain } from "class-transformer";

class ListUsersService {
  async execute() {
    const usersRepositories = getCustomRepository(UserRepositories);

    const users = await usersRepositories.find();

    return classToPlain(users);
  }
}

export { ListUsersService };