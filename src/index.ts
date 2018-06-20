import * as http from "http"

http.createServer((req, res) => {
    res.end('helloo')

}).listen(8080)
