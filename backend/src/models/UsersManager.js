const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (identifiant, email, mot_de_passe) values (?, ?, ?)`,
      [user.username, user.email, user.hashedPassword]
    );
  }

  readForLogin(users) {
    return this.database.query(`select * from ${this.table} where email = ?;`, [
      users.email,
    ]);
  }

  // update(item) {
  //   return this.database.query(
  //     `update ${this.table} set title = ? where id = ?`,
  //     [item.title, item.id]
  //   );
  // }
}

module.exports = UsersManager;
