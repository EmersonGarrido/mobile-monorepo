import { discord } from '@shared/services'

async function sendDiscordMessage ({ username, content }) {
  const send = {
    username: username,
    content: content
  }
  const discordSendMessege = await discord.post('', send)

  return discordSendMessege
}

export default sendDiscordMessage
