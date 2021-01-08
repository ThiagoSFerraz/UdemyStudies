const moduloA = require('../../moduloA')
const c = require('./pastaC/')
console.log(moduloA.ola)



const http = require('http')
http.createServer((req, res) => {
    res.write(`<!DOCTYPE html>
     <html>
        <body>
            <h1>
                Good morning guys how it's going?
            </h1>
            <br>
            <h3>
                hope that you're all good!
            </h3>
            <br>
            <h1>
                ${c.test}
            </h1>
            <h2>
                ${c.test2 + ' ' + c.test3}
            </h2>
        </body>
    </html>`)
    res.end()
}).listen(8900)