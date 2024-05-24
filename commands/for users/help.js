const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Help menu for the bot"),

  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setTitle('happybot')
      .setDescription('a very good and helpful discord bot')
      .setColor('Gold')
      .setAuthor({ name: interaction.user.username, iconURL: interaction.user.displayAvatarURL() })
      .setTimestamp()
      .addFields(
        {
          name: 'commands for you:',
          value: ' /8-ball\n /echo\n /flip\n /hello\n /ping\n /poll\n',
          inline: false
        }
      );

    await interaction.reply({
      embeds: [embed],
      ephemeral: true
    });
  }
};
