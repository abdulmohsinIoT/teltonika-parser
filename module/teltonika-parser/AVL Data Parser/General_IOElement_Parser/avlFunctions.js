module.exports = {
    gNSSStatus: function (value) {
      const response = {
        0: "GNSS OFF",
        1: "GNSS ON with fix",
        2: "GNSS ON without fix",
        3: "GNSS sleep"
      }

      return {"value": response[value], "unit": undefined};
    },
    dataMode: function (value) {
      const response = {
        0: "Home On Stop",
        1: "Home On Moving",
        2: "Roaming On Stop",
        3: "Roaming On Moving",
        4: "Unknown On Stop",
        5: "Unknown On Moving"
      }

      return {"value": response[value], "unit": undefined};
    },
    sleepMode: function (value) {
      const response = {
        0: "No Sleep",
        1: "GPS Sleep",
        2: "Deep Sleep",
        3: "Online Sleep",
        4: "Ultra Sleep"
      }

      return {"value": response[value], "unit": undefined};
    },
    ignition: function (value) {
      const response = {
        0: "Ignition Off",
        1: "Ignition On"
      }

      return {"value": response[value], "unit": undefined};
    },
    movement: function (value) {
      const response = {
        0: "Movement Off",
        1: "Movement On"
      }

      return {"value": response[value], "unit": undefined};
    },
    bLETemperature: function (value) {

      value = value * 0.01;

      if(value > -40 || value < +125){return value}
      const response = {
        4000: "abnormal sensor state",
        3000: "sensor not found",
        2000: "failed sensor data parsing"
      }

      return {"value": response[value], "unit": "°C"};
    },
    dallasTemperature: function (value) {

      value = value * 0.1;

      if(value > -55 || value < +115){return value}
      const response = {
        850: "Sensor not ready",
        2000: "Value read error",
        3000: "Not connected",
        4000: "ID failed",
        5000: "Sensor not ready"
      }
      
      return {"value": response[value], "unit": "°C"};
    },
    geofenceZone: function (value) {
      const response = {
        0: "target left zone",
        1: "target entered zone",
        2: "over speeding end",
        3: "over speeding start"
      }

      return {"value": response[value], "unit": undefined};
    },
    driverCardLicenseType: function (value) {
      const response = {
        0: "None",
        1: "B.1 license type",
        2: "B.2 license type",
        3: "B.3 license type",
        4: "B.4 license type",
        5: "T.1 license type",
        6: "T.2 license type",
        7: "T.3 license type",
        8: "T.4 license type"
      }

      return {"value": response[value], "unit": undefined};
    },
    networkType: function (value) {
      const response = {
        0: "3G",
        1: "GSM",
        2: "4G",
        3: "LTE CAT M1",
        4: "LTE CAT NB1",
        99: "Unknown"
      }

      return {"value": response[value], "unit": undefined};
    },
    crashDetection: function (value) {
      const response = {
        1: "real crash detected (device is calibrated)",
        2: "limited crash trace (device not calibrated)",
        3: "limited crash trace (device is calibrated)",
        4: "full crash trace (device not calibrated)",
        5: "full crash trace (device is calibrated)",
        6: "real crash detected (device not calibrated)",
        7: "fake crash detected (device calibrated, pothole)",
        8: "fake crash detected (device calibrated, speed check)"
      }

      return {"value": response[value], "unit": undefined};
    },
    immobilizer: function (value) {
      const response = {
        0: "iButton not connected",
        1: "iButton connected (Immobilizer)",
        2: "iButton connected (Authorized Driving)"
      }

      return {"value": response[value], "unit": undefined};
    },
    trip: function (value) {
      if(value >= 4 || value <= 9) return "Custom Statuses"
      const response = {
        0: "trip stop",
        1: "trip start",
        2: "Business Status",
        3: "Private Status"
      }

      return {"value": response[value], "unit": undefined};
    },
    greenDrivingType: function (value) {
      const response = {
        1: "harsh acceleration",
        2: "harsh braking",
        3: "harsh cornering"
      }

      return {"value": response[value], "unit": undefined};
    },
    bTStatus: function (value) {
      const response = {
        0: "BT is disabled",
        1: "BT Enabled, not device connected",
        2: "Device connected, BTv3 Only",
        3: "Device connected, BLE only",
        4: "Device connected, BLE + BT",
      }

      return {"value": response[value], "unit": undefined};
    },
    driverStatusEvent: function (value) {
      const response = {
        0: "Registered",
        1: "Deregistered",
        2: "Swapping"
      }

      return {"value": response[value], "unit": undefined};
    },
    driver: function (value) {
      const response = {
        0: "None",
        1: "Male",
        2: "Female"
      }

      return {"value": response[value], "unit": undefined};
    },
    drivingState: function (value) {
      const response = {
        1: "Ignition ON",
        2: "Driving",
        3: "Ignition OFF"
      }

      return {"value": response[value], "unit": undefined};
    },
    doorStatus: function (value) {
      const response = {
        0: "all doors closed",
        256: "front left door is opened",
        512: "front right door is opened",
        1024: "rear left door is opened",
        2048: "rear right door is opened",
        4096: "hood is opened",
        8192: "trunk is opened",
        16128: "all doors are opened"
      }

      return {"value": response[value], "unit": undefined};
    }
};
