import hyoban from 'eslint-config-hyoban'

export default hyoban(
  { ignores: ['src/gql/**'] },
  {
    files: ['src/lib/**'],
    rules: {
      'react-hooks/rules-of-hooks': 'off',
      '@eslint-react/hooks-extra/ensure-custom-hooks-using-other-hooks': 'off',
    },
  },
)
