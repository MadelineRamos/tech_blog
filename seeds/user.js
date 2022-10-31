const { User } = require('../models');

const userData = [{
    username: 'Madeline',
    password: 'made.line'

},
{
    username: 'Jordan',
    password: 'jor.dan'
}
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;