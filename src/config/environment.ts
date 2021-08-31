export interface EnvironmentVars {
  GITHUB_CLIENT_ID: string;
  GITHUB_SECRET: string;
}

export default () => ({
  GITHUB_CLIENT_ID: String(process.env.GITHUB_CLIENT_ID),
  GITHUB_SECRET: String(process.env.GITHUB_SECRET)
});
