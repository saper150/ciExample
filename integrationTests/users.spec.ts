import * as request from "supertest"
import appPromise from "../src/app"

describe('GET /user', () => {

    let appCallback
    beforeAll(() => {
        return appPromise.then(({ connection, app }) => {
            appCallback = app.callback()
        })
    })

    it('get', (done) => {
        request(appCallback)
            .get('/users')
            .expect(200, done)
            .expect(({ body }) => {
                expect(Array.isArray(body)).toEqual(true)
            })
    })
})
