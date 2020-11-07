export default (sitekey, options) => ({
    'badge': options.badge || '',
    'callback': options.callback || null,
    'error-callback': options.errorCallback || null,
    'expired-callback': options.expiredCallback || null,
    'hl': options.language || '',
    'sitekey': sitekey,
    'size': options.size || '',
    'theme': options.theme || '',
});
