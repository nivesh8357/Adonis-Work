import Database from "@ioc:Adonis/Lucid/Database";
import adonis_01s from 'App/Models/adonis_01s';
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class table {
    static async ToInsert(users: Array<{ Fname: string; Lname: string; Age: number }>) {
        // static values
        // await Database
        // .table('adonis_01s')
        // .returning('id')
        // .insert({fname:'shree',lname:'radhe',age:10000});

        // dynamic values
        // await Database
        // .table('adonis_01s')
        // .returning('id')
        // .insert({Fname,Lname,Age});

        // another aproach
        await adonis_01s.createMany(users);
        console.log(users);
        
        // return `Data with Name = ${users} got created`;

    }

    static async ToDelete(IDs: Array<{ ID: number }>) {
        for (const id of IDs) {
            await Database.from("adonis_01s").where(id).delete();
            // return `Deleted record of Id ${id}`;
        }
    }
    // to get data
    static async ToGet2(id: number) {
        return await Database.from('adonis_01s').where('id' ,id);
    }

    static async updateTask(id: number, data: Record<string, any>) {
        // const task = await table.ToGet2(id);
        return await Database.from('adonis_01s').where('id',id).update(data)

    }
}