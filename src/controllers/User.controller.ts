import { User } from '../entities/User.entity';
import { Create } from '../services/users/create.service'
import { ListAll } from '../services/users/listAll.service'
import { Delete } from '../services/users/delete.service'
import { Request, Response } from 'express'

export class UserController {
    constructor(
        private createService: Create,
        private listAllService: ListAll,
        private deleteService: Delete
    ) {

    }

    async list(req: Request, res: Response): Promise<any> {
        try {
            const users = await this.listAllService.init();            
            return res.status(200).json(users);
        } catch (error: any) {           
            const statusCode = error.statusCode ?? 500;
            return res.status(statusCode).json({
                message: error.errors ?? 'Ocorreu um erro desconhecido ao buscar os usuários'
            });        
        }
    }
    async create(req: Request, res: Response): Promise<any> {        
        try {
            const body: User = req.body;
            const user = await this.createService.init(body);                
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
    async delete(req: Request, res: Response): Promise<any> {
        const { id } = req.params;        
        try {
            const userId = this.deleteService.init(parseInt(id))
            return res.status(200).json({
                message: 'Usuário inativado com sucesso'
            });
        } catch (error: any) {
            const statusCode = error.statusCode ?? 500;
            return res.status(statusCode).json({
                message: error.errors
            });
        }
    }
}