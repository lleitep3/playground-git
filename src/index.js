const app = require('express')()


app.get('/', (req, res) =>{
  res.json({
    status: 'OK :)'
  })
})

app.listen(3000, () => console.log('Estamos ai pro que der e vier!'))
