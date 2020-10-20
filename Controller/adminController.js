const Users = require('../Models/Users');


module.exports = {
    viewDashboard: (req, res) => {
        res.render('admin/dashboard/viewDashboard');
    },

    viewMembers : (req, res) => {
        res.render('admin/Members/viewMembers');
    },

    viewUsers: async (req, res) => {
        try {
            const users = await Users.find();
            const alertMessage = req.flash('alertMessage');
            const alertStatus = req.flash('alertStatus');
            const alert = { message: alertMessage, status: alertStatus };
            res.render('admin/users/viewUsers', {
                users,
                alert
            });
        } catch (error) {
            res.render('admin/users');
        }
    },
    addUsers: async (req, res)=> {
        try {
            const {fullname, username, email, password} = req.body;
            await Users.create({ fullname, username, email, password });
            req.flash('alertMessage', 'Success Add Users');
            req.flash('alertStatus', 'info');
            res.redirect('/admin/users');
        } catch (error) {
            req.flash('alertMessage', `$error.message`);
            req.flash('alertStatus', 'danger');
            res.redirect('/admin/users');
        }
    },
    editUsers: async (req, res) => {
        try {
            const {id, fullname, username, email, password, updateAt} = req.body;
            const users = await Users.findOne({ _id: id});
            users.fullname = fullname;
            users.username = username;
            users.email = email;
            users.password = password;
            users.updateAt = updateAt;
            await users.save();
            req.flash('alertMessage', 'Success Update Users');
            req.flash('alertStatus', 'info');
            res.redirect('/admin/users');
        } catch (error) {
            req.flash('alertMessage', `$error.message`);
            req.flash('alertStatus', 'danger');
            res.redirect('/admin/users');
        }
    },
    deleteUsers : async (req, res) => {
        try {
            const { id } = req.params;
            const users = await Users.findOne({_id: id});
            await users.remove();
            req.flash('alertMessage', 'Success Delete Users');
            req.flash('alertStatus', 'info');
            res.redirect('/admin/users');
        } catch (error) {
            req.flash('alertMessage', `$error.message`);
            req.flash('alertStatus', 'danger');
            res.redirect('/admin/users');
        }
    }
}