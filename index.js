const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NjExMTY5OTUzMTUxNzEzMjkw.XVP6aA.742WN2CAt2gRbkhTgzZTcf-mHnI';

client.on('ready', () =>{
    console.log('O bot está online');
    client.user.setActivity('bing bong');
})

const prefix = 'bong_'
var bing_bong = ['bing', 'bong'];
var proibido = 1;
var admin_id = 342663595626201089;
client.on('message', (message) =>{

    if (message.author.bot) return;
    mencao = message.mentions.users.first();
    //if (message.author.id == admin_id){
    if (message.member.roles.some(role => role.hasPermission("ADMINISTRATOR"))){


        if(message.content.startsWith(prefix)){
            if((message.content.startsWith(prefix+'start')) && (mencao != null)){
                proibido = 0;
                user_id = mencao.id;
                message.channel.send('Bong startado para o usuario com o id: '+mencao.id);        
            }
            else if(message.content == prefix+'stop'){
                proibido = 1;
                message.channel.send('Bong parado.');
            }
            else{
                message.channel.send('Erro: precisa @mencionar usuário.');
            }
        }

        
    }

    if (proibido == 0){
        if(message.author.id == user_id){

            var respostas = '';
            for (let i = 0; i < Math.floor(Math.random() * 6) + 1; i++) {
                var respostas = respostas + (bing_bong[Math.floor(Math.random() * bing_bong.length)]) + ' ';
            }
            message.channel.send(respostas);

        }

        if(message.content == 'bing' || message.content == 'bong'){
            message.channel.send('go green');
        }
    }

})

client.login(token);