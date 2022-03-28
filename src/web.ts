import { WebPlugin } from '@capacitor/core';

import type { CanShowButton, CheckStateResponse, LoginResponse, SignInWithApplePlugin } from './definitions';

export class SignInWithAppleWeb
  extends WebPlugin
  implements SignInWithApplePlugin {

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
  async getCanShowButton(): Promise<CanShowButton> {
    console.log("getCanShowButton: not available in this browser");
    return null as any;
  }

  async login(): Promise<LoginResponse> {
    console.log("login: not available in this browser");
    return null as any;
  }

  async checkStateWithUserID(options: { userId: string }): Promise<CheckStateResponse> {
    console.log("login: not available in this browser", options);
    return null as any;
  }
}
