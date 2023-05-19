# disverse.js
<a href="https://disverse.space/dc" target="_blank"><img src="https://cdn.cleris.me/Ry9D" alt="Únase a nuestro Discord" width="256"></a><br>
**Soporte:** [https://disverse.space/dc](https://disverse.space/dc) <br>
**NPM:** [npmjs.com/package/disverse.js](https://www.npmjs.com/package/disverse.js)<br>

## Instalación
*Si tiene problemas con la instalación, no dude en visitar nuestro [discord](https://disverse.space/dc).*
- `npm i disverse.js`

```js
const Disverse = require("./disverse.js");
const dbl = new Disverse("TOKEN-AQUI", client);

client.on("ready", async () => {
  dbl.serverCount(); // => Nota: Solo discord.js.
  // console.log("Conteo de servidores publicado")
  
  let hasVote = await dbl.hasVoted("BotID");
  if(hasVote === true) {
    console.log("Votado")
  } else {
    console.log("Vota por favor.")
  }
  
  
  let search = await dbl.search("BotID")
  console.log(search)
  /*
  {
    avatar: '',
    botID: '',
    username: '',
    discrim: '',
    shortDesc: '',
    prefix: '',
    votes: ,
    ownerID: '',
    owner: '',
    coowners: [ '' ],
    tags: [ '' ],
    longDesc: longDesc,
    certificate: 'Certified'
  }
  */
});
```

