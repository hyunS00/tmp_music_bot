"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: "seeQueue",
    async execute(interaction) {
        await interaction.deferReply({ ephemeral: true });
        const command = interaction.client.commands.get("대기열");
        await command.execute(interaction);
        // const player = interaction.client.moon.players.get(interaction.guild.id);
        // if (!player) {
        //   setTimeout(() => {
        //     interaction?.deleteReply().catch(() => {});
        //   }, 3000);
        //   return interaction.editReply({
        //     content: `**음악을 재생하고 있지 않아요**`,
        //   });
        // }
        // const queues = (
        //   player.queue.db.data as { queue: { [key: string]: MoonlinkTrack[] } }
        // ).queue?.[interaction.guild.id];
        // if (!queues && !player.current?.title) {
        //   setTimeout(() => {
        //     interaction?.deleteReply().catch(() => {});
        //   }, 3000);
        //   return interaction.editReply({
        //     content: `**음악을 재생하고 있지 않아요**`,
        //   });
        // }
        // const nowMusic = player.current as MoonlinkTrack;
        // const embed = new EmbedBuilder({ title: "플레이리스트 🎶" })
        //   .setColor("Blue")
        //   .setThumbnail(nowMusic.artworkUrl);
        // let playlist_stringMap = [];
        // playlist_stringMap.push(
        //   `재생중 :: [${nowMusic.title}](${nowMusic.url}) (${getMiniteSecond(
        //     nowMusic.duration
        //   )})`
        // );
        // if (queues) {
        //   playlist_stringMap.push(" ");
        //   for (let i = 0; i < (queues.length > 10 ? 10 : queues.length); i++) {
        //     playlist_stringMap.push(
        //       `${i + 1}. [${queues[i].title}](${queues[i].url}) (${getMiniteSecond(
        //         queues[i].duration
        //       )})`
        //     );
        //   }
        // }
        // embed.setDescription(`**${playlist_stringMap.join("\n")}**`);
        // interaction.editReply({ embeds: [embed] });
    },
};
