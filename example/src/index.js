import React from 'react';
import ReactDOM from 'react-dom';

import useCaptcha from '../../src/';

import './style.css';

const sitekey = '6Lft57oUAAAAAIrd2RBVoHO3WwGGdn0A42aQ6ozZ';

const Captcha = () => {
  const [captchaRef, execute, response] = useCaptcha(sitekey);
  const [captchaRefCompact, executeCompact, responseCompact] = useCaptcha(sitekey, {size: 'compact', language: 'ja'});
  const [captchaRefDark, executeDark, responseDark] = useCaptcha(sitekey, {theme: 'dark'});
  const [captchaRefCompactDark, executeCompactDark, responseCompactDark] = useCaptcha(sitekey, {size: 'compact', theme: 'dark'});
  const [captchaRefInvisible, executeInvisible, responseInvisible] = useCaptcha(sitekey, {size: 'invisible'});

  return (
      <main>
        <div className='row'>
          <section>
            <h1>Checkbox reCAPTCHA</h1>
            <button onClick={execute}>EXECUTE</button>
            {response && (
                <code>Response : {response}</code>
            )}
            <aside ref={captchaRef}/>
          </section>

          <section>
            <h1>Checkbox Compact Japanese reCAPTCHA</h1>
            <button onClick={executeCompact}>EXECUTE</button>
            {responseCompact && (
                <code>Response : {responseCompact}</code>
            )}
            <aside ref={captchaRefCompact}/>
          </section>
        </div>

        <div className='row'>
          <section className='dark'>
            <h1>Checkbox Dark reCAPTCHA</h1>
            <button onClick={executeDark}>EXECUTE</button>
            {responseDark && (
                <code>Response : {responseDark}</code>
            )}
            <aside ref={captchaRefDark}/>
          </section>

          <section className='dark'>
            <h1>Checkbox Compact Dark reCAPTCHA</h1>
            <button onClick={executeCompactDark}>EXECUTE</button>
            {responseCompactDark && (
                <code>Response : {responseCompactDark}</code>
            )}
            <aside ref={captchaRefCompactDark}/>
          </section>
        </div>

        <div className='row'>
          <section>
            <h1>Invisible reCAPTCHA</h1>
            <button onClick={executeInvisible}>EXECUTE</button>
            {responseInvisible && (
                <code>Response : {responseInvisible}</code>
            )}
            <aside ref={captchaRefInvisible}/>
          </section>
        </div>
      </main>
  );
};

ReactDOM.render(<Captcha/>, document.getElementById('root'));
