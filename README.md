# Disverse.js

**Únase a nuestro Discord:**
👉 [Discord Server](https://disverse.space/dc)

**Soporte:**
🛠️ [Disverse Support](https://disverse.space/dc)

**NPM Package:**
📦 [npmjs.com/package/disverse.js](https://www.npmjs.com/package/disverse.js)

## Instalación

Si tienes problemas con la instalación, no dudes en visitar nuestro servidor de Discord.

```bash
npm i disverse.js


```js
const Disverse = require("disverse.js"); // Si no se declara el archivo, pruebe intentar llamarlo de nuevo.
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

