import { Suspense } from 'react';
import './index.css';
import RemoteFeature1 from 'remote_feature_1';
import RemoteFeature2 from 'remote_feature_2';

const Index = () => (
  <div>
    <h1 className="shell-app-header">Shell App</h1>
    <div className="features-grid">
      <div className="feature-card">
        <Suspense fallback={<div>Loading Feature 1...</div>}>
          <RemoteFeature1 />
        </Suspense>
      </div>
      <div className="feature-card">
        <Suspense fallback={<div>Loading Feature 2...</div>}>
          <RemoteFeature2 />
        </Suspense>
      </div>
    </div>
  </div>
);

export default Index;
