// vite.config.js
import { defineConfig } from "file:///C:/Users/Sujal%20Verdhan/Desktop/mern/chatapp/frontend/vite-project/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Sujal%20Verdhan/Desktop/mern/chatapp/frontend/vite-project/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  server: {
    port: 3e3,
    proxy: {
      "/api": { target: "http://localhost:5000" }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxTdWphbCBWZXJkaGFuXFxcXERlc2t0b3BcXFxcbWVyblxcXFxjaGF0YXBwXFxcXGZyb250ZW5kXFxcXHZpdGUtcHJvamVjdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcU3VqYWwgVmVyZGhhblxcXFxEZXNrdG9wXFxcXG1lcm5cXFxcY2hhdGFwcFxcXFxmcm9udGVuZFxcXFx2aXRlLXByb2plY3RcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL1N1amFsJTIwVmVyZGhhbi9EZXNrdG9wL21lcm4vY2hhdGFwcC9mcm9udGVuZC92aXRlLXByb2plY3Qvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCldLFxuICBzZXJ2ZXI6e1xuICAgIHBvcnQ6MzAwMCxcbiAgICBwcm94eTp7XG4gICAgICBcIi9hcGlcIjp7dGFyZ2V0OlwiaHR0cDovL2xvY2FsaG9zdDo1MDAwXCIsfVxuICAgIH1cbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXVZLFNBQVMsb0JBQW9CO0FBQ3BhLE9BQU8sV0FBVztBQUdsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsUUFBTztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsT0FBTTtBQUFBLE1BQ0osUUFBTyxFQUFDLFFBQU8sd0JBQXdCO0FBQUEsSUFDekM7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K