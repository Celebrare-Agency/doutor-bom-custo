import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import cssnano from "cssnano";
import { imagetools } from "vite-imagetools";

export default defineConfig({
  plugins: [
    react(),
    {
      ...imagetools(),
      enforce: "pre", // Certifica-se de que este plugin execute antes dos outros
    },
  ],
  build: {
    target: "esnext", // Especifica o alvo da compilação
    minify: "esbuild", // Utiliza esbuild para minificação rápida e eficiente
    rollupOptions: {
      output: {
        entryFileNames: "assets/[name].[hash].js",
        chunkFileNames: "assets/[name].[hash].js",
        assetFileNames: "assets/[name].[hash].[ext]",
      },
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom"], // Inclui dependências comuns para otimização
  },
  css: {
    postcss: {
      plugins: [cssnano()],
    },
  },
});
