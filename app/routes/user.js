const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('../../config/database');

module.exports = (router) => {
    /**
     * Get All Users
     */
    router.get('/users', (req, res, next) => {
        User.find((err, data) => {
            if (err) {
                res.json({
                    success: false,
                    message: err
                });
            } else {
                res.json({
                    success: true,
                    obj: data
                });
            }
        });
    });

    /**
     * Get User by Id
     */
    router.get('/users/:id', (req, res, next) => {
        if (!req.params.id) {
            res.json({
                success: false,
                message: 'id not provided'
            });
        } else {
            User.findById(req.params.id, (err, data) => {
                if (err) {
                    res.json({
                        success: false,
                        message: err
                    });
                } else {
                    res.json({
                        success: true,
                        obj: data
                    });
                }
            });
        }
    });

    /**
     * Get User by Nickname
     */
    router.get('/users/nickname/:nickname', (req, res, next) => {
        if (!req.params.nickname) {
            res.json({
                success: false,
                message: 'nickname not provided'
            });
        } else {
            User.findOne({ nickname: req.params.nickname }, (err, data) => {
                if (err) {
                    res.json({
                        success: false,
                        message: err
                    });
                } else {
                    res.json({
                        success: true,
                        obj: data
                    });
                }
            });
        }
    });

    /**
     * Check nickname disponibility
     */
    router.get('/users/check-nickname/:nickname', (req, res, next) => {
        if (!req.params.nickname) {
            res.json({
                success: false,
                message: 'Nickname not provided'
            });
        } else {
            User.findOne({ nickname: req.params.nickname }, (err, data) => {
                if (err) {
                    res.json({
                        success: false,
                        message: err
                    });
                } else {
                    if (data) {
                        res.json({
                            success: false,
                            message: 'Nickname déjà utilisé'
                        });
                    } else {
                        res.json({
                            success: true,
                            message: 'Nickname disponible'
                        });
                    }
                }
            });
        }
    });

    /**
     * Check email disponibility
     */
    router.get('/users/check-email/:email', (req, res, next) => {
        if (!req.params.email) {
            res.json({
                success: false,
                message: 'email not provided'
            });
        } else {
            User.findOne({ email: req.params.email }, (err, data) => {
                if (err) {
                    res.json({
                        success: false,
                        message: err
                    });
                } else {
                    if (data) {
                        res.json({
                            success: false,
                            message: 'Email déjà utilisé'
                        });
                    } else {
                        res.json({
                            success: true,
                            message: 'Email disponible'
                        });
                    }
                }
            });
        }
    });

    /**
     * Register User WITHOUT auth
     */
    /* router.post('/users', (req, res, next) => {
        if (!req.body.nickname) {
            res.json({
                success: false,
                message: 'Nickname not provided'
            });
        } else {
            User.create(req.body, (err, data) => {
                if (err) {
                    res.json({
                        success: false,
                        message: err
                    });
                } else {
                    res.json({
                        success: true,
                        obj: data
                    });
                }
            });
        }
    }); */

    /**
     * Update User
     */
    router.put('/users/:id', (req, res, next) => {
        if (!req.body) {
            res.json({
                success: false,
                message: 'body not provided'
            });
        } else if (!req.params.id) {
            res.json({
                success: false,
                message: 'id not provided'
            });
        } else {
            User.findByIdAndUpdate(req.params.id, req.body, { new: true }).select('nickname email connected updated_at').exec((err, data) => {
                if (err) {
                    res.json({
                        success: false,
                        message: err
                    });
                } else {
                    res.json({
                        success: true,
                        obj: data
                    });
                }
            });
        }
    });

    /**
     * Delete User
     */
    router.delete('/users/:id', (req, res, next) => {
        if (!req.params.id) {
            res.json({
                success: false,
                message: 'id not provided'
            });
        } else {
            User.findByIdAndRemove(req.params.id, (err, data) => {
                if (err) {
                    res.json({
                        success: false,
                        message: err
                    });
                } else {
                    res.json({
                        success: true,
                        message: 'User supprimé'
                    });
                }
            });
        }
    });


    return router;
}