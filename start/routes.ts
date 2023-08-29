/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
// Route.get('/',async () =>{ 'Hello Nivesh' })

//  Route.get('/PrintDate', 'TestController3sController.index');

Route.get('/ToGet/:id', 'TestController3sController.show');

Route.post('/CreateUser', 'TestController3sController.create');// TO create a record

Route.delete('/Delete', 'TestController3sController.destroy');// TO delete a record with ID

Route.post('/Update/:id', 'TestController3sController.update');

