export default captchaRef => {
    captchaRef.current.style.height = '0px';
    captchaRef.current.style.overflow = 'hidden';
    captchaRef.current.style.webkitTransition = 'height .278s';
    captchaRef.current.style.MozTransition = 'height .278s';
};
