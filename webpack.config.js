const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {ProvidePlugin} = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const { getEntryJs, generateHtmlPlugins } = require('./utils');

module.exports = {
  
    entry: getEntryJs('src/js'),
//  Указываем относительно какой папки будут выполняться импорты файлов index.html при dev режиме
    output: {
        path: path.resolve(__dirname, 'build'), // создается в production, и подразумевается в dev режиме
        publicPath: '/',    // относительный путь от папки build
    },
    module: { 
        rules: [
            { test: /\.(html)$/, use: ['html-loader'] },
            { test: /\.(png|jpg|gif)$/i, use: ['file-loader'] }, 
            { test: /\.svg$/, use: ['svg-sprite-loader', 'svgo-loader'] },
            {
                test: /\.twig$/,
                use: [
                    'raw-loader',
                    {
                        loader: 'twig-html-loader',
                        options: {
                            namespaces: {
                                'layouts': 'src/layouts', // {% extends "layouts::base.twig" %}
                                'components': 'src/components', // {%  include '@components/content/content_index.twig' %} 
                            }
                        }
                    }
                ],
            }
        ]
    },
    resolve: {
        //  import '../../../../../assets/image.cat' | import 'assets/image.cat'
        alias: {
            'assets': path.resolve('./src/assets'),
            'components': path.resolve('./src/components'),
            'icons': path.resolve('./src/assets/icons')
        }
    },   
    plugins: [
        ...generateHtmlPlugins('src/views', HtmlWebpackPlugin),
        // new ProvidePlugin({
        //     $: "jquery",
        //     jQuery: "jquery",
        //     "window.jQuery": "jquery",
        // }),

        // указывать везде пути до картинки через папку images
        // <img src="images/cat.png" alt="">, и НЕ ИСПОЛЬЗОВАТЬ относительные пути типа
        // <img src="../../assets/images/cat.png"
        new CopyPlugin([
          { from: 'src/assets/images', to: 'images' },
        ]),
    ]
};
