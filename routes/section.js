var express = require('express');
var app = express();
var router = express.Router();

const ctrlSection = require('../controllers/section')

router.get('/allsections', ctrlSection.GetSections);
router.post('/addnewsection', ctrlSection.CreateSection);

module.exports = router