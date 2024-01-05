module.exports = {
TOKEN: "MTE5MDYwMzYwMDg0MjQ3MzUwMw.Gvh-C8.pMTH-z3Gev-bFkJO_L-gMdnmh3LlN1JQySvu9A", //BOTUNUZUN TOKENINI GIRIN. -CRAXSHOP
ownerID: ["939625279645696050"], //BOT SAHİBİ İDSİNİ GİRİN BİRDEN FAZLA ID GIREBİLİRSİNİZ. -CRAXSHOP
botInvite: "https://discord.com/api/oauth2/authorize?client_id=1190603600842473503&permissions=8&scope=bot", //BOTUN OAUTH2 DAVET BAĞLANTISINI OLUŞTURUN VE BURAYA GİRİN. -CRAXSHOP
supportServer: "https://discord.gg/XDKtD5ga", //DESTEK SUNUCUNUZ VARSA BURAYA GIRIN YA DA KULLANACAĞINIZ SUNUCUYUDA GİREBİLİRSİNİZ. -CRAXSHOP
mongodbURL: "mongodb+srv://ozturkutki01:YQNY7vZoAyKU6KF1@cluster0.x9ic46g.mongodb.net", //MONGODB CONNECT URLNIZI GIRIN. -CRAXSHOP
status: '❤️ CraxShop',
commandsDir: './commands', //Please don't touch
language: "en", //en, tr, nl, pt, fr, ar, zh_TW, it, ja //LANGUAGES KLASÖRÜNDEKİ KISALTMALARI BURAYA GİREBİLİRSİNİZ. [BOTUN ANA DİLİDİR.] -CRAXSHOP
embedColor: "ffa954", //hex color code
errorLog: "", //write your discord error log channel id.


sponsor: {
status: true, //true or false
url: "https://itemsatis.com/p/craxshop", //BOTA SPONSOR BULURSANIZ VEYA REKLAM ALIRSANIZ BURAYA LINK GIREBILIRSINIZ. -CRAXSHOP
},

voteManager: { //TOPGG VOTE SISTEMIDIR (OPSIYONEL) -CRAXSHOP
status: false, //KULLANMAK ISTIYORSANIZ "TRUE" KULLANMAK ISTEMIYORSANIZ "FALSE" YAPIN. -CRAXSHOP
api_key: "", //TOPGG API KEYINIZI BURAYA GİRİN. -CRAXSHOP 
vote_commands: ["back","channel","clear","dj","filter","loop","nowplaying","playlist","save","search","time","volume"], //VOTE ILE KULLANILABILECEK KOMUTLARI BURAYA YAZABILIRSINIZ. -CRAXSHOP
vote_url: "", //TOPGG VOTE EKRANINA GIDEN LINKI BURAYA GİRİN. -CRAXSHOP
},

shardManager:{
shardStatus: false //BOTUNUZ 1000 VE DAHA FAZLA SUNUCUDAYSA BUNU AKTIFLEŞTİRİN YOKSA BOTA BİR SÜRÜ HATA GELİR VE BOT ÇALIŞMAYABİLİR. -CRAXSHOP
},

playlistSettings:{
maxPlaylist: 10, //MAKSİMUM ÇALMA LİSTESİ -CRAXSHOP
maxMusic: 75, //MAKSİMUM MÜZİK SIRASI -CRAXSHOP
},

opt: {
DJ: {
commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume', 'shuffle'] //DJ OLANLARIN KULLANABİLECEĞİ KOMUTLAR -CRAXSHOP
},

voiceConfig: {
leaveOnFinish: false, //BU AYAR TRUE OLURSA BOT MÜZİĞİ BİTİRDİKTEN SONRA ODADAN AYRILIR. -CRAXSHOP
leaveOnStop: false, //BU AYAR TRUE OLURSA BOT MÜZİK DURAKLATILINCA ODADAN AYRILIR. -CRAXSHOP

leaveOnEmpty: { //BU SISTEMI KULLANABİLMEK İÇİN YUKARIDAKİ LEAVEON SISTEMLERI FALSE OLMALIDIR. -CRAXSHOP
status: true, //BU AYAR TRUE OLURSA BOT KULLANILMAZSA/OFFLINE OLURSA ODADAN AYRILIR. -CRAXSHOP
cooldown: 10000000, //1000 = 1 saniye -CRAXSHOP
},

},

maxVol: 150, //MAKSİMUM SES SEVİYESİNİ BURADAN AYARLAYABİLİRSİNİZ. ÖNERİLEN AYAR 150DİR. -CRAXSHOP

}
}
