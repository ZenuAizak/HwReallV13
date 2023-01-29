// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Samp Nipu Apalagi Lari Dari Tanggung Jawab

// Base Haikal Hw Mods : Copyan Dari Base Dika


const fs = require('fs')
const chalk = require('chalk')


global.wlcmm = []
global.wlcm = []
global.ntnsfw = []
global.ntnsfww = []
//gausah di apa² in!
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
//=================================================//
//—————「 Set Kebutuhan Button & Kontak 」—————//
//ubah aja kalau ada yang gapunya gsh di hps anggap aja credits :), note tanda ' gausah di hapus!
global.youtube = 'https://www.youtube.com/@kz._'// ubah aia
global.ig = 'rhandrqz_' // ubah aja
global.linkgrupss = "-"
global.email = 'kz857@gmail.com'
global.region = 'japan'
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'kz' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.botname = 'F' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.footer = 'kz' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
// Other
global.owner = ['6289520604246','6289520604246'] // ubah aja pake nomor lu
global.premium = ['6289520604246'] // ubah aja pake nomor lu
global.packname = 'kz' // ubah aja
global.ownerr = ['kz'] // ubaha aja
global.author = 'kz' //ubah aja
global.sessionName = 'haikal'
global.prefa = ['','!','.',',','🐤','🗿'] // Gausah Mendingan 
global.sp = '⭔' // Gausah Juga

// Terserah
global.mess = {
    nsfw: '*Fitur NSFW tidak diaktifkan, chat admin grup supaya diaktifkan*_',
    wait: '*Loading... Sabar Wibu*_',    
    verif: 'Hai Kakak 👋 Ini Adalah Bot Khusus Group Silahkan Meminta Pasword Terlebih Dahulu Agar Bisa Menggunakan Bot Hw Mods',
}
//=================================================//
//Gausah Di Apa2 in
global.f1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.f2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.f3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.f4 = 'application/zip'
global.f5 = 'application/pdf'
global.f6 = 'application/vnd.android.package-archive'
//=================================================//
global.limitawal = {
    premium: "Infinity",
    free: 100
}
   global.rpg = {
   darahawal: 100,
   besiawal: 5,
   goldawal: 1,
   emeraldawal: 1,
   umpanawal: 1,
   potionawal: 1
}
//=================================================//
//Terserah Kalau Paham 
global.thumb = fs.readFileSync("./baseikal/image/hw.jpg")
global.log0 = fs.readFileSync("./baseikal/image/haikal.jpg")
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})