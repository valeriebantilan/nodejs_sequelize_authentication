// async await handlers is express.js
require('express-async-errors');

import { User } from '../../utils/models';

const getUserById = async (req, res, next) => {
    const { userId: id } = req.params;
    try {
        const user = await User.findOne({
            where: {
                id: id,
            },
        });

        return res.json(user);
    } catch (error) {
        return res.json(error);
    } 
}

const getUsers = async (req, res, next) =>  {
    try {
        const user = await User.findAll();

        return res.json(user);
    } catch (error) {
        return res.json(error);
    }
}

const createUser = async (req, res, next) => {
    const {firstName, lastName, email, password} = req.body;
    let err;

    try {

        const userFindEmail = await User.findOne({
            where: {
                email,
            }
        })

        if (userFindEmail) {
            err = new Error('Email existed already');
            err.status = 500;
            return next(err);
        }

        const user = await User.create({firstName, lastName, email, password});

        return res.json(user);
    } catch(error) {
        return res.json(error);
    }
}

const updateUser = async (req, res) => {
    try {
        const { userId: id } = req.params;

        const [updated] = await User.update(req.body, {
            where: { id }
        });
        
        if (updated) {
            const updatedUser = await User.findOne({ where: { id } });
            return res.status(200).json({ user: updatedUser });
        }

        throw new Error('User not found');
    } catch (error) {
        return res.status(500).send(error);
    }
};

const deleteUser = async (req, res) => {
    try {
        const { userId: id } = req.params;
        const deleted = await User.destroy({
            where: { id: id }
        });
        if (deleted) {
            return res.status(204).send("User deleted");
        }
        throw new Error("User not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

export default {
    getUserById,
    getUsers,
    createUser,
    updateUser,
    deleteUser,
}