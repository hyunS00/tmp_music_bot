"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
exports.default = {
    data: new discord_js_1.SlashCommandBuilder()
        .setName("스킵")
        .setDescription("음악을 스킵해요"),
    async execute(interaction) {
        const player = interaction.client.moon.players.get(interaction.guild.id);
        if (!player) {
            setTimeout(() => {
                interaction?.deleteReply().catch(() => { });
            }, 3000);
            return interaction.editReply({
                content: `**음악을 재생하고 있지 않아요**`,
            });
        }
        if (player.voiceChannel != interaction.member.voice.channel?.id) {
            setTimeout(() => {
                interaction?.deleteReply().catch(() => { });
            }, 3000);
            return interaction.editReply({
                content: `**<#${player.voiceChannel}> 에서만 사용할 수 있습니다**`,
            });
        }
        interaction.editReply({
            content: `**[${player.current.title}](<${player.current.url}>)을/를 스킵했어요**`,
        });
        player.setAutoPlay(false);
        player.skip();
        setTimeout(() => {
            interaction?.deleteReply().catch(() => { });
        }, 10 * 1000);
    },
};
