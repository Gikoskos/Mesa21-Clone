require('process');

export default function buildURL(url_str) {
    if (url_str !== undefined && url_str !== null) {
        if (process.env.PUBLIC_URL)
            return `${process.env.PUBLIC_URL}/${url_str}`;
        else
            return `/${url_str}`;
    }
}
