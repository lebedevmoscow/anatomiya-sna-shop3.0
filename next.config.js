const path = require('path')

// next.config.js
const withImages = require('next-images')

module.exports = withImages({
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
        domains: [
            'assets.example.com',
            'storage.yandexcloud.net',
            'anatomiyasna.ru',
            'www.anatomiyasna.ru',
        ],
    },
})
