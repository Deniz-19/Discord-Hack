const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embed = new Discord.RichEmbed()
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**» Eğlence Komutları**", ` \n-atatürk = Rastgele Atatürkün Fotoğraflarını Gösterir. \n-starwars = StarWars (Pixel Formatında) Filmini Gösterir. \n-banned = Dene ve Gör \n-kahkaha = Kahkaha Atarsınız \n-herkesebendençay = Herkese Çay Alırsınız. \n-koş = Koşarsınız. \n-çayiç = Çay İçersiniz. \n-çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \n-çayaşekerat = Çaya Şeker Atarsınız. \n-yumruk-at = Yumruk Atarsınız. \n-şanslısayım = Bot Sizin Şanslı Sayınızı Söyler. \n-sigara = Sigara İçersiniz. \n-espri = Bot rastgele bir espri gönderir. \n-kurabiye = Gel Canım Sana Kurabiye Vereceğim. \n-vaporwave = İstediğiniz sayıyı yada harfi estetik ameliyatından geçirip size gönderir :D \n-balıktut = Balık Tutarsınız İyi Şanslar Koçum :D \n-bayrak = Türkiye Bayrağını Gösterir. \n-stresçarkı = Stres Çarkı çevirirsiniz :D \n-kaccm = Aletinizin Kaç Cm Olduğunu Gösterir :D \n-rastgeleşifre = Size rastgele bir şifre gösterir hemen silin kimse görmesin :D \n-tkm = Taş Kağıt Makas oynarsınız Dikkat Edin Bot Sizi Yenmesin :D     `)

 
  return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['eğlen', 'eğlence', 'eğlen', 'eğlenc'],
  permLevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'Bota eklenen Yeni Komutları Ve Düzeltilen Hatalar Hakkında Bilgi Verir.',
  usage: 'eğlence'
};
