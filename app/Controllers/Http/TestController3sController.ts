import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// import Database from '@ioc:Adonis/Lucid/Database';
// import { TestDate } from 'App/Services/Print_date';
import { table } from 'App/Services/Insert';
import adonis_01s from 'App/Models/adonis_01s'


export default class TestController3sController {

  // async index({}: HttpContextContract) {
  //      const date= await TestDate.Print();
  //      return date;
  // }

  public async create({request}: HttpContextContract) {

    console.log(request.qs());
   let{ kh,id } = request.all();
   console.log(kh);
   console.log(id);
   
   
    
    
  //  await Database.table('adonis_01s')
  //   .table('adonis_01s')
  //   .returning('id')
  //   .insert({id:9,fname:'chaman',lname:'chootiya',age:100})

        const result = table.ToInsert();
        return result; 
  }

  public async store({}: HttpContextContract) {
    const result = table.test();
    return result; 
  }

  // public async show({}: HttpContextContract) {}

  // public async edit({}: HttpContextContract) {}

  // public async update({}: HttpContextContract) {}

  public async destroy({ params, response }: HttpContextContract) {
    const item = await adonis_01s.find(params.id)
    if (item) {
      await item.delete()
      return response.json({ message: 'Item deleted' });
    }
    return response.notFound('Item not found')

  }

}
