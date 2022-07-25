const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res)=> {
  res.send("hola server mi express")
});

app.post('/modificar_info_destructuring', (req, res)=> {
  const {name2} = req.body;
  res.json({
    message: 'created',
    data: {name2}
  })

})

app.post('/modificar_info_body', (req, res)=> {
  const bodyComplete = req.body;
  res.json({
    message: 'created',
    data: bodyComplete
  })

})

app.get('/capturar_info', (req, res)=> {

  const fetch = require('node-fetch');
  async function info(){
    const response = await fetch('https://pokeapi.co/api/v2')
    const data = await response.json()
    res.send(data)
  }
  info();

});



app.get('/products/:id',(req, res)=>{
 //const product = req.params.id; esta es una forma,
 const {id} = req.params;
 /*esta forma es más moderna con la destructuracion de ECMAScript y viene a decir de todos los parametros del objeto params solo me interesa el id.*/

  res.json(
    {
      id,
      name: 'product2',
      price: 350
    }
  );

});

app.get('/categories/:categoryid/products/:productId',(req, res)=>{
  //const product = req.params.id; esta es una forma,
  const {categoryid, productId} = req.params;
  /*esta forma es más moderna con la destructuracion de ECMAScript y viene a decir de todos los parametros del objeto params solo me interesa el id.*/

   res.json(
     {
      categoryid,
       productId
     }
   );

 });

app.get('/users',(req, res)=>{
  const { limit, offset } = req.query;
  if(limit && offset){
      res.json({
        limit,
        offset
      });
    }else{
      res.send('no hay parametros1');
    }
 })

app.listen(port, ()=> {
  console.log('mi port' + port);
});


/*REST: Representational State Transfer
Es una conveccion que se refiere a servicios web por protocolo HTTP

Metodos:

Get: Obtener
Put: Modificar/Actualizar
Patch: Modificar/Actualizar
Post: Crear
Delete: Eliminar
Patch
El método de solicitud HTTP PATCH aplica modificaciones parciales a un recurso.

PATCH es algo análogo al concepto de “actualización” que se encuentra en CRUD, Una solicitud se considera un conjunto de instrucciones sobre cómo modificar un recurso. Contrasta esto con PUT; que es una representación completa de un recurso.PATCH

Mo es necesariamente idempotente, aunque puede serlo. Contrasta esto con PUT; que siempre es idempotente.

La palabra “idempotente” significa que cualquier número de solicitudes repetidas e idénticas dejará el recurso en el mismo estado.

Por ejemplo, si un campo de contador de incremento automático es una parte integral del recurso, entonces un PUT lo sobrescribirá naturalmente (ya que sobrescribe todo), pero no necesariamente para .PATCH

PATCH (como POST) puede tener efectos secundarios sobre otros recursos.

PATCH - HTTP | MDN*/

/*Los endpoints son las URLs de un API o un backend que responden a una petición. Los mismos entrypoints tienen que calzar con un endpoint para existir. Algo debe responder para que se renderice un sitio con sentido para el visitante. */
