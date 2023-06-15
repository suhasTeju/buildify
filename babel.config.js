module.exports = {
    presets: [
      ['@babel/preset-env', { targets: 'your_target_browsers_here' }],
      '@babel/preset-react'
    ],
    plugins: [
      [
        '@babel/plugin-transform-react-jsx',
        {
          throwIfNamespace: false
        }
      ]
    ]
  };