const path = require('path')

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
        domains: ['assets.example.com', 'storage.yandexcloud.net'],
    },
}
