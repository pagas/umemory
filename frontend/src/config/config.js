export default function() {
    switch(process.env.NODE_ENV) {
        case 'production':
            return {
                fullDomain: 'http://108.61.196.64'
            }
        case 'development':
            return {
                fullDomain: 'http://localhost:8081'
            }
        default:
            return {
                fullDomain: 'http://localhost:8081'
            }
    }
}