import { HTTPServer } from '@mikosoft/spa-server';

const httpOpts = {
  staticDir: 'dist',
  indexFile: 'index.html',
  urlRewrite: {},
  port: process.env.PORT || 3457,
  timeout: 5 * 60 * 1000, // if 0 never timeout
  acceptEncoding: 'gzip', // gzip, deflate or ''
  headers: {
    // CORS Response Headers
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept, Authorization',
    'Access-Control-Allow-Methods': 'OPTIONS, GET',
    'Access-Control-Max-Age': '3600'
  },
  ssr: 'all', // none, all, botsonly
  ssrConsole: false, // frontend JS logs in the backend
  ssrModifier: null,
  debug: false,
  debugHTML: false
};
const httpServer = new HTTPServer(httpOpts);
httpServer.start();
