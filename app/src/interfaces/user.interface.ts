export interface User {
    additionalUserInfo: AdditionalUserInfo;
    user:               UserClass;
}

export interface AdditionalUserInfo {
    isNewUser: boolean;
}

export interface UserClass {
    displayName:   string;
    email:         string;
    emailVerified: boolean;
    isAnonymous:   boolean;
    metadata:      Metadata;
    multiFactor:   Metadata;
    phoneNumber:   null;
    photoURL:      null;
    providerData:  any[];
    providerId:    string;
    tenantId:      null;
    uid:           string;
}

export interface Metadata {
}
