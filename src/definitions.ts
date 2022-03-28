export interface SignInWithApplePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
