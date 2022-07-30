const { getLessVars } = require('./configs/getLessVars');

/**
 * - En la linea 5 está el ejemplo de como leer envs desde la terminal
 * - Todos los nombres deben llevar el prefijo "REACT_APP_" para que la app pueda leer las envs
 */
exports.devEnvs = {
  // REACT_APP_FROM_ENV: process.env.REACT_APP_FROM_ENV,
  REACT_APP_PORT: 3000,
  REACT_APP_API_URL:
    'http://stackoverflow-load-balancer-1422125884.us-east-1.elb.amazonaws.com:4000',
  REACT_APP_APP_NAME: 'REACT APP DEVELOPMENT',
  REACT_APP_LESS_COLORS: getLessVars(),
};
