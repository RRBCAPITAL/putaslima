// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

/** @type {import('next').NextConfig} */

const withImages = require('next-images');

module.exports = withImages({
  images: {
    domains: ['res.cloudinary.com'], // Agrega aquí los dominios de tus imágenes
  },
});
