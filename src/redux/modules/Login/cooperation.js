import feathersNedb from 'feathers-nedb';
import NeDB from 'nedb';
import hooks from './hooks';

export default function cooperationsService() {
  const app = this;

  const db = new NeDB({
    filename: ${__dirname}/cooperations.nedb,
    autoload: true
  });

  const slugService= {
    setup(app) {
      this.app = app
    },

    find(params) {
      return new Promise( function( resolve, reject ) {
        db.findOne({ slug: params.slug }).exec(function(err,doc){
          resolve(doc);
        });
      });
    }
  }

  app.use('/cooperations', feathersNedb({
    Model: db,
    paginate: {
      default: 25,
      max: 100
    }
  }));

  app.use('/cooperation/:slug', slugService)

  app.service('cooperations')
    .before(hooks.before)
    .after(hooks.after);
}