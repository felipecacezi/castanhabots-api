import { User } from '../../interfaces/User.interface'
import { createUser } from '../../repositories/users/create.repository'
import { listByEmail } from '../../repositories/users/list.repository'
import { deleteSchema } from '../../schemas/user/delete.schema'
import { z } from 'zod'

export class Create {
    async init(userData: User): Promise<User> {        
        
    }
    async validate(userData: User): Promise<void> {
        
    }
    async execute(userData: User): Promise<User> {
        
    }
}