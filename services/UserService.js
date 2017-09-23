const User = require('../models').User;
const Post = require('../models').Post;

const createUser = (params) => {
  return User.create(params);
}

const updateUser = (id, params) => {

  return User.update(params, { where: { id: id } })
}

const deleteUser = (id) => {
  
    return User.destroy({ where: { id: id } })
}

const userList = (params) => {
  return User.findAll({
    where: params
  })
}


module.exports = {
  createUser,
  updateUser,
  deleteUser,
  userList,
}
