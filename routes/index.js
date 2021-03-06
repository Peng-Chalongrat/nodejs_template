const router = require('express').Router();
const db = require('../connection/database');

router.post('/login', (req, res) => {
    let sql = 'SELECT * FROM users_info';
    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json({
                data: new Date(),
                status: 500,
                message: err
            });
        } else {
            return res.status(200).json({
                data: new Date(),
                status: 200,
                message: 'Success'
            });
        }
    });
});

module.exports = router;