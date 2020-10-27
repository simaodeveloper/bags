const cache = new EasyStorage();

const JQUERY_URL = 'https://code.jquery.com/jquery-3.5.1.min.js';

const getScript = (url, callback) => {
    var xhr = new XMLHttpRequest();
    xhr.open( 'GET', url );

    xhr.onreadystatechange = function() {
        if ( xhr.readyState === 4 ) {
            if (( xhr.status === 200 ) || (( xhr.status === 0 ) && xhr.responseText )) {
                callback( {
                    content: xhr.responseText,
                    type: xhr.getResponseHeader('content-type')
                } );
            }
        }
    };

    xhr.send();
}

const injectScript = (url, content) => {
    const script = document.createElement('script');
    script.setAttribute('data-storage-cache', url);
    script.textContent = content;
    document.head.appendChild(script);
};


if (cache.has(JQUERY_URL)) {
    injectScript(JQUERY_URL, cache.fetch(JQUERY_URL));
} else {
    getScript(JQUERY_URL, (res) => cache.add(JQUERY_URL, res.content));
}