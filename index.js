const express = require('express')
const cors = require('cors');
const app = express()
const port = process.env.PORT || 3001

app.use(cors());

const episodeData = [
  {id: 1, title: 'Tão perto mas tão distante #1', link:"https://firebasestorage.googleapis.com/v0/b/buscast-d44ea.appspot.com/o/audios-de-teste%2Fepisodio%201.mp3?alt=media&token=da955e88-5add-4c83-b9c0-24a548ce3325", date: "06 de setembro, 2023", temp: '00:01'},
  {id: 2, title: 'Tão perto mas tão distante #2', link: "https://firebasestorage.googleapis.com/v0/b/buscast-d44ea.appspot.com/o/audios-de-teste%2Fepisodio2.mp3?alt=media&token=67f9d7db-175d-4701-98dc-aca8b7cf0877", date: "07 de setembro, 2023", temp: '00:06'}
]


app.get('/episodes', (req, res) => {
  res.json(episodeData)
})

app.get('/episode/:id', (req, res) => {
  const episodeId = parseInt(req.params.id)
  const audioInfo = episodeData.find(audio => audio.id === episodeId)

  if(audioInfo) {
    res.json(audioInfo)
  }
})

app.listen(port, () => {
  console.log("iniciando servidor")
})