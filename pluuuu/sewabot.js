let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let pepe = 'http://gentleninja.com/reviews/wp-content/uploads/2017/05/Bot-development-companies.jpg'
  let baper = await fetch(pepe).then(a => a.buffer())

  let aine = '6283178502766@s.whatsapp.net'
  let a = await conn.profilePictureUrl(conn.user.jid, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
  let b = await conn.profilePictureUrl(owner[0]+'@s.whatsapp.net', 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
  let c = pickRandom([a, b])
  let d = await fetch(c).then(a => a.buffer())
  let prepare = await require('@adiwajshing/baileys').generateWAMessageFromContent(m.key.remoteJid,{listMessage:{
  title: `${await conn.getName(conn.user.jid)}`,
  description: ` *• SEWA BOT & UP TO PREMIUM & JASA RUN 24 JAM ONLY •*
        
CEK CATALOG KAMI DI LINK DI BAWAH
https://sociabuzz.com/ezpie/shop
jika sudah bayar langsung konfirmasi ke owner dibawah (sertakan screenshot)
☞𝑜𝑤𝑛𝑒𝑟 ❀ wa.me/${owner[0]} ✵
*Bukan Bot!!!*
*Owner ${conn.user.name}*
`,
  buttonText: 'Harga Sesuai Pasaran',
  listType: 2,
  productListInfo: {
  productSections: [{
  title:'Klik untuk order',
  products:[{productId:'5544602148937520'}]}],
  headerImage: { productId: '5544602148937520',
  jpegThumbnail: baper },
  businessOwnerJid: `6283178502766@s.whatsapp.net`
  },
  footerText: 'https://youtube.com/channel/UCJ-AJ4DAfOL75-jpJi3m2ow',
  }},{})
  conn.relayMessage(prepare.key.remoteJid,prepare.message,{messageId:prepare.key.id})
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)

}
handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(sewa)$/i

module.exports = handler

function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
    }
