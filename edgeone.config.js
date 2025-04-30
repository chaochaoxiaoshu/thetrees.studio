// EdgeOne Pages Configuration
export default {
  // Optimize build settings for Tencent Cloud EdgeOne Pages
  build: {
    // Use this command instead of the default to reduce parallel operations
    command: "NODE_OPTIONS='--max-old-space-size=3072' pnpm build",
    
    // Additional environment variables that might help
    environment: {
      NODE_ENV: "production",
      // Reduce file watchers in build process
      CHOKIDAR_USEPOLLING: "false"
    }
  }
}
