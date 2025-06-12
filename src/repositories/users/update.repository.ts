import { User as UserEntity } from '../../entities/User.entity'
import { AppDataSource } from '../../config/data-source'
import { User } from '../../interfaces/User.interface'

export const deleteUser = async (user: User, userId: number) => {
    const result = await AppDataSource.getRepository(UserEntity)
        .createQueryBuilder()
        .update(UserEntity)
        .set(user)
        .where("id = :id", { id: userId })
        .execute()

    if (result.affected === 0) {
        throw new Error("Usuário inválido")
    }
    return { id: userId }
}