class URLsProvider {
    getUrls = () => {
        const urls = require('./urls.json')
        return urls
    }
    
}
export default new URLsProvider()