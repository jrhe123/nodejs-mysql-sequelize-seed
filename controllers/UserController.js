var Promise = require('bluebird');
var UserService = require('../services/UserService');
var CommonService = require('../services/CommonService');

module.exports = {

	create_user: function(params){
		return new Promise(function(resolve, reject){

			UserService.createUser(params)
			.then((user) => {
				resolve(user);
			})
			.catch((err) => {
				reject(err);
			})
		})
	},

	update_user: function(id, params){
		return new Promise(function(resolve, reject){

			UserService.updateUser(id, params)
			.then((user) => {
				resolve(user);
			})
			.catch((err) => {
				reject(err);
			})
		})
	},

	delete_user: function(id){
		return new Promise(function(resolve, reject){

			UserService.deleteUser(id)
			.then(() => {
				resolve();
			})
			.catch((err) => {
				reject(err);
			})
		})
	},

	user_list: function(params){
		return new Promise(function(resolve, reject){

			UserService.userList(params)
			.then((users) => {
				resolve(users);
			})
			.catch((err) => {
				reject(err);
			})
		})
	},

	user_posts: function(){
		return new Promise(function(resolve, reject){
			
			CommonService.userPosts()
			.then((userPosts) => {
				resolve(userPosts);
			})
			.catch((err) => {
				reject(err);
			})
		})
	},
  

}
