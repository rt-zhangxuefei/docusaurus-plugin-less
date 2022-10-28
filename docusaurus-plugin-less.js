module.exports = function (_, {id, ...options}) {
  return {
    name: 'docusaurus-plugin-less',
    configureWebpack(_, isServer, utils) {
      const {getStyleLoaders} = utils
      const isProd = process.env.NODE_ENV === 'production'
      return {
        module: {
          rules: [
            {
              test: /\.less$/,
              oneOf: [
                {
                  test: /\.module\.less$/,
                  use: [
                    ...getStyleLoaders(isServer, {
                      modules: {
                        localIdentName: isProd ? `[local]_[hash:base64:4]` : `[local]_[path][name]`,
                        exportOnlyLocals: isServer
                      },
                      importLoaders: 2,
                      sourceMap: !isProd
                    }),
                    {
                      loader: 'less-loader',
                      options: options || {}
                    }
                  ]
                },
                {
                  use: [
                    ...getStyleLoaders(isServer),
                    {
                      loader: 'less-loader',
                      options: options || {}
                    }
                  ]
                }
              ]
            }
          ]
        }
      }
    }
  }
}
