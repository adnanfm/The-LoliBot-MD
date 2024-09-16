/*-------------------------------------------------------*/
/* [❗]                      [❗]                      [❗] */  
/*                                                       */ 
/*       |- [ ⚠ ] - CREDITOS DEL CODIGO - [ ⚠ ] -|      */
/*     —◉ DESAROLLADO POR OTOSAKA:                       */
/*     ◉ Otosaka (https://github.com/6otosaka9)          */
/*                                                       */
/*     —◉ FT:                                            */
/*     ◉ BrunoSobrino (https://github.com/BrunoSobrino)  */
/*                                                       */
/* [❗]                      [❗]                      [❗] */
/*-------------------------------------------------------*/
import fetch from 'node-fetch'
import axios from 'axios'
import { Configuration, OpenAIApi } from 'openai'
const configuration = new Configuration({ organization: global.openai_org_id, apiKey: global.openai_key });
const openaiii = new OpenAIApi(configuration);
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[❗] ɪɴɢʀᴇsᴇ ᴜɴᴀ ᴘᴇᴛɪᴄɪᴏɴ ᴏ ᴜɴᴀ ᴏʀᴅᴇɴ  ᴘᴀʀᴀ ᴜsᴀʀ ʟᴀ ғᴜɴᴄɪᴏɴ ᴅᴇʟ ᴄʜᴀᴛɢᴘᴛ\n\n❏ ᴇᴊᴇᴍᴘʟᴏ ᴅᴇ ᴘᴇᴛɪᴄɪᴏɴᴇ ʏ ᴏʀᴅᴇɴᴇs*\n* ${usedPrefix + command} Reflexion sobre la serie Merlina 2022 de netflix*\n*${usedPrefix + command} Codigo en JS para un juego de cartas*`    
try {
await conn.sendPresenceUpdate('composing', m.chat)
let chgptdb = global.chatgpt.data.users[m.sender];
chgptdb.push({ role: 'user', content: text });
const config = { method: 'post', url: 'https://api.openai.com/v1/chat/completions', headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + global.openai_key }, data: JSON.stringify({ 'model': 'gpt-3.5-turbo', 'messages': [{ role: 'system', content: 'Actuaras como un Bot de WhatsApp el cual fue creado por BrunoSobrino, tu seras The Mystic - Bot' }, ...chgptdb ]})}
let response = await axios(config);
chgptdb.push({ role: 'assistant', content: response.data.choices[0].message.content }) 
m.reply(response.data.choices[0].message.content)
} catch (efe1) {
console.log(efe1)    
try {
const BotIA222 = await openaiii.createCompletion({ model: "text-davinci-003", prompt: text, temperature: 0.3, max_tokens: 4097, stop: ["Ai:", "Human:"], top_p: 1, frequency_penalty: 0.2, presence_penalty: 0, })
m.reply(BotIA222.data.choices[0].text.trim())    
} catch (efe2) {
console.log(efe2)    
try {
let IA = await fetch(`https://api.amosayomide05.cf/gpt/?question=${text}&string_id=${m.sender}`)  
let IAR = await IA.json()
conn.sendMessage(m.chat, { text: `${IAR.response}`.trim() }, { quoted: m });
} catch (efe) {
console.log(efe)    
try {   
let rres = await fetch(`https://api.ibeng.tech/api/info/openai?text=${text}&apikey=tamvan`)
let jjson = await rres.json()
m.reply(jjson.data.data.trim())    
} catch (efe3) {    
console.log(efe3)
try {
let tioress22 = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${lolkeysapi}&text=${text}&user=${m.sender}`)
let hasill22 = await tioress22.json()
m.reply(`${hasill22.result}`.trim())      
} catch (efe4) {   
console.log(efe4)
throw `*[❗] ᴇʀʀᴏʀ, ᴠᴜᴇʟᴠᴀ ᴀʟ ɪɴᴛᴇɴᴛᴀʀʟᴏ*`   
}}}}}}
handler.command = ['openai2', 'chatgpt2', 'ia2', 'robot2', 'Mystic', 'MysticBot']
export default handler
