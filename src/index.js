import {useLayoutEffect, useRef, useState} from 'react';

const useCaptcha = (sitekey, options = {}) => {
  const captchaRef = useRef(null);
  const captchaId = useRef(0);
  const [response, setResponse] = useState('');

  useLayoutEffect(() => {
    addBaseCss();
    renderCaptcha();
  }, []);

  const addBaseCss = () => {
    captchaRef.current.style.height = '0px';
    captchaRef.current.style.overflow = 'hidden';
    captchaRef.current.style.webkitTransition = 'height .278s';
    captchaRef.current.style.MozTransition = 'height .278s';
  };

  const execute = () => {
    setResponse('');

    options.size === 'invisible'
        ? grecaptcha.execute(captchaId.current)
        : showCaptcha();
  };

  const showCaptcha = () => {
    captchaRef.current.style.height = options.size === 'compact' ? '140px' : '80px';
  };

  const hideCaptcha = () => {
    setTimeout(() => {
      captchaRef.current.style.height = '0px';
    }, 378);
  };

  const callback = response => {
    if (options.captchaCallback) options.captchaCallback(response);
    setResponse(response);
    options.size !== 'invisible' && hideCaptcha();
    setTimeout(() => grecaptcha.reset(captchaId.current), 524);
  };

  const renderCaptcha = () => {
    if (typeof grecaptcha === 'undefined') injectGoogleApi();

    const timerId = setInterval(() => {
      if (typeof grecaptcha !== 'undefined' && grecaptcha.render) {
        captchaId.current = grecaptcha.render(captchaRef.current, {
          'sitekey': sitekey,
          'badge': options.badge || '',
          'theme': options.theme || '',
          'size': options.size || '',
          'callback': callback,
          'expired-callback': options.expiredCallback || null,
          'error-callback': options.errorCallback || null,
        });
        clearInterval(timerId);
      }
    }, 824);
  };

  return [captchaRef, execute, response, captchaId];
};

const injectGoogleApi = () => {
  const scriptEl = document.createElement('script');

  scriptEl.src = 'https://www.google.com/recaptcha/api.js';
  scriptEl.async = true;
  scriptEl.defer = true;

  document.getElementsByTagName('head')[0].appendChild(scriptEl);
};

export default useCaptcha;
