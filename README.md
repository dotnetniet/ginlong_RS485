# ginlong_RS485
instructions and code samples for connecting to ginlong inverter over RS485

## Hardware

There are only two bits of hardware required to communicate over RS485 with the ginlong inverter

### Female plug
![alt text](https://github.com/RobertSmart/ginlong_RS485/blob/master/images/exceedconn_ginlong.PNG "Ginlong comms plug")

The ginlong inverter uses an exceedconn EC series plug for the commes port. I beleive this model number is EC04681-2014-bf. These are very hard to source right now, but we are trying to get some in stock.  

Only 2 pins are actually used for the connection.

pin 3-A
pin 4-B

### RS485 adapter

There several types of adaptor availiable. I have used several different types and they all worked fine.

The most common are RS-485 USB adapters, which are also the easiest to work with or RS485-TTL UART adapters which work fine, but do need a little more config as they require wiring to the headers of the raspberry pi. Both are very cheap and can be purchased at the usual online retailers

![alt text](https://github.com/RobertSmart/ginlong_RS485/blob/master/images/usb_rs485.jpg "USB RS485 adapter")

![alt text](https://github.com/RobertSmart/ginlong_RS485/blob/master/images/RS485_ttl.jpg "TTL RS485 adapter")


##Connections
It is simply a case of connecting pin 3 of the plug to the 'A' side of the RS485 adapter, and connecting pin 4 to the 'B' side of the connector.


## Software

Once connected any modbus RTU software should be able to communicate with the inverter. The default baud rate is 9600, and the default slave address is 1. These can both be configured through the settings menu on the inverter.

Modbus tables downloaded from https://www.scss.tcd.ie/coghlan/Elios4you/RS485_MODBUS-Hybrid-BACoghlan-201811228-1854.pdf

the example script uses modbus-serial to open a connection to the inverter and then poll for register 33049. This will respond with the value for DCVoltage1.

All the registers are documented in the attached pdf. its possible to return upto 50 registers in a single request. I've found that the highest polling rate the inverters can handle is about every 2 seconds.

There are lots of other examples of modbus commands in the modbus-serial repo

PLEASE BE VERY CAREFUL SETTING REGISTERS. I TAKE NO RESPONSIBILTY IF YOU CHANGE A REGISTER AND BRICK THE INVERTER
