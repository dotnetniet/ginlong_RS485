var ModbusRTU = require('modbus-serial')
var client = new ModbusRTU()

//slave ID - can be changed in the inverter settings
client.setID(1)

//recommended time between requests
client.setTimeout(330)


//connect over USB dongle. for windows this would be a COM port
client.connectRTUBuffered("/dev/ttyUSB0", {baudRate: 9600, dataBits:8, parity:"even", stopBits:1}, function (err, success) {
  if (err) {
    console.log('connectRTUBuffered error')
    console.log(err)
    return
  }

  //read 33049 register. This will return the realtime value for DCVoltage1
  client.readInputRegisters (33049, 1, function (error, data) {
    if (error) {
      console.log(error)
    } else {
      console.log(data)
    }
  })
})
