import { createModuleFederationConfig } from '@module-federation/modern-js-v3';

export default createModuleFederationConfig({
  name: 'mfe_shell_app',
  remotes: {
    'remote_feature_1': 'remote_feature_1@http://localhost:3001/mf-manifest.json',
    'remote_feature_2': 'remote_feature_2@http://localhost:3002/mf-manifest.json',
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
});
