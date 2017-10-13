const Chat = require('../models/Chat');

module.exports = (router) => {
    /**
     * get all rooms
     */
    router.get('/chat', (req, res, next) => {
        Chat.find((err, data) => {
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
     * get message by nickname
     */
    router.get('/chat/nickname/:nickname', (req, res, next) => {
        if (!req.params.nickname) {
            res.json({
                success: false,
                message: 'nickname not provided'
            });
        } else {
            Chat.find({ nickname: req.params.nickname }, (err, data) => {
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
     * Get message by room
     */
    router.get('/chat/room/:room', (req, res, next) => {
        if (!req.params.room) {
            res.json({
                success: false,
                message: 'room not provided'
            });
        } else {
            Chat.find({ room: req.params.room }, (err, data) => {
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
     * Send message
     */
    router.post('/chat', (req, res, next) => {
        Chat.create(req.body, (err, data) => {
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

    return router;
};