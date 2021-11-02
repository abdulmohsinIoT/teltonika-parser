from pandas_ods_reader import read_ods
import collections
import json 

base_path = "/home/mohsin/Desktop/IOElements/FMB202.ods"
sheet_index = 1
df = read_ods(base_path , sheet_index )

df = read_ods(base_path, 1, headers=False, columns=['key', 'value', 'City', 'Experience','5','6','7','8','9','10','11'])

dict1 = dict(zip(df.key.astype(int), df.value))

ordered_dict = dict(collections.OrderedDict(sorted(dict1.items())))

# print(ordered_dict)

json_object = json.dumps(ordered_dict, indent = 4) 
print(json_object)
