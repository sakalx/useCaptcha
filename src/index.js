import {useRef, useState, useCallback, useLayoutEffect} from 'react';

import getCaptchaOptions from './__core__/utils/reCaptcha/getCaptchaOptions';
import getRecaptchaHost from './__core__/API/getReCaptchaHost';
import initBaseCss from './__core__/utils/reCaptcha/initBaseCss';
import injectScript from './__core__/utils/generic/injectScript';
import {hideCaptcha, showCaptcha} from './__core__/utils/reCaptcha/toggleCaptcha';

const useCaptcha = (sitekey, options = {}) => {
    const captchaRef = useRef(null);
    const captchaId = useRef(0);

    const [response, setResponse] = useState('');

    useLayoutEffect(() => {
        initBaseCss(captchaRef);
        initCaptcha();
    }, []);

    const execute = useCallback(() => {
        const size = options.size;
        const isInvisibleSize = size === 'invisible';

        setResponse('');
        isInvisibleSize
            ? grecaptcha.execute(captchaId.current)
            : showCaptcha(captchaRef, size);
    }, [options.size]);


    const callback = useCallback(response => {
        options.size !== 'invisible' && hideCaptcha(captchaRef);
        grecaptcha.reset(captchaId.current);
        setResponse(response);

        if (typeof options.callback === 'function') options.callback(response);
    }, [options.size, String(options.callback)]);

    const initCaptcha = () => {
        const src = getRecaptchaHost(options.globally)
        if (typeof grecaptcha === 'undefined') injectScript(src);

        const renderCaptcha = () => {
            if (typeof grecaptcha !== 'undefined' && grecaptcha.render) {
                const captchaOptions = getCaptchaOptions(sitekey, {...options, callback});

                captchaId.current = grecaptcha.render(captchaRef.current, captchaOptions);
                clearInterval(timerId);
            }
        };

        const timerId = setInterval(renderCaptcha, 824);
    };

    return [captchaRef, execute, response, captchaId];
};

export default useCaptcha;
