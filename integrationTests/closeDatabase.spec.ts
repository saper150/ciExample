import appPromise from "../src/app"

afterAll(() => appPromise.then(({ connection }) => connection.close()))

it('jest is complainint about file without files', () => { })
