export default {
  "config": {
    "database":"Chars",
    "service": null,
    "structure":{
      "character":{
        "fields":[
          { "name":"name", "defaultValue":"", "required":true, "type":"string", "unique":true},
          { "name":"power", "defaultValue":"", "required":false, "type":"number", "unique":false}
        ]
      }
    },
    "savedCharacters": [
        {"name":"MegaMan", "power":"blast"},
        {"name":"NitroMan", "power":"explosion"},
        {"name":"Zero", "power":"Light Sword"},
        {"name":"Dr Light", "power":"Repair"},
        {"name":"Condemned", "power":"Death Strike"},
    ],
  },
  "screen": {
    storeme: 0,
  },
}


/**
 * 
   "charStructure":{
      "characters": [
          {"name":"MegaMan", "power":"blast"},
          {"name":"NitroMan", "power":"explosion"},
          {"name":"Zero", "power":"Light Sword"},
          {"name":"Dr Light", "power":"Repair"},
          {"name":"Condemned", "power":"Death Strike"},
      ]
  }
 */