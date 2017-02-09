import hooks from 'feathers-hooks';
import { hooks as auth } from 'feathers-authentication';
import { validateHook as validate } from '../../hooks';
import { required } from '../../utils/validation';
import uuid from 'uuid';
import dashify from 'dashify';

const schemaValidator = {
  name: [required],
  price: [required],
  quality: [required],
  type: [required],
  total: [required]
};

const options = {
  service: 'cooperations',
  field: 'sentBy'
};

const cooperationHooks = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      validate(schemaValidator),
      hook => {
        hook.data = {
          _id: uuid.v4(),
          name: hook.data.name,
          slug: dashify(hook.data.name),
          price: hook.data.price,
          quality: hook.data.quality,
          type: hook.data.type,
          total: hook.data.total
        };
      },
      hook => {
        hook.data.createdAt = new Date();
      }
    ],
    update: [
      validate(schemaValidator),
      hook => {
        hook.data = {
          name: hook.data.name,
          slug: dashify(hook.data.name),
          price: hook.data.price,
          quality: hook.data.quality,
          type: hook.data.type,
          total: hook.data.total
        };
      },
      hook => {
        hook.data.updatedAt = new Date();
      }
    ],
    patch: [],
    remove: []
  },
  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};

export default cooperationHooks;
