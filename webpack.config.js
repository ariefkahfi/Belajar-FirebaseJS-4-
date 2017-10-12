// './app/js/MyFirebase.js'
const path = require('path');
const webpack = require('webpack');

module.exports = {
  context : path.resolve(__dirname,'app'),
  entry:{
    app : [
    './js/MyFirebase.js',
    './js/siswa/InsertSiswa.js',
    './js/siswa/ListSiswa.js',
    './js/kelas-siswa/KelasSiswa.js'
  ]
  },
  output: {
    filename: './app/dist/MyFirebase.js'
  },
  plugins:[
    new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
  ],
  module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    }
  ]
}
}
