import { WebPlugin } from '@capacitor/core';

import type { SignInWithApplePlugin } from './definitions';

export class SignInWithAppleWeb
  extends WebPlugin
  implements SignInWithApplePlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
