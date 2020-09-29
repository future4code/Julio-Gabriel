import { FeedDatabase } from '../src/data/FeedDatabase'
import { BaseDatabase } from '../src/data/BaseDatabase'

describe("Create post and get post by id", () => {
    const feedDataBase: FeedDatabase = new FeedDatabase()

    test("Testing createPost and getPostById", async () => {
        const post = {
            id: "123", 
            photo: "https://picsum.photos/200/300", 
            description: "Teste 1 com testes automazidaos", 
            createdAt: 1598567, 
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
        
        const postById = await feedDataBase.getPostById(post.id)

        expect(postById).not.toBe(undefined)
        expect(postById[0]).toEqual([{
                id: "123", 
                photo: "https://picsum.photos/200/300", 
                description: "Teste 1 com testes automazidaos", 
                createdAt: 1598567, 
                type: "normal", 
                user_id: "0431316c-814e-4f38-8390-241af46de40a"
        }])
    })

    afterAll(async () => {
        await feedDataBase.deletePost("123")
        await BaseDatabase.destroyConnection()
    })
})