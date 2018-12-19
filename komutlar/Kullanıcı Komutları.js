const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embed = new Discord.RichEmbed()
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**» Kullanıcı Komutları**", ` d.report = İstediğiniz Kullanıcıyı Reportlarsınız. \nd.kısalt = İstediğiniz Linki Kısaltarak Özelleştire Bilirsiniz. \nd.yaz = Bota İsediğinizi Yazdırırsınız. \nd.sunucubilgi = Bulunduğunuz Sunucu Hakkında Bilgi Verir. \nd.sunucuresmi = Bulunduğunuz Sunucunun Resmin Gösterir. \nd.kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. \nd.avatarım = Avatarınınızı Gösterir.  `)

 
  return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yeni', 'new', 'news', 'yenilikler'],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: 'Bota eklenen Yeni Komutları Ve Düzeltilen Hatalar Hakkında Bilgi Verir.',
  usage: 'kullanıcı'
};
