export interface SignInWithApplePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  getCanShowButton(): Promise<CanShowButton>;
  login(): Promise<LoginResponse>;
  checkStateWithUserID(options: { userId: string }): Promise<CheckStateResponse>;
}

export interface CanShowButton {
  value: boolean;
}
export interface UserInfo {
  "state": string,
  "userIdentifier": string,
  "familyName": string,
  "givenName": string,
  "nickname": string,
  "middleName": string,
  "namePrefix": string,
  "nameSuffix": string,
  "familyName_phone": string,
  "givenName_phone": string,
  "nickname_phone": string,
  "namePrefix_phone": string,
  "nameSuffix_phone": string,
  "middleName_phone": string,
  "email": string,
  "identityToken": string,
  "authCode": string,
  "realUserStatus": string
}


export interface LoginResponse {
  "state": number, // 1 is success , -1 is fail
  "errCode": string,
  "errDesc": string,
  "userInfo": UserInfo | null
}

export interface CheckStateResponse {
  /**
   *["state":1,"errDesc": "Apple ID Credential is valid"]
   *["state":-1, "errDesc": "Apple ID Credential revoked, handle unlink"]
   *["state":-2, "errDesc": "Credential not found, show login UI"]
   *["state":-3, "errDesc": "Other"] 
   * @type {number}
   * @memberof CheckStateResponse
   */
  "state": number,
  "errDesc": string
}