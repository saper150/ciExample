import * as request from "supertest"
import appPromise from "../src/app"

describe('GET /user', () => {

    let appCallback
    beforeAll(() => {
        return appPromise.then(({ app }) => {
            appCallback = app.callback()
        })
    })

    it('get', (done) => {
        request(appCallback)
            .post('/users')
            .send({
                email: 'qwe@qwe.com',
                "companny": { "id": 1 }
            })
            .expect(200, done)
            .expect(({ body }) => {
                done()
            })
    })
})
