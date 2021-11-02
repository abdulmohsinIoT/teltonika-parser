"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.avlidDictionary = void 0;
/**
* Dictionary for avl name, given the AVL ID.
* For some cases, the value is a dictionary containing the avl name and the respective table name.
* When the table name is 0, it means that there is not table for that avl.
*/
exports.avlidDictionary = {
    1: 'Digital Input 1', 
    2: 'Digital Input 2', 
    3: 'Digital Input 3', 
    4: 'Pulse Counter Din1', 
    5: 'Pulse Counter Din2', 
    6: 'Analog Input 2', 
    8: 'Authorized iButton', 
    9: 'Analog Input 1', 
    10: 'SD Status', 
    11: 'ICCID1', 
    12: 'Fuel Used GPS', 
    13: 'Fuel Rate GPS', 
    14: 'ICCID2', 
    15: 'Eco Score', 
    16: 'Total Odometer', 
    17: 'Axis X', 
    18: 'Axis Y', 
    19: 'Axis Z', 
    20: 'BLE Battery #2', 
    21: 'GSM Signal', 
    22: 'BLE Battery #3', 
    23: 'BLE Battery #4', 
    24: 'Speed', 
    25: 'BLE Temperature #1', 
    26: 'BLE Temperature #2', 
    27: 'BLE Temperature #3', 
    28: 'BLE Temperature #4', 
    29: 'BLE Battery #1', 
    30: 'Number of DTC', 
    31: 'Engine Load', 
    32: 'Coolant Temperature', 
    33: 'Short Fuel Trim', 
    34: 'Fuel pressure', 
    35: 'Intake MAP', 
    36: 'Engine RPM', 
    37: 'Vehicle Speed', 
    38: 'Timing Advance', 
    39: 'Intake Air Temperature', 
    40: 'MAF', 
    41: 'Throttle Position', 
    42: 'Runtime since engine start', 
    43: 'Distance Traveled MIL On', 
    44: 'Relative Fuel Rail Pressure', 
    45: 'Direct Fuel Rail Pressure', 
    46: 'Commanded EGR', 
    47: 'EGR Error', 
    48: 'Fuel Level', 
    49: 'Distance Since Codes Clear', 
    50: 'Barometic Pressure', 
    51: 'Control Module Voltage', 
    52: 'Absolute Load Value', 
    53: 'Ambient Air Temperature', 
    54: 'Time Run With MIL On', 
    55: 'Time Since Codes Cleared', 
    56: 'Absolute Fuel Rail Pressure', 
    57: 'Hybrid battery pack life', 
    58: 'Engine Oil Temperature', 
    59: 'Fuel injection timing', 
    60: 'Fuel Rate', 
    61: 'Geofence zone 06', 
    62: 'Geofence zone 07', 
    63: 'Geofence zone 08', 
    64: 'Geofence zone 09', 
    65: 'Geofence zone 10', 
    66: 'External Voltage', 
    67: 'Battery Voltage', 
    68: 'Battery Current', 
    69: 'GNSS Status', 
    70: 'Geofence zone 11', 
    71: 'Dallas Temperature ID 4', 
    72: 'Dallas Temperature 1', 
    73: 'Dallas Temperature 2', 
    74: 'Dallas Temperature 3', 
    75: 'Dallas Temperature 4', 
    76: 'Dallas Temperature ID 1', 
    77: 'Dallas Temperature ID 2', 
    78: 'iButton', 
    79: 'Dallas Temperature ID 3', 
    80: 'Data Mode', 
    81: 'Vehicle Speed', 
    82: 'Accelerator Pedal Position', 
    83: 'Fuel Consumed', 
    84: 'Fuel level', 
    85: 'Engine RPM', 
    86: 'BLE Humidity #1', 
    87: 'Total Mileage', 
    88: 'Geofence zone 12', 
    89: 'Fuel level', 
    90: 'Door Status', 
    91: 'Geofence zone 13', 
    92: 'Geofence zone 14', 
    93: 'Geofence zone 15', 
    94: 'Geofence zone 16', 
    95: 'Geofence zone 17', 
    96: 'Geofence zone 18', 
    97: 'Geofence zone 19', 
    98: 'Geofence zone 20', 
    99: 'Geofence zone 21', 
    100: 'Program Number', 
    101: 'Module ID 8B', 
    102: 'Engine Worktime', 
    103: 'Engine Worktime (counted)', 
    104: 'BLE Humidity #2', 
    105: 'Total Mileage (counted)', 
    106: 'BLE Humidity #3', 
    107: 'Fuel Consumed(counted)', 
    108: 'BLE Humidity #4', 
    110: 'Fuel Rate', 
    111: 'AdBlue Level Percentage', 
    112: 'AdBlue Level', 
    113: 'Battery Level', 
    114: 'Engine Load', 
    115: 'Engine Temperature', 
    118: 'Axle 1 Load', 
    119: 'Axle 2 Load', 
    120: 'Axle 3 Load', 
    121: 'Axle 4 Load', 
    122: 'Axle 5 Load', 
    123: 'Control State Flags', 
    124: 'Agricultural Machinery Flags', 
    125: 'Harvesting Time', 
    126: 'Area of Harvest', 
    127: 'LVC of Harvest', 
    128: 'Grain Mow Volume', 
    129: 'Grain Moisture', 
    130: 'Harvesting Drum RPM', 
    131: 'Gap Under Harvesting Drum', 
    132: 'Security State Flags', 
    133: 'Tacho Total Distance', 
    134: 'Trip Distance', 
    135: 'Tacho Vehicle Speed', 
    136: 'Tacho Driver Card Presence', 
    137: 'Driver 1 States', 
    138: 'Driver 2 States', 
    139: 'Driver 1 Driving Time', 
    140: 'Driver 2 Driving Time', 
    141: 'Driver 1 Break Time', 
    142: 'Driver 2 Break Time', 
    143: 'Driver 1 Acitivity Duratation', 
    144: 'Driver 2 Acitivity Duratation', 
    145: 'Driver 1 Driving Time', 
    146: 'Driver 2 Driving Time', 
    147: 'Driver 1 ID High', 
    148: 'Driver 1 ID Low', 
    149: 'Driver 2 ID High', 
    150: 'Driver 2 ID Low', 
    151: 'Battery Temperature', 
    152: 'Battery Level', 
    153: 'Geofence zone 22', 
    154: 'Geofence zone 23', 
    155: 'Geofence zone 01', 
    156: 'Geofence zone 02', 
    157: 'Geofence zone 03', 
    158: 'Geofence zone 04', 
    159: 'Geofence zone 05', 
    160: 'DTC Faults Count', 
    161: 'Slope of Arm', 
    162: 'Rotation of Arm', 
    163: 'Eject of Arm', 
    164: 'Horizontal Distance Arm', 
    165: 'Height Arm Above Ground', 
    166: 'Drill RPM', 
    167: 'Spread Salt', 
    168: 'Battery Voltage', 
    169: 'Spread Fine Grained Salt', 
    170: 'Coarse Grained Salt', 
    171: 'Spread DiMix', 
    172: 'Spread Coarse Grained Calcium', 
    173: 'Spread Calcium Chloride', 
    174: 'Spread Sodium Chloride', 
    175: 'Auto Geofence', 
    176: 'Spread Magnesium Chloride', 
    177: 'Amount Of Spread Gravel', 
    178: 'Amount Of Spread Sand', 
    179: 'Digital Output 1', 
    180: 'Digital Output 2', 
    181: 'GNSS PDOP', 
    182: 'GNSS HDOP', 
    183: 'Width Pouring Left', 
    184: 'Width Pouring Right', 
    185: 'Salt Spreader Working Hours', 
    186: 'Distance During Salting', 
    187: 'Load Weight', 
    188: 'Retarder Load', 
    189: 'Cruise Time', 
    190: 'Geofence zone 24', 
    191: 'Geofence zone 25', 
    192: 'Geofence zone 26', 
    193: 'Geofence zone 27', 
    194: 'Geofence zone 28', 
    195: 'Geofence zone 29', 
    196: 'Geofence zone 30', 
    197: 'Geofence zone 31', 
    198: 'Geofence zone 32', 
    199: 'Trip Odometer', 
    200: 'Sleep Mode', 
    201: 'LLS 1 Fuel Level', 
    202: 'LLS 1 Temperature', 
    203: 'LLS 2 Fuel Level', 
    204: 'LLS 2 Temperature', 
    205: 'GSM Cell ID', 
    206: 'GSM Area Code', 
    207: 'RFID', 
    208: 'Geofence zone 33', 
    209: 'Geofence zone 34', 
    210: 'LLS 3 Fuel Level', 
    211: 'LLS 3 Temperature', 
    212: 'LLS 4 Fuel Level', 
    213: 'LLS 4 Temperature', 
    214: 'LLS 5 Fuel Level', 
    215: 'LLS 5 Temperature', 
    216: 'Geofence zone 35', 
    217: 'Geofence zone 36', 
    218: 'Geofence zone 37', 
    219: 'Geofence zone 38', 
    220: 'Geofence zone 39', 
    221: 'Geofence zone 40', 
    222: 'Geofence zone 41', 
    223: 'Geofence zone 42', 
    224: 'Geofence zone 43', 
    225: 'Geofence zone 44', 
    226: 'Geofence zone 45', 
    227: 'Geofence zone 46', 
    228: 'Geofence zone 47', 
    229: 'Geofence zone 48', 
    230: 'Geofence zone 49', 
    231: 'Geofence zone 50', 
    232: 'CNG status', 
    233: 'CNG used', 
    234: 'CNG level', 
    235: 'Engine Oil Level', 
    236: 'Alarm', 
    237: 'Network Type', 
    238: 'User ID', 
    239: 'Ignition', 
    240: 'Movement', 
    241: 'Active GSM Operator', 
    243: 'Green driving event duration', 
    246: 'Towing', 
    247: 'Crash detection', 
    248: 'Immobilizer', 
    249: 'Jamming', 
    250: 'Trip', 
    251: 'Idling', 
    252: 'Unplug', 
    253: 'Green driving type', 
    254: 'Green Driving Value', 
    255: 'Over Speeding', 
    256: 'VIN', 
    257: 'Crash trace data', 
    258: 'EcoMaximum', 
    259: 'EcoAverage', 
    260: 'EcoDuration', 
    263: 'BT Status', 
    264: 'Barcode ID', 
    269: 'Escort LLS Temperature #1', 
    270: 'BLE Fuel Level #1', 
    271: 'Escort LLS Battery Voltage #1', 
    272: 'Escort LLS Temperature #2', 
    273: 'BLE Fuel Level #2', 
    274: 'Escort LLS Battery Voltage #2', 
    275: 'Escort LLS Temperature #3', 
    276: 'BLE Fuel Level #3', 
    277: 'Escort LLS Battery Voltage #3', 
    278: 'Escort LLS Temperature #4', 
    279: 'BLE Fuel Level #4', 
    280: 'Escort LLS Battery Voltage #4', 
    281: 'Fault Codes', 
    282: 'DTC Faults code', 
    283: 'Driving State', 
    284: 'Driving Records', 
    285: 'Blood alcohol content', 
    303: 'Instant Movement', 
    304: 'Vehicle Range on Battery', 
    305: 'Vehicle Range On Additional Fuel', 
    306: 'BLE Fuel Frequency #1', 
    307: 'BLE Fuel Frequency #2', 
    308: 'BLE Fuel Frequency #3', 
    309: 'BLE Fuel Frequency #4', 
    317: 'Crash event counter', 
    325: 'VIN', 
    327: 'UL202-02 Sensor Fuel level', 
    331: 'BLE 1 Custom #1', 
    332: 'BLE 2 Custom #1', 
    333: 'BLE 3 Custom #1', 
    334: 'BLE 4 Custom #1', 
    335: 'BLE Luminosity #1', 
    336: 'BLE Luminosity #2', 
    337: 'BLE Luminosity #3', 
    338: 'BLE Luminosity #4', 
    380: 'Digital output 3', 
    381: 'Ground Sense', 
    385: 'Beacon', 
    387: 'ISO6709 Coordinates', 
    388: 'Module ID 17B', 
    389: 'OBD OEM Total Mileage', 
    390: 'OBD OEM Fuel Level', 
    391: 'Private mode', 
    403: 'Driver Name', 
    404: 'Driver card license type', 
    405: 'Driver Gender', 
    406: 'Driver Card ID', 
    407: 'Driver Card Issue Year', 
    408: 'Driver Card Issue Year', 
    409: 'Driver Status Event', 
    449: 'Ignition On Counter', 
    463: 'BLE 1 Custom #2', 
    464: 'BLE 1 Custom #3', 
    465: 'BLE 1 Custom #4', 
    466: 'BLE 1 Custom #5', 
    467: 'BLE 2 Custom #2', 
    468: 'BLE 2 Custom #3', 
    469: 'BLE 2 Custom #4', 
    470: 'BLE 2 Custom #5', 
    471: 'BLE 3 Custom #2', 
    472: 'BLE 3 Custom #3', 
    473: 'BLE 3 Custom #4', 
    474: 'BLE 3 Custom #5', 
    475: 'BLE 4 Custom #2', 
    476: 'BLE 4 Custom #3', 
    477: 'BLE 4 Custom #4', 
    478: 'BLE 4 Custom #5', 
    483: 'UL202-02 Sensor Status', 
    517: 'SecurityStateFlags_P4', 
    518: 'ControlStateFlags_P4', 
    519: 'IndicatorStateFlags_P4', 
    520: 'AgriculturalStateFlags_P4', 
    521: 'UtilityStateFlags_P4', 
    522: 'CisternStateFlags_P4', 
    636: 'UMTS/LTE Cell ID', 
    855: 'Total LNG Used', 
    856: 'Total LNG Used Counted', 
    857: 'LNG Level Proc', 
    858: 'LNG Level kg'
};
