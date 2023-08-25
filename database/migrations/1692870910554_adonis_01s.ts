import Database from '@ioc:Adonis/Lucid/Database'
import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import { database } from 'Config/app'

export default class extends BaseSchema {
  protected tableName = 'adonis_02s'

  public async up () {
    await Database.table('adonis_01s').insert([
      {id:1,FName:'Nivesh1',Lname:'Sharma',age:21},
      {id:2,FName:'Nivesh2',Lname:'Sharma',age:22},
      {id:3,FName:'Nivesh3',Lname:'Sharma',age:23}

    ])
  }

  public async down () {
    await database;
  }
}
