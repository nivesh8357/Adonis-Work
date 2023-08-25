import Database from "@ioc:Adonis/Lucid/Database";

export class table{
   static async ToInsert(){
        await Database
        .table('adonis_01s')
        .returning('id')
        .insert({fname:'shree',lname:'radhe',age:10000})
    }
   static async test(){
        await Database.from("adonis_01s").where('id', 1).delete()

    }
}