const axios = require('axios');

exports.homeRoutes = (req, res) => {
    axios.get('http://localhost:3000/api/users')
        .then((response => {
            res.render('index', { users: response.data });
        }))
}

exports.add_user = (req, res) => {
    res.render('add_new');
}

exports.update_user = (req, res) => {
    res.render('update_user');
}