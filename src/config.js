const dev = {
  baseURL: 'https://nutty-woolens-lamb.cyclic.app/api/',
  landingPageUrl: 'https://nutty-woolens-lamb.cyclic.app',
  stripe: {
    free: 'price_1JcQD6HIZYvvnKladKayEvOZ',
    entry: 'price_1JL68HHIZYvvnKlaBJWS5uDe',
    pro: 'price_1JLQhlHIZYvvnKlakrqF8khB'
  }
}

const prod = {
  baseURL: '/api/',
  landingPageUrl: 'https://app.openaitemplate.com',
  stripe: {
    free: 'price_1JcQsUHIZYvvnKlaEPy958NF',
    entry: 'price_1JLpWpHIZYvvnKlaHxiCr7Js',
    pro: 'price_1JLpWxHIZYvvnKlamATZ7Awm'
  }
}

const config = process.env.NODE_ENV === 'development' ? dev : prod

console.log('ENV:', process.env.NODE_ENV)
console.log('CONFIG:', config.baseURL)

export default config
