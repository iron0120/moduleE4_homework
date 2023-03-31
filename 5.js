class Device {
    constructor(name, power) {
        this.prop = 'electrical';
        this.name = name;
        this.power = power;
        this.getOnOff = function(onoff = 0) {
            return this.onoff = onoff
        }
    }
}

const lamp = new Device('lamp', 50);
const computer = new Device('computer', 120);
const fridge = new Device('fridge', 200);


lamp.getOnOff(0)
computer.getOnOff(1)
fridge.getOnOff(1)

console.log(lamp.onoff)
console.log(computer.onoff)
console.log(fridge.onoff)

let deviceList = [lamp, computer, fridge]



function calcPower(list) {
    let totalPower = 0;
    for (let i in list) {
        if (list[i].onoff === 1) {
            totalPower += list[i].power;
        }
    }
    return totalPower;
}

console.log(calcPower(deviceList))
