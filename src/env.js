let baseURL;

switch (process.env.NODE_ENV) {
    case 'dev':
        baseURL = 'http://dev-mall-pre';
        break;
    case 'prod':
        baseURL = 'http://mall-pre';
        break;
    default:
        baseURL = 'http://mall-pre';
        break;
}

export default {
    baseURL
}