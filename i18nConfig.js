const i18nConfig = {
    locales : ['en','th'],
    defaultLocale: 'en',
    domains: [
        {
          domain: process.env.NEXT_PUBLIC_APP_HOST,
          defaultLocale: 'en',
        },
    ]
}

module.exports = i18nConfig;