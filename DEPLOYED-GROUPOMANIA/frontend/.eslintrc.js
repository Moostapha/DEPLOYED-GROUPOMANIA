module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // enleve warn console.log dans le build mettre on pour enlever warn
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
