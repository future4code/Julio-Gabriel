import { FeedDatabase } from '../src/data/FeedDatabase'
import { BaseDatabase } from '../src/data/BaseDatabase'

describe("Create two post with same id", () => {
    const feedDataBase: FeedDatabase = new FeedDatabase()

    test("Testing create two post with same id", async () => {
        expect.assertions(1)

        try {
            const post = {
                id: "123", 
                photo: "https://picsum.photos/200/300", 
                description: "Teste 1 com testes automazidaos", 
                createdAt: 1598567, 
                type: "normal", 
                user_id: "0431316c-814e-4f38-8390-241af46de40a"
            }
    
            const postTwo = {
                id: "123",
                photo: "https://picsum.photos/200/300", 
                description: "Teste 2 com testes automazidaos", 
                createdAt: 1598569, 
                type: "normal", 
                user_id: "0431316c-814e-4f38-8390-241af46de40a" 
            }
    
            await feedDataBase.createPost(
                post.id, 
                post.photo, 
                post.description, 
                post.createdAt, 
                post.type, 
                post.user_id
            )
    
            await feedDataBase.createPost(
                postTwo.id, 
                postTwo.photo, 
                postTwo.description, 
                postTwo.createdAt, 
                postTwo.type, 
                postTwo.user_id
            )
        } catch (error) {
            expect(error).not.toBe(undefined)
        }
    })

    afterAll(async () => {
        await feedDataBase.deletePost("123")
        await BaseDatabase.destroyConnection()
    })
})