import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        provider: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    // Um hook é semelhante a uma trigger.
    this.addHook('beforeSave', async user => {
      if (user.password) {
        // Para gerar a hash da senha antes de salvar.
        // O segundo parametro é o peso da encriptação.
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  static associate(models) {
    // Criar relacionamento como HasMany, HasOne, etc.
    this.belongsTo(models.File, { foreignKey: 'avatar_id', as: 'avatar' });
  }

  // Funções podem ser chamadas ao instaciar um novo usuário
  // por exemplo usando o findOne().
  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
