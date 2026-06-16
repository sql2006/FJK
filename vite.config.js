import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/FJK/'  // 加上这一行！仓库名是什么就写什么
})
