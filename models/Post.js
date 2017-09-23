module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('post', {
      content: { type: DataTypes.STRING },
      userID: { type: DataTypes.INTEGER }
    })
  
    return Post;
}
  