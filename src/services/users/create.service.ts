import { User } from '../../interfaces/User.interface'
import { createUser } from '../../repositories/users/create.repository'
import { userSchema } from '../../schemas/user/create.schema'
import { z } from 'zod'

export class Create {
    async init(userData: User): Promise<User> {        
        await this.validate(userData)
        const createdUser = await this.execute(userData)        
        return createdUser;
    }
    async validate(userData: User): Promise<void> {
        try {
            userSchema.parse(userData);
        } catch (error) {
            if (error instanceof z.ZodError) {
                throw{
                    errors: error.errors.map(e => e.message).join(", "),
                    statusCode: 400
                };
            }
        }
    }
    async execute(userData: User): Promise<User> {
        return await createUser(userData)
    }
}