import { Get, JsonController, NotFoundError } from 'routing-controllers';

@JsonController()
export class UserController {
  @Get('/users')
  getAll() {
    //......
    throw new NotFoundError('user not found');
  }
}
