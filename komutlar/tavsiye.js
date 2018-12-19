const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let tavsiyeler = args.slice(0).join(' ');
    let guild = message.guild;
    let tavsiyekomut = guild.channels.find('name', 'tavsiyeler');
    if (!tavsiyekomut) return;
    if (tavsiyeler.length < 1) return message.reply('Lütfen tavsiyenizi yazınız');
  message.delete();
  const tavsiye = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(tavsiyeler)
    return guild.channels.get(tavsiyekomut.id).sendEmbed(tavsiye)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['tavsiye'],
  permLevel: 0
};

exports.help = {
  name: 'tavsiye',
  description: 'Bota eklemek istediğiniz bir tavsiyede bulunursunuz',
  usage: 'tavsiye [tavsiyeniz]'
};