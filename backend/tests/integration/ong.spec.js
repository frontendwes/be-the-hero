const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('ONG', () => {

    beforeEach( async () =>{
        await connection.migrate.rollback();
        await connection.migrate.latest();
    })

    afterAll(()=>{
        connection.destroy();
    })

    it('should be abre to create a new ONG', async () => {
        const response = await request(app)
        .post('/ongs')
        .send({
            name: 'apad2',
            email: 'contato@email.com',
            whatsapp: '4700000000',
            city: "Rio do Sul",
            uf: "SC"
        })

        expect(response.body).toHaveProperty('id')
        expect(response.body.id).toHaveLength(8);
    })
})