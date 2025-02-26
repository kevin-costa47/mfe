const { merge } = require('webpack-merge');
const ModuleFederationPLugin = require("webpack/lib/container/ModuleFederationPlugin")
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json')

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: "/marketing/latest/"
    },
    plugins: [
        new ModuleFederationPLugin(
            {
                name: "marketing",
                filename: 'remoteEntry.js',
                exposes: {
                    "./MarketingApp": "./src/bootstrap"
                },
                shared: packageJson.dependencies,
            }
        ),
    ],
};

module.exports = merge(commonConfig, prodConfig);
