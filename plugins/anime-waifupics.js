import fetch from 'node-fetch'
import axios from 'axios'

let handler = async (m, { conn, args, usedPrefix, command }) => {
m.react(rwait)

let type = (command).toLowerCase()

switch (type) {
	
	case 'loli':
	     let img = (await axios.get(`https://raw.githubusercontent.com/FG98F/team-fg/main/img/loli.json`)).data
	     let loli = pickRandom(img)
	   //conn.sendFile(m.chat, loli, 'loli.png', `✅ Random ${command}`, m)
	     conn.sendButton(m.chat, `✅ Random ${command}`, igfg, loli, [['▷▷ SIGUIENTE', `${usedPrefix + command}`]],m)
	     m.react(dmoji) 
	break
	
case 'waifu':
case 'megumin':
case 'neko':
  let res = await fetch(`https://api.waifu.pics/sfw/${command}`)
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw '❎ Error'
    conn.sendButton(m.chat, `✅ Random ${command}`, igfg, json.url, [['▷▷ SIGUIENTE', `${usedPrefix + command}`]],m)
   m.react(dmoji) 
break


default:
 }
}

handler.help = ['waifu', 'neko', 'megumin', 'loli']
handler.tags = ['nime']
handler.command = ['waifu', 'neko', 'megumin', 'loli'] 
handler.limit = true

export default handler


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
