/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  knex.schema.hasTable('homes').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('homes', function (table) {
        table.increments('house_id').primary()
        table.string('title', 100).notNullable()
        table.text('description')
        table.integer('guests')
        table.text('address')
        table.decimal('rental_price', 12, 2) // Precision y escala (12, 2)
        table.boolean('active').notNullable().defaultTo(true)
        table.timestamp('created_at').defaultTo(knex.fn.now())
      })
    }
  })
}
// El borrado logico es convertir un dato a booleano (active, false) y cuando se llama el dato en la BD solo
// se responde con los datos active, sin eliminarlo directamente.
// Para esto, el Default debe estar en true, despues manualmente se cambia a false en caso de ser necesario.

// knex.fn.now() Coloca la fecha actual en la que se creo el dato asignado "¿Cuantas tablas/casas se hicieron el 21 de marzo?"
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {

}
