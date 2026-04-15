import { Suspense } from 'react';
import './index.css';
import RemoteFeature1 from 'remote_feature_1';
import RemoteFeature2 from 'remote_feature_2';

const Index = () => (
  <div>
    <div>Shell App</div>
    <div>
      <Suspense fallback={<div>Loading Feature 1...</div>}>
        <RemoteFeature1 />
      </Suspense>
    </div>
    <div>
      <Suspense fallback={<div>Loading Feature 2...</div>}>
        <RemoteFeature2 />
      </Suspense>
    </div>
  </div>
);

export default Index;
