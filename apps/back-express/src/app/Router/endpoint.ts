
function endPoint(router){

  router.post('/prueba',(req:any, res:any) => {
    req.send(200).jsop({success:true, data:res});
  });

}

module.exports = endPoint;
