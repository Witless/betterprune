const Discord = require('discord.js');
const client = new Discord.Client();
const conf = require('./config.json');
const fs = require('fs');

client.login(conf.bot_token);

if(conf.bot_id !== ""){
    console.log('You can add me with this URL   https://discordapp.com/oauth2/authorize?client_id='+ conf.bot_id +'&scope=bot&permissions=8')
}

client.on('message',async msg => {
    if(!msg.guild)
        return;
    if(msg.content === conf.activation_command){
        console.log('Fetching all members...');
        console.log('...This may take a while');
        await msg.guild.members.fetch();
        let j = 0, i= 0, k= 0;
        msg.guild.members.cache.forEach(async m => {
            await console.log(m.joinedTimestamp  + m.displayName);
            if(m.joinedTimestamp <= parseInt(conf.initial_date) && m.roles.cache.size <= conf.max_roles && !m.nickname) {
                k++;
                console.log('Can kick '+ k +' users');
                i++;
                await msg.channel.send(':boot:' + '  Joined: **' + m.joinedTimestamp + '** | Username: **' + m.user.tag+ '** | Roles: **' + m.roles.cache.size + '** | Counter: **'+ i+ '**');
                j++;
                await console.log(j);
                if(conf.after_logs){
                    await fs.appendFile('kicked.logs', `Can kick: ${k-j}` + ' Kicked: '+ m.id + '  Roles: '+ m.roles.cache.size +'  Total: '+ j +'\n', (err) => {
                        if (err)
                            throw err;
                    })
                }
                await m.kick('Kicked by BetterPrune');
            }
        });
    }
});
