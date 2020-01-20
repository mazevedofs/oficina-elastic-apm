const apmNode = require('elastic-apm-node').start({
  serviceName: 'node-app',
  secretToken: 'Ie7Q7drXYd6ryYTEDj',
  serverUrl: 'https://cf211ae554d44dfe8f14a5805fd6370f.apm.us-east-1.aws.cloud.es.io',
  logLevel: 'trace',
  serviceVersion: '0.1',
  distributedTracingOrigins: ['http://localhost:4200'],
  captureBody: true,
  captureHeaders: true,
  captureErrorLogStackTraces: 'always',
  usePathAsTransactionName: true,
  sourceLinesErrorAppFrames: 5
});

module.exports = apmNode;