const Sequelize = require('sequelize')
const sequelize = new Sequelize(
    'webapp',
	'root',
	'',
	{
    dialect: 'mysql',
    logging: console.log,
		define: {
			timestamps: false
		}
	}
)

const userPosts = () => {

    var sql = "SELECT users.username AS user, posts.content AS post FROM users LEFT JOIN posts ON users.id = posts.userID";    
    return sequelize.query(sql, { type: sequelize.QueryTypes.SELECT})
}
  
  
module.exports = {

    userPosts,
}