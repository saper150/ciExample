import appPromise from "./app"

appPromise.then(x => {
    x.listen(3000)
    console.log('listening')
})
