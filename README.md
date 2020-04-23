# BetterPrune 
![](https://i.imgur.com/uOSItCI.png)

## Purpose

This bot will help you get rid of those inactive users and make some free space on your Discord server.

It's a tool that works something similar to Discord built-in prune, main difference is that you decide from what time you want to start pruning (initial_date variable).

Like Discord Prune feature, this bot just kicks and never bans any user. 

Please understand that this bot does not check the user sent messages yet, this bot was used in a guild with a role given to users who sent one or more messages so I didn't have to worry about messages sent.
This may be considered in the future, feel free to add anything you feel the lack of. 

Lastly, the bot won't prune any member with a set nickname on the server. 

## Installation

Use node package manager

```
npm i -y 
```

## How to use

At ``config.json`` file you will have to define some variables: 

Variables followed by ' ** ' are required

- bot_token** , add here the token of your Discord bot (String)
- activation_command**, add here the command that will begin the prune (String)
- initial_date**, add here the date in timestamp format from where you want to prune members, use this tool to convert from Date to Timestamp: [https://timestampconvert.com/](https://timestampconvert.com/) (Number)
- max_roles**, the roles threshold a user has in order to be pruned. Side note: @everyone is a role too!! (Number)
- after_logs**, set 1 to generate logs from the prune process, 0 if you don't want to generate a log file (Number)
- bot_id, set the ID of the bot account you will be using, if you do so, a bot invite will be generated on start (String)

Once you have filled ``config.json`` you may start the bot
```bash
node bot.js
```

## Contributing
This bot was made in approx 1hr and for an specific purpose, any kind of addition/help/PR is highly welcomed <3

## License
[MIT](https://choosealicense.com/licenses/mit/)

This bot uses [DiscordJS12](https://discord.js.org/#/) as it's main dependency

Logo made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
