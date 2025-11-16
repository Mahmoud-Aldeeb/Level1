
const User = require('../models/customerSchema');
const moment = require('moment');



const user_index_get = (req, res) => {
    const getUsers = async () => {
        try {
            const users = await User.find();
            res.render('home.ejs', { users: users, moment: moment });
        } catch (err) {
            console.log(err);
        }
    }
    getUsers();
};


const user_view_get = (req, res) => {

    User.findById(req.params.id)
        .then(user => {
            if (!user) return res.status(404).send('User not found');
            res.render('user/view', { user: user, moment: moment });
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('Server error');
        });
}


const user_edit_get = (req, res) => {
    User.findById(req.params.id)
        .then(user => {
            if (!user) return res.status(404).send('User not found');
            res.render('user/edit', { user: user });
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('Server error');
        });
}

const user_delete = (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect('/');
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('Server error');
        });
}
const user_put = (req, res) => {
    // User.updateOne({ _id: req.params.id }, req.body)

    User.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.redirect('/');
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('Server error');
        });
}

const user_search_post = (req, res) => {
    console.log(req.body);
    // const newUser = new User(req.body);
    User.find({ $or: [{ firstName: req.body.search.trim() }, { lastName: req.body.search.trim() }] })
        .then((users) => {
            console.log(users);
            res.render('user/search', { users: users });

        }).catch((err) => {
            console.log(err);
        });

}

const user_add_get = (req, res) => {

    res.render('user/add');
};

const user_add_post = (req, res) => {
    // console.log(req.body);
    // const newUser = new User(req.body);
    User.create(req.body).then(() => {
        res.redirect('/');

    }).catch((err) => {
        console.log(err);
    });

}


module.exports = { user_index_get, user_view_get, user_edit_get, user_delete, user_put, user_search_post, user_add_get, user_add_post };