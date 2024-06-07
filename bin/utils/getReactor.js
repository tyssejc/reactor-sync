const Reactor = require('@adobe/reactor-sdk').default;

async function getReactor(settings) {
  if (!settings.reactor)
    return await new Reactor(settings.accessToken, {
      reactorUrl: settings.environment.reactorUrl,
      customHeaders: {'x-gw-ims-org-id': settings.orgId},
      enableLogging: true // turn true to help debug
    });
  return settings.reactor;
}

module.exports = getReactor;