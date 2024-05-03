const request = require("supertest")
const app = require('../app')


const BASE_URL =  'api/v1/cart'
let productBody
let userId
beforeAll(async() =>{
    const user= {
        email: 'yoneison@gmail.com',
    password: 'yoneison1234'
    }
    const res =await request(app)
    .post('api/v1/cart')
    .send(user)
    TOKEN = res.body.token
    userId = res.body.user.id
    productBody = {
        title:'iphone descripcion',
        description :"iphone description",
        price:3.34
    }
    // product await
})
// test("POST")



const res = await request(app)
.post('/api/v1')