import { fibonaci } from "./fibonaci"

describe('fibonaci', () => {

    it('should return one if input is one', () => {
        expect(fibonaci(1)).toEqual(1)
    })

})
