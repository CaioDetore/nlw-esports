import express from 'express'

const app = express()

app.post('/games', (request, response) => {
  return response.json([]);
});

app.post('/ads', (request, response) => {
  return response.status(2021).json([])
})

app.get('/games/:id/ads', (request, response) => {
  const gameId = request.params.id;

  return response.json([
    {id: 1, nome: "Anúncio 1"}
  ])
})


app.get('/ads/:id/discord', (request, response) => {
  const adId = request.params.id;

  return response.json([
  ])
})

app.listen(3333)

