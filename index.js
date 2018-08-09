const SlackBots = require('slackbots');
const axios = require('axios');

const bot = new SlackBots({
  token : 'xoxb-236760738115-412144248771-yPuTG5ojxPRbIzodn1OLOZ3Q',
  name : 'jokebot'
});


// Start Handler
bot.on('start',()=>{
  var params = {
    icon_emoji: ':smiley:'
  };

  bot.postMessageToChannel('general',"get ready to Laugh! with @jokebot",params);




});


// error Handler
bot.on('error',(err)=>{
  console.log(err);
});

//Message Handler

bot.on("message",data =>{

if(data.type !== "message"){
  return;
}

handleMessage(data.text);

});

//Responsds to message
function handleMessage(message){
  console.log("--------------------------------------")

  console.log(`Message :${message}`)
   if(message.includes(" chucknorris")){
      chuckJoke();
   }


}

//tell a chuck joke
function chuckJoke(){
    axios.get('http://api.icndb.com/jokes/random')
    .then(res=>{
      const joke = res.data.value.joke;

      var params = {
        icon_emoji: ':laughing:'
      };

      bot.postMessageToChannel('general',`Chuck Norris ${joke}`,params);

    });
}
