import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';
import path from 'path';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr({exclude:'/public'})],
  resolve:{
    alias:{
      'src': path.resolve(__dirname,'./src')
    },
  }
});
