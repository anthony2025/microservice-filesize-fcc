const path = require('path')
const app = require('express')()

const multer  = require('multer')
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

app.post('/upload', upload.single('file'), (req, res) => {
  res.json({bytes: req.file.size})
});

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')))
app.listen(process.env.PORT || 4000)
