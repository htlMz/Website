/** @type {import('next').NextConfig} */
const nextConfig = {
  // Статическая сборка в /out — Cloudflare Pages раздаёт готовые файлы без сервера
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
