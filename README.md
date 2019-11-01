# ginlong_RS485
instructions and code samples for connecting to ginlong inverter over RS485

## Hardware

There are only two bits of hardware required to communicate over RS485 with the ginlong inverter

### Female plug
![alt text](https://github.com/RobertSmart/ginlong_RS485/blob/master/exceedconn_ginlong.PNG "Ginlong comms plug")

The ginlong inverter uses an exceedconn EC series plug for the commes port. I beleive this model number is EC04681-2014-bf. These are very hard to source right now, but we are trying to get some in stock.  

Only 2 pins are actually used for the connection.

pin 3 - A
pin 4 - B

### RS485 adapter

There several types of adaptor availiable. I have used several different types and they all worked fine. 

The most common are RS-485 USB adapters, which are also the easiest to work with or RS485-TTL UART adapters which work fine, but do need a little more config as they require wiring to the headers of the raspberry pi.

