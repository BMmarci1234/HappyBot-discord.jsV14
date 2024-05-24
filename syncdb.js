// syncdb.js
const Guild = require('./models/guild');
const Infraction = require('./models/infraction');

Guild.sync({ force: false })
  .then(() => {
    console.log('Guild table has been successfully created.');
    return Infraction.sync({ force: false });
  })
  .then(() => {
    console.log('Infraction table has been successfully created.');
  })
  .catch(err => {
    console.error('Unable to create the tables:', err);
  });
