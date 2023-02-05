
# Discord Aternos Bot
A simple discord bot made to turn your aternos server on/off and also see your server stats.
<br>

## Commands
> Prefix: 2

- 2help (or 2h) - Returns a help list;
- 2minecraft info - Returns _your_ server info;
- 2minecraft interrupt - Turn _your_ server on/off;


## Setup

 1. Create your aternos server [(tutorial)](https://podcrash.com/blog/how-to-make-a-minecraft-server-on-aternos/)
(make sure that it is the only server in your account, if it doesn't, you should [share your access with a new aternos account](https://support.aternos.org/hc/en-us/articles/360026950952-Share-access#:~:text=Enter%20your%20friend%27s%20Aternos%20username,and%20click%20the%20plus%20sign.&text=You%27ll%20see%20a%20list,Start%3A%20start%20the%20server) with just _your_ server)

 2. Create a discord bot and get your token [(tutorial)](https://www.writebots.com/discord-bot-token/)
 
 3. Fill .credentials.json
 ```json
{
  "token": "*put your discord bot API token here*",
  "aternos_user": "*your aternos user*",
  "aternos_password": "*your aternos password*"
}
```

 4. Install [python](https://www.python.org/) and [node/npm](https://nodejs.org/)

 5. Install dependencies
```sh
npm run setup
```
 
 6. Start the bot
```sh
node .
```
    
## Author

- [Diego ACS](https://www.github.com/gitBaiano)

