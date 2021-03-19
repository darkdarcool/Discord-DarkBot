import Command from '../struct/Command';
import { Message } from 'discord.js';

abstract class HelloCommand extends Command {
  constructor() {
    super({
      name: 'hello',
      aliases: ['p'],
      description: 'Will return hello back to the user',
    });
  }

  exec(message: Message) {
    return message.reply('Hello! I am DarkBot, a discord bot that you can talk to and play games with!');
  }
}

export default HelloCommand;
