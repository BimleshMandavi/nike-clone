import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig(({ mode }) => {
  // Load env file based on mode in the current working directory.
  // Set the third parameter to '' to load all env regardless of the VITE_ prefix.
  // eslint-disable-next-line no-undef
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    // vite config
    define: {
      ...Object.keys(env).reduce((prev, key) => {
        prev[`process.env.${key}`] = JSON.stringify(env[key])
        return prev
      }, {}),
    },
  }
})