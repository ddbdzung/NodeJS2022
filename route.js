const express = require('express')
const router = express.Router()

// Thêm 1 document
router.post('/create', (req, res) => {
    data.push(req.body)
})

// Sửa 1 document
router.put('/update/id=:id', (req, res) => {
    let idx = data.findIndex(user => user['id'] === req.params.id)
    data.at(idx)['name'] = req.body.name
    data.at(idx)['age'] = req.body.age
    data.at(idx)['gender'] = req.body.gender
})

// Xóa 1 document
router.delete('/delete/id=:id', (req, res) => {
    let idx = data.findIndex(user => user['id'] === req.params.id)
    // Thuc hien xoa document tai day
})

// Lấy toàn bộ data
router.get('/user', (req, res) => {
    res.json(db.user)
})

module.exports = router