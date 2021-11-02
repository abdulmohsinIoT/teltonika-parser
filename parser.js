const { ProtocolParser, parseIMEI } = require('./module/teltonika-parser/ProtocolParser')
const fastify = require('fastify')();

fastify.get('/getAVLData', async (request, reply) => {
    const packet = '000000000000004A8E010000016B412CEE000100000000000000000000000000000000010005000100010100010011001D00010010015E2C880002000B000000003544C87A000E000000001DD7E06A00000100002994';
    let parsed = new ProtocolParser(packet)
    let data, gprs;
    if (parsed.CodecType == "data sending") {
        data = parsed.Content
    } else {
        gprs = parsed.Content
    }

    const imei = parseIMEI('000F333532303933303839313638383231')
    console.log(imei)

    return parsed;
})

// Run the server!
const start = async () => {
    try {
        await fastify.listen(3000)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()
console.log("Server running at port 3000");
console.log("For testing request GET: /getAVLData");