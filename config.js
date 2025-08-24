const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid09Ybm1od0c5Mm4yNW1aNzdKRXR1cm9kRXc2U3pyaElQelh5cWVnUm1Hcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaHRsS2FmS0U4dlZScWJpN3hHQWVnTmRNQ082QytOZEpVdkFmZDlhaVZWcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3SG5mSDVOSHg2c3NFNTcwODhYVHF0ZkV2VTZrVklvcUtzcGtONnpWb1g0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyMVBsem13VmpRaCtJUHp2WXpnSFFyQ09mUk9LdmJ1eDE3T1htSllURkZRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1OU3IwVGhrd1ZDeGE5Z0V1bjM0bUVhcXZsV2txU3F2WktmT01MUW0wRTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVzSjlsMDBqWTU0aXJiekphSFZWZkYvd1NDa2NtbWljK2VKUGJpVFhOSDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE9FUE5JRHdBb2JRanJwQ1loZkIrZU5rMTdYRUp6R0pudW1hN2xKY1Jtdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicGczdWwxOXlQTnJHVFc5VGMwWmt4T3JDcGRVRVdEamE1ZGtORG9HelJRQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikg4MlZKZE1IdHN0OEUrK2dtRFMvdys0QjVmRXJyeCsreGlrbjM4UHdBQk9KZmxLNTVWR1NNaEtKa3hUVGM5Rmd4Tng3YzRYcmVialBMUmJKOGUzQWdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEsImFkdlNlY3JldEtleSI6IklDMGc1MVA4UDh0UHdMNW94ejBic1VIMXlKRU1HVGFkMzlVazNGYmwzU009IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6Ik5WRFc5WllZIiwibWUiOnsiaWQiOiIyMzQ4MDU0NjcxNDU4OjE5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkRhbWlpc25vbmNoYWxhbnQiLCJsaWQiOiIxMzk0ODc5MjEzNDQ1ODY6MTlAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJbXJpYllIRVByOHJNVUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJwMUVlanlUUlpJcjgyZ1BKeW92dm1KaHl0cno1WGdoQnpxR1ZFSUFKSWk0PSIsImFjY291bnRTaWduYXR1cmUiOiJZSnBzNEtvcGVwVUd0RkJleFFNWkl4aDBTRjV4Q0ROQ1VjOC9kVi94U056Y1VsWTVDM3VONkh5WStTelo2OGYzeU5kY3VCanVlMnF5SkZFNzF1MmdCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiamVHZ0NTY21tYmVWWHIrK3VjZndjUnBRa2xRZy9vV2cra29MWk1ZOHVYeU0ySlVNamovdXlWSnI5MFh2elRRUnhnY25kazlaYlB0Z04ycUlmalhIZ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MDU0NjcxNDU4OjE5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFkUkhvOGswV1NLL05vRHljcUw3NWlZY3JhOCtWNElRYzZobFJDQUNTSXUifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NjA1MzExNywibGFzdFByb3BIYXNoIjoibm0zQmIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVSTiJ9",
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
