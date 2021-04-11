class URLsProvider {
    getUrls = () => {
        const urls = require('./urls.json')
        return urls.urls
    }
    
}
export default new URLsProvider()