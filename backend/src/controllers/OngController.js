const connection = require('../database/connection')
const crypto = require('crypto')

module.exports = {

    async index (request, response) {
        const ongs = await connection('ongs').select('*')
        return response.json(ongs)
    },

    async create (request, response) {
        const {name, email, whatsapp, city, uf} = request.body

    const id = crypto.randomBytes(4).toString('HEX')

    await connection('ongs').insert({ //define toda função como async para realizar o restante apenas quando o await acabar
        id,
        name,
        email,
        whatsapp,
        city,
        uf
    })

    return response.json({ id });
    }
}