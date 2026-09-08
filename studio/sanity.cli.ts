import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'ilxpjap5',
    dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  },
  typegen: {
    path: '../{app,components,sanity,lib}/**/*.{ts,tsx}',
    schema: './schema.json',
    generates: '../sanity.types.ts',
    overloadClientMethods: true,
  },
})
