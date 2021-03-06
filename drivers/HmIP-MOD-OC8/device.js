'use strict';

const Homey = require('homey');
const Device = require('../../lib/device.js')


class HomematicDevice extends Device {

    onInit() {
        var idx = this.getData().attributes.Index;
        var capabilityMap = {
            "onoff": {
                "channel": idx * 4 + 10,
                "key": "STATE",
                "set": {
                    "key": "STATE",
                    "channel": idx * 4 + 10
                }
            }
        }
        super.onInit(capabilityMap);
    }
}

module.exports = HomematicDevice;
