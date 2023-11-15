// vite.config.ts
import { defineConfig, loadEnv } from "file:///D:/Projetos/new%20catalogo/off/node_modules/vite/dist/node/index.js";
import react from "file:///D:/Projetos/new%20catalogo/off/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { VitePWA } from "file:///D:/Projetos/new%20catalogo/off/node_modules/vite-plugin-pwa/dist/index.mjs";
import * as path from "path";
var __vite_injected_original_dirname = "D:\\Projetos\\new catalogo\\off";
var vite_config_default = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [
      react(),
      VitePWA({
        workbox: {
          globPatterns: ["**/*"],
          maximumFileSizeToCacheInBytes: 10485760,
          runtimeCaching: [
            {
              urlPattern: /^https?:\/\/.*\.(jpg|jpeg|gif|png|svg|ico|webp)(\?.*)?$/i,
              handler: "CacheFirst",
              options: {
                cacheName: "images-cache",
                expiration: {
                  maxEntries: 100,
                  maxAgeSeconds: 60 * 60 * 24 * 365
                  // <== 365 days
                },
                cacheableResponse: {
                  statuses: [0, 200]
                }
              }
            },
            {
              urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
              handler: "CacheFirst",
              options: {
                cacheName: "google-fonts-cache",
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365
                  // <== 365 days
                },
                cacheableResponse: {
                  statuses: [0, 200]
                }
              }
            },
            {
              urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
              handler: "CacheFirst",
              options: {
                cacheName: "gstatic-fonts-cache",
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365
                  // <== 365 days
                },
                cacheableResponse: {
                  statuses: [0, 200]
                }
              }
            }
          ]
        },
        includeAssets: ["**/*"],
        manifest: {
          theme_color: "#ffffff",
          background_color: "#ffffff",
          display: "standalone",
          scope: "/",
          start_url: "/",
          short_name: "Cat\xE1logo",
          description: "Cat\xE1logo Representantes",
          name: "Cat\xE1logo Representantes",
          icons: [
            {
              src: "/icon-192x192.png",
              sizes: "192x192",
              type: "image/png"
            },
            {
              src: "/icon-256x256.png",
              sizes: "256x256",
              type: "image/png"
            },
            {
              src: "/icon-384x384.png",
              sizes: "384x384",
              type: "image/png"
            },
            {
              src: "/icon-512x512.png",
              sizes: "512x512",
              type: "image/png"
            }
          ]
        }
      })
    ],
    resolve: {
      alias: [{ find: "@", replacement: path.resolve(__vite_injected_original_dirname, "src") }]
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxQcm9qZXRvc1xcXFxuZXcgY2F0YWxvZ29cXFxcb2ZmXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxQcm9qZXRvc1xcXFxuZXcgY2F0YWxvZ29cXFxcb2ZmXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9Qcm9qZXRvcy9uZXclMjBjYXRhbG9nby9vZmYvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcsIGxvYWRFbnYgfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XHJcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tIFwidml0ZS1wbHVnaW4tcHdhXCI7XHJcbmltcG9ydCAqIGFzIHBhdGggZnJvbSBcInBhdGhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+IHtcclxuICBjb25zdCBlbnYgPSBsb2FkRW52KG1vZGUsIHByb2Nlc3MuY3dkKCksICcnKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGx1Z2luczogW1xyXG4gICAgICByZWFjdCgpLFxyXG4gICAgICBWaXRlUFdBKHtcclxuICAgICAgICB3b3JrYm94OiB7XHJcbiAgICAgICAgICBnbG9iUGF0dGVybnM6IFtcIioqLypcIl0sIFxyXG4gICAgICAgICAgbWF4aW11bUZpbGVTaXplVG9DYWNoZUluQnl0ZXM6IDEwNDg1NzYwLFxyXG4gICAgICAgICAgcnVudGltZUNhY2hpbmc6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHVybFBhdHRlcm46XHJcbiAgICAgICAgICAgICAgICAvXmh0dHBzPzpcXC9cXC8uKlxcLihqcGd8anBlZ3xnaWZ8cG5nfHN2Z3xpY298d2VicCkoXFw/LiopPyQvaSxcclxuICAgICAgICAgICAgICBoYW5kbGVyOiBcIkNhY2hlRmlyc3RcIixcclxuICAgICAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBjYWNoZU5hbWU6IFwiaW1hZ2VzLWNhY2hlXCIsXHJcbiAgICAgICAgICAgICAgICBleHBpcmF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgIG1heEVudHJpZXM6IDEwMCxcclxuICAgICAgICAgICAgICAgICAgbWF4QWdlU2Vjb25kczogNjAgKiA2MCAqIDI0ICogMzY1LCAvLyA8PT0gMzY1IGRheXNcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjYWNoZWFibGVSZXNwb25zZToge1xyXG4gICAgICAgICAgICAgICAgICBzdGF0dXNlczogWzAsIDIwMF0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB1cmxQYXR0ZXJuOiAvXmh0dHBzOlxcL1xcL2ZvbnRzXFwuZ29vZ2xlYXBpc1xcLmNvbVxcLy4qL2ksXHJcbiAgICAgICAgICAgICAgaGFuZGxlcjogXCJDYWNoZUZpcnN0XCIsXHJcbiAgICAgICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgY2FjaGVOYW1lOiBcImdvb2dsZS1mb250cy1jYWNoZVwiLFxyXG4gICAgICAgICAgICAgICAgZXhwaXJhdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICBtYXhFbnRyaWVzOiAxMCxcclxuICAgICAgICAgICAgICAgICAgbWF4QWdlU2Vjb25kczogNjAgKiA2MCAqIDI0ICogMzY1LCAvLyA8PT0gMzY1IGRheXNcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjYWNoZWFibGVSZXNwb25zZToge1xyXG4gICAgICAgICAgICAgICAgICBzdGF0dXNlczogWzAsIDIwMF0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB1cmxQYXR0ZXJuOiAvXmh0dHBzOlxcL1xcL2ZvbnRzXFwuZ3N0YXRpY1xcLmNvbVxcLy4qL2ksXHJcbiAgICAgICAgICAgICAgaGFuZGxlcjogXCJDYWNoZUZpcnN0XCIsXHJcbiAgICAgICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgY2FjaGVOYW1lOiBcImdzdGF0aWMtZm9udHMtY2FjaGVcIixcclxuICAgICAgICAgICAgICAgIGV4cGlyYXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgbWF4RW50cmllczogMTAsXHJcbiAgICAgICAgICAgICAgICAgIG1heEFnZVNlY29uZHM6IDYwICogNjAgKiAyNCAqIDM2NSwgLy8gPD09IDM2NSBkYXlzXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY2FjaGVhYmxlUmVzcG9uc2U6IHtcclxuICAgICAgICAgICAgICAgICAgc3RhdHVzZXM6IFswLCAyMDBdLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGluY2x1ZGVBc3NldHM6IFtcIioqLypcIl0sXHJcbiAgICAgICAgbWFuaWZlc3Q6IHtcclxuICAgICAgICAgIHRoZW1lX2NvbG9yOiBcIiNmZmZmZmZcIixcclxuICAgICAgICAgIGJhY2tncm91bmRfY29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgZGlzcGxheTogXCJzdGFuZGFsb25lXCIsXHJcbiAgICAgICAgICBzY29wZTogXCIvXCIsXHJcbiAgICAgICAgICBzdGFydF91cmw6IFwiL1wiLFxyXG4gICAgICAgICAgc2hvcnRfbmFtZTogXCJDYXRcdTAwRTFsb2dvXCIsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJDYXRcdTAwRTFsb2dvIFJlcHJlc2VudGFudGVzXCIsXHJcbiAgICAgICAgICBuYW1lOiBcIkNhdFx1MDBFMWxvZ28gUmVwcmVzZW50YW50ZXNcIixcclxuICAgICAgICAgIGljb25zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBzcmM6IFwiL2ljb24tMTkyeDE5Mi5wbmdcIixcclxuICAgICAgICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHNyYzogXCIvaWNvbi0yNTZ4MjU2LnBuZ1wiLFxyXG4gICAgICAgICAgICAgIHNpemVzOiBcIjI1NngyNTZcIixcclxuICAgICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgc3JjOiBcIi9pY29uLTM4NHgzODQucG5nXCIsXHJcbiAgICAgICAgICAgICAgc2l6ZXM6IFwiMzg0eDM4NFwiLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBzcmM6IFwiL2ljb24tNTEyeDUxMi5wbmdcIixcclxuICAgICAgICAgICAgICBzaXplczogXCI1MTJ4NTEyXCIsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSksXHJcbiAgICBdLFxyXG4gICAgcmVzb2x2ZToge1xyXG4gICAgICBhbGlhczogW3sgZmluZDogXCJAXCIsIHJlcGxhY2VtZW50OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyY1wiKSB9XSxcclxuICAgIH0sXHJcbiAgfTtcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBZ1IsU0FBUyxjQUFjLGVBQWU7QUFDdFQsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsZUFBZTtBQUN4QixZQUFZLFVBQVU7QUFIdEIsSUFBTSxtQ0FBbUM7QUFLekMsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDeEMsUUFBTSxNQUFNLFFBQVEsTUFBTSxRQUFRLElBQUksR0FBRyxFQUFFO0FBRTNDLFNBQU87QUFBQSxJQUNMLFNBQVM7QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxRQUNOLFNBQVM7QUFBQSxVQUNQLGNBQWMsQ0FBQyxNQUFNO0FBQUEsVUFDckIsK0JBQStCO0FBQUEsVUFDL0IsZ0JBQWdCO0FBQUEsWUFDZDtBQUFBLGNBQ0UsWUFDRTtBQUFBLGNBQ0YsU0FBUztBQUFBLGNBQ1QsU0FBUztBQUFBLGdCQUNQLFdBQVc7QUFBQSxnQkFDWCxZQUFZO0FBQUEsa0JBQ1YsWUFBWTtBQUFBLGtCQUNaLGVBQWUsS0FBSyxLQUFLLEtBQUs7QUFBQTtBQUFBLGdCQUNoQztBQUFBLGdCQUNBLG1CQUFtQjtBQUFBLGtCQUNqQixVQUFVLENBQUMsR0FBRyxHQUFHO0FBQUEsZ0JBQ25CO0FBQUEsY0FDRjtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRSxZQUFZO0FBQUEsY0FDWixTQUFTO0FBQUEsY0FDVCxTQUFTO0FBQUEsZ0JBQ1AsV0FBVztBQUFBLGdCQUNYLFlBQVk7QUFBQSxrQkFDVixZQUFZO0FBQUEsa0JBQ1osZUFBZSxLQUFLLEtBQUssS0FBSztBQUFBO0FBQUEsZ0JBQ2hDO0FBQUEsZ0JBQ0EsbUJBQW1CO0FBQUEsa0JBQ2pCLFVBQVUsQ0FBQyxHQUFHLEdBQUc7QUFBQSxnQkFDbkI7QUFBQSxjQUNGO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFLFlBQVk7QUFBQSxjQUNaLFNBQVM7QUFBQSxjQUNULFNBQVM7QUFBQSxnQkFDUCxXQUFXO0FBQUEsZ0JBQ1gsWUFBWTtBQUFBLGtCQUNWLFlBQVk7QUFBQSxrQkFDWixlQUFlLEtBQUssS0FBSyxLQUFLO0FBQUE7QUFBQSxnQkFDaEM7QUFBQSxnQkFDQSxtQkFBbUI7QUFBQSxrQkFDakIsVUFBVSxDQUFDLEdBQUcsR0FBRztBQUFBLGdCQUNuQjtBQUFBLGNBQ0Y7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBLGVBQWUsQ0FBQyxNQUFNO0FBQUEsUUFDdEIsVUFBVTtBQUFBLFVBQ1IsYUFBYTtBQUFBLFVBQ2Isa0JBQWtCO0FBQUEsVUFDbEIsU0FBUztBQUFBLFVBQ1QsT0FBTztBQUFBLFVBQ1AsV0FBVztBQUFBLFVBQ1gsWUFBWTtBQUFBLFVBQ1osYUFBYTtBQUFBLFVBQ2IsTUFBTTtBQUFBLFVBQ04sT0FBTztBQUFBLFlBQ0w7QUFBQSxjQUNFLEtBQUs7QUFBQSxjQUNMLE9BQU87QUFBQSxjQUNQLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsS0FBSztBQUFBLGNBQ0wsT0FBTztBQUFBLGNBQ1AsTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxLQUFLO0FBQUEsY0FDTCxPQUFPO0FBQUEsY0FDUCxNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLEtBQUs7QUFBQSxjQUNMLE9BQU87QUFBQSxjQUNQLE1BQU07QUFBQSxZQUNSO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNIO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxPQUFPLENBQUMsRUFBRSxNQUFNLEtBQUssYUFBa0IsYUFBUSxrQ0FBVyxLQUFLLEVBQUUsQ0FBQztBQUFBLElBQ3BFO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
