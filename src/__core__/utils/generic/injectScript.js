export default src => {
    const scriptEl = document.createElement('script');

    scriptEl.src = src;
    scriptEl.async = true;
    scriptEl.defer = true;

    document.getElementsByTagName('head')[0].appendChild(scriptEl);
};
