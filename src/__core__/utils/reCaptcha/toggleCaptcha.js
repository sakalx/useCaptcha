export const hideCaptcha = captchaRef => {
    captchaRef.current.style.height = '0px';
    return captchaRef;
};

export const showCaptcha = (captchaRef, size) => {
    const isCompactSize = size === 'compact';

    captchaRef.current.style.height = isCompactSize ? '140px' : '80px';

    return captchaRef
};
