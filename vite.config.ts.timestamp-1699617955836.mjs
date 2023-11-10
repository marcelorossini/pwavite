// vite.config.ts
import { defineConfig } from "file:///D:/Projetos/new%20catalogo/off/node_modules/vite/dist/node/index.js";
import react from "file:///D:/Projetos/new%20catalogo/off/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { VitePWA } from "file:///D:/Projetos/new%20catalogo/off/node_modules/vite-plugin-pwa/dist/index.mjs";
import * as path from "path";
var __vite_injected_original_dirname = "D:\\Projetos\\new catalogo\\off";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    VitePWA({
      workbox: {
        globPatterns: ["**/*"]
      },
      includeAssets: [
        "**/*"
      ],
      manifest: {
        "theme_color": "#f69435",
        "background_color": "#f69435",
        "display": "standalone",
        "scope": "/",
        "start_url": "/",
        "short_name": "Vite PWA",
        "description": "Vite PWA Boilerplate",
        "name": "Vite PWA Boilerplate",
        "icons": [
          {
            "src": "/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "/icon-256x256.png",
            "sizes": "256x256",
            "type": "image/png"
          },
          {
            "src": "/icon-384x384.png",
            "sizes": "384x384",
            "type": "image/png"
          },
          {
            "src": "/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ]
      }
    })
  ],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__vite_injected_original_dirname, "src") }]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxQcm9qZXRvc1xcXFxuZXcgY2F0YWxvZ29cXFxcb2ZmXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxQcm9qZXRvc1xcXFxuZXcgY2F0YWxvZ29cXFxcb2ZmXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9Qcm9qZXRvcy9uZXclMjBjYXRhbG9nby9vZmYvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnXHJcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tIFwidml0ZS1wbHVnaW4tcHdhXCI7XHJcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCdcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgcmVhY3QoKSxcclxuICAgIFZpdGVQV0Eoe1xyXG4gICAgICB3b3JrYm94OiB7XHJcbiAgICAgICAgZ2xvYlBhdHRlcm5zOiBbXCIqKi8qXCJdLFxyXG4gICAgICB9LFxyXG4gICAgICBpbmNsdWRlQXNzZXRzOiBbXHJcbiAgICAgICAgXCIqKi8qXCIsXHJcbiAgICAgIF0sXHJcbiAgICAgIG1hbmlmZXN0OiB7XHJcbiAgICAgICAgXCJ0aGVtZV9jb2xvclwiOiBcIiNmNjk0MzVcIixcclxuICAgICAgICBcImJhY2tncm91bmRfY29sb3JcIjogXCIjZjY5NDM1XCIsXHJcbiAgICAgICAgXCJkaXNwbGF5XCI6IFwic3RhbmRhbG9uZVwiLFxyXG4gICAgICAgIFwic2NvcGVcIjogXCIvXCIsXHJcbiAgICAgICAgXCJzdGFydF91cmxcIjogXCIvXCIsXHJcbiAgICAgICAgXCJzaG9ydF9uYW1lXCI6IFwiVml0ZSBQV0FcIixcclxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVml0ZSBQV0EgQm9pbGVycGxhdGVcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJWaXRlIFBXQSBCb2lsZXJwbGF0ZVwiLFxyXG4gICAgICAgIFwiaWNvbnNcIjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInNyY1wiOiBcIi9pY29uLTE5MngxOTIucG5nXCIsXHJcbiAgICAgICAgICAgICAgICBcInNpemVzXCI6IFwiMTkyeDE5MlwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2UvcG5nXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJzcmNcIjogXCIvaWNvbi0yNTZ4MjU2LnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJzaXplc1wiOiBcIjI1NngyNTZcIixcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlL3BuZ1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwic3JjXCI6IFwiL2ljb24tMzg0eDM4NC5wbmdcIixcclxuICAgICAgICAgICAgICAgIFwic2l6ZXNcIjogXCIzODR4Mzg0XCIsXHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZS9wbmdcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInNyY1wiOiBcIi9pY29uLTUxMng1MTIucG5nXCIsXHJcbiAgICAgICAgICAgICAgICBcInNpemVzXCI6IFwiNTEyeDUxMlwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2UvcG5nXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IFt7IGZpbmQ6ICdAJywgcmVwbGFjZW1lbnQ6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnKSB9XSxcclxuICB9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFnUixTQUFTLG9CQUFvQjtBQUM3UyxPQUFPLFdBQVc7QUFDbEIsU0FBUyxlQUFlO0FBQ3hCLFlBQVksVUFBVTtBQUh0QixJQUFNLG1DQUFtQztBQU16QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsTUFDTixTQUFTO0FBQUEsUUFDUCxjQUFjLENBQUMsTUFBTTtBQUFBLE1BQ3ZCO0FBQUEsTUFDQSxlQUFlO0FBQUEsUUFDYjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFVBQVU7QUFBQSxRQUNSLGVBQWU7QUFBQSxRQUNmLG9CQUFvQjtBQUFBLFFBQ3BCLFdBQVc7QUFBQSxRQUNYLFNBQVM7QUFBQSxRQUNULGFBQWE7QUFBQSxRQUNiLGNBQWM7QUFBQSxRQUNkLGVBQWU7QUFBQSxRQUNmLFFBQVE7QUFBQSxRQUNSLFNBQVM7QUFBQSxVQUNMO0FBQUEsWUFDSSxPQUFPO0FBQUEsWUFDUCxTQUFTO0FBQUEsWUFDVCxRQUFRO0FBQUEsVUFDWjtBQUFBLFVBQ0E7QUFBQSxZQUNJLE9BQU87QUFBQSxZQUNQLFNBQVM7QUFBQSxZQUNULFFBQVE7QUFBQSxVQUNaO0FBQUEsVUFDQTtBQUFBLFlBQ0ksT0FBTztBQUFBLFlBQ1AsU0FBUztBQUFBLFlBQ1QsUUFBUTtBQUFBLFVBQ1o7QUFBQSxVQUNBO0FBQUEsWUFDSSxPQUFPO0FBQUEsWUFDUCxTQUFTO0FBQUEsWUFDVCxRQUFRO0FBQUEsVUFDWjtBQUFBLFFBQ0o7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTyxDQUFDLEVBQUUsTUFBTSxLQUFLLGFBQWtCLGFBQVEsa0NBQVcsS0FBSyxFQUFFLENBQUM7QUFBQSxFQUNwRTtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
