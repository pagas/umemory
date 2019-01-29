export default function() {
    switch(process.env.NODE_ENV) {
        case 'production':
            return {
                fullDomain: 'http://localhost:8081'
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