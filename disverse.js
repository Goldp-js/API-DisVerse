const fetch = require("node-fetch");
const chalk = require("chalk");

class Disverse {
  constructor({ token, client }) {
    if (!token || !client) {
      throw new Error("Se requieren los parámetros 'token' y 'client'");
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
    if (typeof serverCount !== 'number') {
      throw new Error("El parámetro 'serverCount' debe ser un número.");
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
        console.error("Error al publicar el conteo de servidores:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error inesperado:", error);
    }
  }

  async search(id) {
    if (!id) {
      throw new Error("Se requiere el parámetro 'id' para buscar el bot.");
    }

    try {
      const response = await fetch(`${this.apiUrl}/bots/${id}`, {
        method: 'GET'
      });

      if (response.ok) {
        const json = await response.json();
        return json;
      } else {
        console.error("Error al buscar el bot:", response.status, response.statusText);
        return null;
      }
    } catch (error) {
      console.error("Error inesperado:", error);
      return null;
    }
  }

  async hasVoted(id) {
    if (!id) {
      throw new Error("Se requiere el parámetro 'id' para verificar si se ha votado.");
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
        console.error("Error al verificar si se ha votado:", response.status, response.statusText);
        return false;
      }
    } catch (error) {
      console.error("Error inesperado:", error);
      return false;
    }
  }
}

module.exports = Disverse;
