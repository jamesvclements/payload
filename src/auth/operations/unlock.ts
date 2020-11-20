const { APIError } = require('../../errors');
const executeAccess = require('../executeAccess');

async function unlock(args) {
  if (!Object.prototype.hasOwnProperty.call(args.data, 'email')) {
    throw new APIError('Missing email.');
  }

  const {
    collection: {
      Model,
      config: collectionConfig,
    },
    req,
    overrideAccess,
  } = args;

  // /////////////////////////////////////
  // Access
  // /////////////////////////////////////

  if (!overrideAccess) {
    await executeAccess({ req }, collectionConfig.access.unlock);
  }

  const options = { ...args };

  const { data } = options;

  // /////////////////////////////////////
  // Unlock
  // /////////////////////////////////////

  const user = await Model.findOne({ email: data.email.toLowerCase() });

  if (!user) return null;

  await user.resetLoginAttempts();

  return true;
}

module.exports = unlock;