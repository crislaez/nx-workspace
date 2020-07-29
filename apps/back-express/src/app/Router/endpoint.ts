
// import {} from 'connect-multipart';


export function endPoint(router){

  router.get('/saludo',(req, res) => {
    res.status(200).json({success:true, message:`Hola, bienvenido`})
  });

  router.post('/prueba',(req, res) => {
    res.send(200).json({success:true, data:res});
  });

}

