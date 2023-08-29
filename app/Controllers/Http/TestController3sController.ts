import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// import adonis_01s from 'App/Models/adonis_01s';
// import Database from '@ioc:Adonis/Lucid/Database';
// import { TestDate } from 'App/Services/Print_date';
import table from 'App/Services/Insert';
// import Valid1Validator from 'App/Validators/Valid1Validator';
// import adonis_01s from 'App/Models/adonis_01s'


export default class TestController3sController {

  // async index({}: HttpContextContract) {
  //      const date= await TestDate.Print();
  //      return date;
  // }

  public async create({ request }: HttpContextContract) {
    // by using dynamic values.
    const users = request.input('users');
    console.log(users);
    
    // await request.validate(Valid1Validator.schema)
    // let {Fname,Lname,Age} = request.all();
    // await table.ToInsert(users)
    // console.log(Fname,Lname,Age);
    
   
    // console.log(users);
    
    // const i = await table.ToInsert(users);
    // return i;
  }

  // public async store({}: HttpContextContract) {
  //   const result = table.test();
  //   return result; 
  // }

  public async show({params}:HttpContextContract) {
    return await table.ToGet2(params.Id);
  }

  // public async edit({}: HttpContextContract) {}

  public async update({ params, request }: HttpContextContract) {
     const data = request.all();
     await table.updateTask(params.id,data);
    
  }

  public async destroy({ request}: HttpContextContract) {
    // // 1st way - Delete by using user input ID
    // let {id} = request.all();
    // return table.ToDelete(id);

  // 2nd way - delete by params ID
  // const item = await adonis_01s.find(params.id)
  // if (item) {
  //   await item.delete()
  //   return response.json({ message: 'Item deleted' });
  // }

  // by using module
      const ID = request.input('Id');
      return await table.ToDelete(ID);
  }
}
