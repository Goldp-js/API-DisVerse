/*
  ⚠️ WARNING: DISVERSE.NPM BLOCKED USAGE NOTICE ⚠️
  
  The use of this npm package has been blocked due to recent updates in the Disverse API.
  API update support has been removed, and access to the API is no longer available.
  Please discontinue the use of this npm package.

  For more information, visit the official Disverse Discord server:
  https://discord.gg/G3wQSJeYWj
*/
const fetch = require("node-fetch");
const chalk = require("chalk");

class Disverse {
  constructor({ token, client }) {
    if (!token || !client) {
      throw new Error(chalk.red.bold("Se requieren los parámetros 'token' y 'client'"));
    }

    this.token = token;
    this.client = client;
    this.apiUrl = "https://disverse.space/api";

    // Mensaje de inicio con color
    console.log(chalk.green.bold("¡Bienvenido a Disverse!"));
    console.log(chalk.yellow("Únete al servidor oficial de Disverse para obtener soporte y actualizaciones:"));
    console.log(chalk.blue.underline("https://discord.gg/G3wQSJeYWj"));
  }

  async serverCount(serverCount, message = "Conteo de servidores publicado.") {
    this.blockedFunction('serverCount');
    if (typeof serverCount !== 'number') {
      throw new Error(chalk.red("El parámetro 'serverCount' debe ser un número."));
    }

    try {
      const response = await fetch(`${this.apiUrl}/bots/stats`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': this.token
        },
        body: JSON.stringify({ serverCount })
      });

      if (response.ok) {
        console.log(message);
      } else {
        console.error(chalk.red("Error al publicar el conteo de servidores:"), response.status, response.statusText);
      }
    } catch (error) {
      console.error(chalk.red("Error inesperado:"), error);
    }
  }

  async search(id) {
    this.blockedFunction('search');
    if (!id) {
      throw new Error(chalk.red("Se requiere el parámetro 'id' para buscar el bot."));
    }

    try {
      const response = await fetch(`${this.apiUrl}/bots/${id}`, {
        method: 'GET'
      });

      if (response.ok) {
        const json = await response.json();
        return json;
      } else {
        console.error(chalk.red("Error al buscar el bot:"), response.status, response.statusText);
        return null;
      }
    } catch (error) {
      console.error(chalk.red("Error inesperado:"), error);
      return null;
    }
  }

  async hasVoted(id) {
    this.blockedFunction('hasVoted');
    if (!id) {
      throw new Error(chalk.red("Se requiere el parámetro 'id' para verificar si se ha votado."));
    }

    try {
      const response = await fetch(`${this.apiUrl}/bots/check/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': this.token
        }
      });

      if (response.ok) {
        const json = await response.json();
        return json.voted;
      } else {
        console.error(chalk.red("Error al verificar si se ha votado:"), response.status, response.statusText);
        return false;
      }
    } catch (error) {
      console.error(chalk.red("Error inesperado:"), error);
      return false;
    }
  }

  blockedFunction(functionName) {
    console.error(chalk.yellow(`⛔️ Function ${functionName} is blocked. Usage of this function is not allowed.`));
    console.warn(chalk.yellow(`⚠️ This npm package has been discontinued. Please discontinue its use.`));
    throw new Error(chalk.yellow(`Function ${functionName} is blocked.`));
  }
}

module.exports = Disverse;
