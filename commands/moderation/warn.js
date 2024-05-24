// commands/moderation/warn.js
const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require('discord.js');
const Infraction = require('../../models/infraction');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('warn')
    .setDescription("Warn a user")
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers)
    .setDMPermission(false)
    .addUserOption(option => option
      .setName('user')
      .setDescription('User you wish to warn')
      .setRequired(true)
    )
    .addStringOption(option => option
      .setName('reason')
      .setDescription('Reason for warning user')
      .setRequired(true)
      .setMinLength(1)
      .setMaxLength(213)
    ),

  async execute(interaction) {
    await interaction.deferReply({ ephemeral: true });
    const { options, guild, member } = interaction;

    const target = options.getMember('user');
    const reason = options.getString('reason');

    // Allowed roles
    const allowedRoles = ['HR Admin', 'Tulajdonos', 'Mod', 'Admin'];

    // Check if the command user has one of the allowed roles
    const memberRoles = member.roles.cache.map(role => role.name);
    const hasPermission = allowedRoles.some(role => memberRoles.includes(role));

    if (!hasPermission) {
      return interaction.editReply({ content: "You don't have permissions to do that.", ephemeral: true });
    }

    // Check if the target user has a higher or equal role, or if both are in the allowed roles
    const targetRoles = target.roles.cache.map(role => role.name);
    const targetHasHigherRole = target.roles.highest.position >= member.roles.highest.position;
    const bothHaveAllowedRole = allowedRoles.some(role => memberRoles.includes(role)) && allowedRoles.some(role => targetRoles.includes(role));

    if (targetHasHigherRole || bothHaveAllowedRole) {
      return interaction.editReply({ content: "You cannot warn this user.", ephemeral: true });
    }

    const guildId = guild.id;
    const targetId = target.id;

    let embed = new EmbedBuilder();

    await Infraction.create({
      userId: targetId,
      guildId: guildId,
      reason: reason,
      type: 'Warn',
      enforcerId: member.id
    }).then(result => {
      embed
        .setColor(0xFF0000) // RED in hexadecimal
        .setAuthor({ name: target.user.tag, iconURL: target.user.displayAvatarURL() })
        .setTitle('New Infraction')
        .setDescription(`Issued by ${member.user.tag}`)
        .addFields(
          {
            name: 'ID',
            value: "`" + result.dataValues.id + "`",
            inline: true,
          },
          {
            name: 'Type',
            value: "`" + result.dataValues.type + "`",
            inline: true,
          },
          {
            name: 'Guild',
            value: "`" + guild.name + "`",
            inline: false,
          },
          {
            name: 'Reason',
            value: "`" + result.dataValues.reason + "`",
            inline: true,
          }
        );
    }).catch(err => {
      console.error(err);
      interaction.editReply({ content: "An error occurred while issuing the warning.", ephemeral: true });
    });

    await interaction.editReply({ embeds: [embed] });
  }
};
