const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUQyVlo0bW5HdHEvZktySklRM0VNWnlWbGNFN0tXNDZaV2N4aGhIaTdFND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOWpYbE9MUTM4aldaYWh4RUhkN1Y5WVdNOWdPMENiZndCRWtPYndSN2ZXMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTTksxdFltejMxLzE1eHEyZ2RmOWJuanlTdkw0aFdCOUZ1UnQzaWUyZW53PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2YlVhblZPSHRaR0tLM1RxUlBvZnhTbk9Uc1hyY05mQi9lZjRaSklpMWhrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFINThmdGpmTGxTaUxJcGtOZmdKVERJRGlwN2VuemFtNGk1NERLV2w0VTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1IRWFHS0lnN1hMUzc1Rk5zYi9IZ1VESGFTa1ZBdHFRZlY0UzViTER0Qk09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU1Ba0xKSWRuOGpzSkg4b3haSDM4dFlINTQwdFdVZzZXRTZkMU1wWnAyRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUnlGcXJiUG5qQWlFYkVzaDBCQ2FuK0Z5V3lQNGx5TWIvZksyN3N1aVYzUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZrcUMrV2NCUGd5ZlVkUjhLL1pkOTQrUVEzc0lWMlhwd1NsdzVadkQxRUZZNk4weG9xWVJJZnFlWkx2aEEvcC8rQUVkOGovRG03YnZrYyt1bm5OOWdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzAsImFkdlNlY3JldEtleSI6IjNhdGFwSjA4ckVTRmtjS1Q0Z1BMZFNERUVjSC9LTUYwNGE4NlV4Z1BUNjA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6Ijg1RTFTUjgzIiwibWUiOnsiaWQiOiIyNzY3MTY5NTcxNTo0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6InNpYW5vWCIsImxpZCI6IjE3MTYxMDM2NzYxMTAxMzo0QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT2pLNW9nRUVKS0tzTVVHR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUFdJRmhXbkZ1RzVteWVBeUQ4bmtLWTQ2Y3hnSkdNQXdiREYzNUR1K1Uzdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiYStxd3VjNTVmMjZ3STd0M1VpYytIcXY0ZWY4K0pZS3BxaXQzOFh6NUo1VVhTcFNnT0hneXc3N1gyb1BweWZmbGM0bGQ5VUJLVkwvaEphVmtycjB5Q0E9PSIsImRldmljZVNpZ25hdHVyZSI6InVVSWpqeXcyWHR2YzRNZURuRktDK2gxUFRvVHRUUG9hemI0ZkxWRkdTK3d5Q0hrMVQ5Rk9SRVFlVE1OSXdUN2c0eXREdDRKQy9BWTJnVlhZR0pjMWh3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjc2NzE2OTU3MTU6NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUMWlCWVZweGJodVpzbmdNZy9KNUNtT09uTVlDUmpBTUd3eGQrUTd2bE44In19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTYxMDM5NTgsImxhc3RQcm9wSGFzaCI6IjFLNGhINCIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBT2tvIn0=",
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
