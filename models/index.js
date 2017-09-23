const Sequelize = require('sequelize')
const path = require('path')

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

const User = sequelize.import(path.join(__dirname, 'User.js'))
const Post = sequelize.import(path.join(__dirname, 'Post.js'))


const db = {}
db.User = User
db.Post = Post
db.sequelize = sequelize

module.exports = db
