/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
const assetPrefix = basePath ? `${basePath}/` : ''

export default {
  output: 'export',
  images: { unoptimized: true },
  basePath,
  assetPrefix,
  trailingSlash: true,
  sassOptions: {
    additionalData: `@import "styles/variables.scss";`,
  },
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/,
        issuer: /\.[jt]sx?$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/media/[name].[hash][ext]',
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        issuer: /\.[jt]sx?$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/media/[name].[hash][ext]',
        },
      }
    )
    return config
  },
}
