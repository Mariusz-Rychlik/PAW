const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.send(` <!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

</body>
</html> `);
});

module.exports = router;