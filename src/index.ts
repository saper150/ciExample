import appPromise from "../src/app"

appPromise.then(({ app }) => {
    app.listen(process.env.PORT || 3000)
    console.log('listening')
})
