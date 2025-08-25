const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUlaZjBKQjVjcUdxcDZ4cCtkZHlXYm5WUzJ2cE40eXdwWGpMSVNySjBuMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTkdSNGVsWHl2Y0NvcFRCWHkzV2dlM0MyZ1RGc2lJMWE3aG9qZ1pYN1JVRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLT1AyMlV5NStnMkhhcjE1TE04cERNT1o1RmtCZ0lsU2NTVWRNVmJ6LzNNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLWE5zU3ozQW1aSjFwcDg1UDh0b2tVN3FIWlR3QW5CL3BhNzJKejNyanpvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFDVXZRSXlMM2wvTVZLVzFqNUdnYStGTTZoSWFTTm56Y0JYa1FETmZYRlE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik15L2l0bVJYcWcrZ0g4RmM0T1Y0U3RQTXRGVEJGZjRRK0dkTFFXb3VMVk09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUNaTWVLNzJXZ3p4V1Y4aldtRFRQVndydXg3U25IZnlVWE52bldrMW5sZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoienorU0Npei9wZjVOT3pud2krbUdtVzh1RmJhRldUZlc3cDYxVkpycGlHOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImIvSnRvN0VWWE1oNmFkaGRGU1RqNjE4V1BxZHFOU2ZDd0VUN0hGemJLa1A0ZW1UOXRvN2tyQXF5TTRSaTZtZzRIV3p2OWpWbm5QbVN6cHAxdUJEaGhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUzLCJhZHZTZWNyZXRLZXkiOiJFWXh2akY0bGd3WHlkYUFlT2xGbVU1UTkrYUE0ZG1kT1daanByZmlzVnZNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJBWjdDTUU2UCIsIm1lIjp7ImlkIjoiMjc2NzE2OTU3MTU6NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJzaWFub1giLCJsaWQiOiIxNzE2MTAzNjc2MTEwMTM6NUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09uSzVvZ0VFTFNVc3NVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlBXSUZoV25GdUc1bXllQXlEOG5rS1k0NmN4Z0pHTUF3YkRGMzVEdStVM3c9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImRqRTRsUmNnNExBN2VFRXhXWnpsMlNDa29zeUkxdXl6THB3NWJaS01SMkRjR0h5NmRGQlM1VEIybGh1cFdUSTFXVkxtcUlkc0plaUJMWkNqamlVSkJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJyRC9UY29WcHpHeVZLMjFvTmdxR21QQ1loWGJ6aUkxZGtvR3Y3Rlc4c2ZFUzJvZSt1YkszUWtZT0JRYUkraHdZYUlIamRUeWhWWUl2STNRL3V2c2ppUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI3NjcxNjk1NzE1OjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVDFpQllWcHhiaHVac25nTWcvSjVDbU9Pbk1ZQ1JqQU1Hd3hkK1E3dmxOOCJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU2MTM4MDM5LCJsYXN0UHJvcEhhc2giOiIxSzRoSDQifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY SIANO 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/bg6id7.jpg",
MENU_VIDEO_URL: process.env.MENU_VIDEO_URL || "",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "*SIANO-X*",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "siano",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "27671695715",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*SIANO*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ SIANO🌚*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/bg6id7.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> SIANO is up 💣",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "27671695715",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
