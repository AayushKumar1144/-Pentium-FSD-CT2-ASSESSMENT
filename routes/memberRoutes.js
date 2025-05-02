const express = require('express');
const router = express.Router();
const Member = require('../models/Member');
const multer = require('multer');
const path = require('path');

// File upload setup
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });

// POST /members
router.post('/', upload.single('image'), async (req, res) => {
    try {
        const { name, role, email } = req.body;
        const newMember = new Member({
            name,
            role,
            email,
            image: req.file.filename
        });
        await newMember.save();
        res.json(newMember);
    } catch (err) {
        console.error(err); // 👈 this should print error in backend terminal
        res.status(500).json({ error: 'Server error' });
    }
});
 

// GET /members
router.get('/', async (req, res) => {
    const members = await Member.find();
    res.json(members);
});

// GET /members/:id
router.get('/:id', async (req, res) => {
    const member = await Member.findById(req.params.id);
    res.json(member);
});

module.exports = router;
