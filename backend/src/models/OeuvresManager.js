const AbstractManager = require("./AbstractManager");

class OeuvresManager extends AbstractManager {
  constructor() {
    super({ table: "oeuvres" });
  }

  insert(oeuvre) {
    // Convertir l'objet "dimensions" en chaîne JSON
    const dimensionsJSON = JSON.stringify(oeuvre.dimensions);

    return this.database.query(
      `INSERT INTO ${this.table} (reference, image, auteur, titre, res, dateCreation, description, type, categorie, article, couleur, dimensions) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`,
      [
        oeuvre.reference,
        oeuvre.image,
        oeuvre.auteur,
        oeuvre.titre,
        oeuvre.res,
        oeuvre.dateCreation,
        oeuvre.description,
        oeuvre.type,
        oeuvre.categorie,
        oeuvre.article,
        oeuvre.couleur,
        dimensionsJSON,
      ]
    );
  }

  update(oeuvre) {
    const {
      id,
      reference,
      image,
      auteur,
      titre,
      res,
      dateCreation,
      description,
      type,
      categorie,
      article,
      couleur,
      dimensions,
    } = oeuvre;

    return this.database.query(
      `UPDATE ${this.table} 
        SET reference = ?, image = ?, auteur = ?, titre = ?, res = ?, dateCreation = ?, description = ?, type = ?, categorie = ?, article = ?, couleur = ?, dimensions = ? 
        WHERE id = ?`,
      [
        reference,
        image,
        auteur,
        titre,
        res,
        dateCreation,
        description,
        type,
        categorie,
        article,
        couleur,
        dimensions,
        id,
      ]
    );
  }
}

module.exports = OeuvresManager;
