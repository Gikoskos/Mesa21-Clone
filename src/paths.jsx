require('process');

export default function buildURL(url_str) {
    if (url_str !== undefined && url_str !== null) {
        return `/${url_str}`;
    }
}
