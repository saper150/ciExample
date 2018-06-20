import * as request from "supertest"
import { app } from "../src/app"

describe('GET /user', () => {
    it('get', (done) => {
        request(app)
            .get('/user')
            .expect(200, done)
    })
})
