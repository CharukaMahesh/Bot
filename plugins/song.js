const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

module.exports = {
    name: 'song',
    alias: ['music', 'download'],
    description: 'Downloads a song from YouTube',
    async execute(conn, mek, args) {
        if (args.length === 0) {
            return await conn.sendMessage(mek.key.remoteJid, { text: 'Please provide a song name or link to download!' }, { quoted: mek });
        }

        let songQuery = args.join(' ');
        let songInfo;

        // Search for the song if a YouTube link is not provided
        if (!ytdl.validateURL(songQuery)) {
            const searchResults = await ytSearch(songQuery);
            if (searchResults && searchResults.videos.length > 0) {
                songInfo = searchResults.videos[0];
            } else {
                return await conn.sendMessage(mek.key.remoteJid, { text: 'Could not find the song. Please try another query.' }, { quoted: mek });
            }
        } else {
            // Use the provided YouTube URL
            songInfo = await ytdl.getInfo(songQuery);
        }

        // Download the song as an audio file
        const title = songInfo.title;
        const audioStream = ytdl(songInfo.url, { filter: 'audioonly', quality: 'highestaudio' });

        await conn.sendMessage(mek.key.remoteJid, { text: `🎶 Downloading *${title}*...` }, { quoted: mek });
        
        conn.sendMessage(mek.key.remoteJid, { audio: { url: songInfo.url }, mimetype: 'audio/mp4', fileName: `${title}.mp3` }, { quoted: mek });
    }
};
