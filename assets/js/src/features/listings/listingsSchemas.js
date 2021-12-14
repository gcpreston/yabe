import { schema } from 'normalizr';

const item = new schema.Entity('items');
const sale = new schema.Entity('sales')

export { item, sale };
