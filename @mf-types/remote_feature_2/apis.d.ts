
    export type RemoteKeys = 'remote_feature_2';
    type PackageType<T> = T extends 'remote_feature_2' ? typeof import('remote_feature_2') :any;