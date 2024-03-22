/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// EXPORTS UP
// En este campo colocaremos los datos que nos permitiran crear las tablas que necesitamos.
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

// knex.fn.now() Coloca la fecha actual en la que se creo el dato asignado "¿Cuantas tablas se hicieron el 21 de marzo?"
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// EXPORTS DOWN En este campo nos permitira deshacer los cambios que hagamos arriba
exports.down = function (knex) {
  knex.schema.hasTable('homes').then(function (exists) {
    if (exists) {
      return knex.schema.dropTable('homes')
    }
  })
}

/* GUÍA DE USO RÁPIDO DE KNEX */

// ** CREAR UNA MIGRACIÓN **
// knex migrate:make nombre_de_la_migracion

// ** EJECUTAR LAS MIGRACIONES SOBRE EXPORTS.UP() **
// Al ejecutar una migración sobre export.up estamos creando o modificando la tabla de la base de datos.
// Ejecutar la última migración (up): knex migrate:latest
// Ejecutar todas las migraciones (up): knex migrate:up
// Ejecutar una migración especifica (up): knex migrate:up nombre_de_la_migracion.js

// ** EJECUTAR LAS MIGRACIONES SOBRE EXPORTS.DOWN() **
// Al ejecutar una migración sobre export.down estamos eliminando o modificando la tabl de la base de datos al que le hicimos cambios en exports.up
// Deshacer la última migración (down): knex migrate:rollback latest
// Deshacer todas las migraciones (down): knex migrate:rollback
// Deshacer una migración especifica (down): knex migrate:down nombre_de_la_migracion.js
