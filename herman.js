///⊱─>UDAH DI KASIH NO ENC MASIH BELUM SUBSCRIBE PARAH<──⊰///HERMAN CHANEL
///⊱─>UDAH DI KASIH NO ENC MASIH BELUM SUBSCRIBE PARAH<──⊰///HERMAN CHANEL
///⊱─>UDAH DI KASIH NO ENC MASIH BELUM SUBSCRIBE PARAH<──⊰///HERMAN CHANEL
///⊱─>UDAH DI KASIH NO ENC MASIH BELUM SUBSCRIBE PARAH<──⊰///HERMAN CHANEL
///⊱─>UDAH DI KASIH NO ENC MASIH BELUM SUBSCRIBE PARAH<──⊰///HERMAN CHANEL
///⊱─>UDAH DI KASIH NO ENC MASIH BELUM SUBSCRIBE PARAH<──⊰///HERMAN CHANEL
///⊱─>UDAH DI KASIH NO ENC MASIH BELUM SUBSCRIBE PARAH<──⊰///HERMAN CHANEL
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const fs = require("fs")
const axios = require('axios')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')

//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇

const { fetchJosn, fetchText } = require('./lib/fetcher')
const { color, bgcolor } = require('./lib/color')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const setting = JSON.parse(fs.readFileSync('./setting.json'))

//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇
//SETTING//
autoread = setting.autoread
autocomposing = setting.autocomposing
autorecording = setting.autorecording
//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇
owner = setting.OwnerNumber
botname = setting.BotName
ownername = setting.OwnerName
fake = setting.Fake
pe = 'https://instagram.com/cal_me_herman?utm_medium=copy_'
//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇
AlphaBot = 'Alphabot'
Leyscoders = 'IkyOgiwara'
ZeksKey = 'apivinz'
lolkey = '682aeab645ed61cf137cf971'
// ࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇
const fakebc = fs.readFileSync ('./image/fakebc.jpg')
const fakeimage = fs.readFileSync ('./image/herman.jpg')
const fakeherman = fs.readFileSync ('./media/thumb.jpg')

//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇//

const _antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const _antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))

//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇
		
module.exports = herman = async (herman, mek, _welkom) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
    	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		const tanggal = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')
		const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
		const timeMak = moment().tz('Asia/Makassar').format("HH:mm:ss");
        const timeJay = moment().tz('Asia/Jayapura').format("HH:mm:ss");
        const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '#'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const Verived = "0@s.whatsapp.net"
		const txt = mek.message.conversation
		const botNumber = herman.user.jid
		const ownerNumber = [`${owner}@s.whatsapp.net`, `6281333603591@s.whatsapp.net`]
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let senderr = mek.key.fromMe ? herman.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const groupMetadata = isGroup ? await herman.groupMetadata(from) : ''.toString
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const senderNumber = sender.split("@")[0]
        const hour_now = moment().format('HH:mm:ss')
		const conts = mek.key.fromMe ? herman.user.jid : herman.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? herman.user.name : conts.notify || conts.vname || conts.name || '-'    
    
		const isAntiLink = isGroup ? _antilink.includes(from) : false
		const isWelkom = isGroup ? _welkom.includes(from) : false
		const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
		const isOwner = ownerNumber.includes(sender)
		const isMybot = isOwner || mek.key.fromMe
		let bio_nya = await herman.getStatus(sender)
		try {
			bio_user = `${bio_nya.status}`
		} catch {
			bio_user = '-'
			}

//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇

mess = {
wait: '╔WAIT╛SEDANG DI PROSES',
eror: '╔MAAF╛TERJADI KESALAHAN',
success: '╔DONE╛',
error: {
stick: '╔REPLY STIKER DENGAN BENAR!╛',
Iv: '╔LINK INVALID!╛'
},
only: {
group: '╔MAAF╛FITUR INI HANYA UNTUK DI DALAM GRUP!',
owner: '╔MAAF╛FITUR INI KHUSUS OWNER BOT',
admin: '╔MAAF╛FITUR INI KHUSUS ADMIN GROUP',
Badmin: '╔MAAF╛JADIKAN BOT SEBAGAI ADMIN'
}
}

//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇

const sendButton = async (from, context, fortext, but, mek) => {
            buttonMessages = {
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 1
            }
            herman.sendMessage(from, buttonMessages, buttonsMessage, {
                quoted: mek
            })
        }
//BUTTON TEXT//
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
herman.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
//BUTTON IMAGE//
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await herman.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
herman.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
//BUTTON VIDEO//
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await herman.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
herman.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
//BUTTON LOCATION//
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await herman.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
herman.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇

        const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = herman.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "𝐌𝐄𝐍𝐔","footerText": `${tanggal}`,"listType": "SINGLE_SELECT","sections": list}}, {})
            return herman.relayWAMessage(po, {waitForAck: true})
        }
const reply = (teks) => {
herman.sendMessage(from, teks, text, {quoted:mek})
}
const sendMess = (hehe, teks) => {
herman.sendMessage(hehe, teks, text)
}
const fakeyt = (teks) => {
herman.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
                "title": `${ucapanWaktu}`,
                "body": `${botname}`,
                "mediaType": "10",
                "mediaUrl": `${pe}`,
                "thumbnailUrl": "https://telegra.ph/file/64a3f4a3ea76ee25e201a.jpg",
                "thumbnail": fakeimage,
                "sourceUrl": `${pe}`,
},mentionedJid:[sender]}, quoted : mek})
};
const isUrl = (url) => {
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? herman.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : herman.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
        }
        const costum = (pesan, tipe, target, target2) => {
			herman.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
		}
        const fakestatus = (teks) => {
            herman.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./media/herman.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakegroup = (teks) => {
            herman.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./media/herman.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 99999999,
                            status: 1,
                            surface : 1,
                            message: `囧 𝐻𝑒𝑟𝑚𝑎𝑛 𝐶ℎ𝑎𝑛𝑒𝑙`, 
                            orderTitle: `${botname}`,
                            thumbnail: fakeherman, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
                      
//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇

        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    herman.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }  

//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇

const hideTag = async function(from, text){
           let anu = await herman.groupMetadata(from)
           let members = anu.participants
           let ane = []
           for (let i of members){
           ane.push(i.jid)
}
           herman.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('./media/herman.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}

//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇

if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
fakeyt(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup`)
setTimeout(() => {
herman.groupRemove(from, [kic]).catch((e) => { fakeyt(`BOT HARUS JADI ADMIN`) })
}, 0)
}

if (budy.length > 3500) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return
fakeyt('Tandai telah dibaca\n'.repeat(300))
fakeyt(`「 *VIRTEX DETECTOR* 」\n\nKamu mengirimkan virtex, maaf kamu di kick dari group`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
herman.groupRemove(from, [sender])
}     

//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇

if (autoread){
herman.chatRead(from, "read")
} else if (autocomposing) {
herman.updatePresence(from, Presence.composing)
} else if (autorecording) {
herman.updatePresence(from, Presence.recording)
}

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'Selamat Malam🌑'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang🌒'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore🏝️'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Selamat Siang️☀️'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = 'Selamat Pagi🌄'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Selamat Malam💫'
}

		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m[ PC\x1b[1;37m ]', '[\x1b[1;32m PRIBADI \x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m[ GC\x1b[1;37m ]', '[\x1b[1;32m GROUP \x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
switch (command) {

//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇

case 'menu':
fakeyt(`Menampilkan Menu..`)
teks = `hai Saya ${botname} 👋

┌─❏ *Info Bot* 
│🔮 *Nama Bot* : ${botname}
│🔮 *Owner* : ${ownername}
│🔮 *Batrei* : Tidak Terdeteksi
│🔮 *Version* : 1.0.0
└─────────────⎘`
img = fs.readFileSync('./image/herman.jpg')
trans = `Dilarang Spam Bot!! Jeda Minimal 5detik Spam/Call Auto Baned!.Mohon Hargai Creator Bot`
but = [
          { buttonId: `${prefix}allmenu`, buttonText: { displayText: 'MENU' }, type: 1 },
          { buttonId: `${prefix}sc`, buttonText: { displayText: 'SCRIP' }, type: 1 }
        ]
        sendButImage(from, teks, trans, img, but, {quoted: ftrol})
break
case 'allmenu':
menunya = `⌜𝐺𝑅𝑂𝑈𝑃 𝑀𝐸𝑁𝑈⌟
➡️ꦿ ${prefix}antilink _on|off_
➡️ꦿ ${prefix}antivirtex _on|off_
➡️ꦿ ${prefix}welcome _on|off_
➡️ꦿ ${prefix}group _buka|tutup_
➡️ꦿ ${prefix}promote _@tag|reply_
➡️ꦿ ${prefix}demote _@tag|reply_
➡️ꦿ ${prefix}add _628xx_
➡️ꦿ ${prefix}kick _@tag|reply
➡️ꦿ ${prefix}setpp _reply|cap_
➡️ꦿ ${prefix}setdesc _teks_
➡️ꦿ ${prefix}setname _teks_
➡️ꦿ ${prefix}hidetag _teks_
➡️ꦿ ${prefix}linkgrup
➡️ꦿ ${prefix}infogrup
➡️ꦿ ${prefix}listonline
➡️ꦿ ${prefix}resetlinkgrup

⌜𝑆𝑇𝐼𝐶𝐾𝐸𝑅 𝑀𝐸𝑁𝑈⌟
➡️ꦿ ${prefix}stiker _reply foto_
➡️ꦿ ${prefix}ttp _text_
➡️ꦿ ${prefix}attp _text_
➡️ꦿ ${prefix}toimg _reply stiker_
➡️ꦿ ${prefix}patrick

⌜𝑂𝑊𝑁𝐸𝑅 𝑀𝐸𝑁𝑈⌟
➡️ꦿ ${prefix}owner
➡️ꦿ ${prefix}bc _Teks_

⌜𝐷𝑂𝑊𝑁𝐿𝑂𝐴𝐷 𝑀𝐸𝑁𝑈⌟
➡️ꦿ ${prefix}ytmp3 _send link yt_
➡️ꦿ ${prefix}ytmp4 _send link yt_
➡️ꦿ ${prefix}tiktok _send link tt_

⌜𝑇𝐴𝐺 𝑀𝐸𝑁𝑈⌟
➡️ꦿ ${prefix}ganteng
➡️ꦿ ${prefix}cantik
➡️ꦿ ${prefix}jelek
➡️ꦿ ${prefix}goblok
➡️ꦿ ${prefix}bego
➡️ꦿ ${prefix}pinter
➡️ꦿ ${prefix}jago
➡️ꦿ ${prefix}nolep
➡️ꦿ ${prefix}monyet 	 
➡️ꦿ ${prefix}babi
➡️ꦿ ${prefix}beban
➡️ꦿ ${prefix}baik
➡️ꦿ ${prefix}jahat
➡️ꦿ ${prefix}anjing
➡️ꦿ ${prefix}haram
➡️ꦿ ${prefix}kontol
➡️ꦿ ${prefix}pakboy
➡️ꦿ ${prefix}pakgirl
➡️ꦿ ${prefix}wibu
➡️ꦿ ${prefix}hebat
➡️ꦿ ${prefix}sadboy
➡️ꦿ ${prefix}sadgirl 

⌜𝐴𝑁𝐼𝑀𝐸 𝑀𝐸𝑁𝑈⌟
➡️ꦿ ${prefix}husbu
➡️ꦿ ${prefix}loli
➡️ꦿ ${prefix}elf
➡️ꦿ ${prefix}waifu

⌜𝑀𝐴𝐾𝐸𝑅 𝑀𝐸𝑁𝑈⌟
➡️ꦿ ${prefix}blackpink
➡️ꦿ ${prefix}neon
➡️ꦿ ${prefix}greenneon
➡️ꦿ ${prefix}advanceglow
➡️ꦿ ${prefix}futureneon
➡️ꦿ ${prefix}sandwriting
➡️ꦿ ${prefix}sandsummer
➡️ꦿ ${prefix}sandengraved
➡️ꦿ ${prefix}metaldark
➡️ꦿ ${prefix}neonlight
➡️ꦿ ${prefix}holographic
➡️ꦿ ${prefix}text1917
➡️ꦿ ${prefix}minion
➡️ꦿ ${prefix}deluxesilver
➡️ꦿ ${prefix}newyearcard
➡️ꦿ ${prefix}bloodfrosted
➡️ꦿ ${prefix}halloween
➡️ꦿ ${prefix}jokerlogo
➡️ꦿ ${prefix}fireworksparkle
➡️ꦿ ${prefix}natureleaves
➡️ꦿ ${prefix}bokeh
➡️ꦿ ${prefix}toxic
➡️ꦿ ${prefix}strawberry
➡️ꦿ ${prefix}box3d
➡️ꦿ ${prefix}roadwarning
➡️ꦿ ${prefix}breakwall
➡️ꦿ ${prefix}icecold
➡️ꦿ ${prefix}luxury
➡️ꦿ ${prefix}cloud
➡️ꦿ ${prefix}summersand
➡️ꦿ ${prefix}horrorblood
➡️ꦿ ${prefix}thunder`
img = fs.readFileSync('./image/herman.jpg')
trans = `halo Ka ${pushname} 👋`
but = [
          { buttonId: `${prefix}sewa`, buttonText: { displayText: 'Sewa Bot' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: 'Owner' }, type: 1 }
        ]
        sendButImage(from, trans, menunya, img, but, {quoted: ftrol})
                  break
case 'sewa':
case 'sewabot':
daftar = `Halo ka ${pushname}
━━━━━ • ஜ • ❈ • ஜ • ━━━━━
• 🛒List Harga Sewa Botz🛒
💰 3k 1minggu
💰 5k permanen
minat ? Hubungi Owner Ketik #owner 
━━━━━ • ஜ • ❈ • ஜ • ━━━━━
`
herman.sendMessage(from, daftar, text, {quoted: ftrol})
                  break
//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇
case 'stickergif':
			case 'stikergif':
			case 'sgif':
			case 'stiker': 
			case 'sticker':
			case 's':
			fakeyt(mess.wait)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await herman.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								herman.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await herman.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply('Wait Tod')
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								herman.sendMessage(from, buffer, sticker, {quoted: freply})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau reply/tag gambar`)
					}
					break
					case 'ttp':  
                    if (!c) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}attp 𖨇𝐻𝑒𝑟𝑚𝑎𝑛᭄ 𝐵𝑜𝑡𝑧𓅂 Whatsapp`)
                    anu1 = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${c}`)
                    herman.sendMessage(from, anu1, sticker, {quoted: mek})
                    break
          case 'attp':
           if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
           buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
           herman.sendMessage(from, buffer, sticker, { quoted: mek })
            break          
            case 'toimg':
			if (!isQuotedSticker) return reply('Reply Sticker Tod')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await herman.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('gagal')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'NIH')
			fs.unlinkSync(ran)
			})
			break
case 'patrick':
			random = Math.floor(Math.random() * 6) + 1
		    wkwk = await getBuffer(`https://api.lolhuman.xyz/api/sticker/patrick?apikey=${Lolhuman}`)
			herman.sendMessage(from, wkwk, sticker, {quoted: froxx})
			break
case 'y':
fakeyt(`y`)
break
//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇

case 'owner':
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${ownername}\n`
+ `ORG: Creator ${ownername} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
+ 'END:VCARD'.trim()
herman.sendMessage(from, {displayName: `Ownernya ${botname}`, vcard: vcard2}, contact, 
{ quoted: ftrol, 
})
fakeyt(`_Tuh kontak Owner Ku_`)
break
case 'bc':
             if (!isOwner && !mek.key.fromMe) return  reply(mess.only.owner)
             if (args.length < 1) return reply('teks?')
             anu100 = await herman.chats.all()
             if (isMedia && !herman.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(herman).replace('quotedM','m')).message.extendedTextMessage.contextInfo : herman
             bc100 = await herman.downloadMediaMessage(encmedia)
             for (let _ of anu100) {
             herman.sendMessage(_.jid, bc100, image, {quoted: ftrol, caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
}
             fakeyt('Suksess broadcast')
             } else {
             for (let _ of anu100) {
             herman.sendMessage(_.jid, 
			{"contentText": `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`,
			"footerText": `${botname}`,
			"buttons": [
			{"buttonId": `${prefix}y`,
			"buttonText": {"displayText": "Okeh Bangg"
			},"type": "RESPONSE"}
			], "headerType": 'LOCATION',
			locationMessage: { degreesLatitude: '',
			degreesLongitude: '',
			jpegThumbnail: fakebc,
			}}, MessageType.buttonsMessage )
}
             fakeyt('Suksess broadcast')
}
             break
case 'SCRIP':
case 'sc':
case 'scrip':
	        herman.sendMessage(from, 'Bot Ini Menggunakan Sc :\nhttps://youtube.com/channel/UCPhU6uA_3gUaEvyrFZFgJqg',MessageType.text, {quoted: ftrol})
	         break

//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇

case 'welcome':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (args.length < 1) return fakeyt(`Ketik :\n${prefix}welcome on untuk mengaktifkan\n${prefix}welcome off untuk menonaktifkan`)
if ((args[0]) === 'on') {
if (isWelkom) return fakeyt('*welcome sudah aktif !!*')
_welkom.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
fakeyt(`\`\`\`Sukses ✅, Mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else if ((args[0]) === 'off') {
if (!isWelkom) return fakeyt('*welcome sudah off sebelumnya !!*')
_welkom.splice(from, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
fakeyt(`\`\`\`Sukses ✅, Menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else {
fakeyt('*on untuk mengaktifkan, off untuk menonaktifkan*')
}
break
case 'antilink':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (!q) return fakeyt(`Pilih on atau off`)
if (args[0].toLowerCase() === 'on'){
if (isAntiLink) return fakeyt(`Udah aktif`)
_antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
fakeyt(`\`\`\`Sukses ✅, Mengaktifkan fitur antilink di grup\`\`\` *${groupMetadata.subject}*`)
} else if (args[0].toLowerCase() === 'off'){
let anu = _antilink.indexOf(from)
_antilink.splice(anu, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
fakeyt(`\`\`\`Sukses ✅, Menonaktifkan fitur antilink di grup\`\`\` *${groupMetadata.subject}*`)
} else {
fakeyt(`_Pilih on atau off_`)
}
break
case 'antivirtex':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (!q) return fakeyt(`Pilih on atau off`)
if (args[0].toLowerCase() === 'on'){
if (isAntiVirtex) return fakeyt(`Udah aktif`)
_antivirtex.push(from)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
fakeyt(`\`\`\`Sukses ✅, Mengaktifkan fitur antivirtex di grup\`\`\` *${groupMetadata.subject}*`)
} else if (args[0].toLowerCase() === 'off'){
let anu = _antivirtex.indexOf(from)
_antivirtex.splice(anu, 1)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
fakeyt(`\`\`\`Sukses ✅, Menonaktifkan fitur antivirtex di grup\`\`\` *${groupMetadata.subject}*`)
} else {
fakeyt(`_Pilih on atau off_`)
}
break
case 'group':
case 'grup':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (args[0] === 'buka') {
fakeyt(`*Berhasil Membuka Grup ${groupMetadata.subject}*`)
herman.groupSettingChange(from, GroupSettingChange.messageSend, false)
} else if (args[0] === 'tutup') {
fakeyt(`*Berhasil Memtutup Grup ${groupMetadata.subject}*`)
herman.groupSettingChange(from, GroupSettingChange.messageSend, true)
}
break
case 'linkgroup':
case 'linkgrup':
case 'linkgc':
if (!isGroup) return fakeyt(mess.only.group)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
linkgc = await herman.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
herman.sendMessage(from, yeh, text, { quoted: ftrol })
break
case 'promote' :
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return fakeyt('Tag target yang ingin di jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda menjdi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
herman.groupMakeAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
herman.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return fakeyt('Tag target yang ingin di tidak jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda tidak menjadi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
herman.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
herman.groupDemoteAdmin(from, mentioned)
}
break
case 'add' :
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (args.length < 1) return fakeyt('Yang mau di add siapa??')
if (args[0].startsWith('08')) return fakeyt('Gunakan kode negara Gan')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
herman.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
fakeyt('Gagal menambahkan target, mungkin karena di private')
}
break
case "kick":
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (
mek.message.extendedTextMessage === undefined ||
mek.message.extendedTextMessage === null
)
return fakeyt("Tag target yang ingin di kick!");
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) {
herman.groupRemove(from, mentioned);
fakeyt(mess.success);
} else if (mentioned.length < 1) {
anu = mek.message.extendedTextMessage.contextInfo.participant;
herman.groupRemove(from, [anu]);
fakeyt(mess.success);
} else {
herman.groupRemove(from, mentioned);
fakeyt(mess.success);
}
break;
case 'tagall':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins) return fakeyt(mess.only.admin)
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `• @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'setname':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
herman.groupUpdateSubject(from, `${body.slice(9)}`)
herman.sendMessage(from, `\`\`\`Sukses ✅, Mengganti nama grup menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setdesc':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
herman.groupUpdateDescription(from, `${body.slice(9)}`)
herman.sendMessage(from, `\`\`\`Sukses ✅, Mengganti deskripsi grup\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setppgrup':
case 'setpp':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await herman.downloadMediaMessage(encmedia)
herman.updateProfilePicture(from, media)
.then((res) => fakeyt(jsonformat(res)))
.catch((err) => fakeyt(jsonformat(err)))
} else {
fakeyt(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
break
case 'hidetag':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return fakeyt(mess.only.admin)
try {
quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
hideTag(from, `${quotedText}`)
} catch {
hideTag(from, `${q}`)
}
break
case 'infogc':
case 'infogrup':
case 'infogrouup':
case 'grupinfo':
case 'groupinfo':
if (!isGroup) return fakeyt(mess.only.group)
try {
var pic = await herman.getProfilePicture(from)
} catch {
var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome :* ${isWelkom ? 'Aktif' : 'Mati'}\n*AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}\n*Desc :* \n\n${groupMetadata.desc}`
herman.sendMessage(from, await getBuffer(pic), image, {quoted: mek, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
break
case 'resetlinkgc':
case 'resetlinkgroup':
case 'resetlinkgrup':
case 'revoke':
case 'resetlink':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
json = ['action', 'inviteReset', from]
herman.query({json, expect200: true})
fakeyt('Sukses Mereset Link Group')
break
case 'online':
case 'listonline':
case 'here':          
if (!isGroup) return fakeyt(mess.only.group)
try {
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(herman.chats.get(ido).presences), herman.user.jid]
herman.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: fkon, contextInfo: { mentionedJid: online }})
} catch (e) {
fakeyt(`${e}`)
}
break
//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇
case 'ganteng': case 'cantik': case 'jelek': case 'goblok':  
       case 'bego': case 'pinter': case 'jago': case 'nolep': case 'monyet':                 	 
       case 'babi': case 'beban': case 'baik': case 'jahat': case 'anjing': 
       case 'haram': case 'kontol': case 'pakboy': case 'pakgirl': 
   	case 'wibu': case 'hebat': case 'sadboy': case 'sadgirl':  
				   if (!isGroup) return reply(`GROUP ONLY`)
 				   jds = []
				   const A1 = groupMembers
  		 		   const B1 = groupMembers
 				   const C1 = A1[Math.floor(Math.random() * A1.length)]
				   D1 = `yang *ter${command}* disini adalah @${C1.jid.split('@')[0]}`                  
				   jds.push(C1.jid)
				   mentions(D1, jds, true)
				   break

//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇
case 'waifu':
fakeyt(mess.wait)
waifu = await getBuffer(`https://api.lolhuman.xyz/api/random/waifu?apikey=${lolkey}`)
herman.sendMessage(from, waifu, image, { quoted: ftrol})
break
case 'husbu':
fakeyt(mess.wait)
husbu = await getBuffer(`https://api.lolhuman.xyz/api/random/husbu?apikey=${lolkey}`)
herman.sendMessage(from, husbu, image, { quoted: ftrol})
break
case 'loli':
fakeyt(mess.wait)
loli = await getBuffer(`https://api.lolhuman.xyz/api/random/loli?apikey=${lolkey}`)
herman.sendMessage(from, loli, image, { quoted: ftrol})
break
case 'elf':
fakeyt(mess.wait)
elf = await getBuffer(`https://api.lolhuman.xyz/api/random/elf?apikey=${lolkey}`)
herman.sendMessage(from, elf, image, { quoted: ftrol})
break

//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇
                    // Maker Menu //
                case 'blackpink':
                case 'neon':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':
                fakeyt(mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Herman Chanel`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolkey}&text=${ini_txt}`)
                    herman.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break

//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇
case 'ytmp3':
fakeyt(mess.wait)
if (args.length ==0)return reply('Link nya Mana Kak?')
ini_link = args.join(" ")
anu = await fetchJson(`https://api.zeks.me/api/ytmp3?url=${ini_link}&apikey=${ZeksKey}`)
get = anu.result
ini_txt =`Judul: ${get.title}\n`
ini_txt +=`Size: ${get.size}`
thu = await getBuffer(get.thumbnail)
herman.sendMessage(from, thu, image, { quoted: mek, caption: ini_txt })
res = await getBuffer(get.url_audio)
herman.sendMessage(from, res, audio)
break
case 'ytmp4':
fakeyt(mess.wait)
if (args.length ==0)return reply('Link nya Mana Kak?')
ini_link = args.join(" ")
anu = await fetchJson(`https://api.zeks.me/api/ytmp4?url=${ini_link}&apikey=${ZeksKey}`)
get = anu.result
ini_txt =`Judul: ${get.title}\n`
ini_txt +=`Size: ${get.size}`
thu = await getBuffer(get.thumbnail)
herman.sendMessage(from, thu, image, { quoted: mek, caption: ini_txt })
res = await getBuffer(get.url_video)
herman.sendMessage(from, res, video)
break
case 'tiktok':
fakeyt(mess.wait)
              if (!q) return reply('Linknya?')
              if (!q.includes('tiktok')) return reply(mess.error.Iv)
              data = await fetchJson(`https://api.dapuhy.xyz/api/socialmedia/dddtik?url=${q}&apikey=noapikey`)
              result = `Title : ${data.title}`
              juhi = await getBuffer(data.thumb)
              buttons = [{buttonId: `${prefix}buttons3 ${q}`,buttonText:{displayText: `NO WATERMARK`},type:1},{buttonId:`${prefix}buttons4 ${q}`,buttonText:{displayText:'Audio ( 4.5 MB )'},type:1}]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(data.thumb))
              imageMsg = ( await herman.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: juhi})).message.imageMessage
              buttonsMessage = {footerText:'Pilih satu format di bawah ini', imageMessage: imageMsg,
              contentText:`${result}`,buttons,headerType:4}
              prep = await herman.prepareMessageFromContent(from,{buttonsMessage},{quoted: froxx})
              herman.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break

//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇
				
default:
if (isOwner) {
if (budy.startsWith('$')){
if (!mek.key.fromMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (isOwner) {
if (budy.startsWith('>')) {
console.log(color('[ EVAL ]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
reply(`${evaled}`)
} catch (err) {
reply(`${err}`)
}
}
}
}
}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
        }
	// console.log(e)
	}
}
//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇
//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇
	
    
//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇