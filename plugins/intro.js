
import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let krtu = `β°ββ£β πΊπ°πππ πΈπ½πππΎ ββ’β
βββ£β *Nama:* 
βββ£β *Umur:* 
βββ£β *Alamat:*
βββ£β *Hobi:*
βββ£β *Pasangan:*
βββββΌβΈβΈβΈβ΄β΄β΄ β³
`
let wibu = `https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=apirey` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, krtu, wm,'MENU','.menu', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://www.facebook.com/griska.tehupuring",
    mediaType: "VIDEO",
    description: "https://www.instagram.com/p/CevoCg5hG-p/?utm_source=ig_web_copy_link", 
    title: 'IΙ΄α΄Κα΄α΄α΄α΄α΄α΄Ιͺα΄Ι΄',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
  }
  } }) // Tambah sendiri kalo mau
}
handler.command = /^(intro)$/i

export default handler

