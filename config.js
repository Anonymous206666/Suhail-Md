const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "https://telegra.ph/file/4dc1ce71f9eb3655f5a0b.mp4" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="anonymoustechgodfather@gmail.com"
global.location="Nigeria,lagos."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Nigeria,lagos";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "2349137924240" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349157709672";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349137924240";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/4dc1ce71f9eb3655f5a0b.mp4" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "paused" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "truee"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_26_06_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxODMsXG4gICAgICAgIDYyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjI3LFxuICAgICAgICA3OCxcbiAgICAgICAgMjM2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODYsXG4gICAgICAgIDYsXG4gICAgICAgIDc5LFxuICAgICAgICAxOSxcbiAgICAgICAgNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTA3LFxuICAgICAgICA5NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzksXG4gICAgICAgIDc2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTAwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjA2LFxuICAgICAgICA5LFxuICAgICAgICAzOCxcbiAgICAgICAgMzksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTA3LFxuICAgICAgICA4MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjM0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0NixcbiAgICAgICAgMTg0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE2LFxuICAgICAgICAxODUsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjUyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDQ0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjQzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExMixcbiAgICAgICAgODUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMzUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDksXG4gICAgICAgIDY5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3MixcbiAgICAgICAgNixcbiAgICAgICAgNjQsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTg3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOSxcbiAgICAgICAgODcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjU1LFxuICAgICAgICA0MyxcbiAgICAgICAgODgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM4LFxuICAgICAgICA1NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAzNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjMwLFxuICAgICAgICA2MixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTksXG4gICAgICAgIDUyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE5LFxuICAgICAgICA1NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDcwLFxuICAgICAgICAxODMsXG4gICAgICAgIDk4LFxuICAgICAgICA2MixcbiAgICAgICAgNzMsXG4gICAgICAgIDYwLFxuICAgICAgICA0MixcbiAgICAgICAgMjI0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDI1LFxuICAgICAgICA5NixcbiAgICAgICAgMjksXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDY2LFxuICAgICAgICA0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI5b1V3enh6ZXVWZS9nbDZjMFdCMThwc3B4cS9JSGswM1g2ZjlUVmRBcFVzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxMzc5MjQyNDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkQ0NDkyOTlDNDkxQzdFQUVDMkFDMjYyMTA4MjlBOEM2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODk4MzU4MVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI4N1lQR3RaVFNEUzFxTzlLWElIZlZRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjljZjE4ZDhkLTYyOTItNDVmNi1hMzdmLTNhMDFlY2U5MWJiMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4OSxcbiAgICAgIDgyLFxuICAgICAgMjM1LFxuICAgICAgMTcyLFxuICAgICAgNjYsXG4gICAgICA5MSxcbiAgICAgIDMxLFxuICAgICAgMTY5LFxuICAgICAgMTgyLFxuICAgICAgMjUyLFxuICAgICAgMTM3LFxuICAgICAgNzYsXG4gICAgICAxMTIsXG4gICAgICA3NyxcbiAgICAgIDY2LFxuICAgICAgMTAwLFxuICAgICAgMTMyLFxuICAgICAgNDcsXG4gICAgICA4NCxcbiAgICAgIDIxM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTYsXG4gICAgICAxMDksXG4gICAgICA0NCxcbiAgICAgIDQ5LFxuICAgICAgMTE0LFxuICAgICAgMTA5LFxuICAgICAgMTYxLFxuICAgICAgMTUxLFxuICAgICAgMTU1LFxuICAgICAgMTg0LFxuICAgICAgMTU2LFxuICAgICAgMTc4LFxuICAgICAgMTE3LFxuICAgICAgMTMwLFxuICAgICAgMTY0LFxuICAgICAgMjE1LFxuICAgICAgOTksXG4gICAgICA5NCxcbiAgICAgIDE5NyxcbiAgICAgIDEzNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI1QjJKTFdKN1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEzNzkyNDI0MDoxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTA0Nzg0NzUzMzQ4ODUwOjE4QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkFOT05ZTU9VU1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xtT2hyY0dFSkszMXJNR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicmpFQXdSak9NNkUvOWhuL3l6WlFJU2hYNXRTRTZHNkhBRHJnK01LaklRaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJyL2xTb1FKcmphNUN6ZktQU0xIbnd3Y1dST0thNnpZeFFxMkV3bHc1SzhEVXlKMDIwWUZraXhsWXhaQnFPRnRTOEpQdFIzMDh5SkpWamZ2V05tOWxEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJDcDRiNWROR3M2SmxFclJiS3U2TXdrZVpFUmJBVFhQOE0zdVl1MElVU3BKOUtmKzk3cXJ6SDcvbVVPYVgxQmZ5Vnd3ZGsyTU5HNElqVEJiMElGT1ZDUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTM3OTI0MjQwOjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4OTgzNTc0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTCtXXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMK1cuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJZNk1MUmZFZG1VZmprRmNYT05qTy9qb3J2aGxiTms1dzgwTUlTQWQ0K2hnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3MjYwNTYyNDksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxODk4MzM1ODgzNVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
