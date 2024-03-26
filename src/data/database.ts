import path from 'path';
import Knex from 'knex';

const knex = Knex({
  client: 'better-sqlite3',
  connection: {
    filename: path.resolve(__dirname, '../../database/dev_supermarket.sqlite3'),
  },
});

export const select = (table: string, barcode?: string) => {
  const result = barcode ? knex(table).where({ Barcode: barcode }).select() : knex(table).select();
  return result;
};
