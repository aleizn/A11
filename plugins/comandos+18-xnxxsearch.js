import axios from 'axios'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
let handler = async (m, { text, conn, args, command, usedPrefix }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `[ ⚠️ ] Los comandos +18 estan desactivados en este grupo, si es administrador de este grupo y desea activarlos escriba #enable modohorny para activar*`
if (!text) throw `*𝙌𝙪𝙚 𝙗𝙪𝙨𝙘𝙖? 𝙐𝙨𝙚𝙧 𝙪𝙣 𝙚𝙣𝙡𝙖𝙘𝙚 𝙙𝙚 𝙭𝙣𝙭𝙭\n𝙀𝙟𝙚𝙢𝙥𝙡𝙤\n*${usedPrefix + command} Con mi prima*`
try {
await delay(5000)
let res = await xnxxsearch(text)
let json = res.result
let listSerch = []
let teskd = `𝑪𝒐𝒏𝒕𝒆𝒏𝒊𝒅𝒐 𝒓𝒆𝒍𝒂𝒄𝒊𝒐𝒏𝒂𝒅𝒐: ${args.join(" ")}`
const sections = [{
title: `ⓡⓔⓢⓤⓛⓣⓐⓓⓞⓢ`,
rows: listSerch }]
const listMessage = {
text: teskd,
footer: '𝐄𝐥𝐢𝐣𝐚 𝐮𝐧𝐚 𝐨𝐩𝐜𝐢𝐨𝐧 𝐲 𝐩𝐫𝐞𝐜𝐢𝐨𝐧𝐞 𝐄𝐧𝐯𝐢𝐚𝐫',
title: "➤ 𝑪𝒐𝒏𝒕𝒆𝒏𝒊𝒅𝒐 𝒆𝒏𝒄𝒐𝒏𝒕𝒓𝒂𝒅𝒐",
buttonText: "➤ 𝑹𝒆𝒔𝒖𝒍𝒕𝒂𝒅𝒐𝒔",
sections}
for (let i of json) {
listSerch.push({title: i.title, description: '⇧ sᴇʟᴇᴄᴄɪᴏɴᴀ ᴇsᴛᴀ ᴏᴘᴄɪᴏɴ ᴘᴀʀᴀ ᴅᴇsᴄᴀʀɢᴀʀ ᴇsᴛᴇ ᴠɪᴅᴇᴏ ⇧', rowId: `${usedPrefix}xnxxdl ${i.link}`})} 
conn.sendMessage(m.sender, listMessage, { quoted: m })
if (m.isGroup) return m.reply('*✳️ 𝙃𝙊𝙇𝘼 𝙀𝙎𝙏𝙄𝙈𝘼𝘿𝙊 𝙐𝙎𝙐𝘼𝙍𝙄𝙊(𝘼), 𝙎𝙐 𝙋𝙀𝙍𝘿𝙄𝘿𝙊 𝙃𝘼 𝙎𝙄𝘿𝙊 𝙀𝙉𝙑𝙄𝘼𝘿𝙊 𝘼 𝙎𝙐 𝘾𝙃𝘼𝙏 𝙋𝙍𝙄𝙑𝘼𝘿𝙊, 𝙀𝙎𝙏𝙊 𝘾𝙊𝙈𝙊 𝙎𝙊𝙇𝙐𝘾𝙄𝙊𝙉 𝙏𝙀𝙈𝙋𝙊𝙍𝘼𝙇 𝘼 𝙀𝙍𝙍𝙊𝙍𝙀𝙎 𝘿𝙀 𝙈𝙀𝙉𝙎𝘼𝙅𝙀 𝘾𝙊𝙉 𝘽𝙊𝙏𝙊𝙉𝙀𝙎 𝙏𝙄𝙋𝙊 𝙇𝙄𝙎𝙏𝘼𝙎 𝙌𝙐𝙀 𝙉𝙊 𝙎𝙊𝙉 𝙑𝙄𝙎𝙄𝘽𝙇𝙀𝙎 𝙀𝙉 𝙇𝘼𝙎 𝙑𝙀𝙍𝙎𝙄𝙊𝙉𝙀𝙎 𝙈𝘼𝙎 𝙍𝙀𝘾𝙄𝙀𝙉𝙏𝙀𝙎 𝘿𝙀 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋*')      
} catch (e) {
m.reply(`${lenguajeGB['smsAvisoFG']()}𝙑𝙐𝙀𝙇𝙑𝘼 𝘼 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙍`)
}}
handler.command = /^porhubsearch|xvideossearch|xnxxsearch$/i
handler.level = 9
handler.limit = 6
handler.register = true
export default handler

const delay = time => new Promise(res => setTimeout(res, time))

async function xnxxsearch(query) {
return new Promise((resolve, reject) => {
const baseurl = 'https://www.xnxx.com'
fetch(`${baseurl}/search/${query}/${Math.floor(Math.random() * 3) + 1}`, {method: 'get'}).then(res => res.text()).then(res => {
let $ = cheerio.load(res, { xmlMode: false });
let title = [];
let url = [];
let desc = [];
let results = [];
$('div.mozaique').each(function(a, b) {
$(b).find('div.thumb').each(function(c, d) {
url.push(baseurl+$(d).find('a').attr('href').replace("/THUMBNUM/", "/"))
})})
$('div.mozaique').each(function(a, b) {
$(b).find('div.thumb-under').each(function(c, d) {
desc.push($(d).find('p.metadata').text())
$(d).find('a').each(function(e,f) {
title.push($(f).attr('title'))
})})})
for (let i = 0; i < title.length; i++) {
results.push({ title: title[i], info: desc[i], link: url[i] })}
resolve({ code: 200, status: true, result: results
})}).catch(err => reject({code: 503, status: false, result: err }))})}
