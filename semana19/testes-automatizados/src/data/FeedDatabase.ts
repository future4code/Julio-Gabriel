import { BaseDatabase } from './BaseDatabase'

export class FeedDatabase extends BaseDatabase {
    private static TABLE_NAME: string = 'Post_Labook'

    public async createPost(
                    id: string, 
                    photo: string, 
                    description: string, 
                    createdAt: Number, 
                    type: string, 
                    user_id: string): Promise<void> {
        try {
            await this.getConnection()
                .insert({
                    id,
                    photo,
                    description,
                    createdAt,
                    type,
                    user_id
                }).into(FeedDatabase.TABLE_NAME)
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async getPostById(id: string) : Promise<any> {
        try {
            const result = await this.getConnection().raw(`
                SELECT * FROM Post_Labook
                WHERE id = "${id}";
            `)

            return result
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    
    public async deletePost(id: string): Promise<void> {
        try {
            await this.getConnection().raw(`
                DELETE FROM Post_Labook
                WHERE id=  "${id}";
            `)
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}