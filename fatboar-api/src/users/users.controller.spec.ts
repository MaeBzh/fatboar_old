import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";

describe('UsersController', () => {
    let usersController: UsersController;
    let usersService: UsersService; 

    beforeEach(async () => {
        usersService = new UsersService({} as any)
        usersController = new UsersController(usersService);
    });
   
    describe('findAll', () => {
        it('should return an array of users', async () => {
            const users = [
                {
                id: 1,
                firstname: 'wdfvw',
                lastname: 'lepoireau',
                email: 'test@user.com',
                phone: '1234567890'
               },
               {
                id: 2,
                firstname: 'Ricky',
                lastname: 'Bobby',
                email: 'test@user.com',
                phone: '1234567890'
               }
            ];
            
          jest.spyOn(usersService, 'findAll').mockImplementation(async () => users);

          expect(await usersController.findAll()).toBe(users);
        });
      });
});