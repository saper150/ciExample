import * as http from "http"


export function app(req: http.IncomingMessage, res: http.ServerResponse) {
    res.end('hello')
}
