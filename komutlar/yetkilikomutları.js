const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embed = new Discord.RichEmbed()
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**» Yetkili Komutları**", `**Burada gördüğünüz komutları çalıştırmak için öncelikle Gerekli İzne Ve Sunucunun mod-log adında bir kanala sahip olması gerekmektedir.** \nd.ban = İstediğiniz Kişiyi Sunucudan Banlar. \nd.kick = İstediğiniz Kişiyi Sunucudan Atar. \nd.unban = İstediğiniz Kişinin Yasağını Açar. \nd.sustur = İstediğiniz Kişiyi Susturur. \d.nsil = Belirtilen Miktarda Mesajı Silir. (MAX 100) \nd.oylama = Oylama Açar. \nd.duyuru = Güzel Bir Duyuru Görünümü Sağlar. \nd.rol-ver = İstediğiniz Kişiye Rol Verebilirsiniz`)
 
  return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yetkili', 'yetkili', 'yetkili', 'yetkili'],
  permLevel: 0
};

exports.help = {
  name: 'yetkili',
  description: 'Bota eklenen Yeni Komutları Ve Düzeltilen Hatalar Hakkında Bilgi Verir.',
  usage: 'yetkili'
};
