import { User } from '../entities/User.entity';
import { Create } from '../services/users/create.service'
import { Request, response, Response } from 'express'

export class UserController {
    constructor(
        private createService: Create
    ) {

    }

    list(): Promise<any> {
        throw new Error('Method not implemented.');
    }
    async create(req: Request, res: Response): Promise<any> {        
        try {
            const body: User = req.body;
            const user = await this.createService.init(req.body);                
            return res.status(201).json(user);
        } catch (error: any) {
            const statusCode = error.statusCode ?? 500;
            return res.status(statusCode).json({
                message: error.errors
            });            
        }
    }
    update(): Promise<any> {
        throw new Error('Method not implemented.');
    }
    delete(): Promise<any> {
        throw new Error('Method not implemented.');
    }
}