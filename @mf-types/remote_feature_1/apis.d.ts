
    export type RemoteKeys = 'remote_feature_1';
    type PackageType<T> = T extends 'remote_feature_1' ? typeof import('remote_feature_1') :any;