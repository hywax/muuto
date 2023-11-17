import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  ignores: [
    'dist',
    'node_modules',
  ],
  rules: {
    'antfu/consistent-list-newline': 'off',
  },
})
