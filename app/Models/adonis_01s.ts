// import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class adonis_01s extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({})
  public Fname: string

  @column({})
  public Lname: string

  @column({})
  public Age: number
}
