


export function fibonaci(x: number) {
    if (x === 0) return 1
    if (x === 1) return 1
    return fibonaci(x - 1) + fibonaci(x)
}
