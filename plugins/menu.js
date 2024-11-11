module.exports = {
    name: 'menu',
    alias: ['help'],
    react: '🌝',
    description: 'Displays the bot menu image only',
    async execute(conn, mek) {
        // Send only the menu image without any text
        await conn.sendMessage(mek.key.remoteJid, {
            image: { url: 'https://raw.githubusercontent.com/CharukaMahesh/Bot/refs/heads/main/Img/20241110_201618.jpg' }
        }, { quoted: mek });
    }
};
