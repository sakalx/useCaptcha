# React hook for Google reCAPTCHA v2.

reCAPTCHA protects you against spam and other types of automated abuse. Here, we explain how to add reCAPTCHA to your React APP.
 ________________________________________________________

React hook for [Google reCAPTCHA v2.](https://developers.google.com/recaptcha/intro)

To get `sitekey` you need [Register a new site](https://www.google.com/recaptcha/admin/create)

________________________________________________________
________________________________________________________
### Example [Checkbox reCAPTCHA](https://developers.google.com/recaptcha/docs/display)

```javascript
import React from 'react';
import useCaptcha from 'usecaptcha';

const sitekey = 'YOUR_SITE_KEY'; 

const App = () => {
    const [captchaRef, execute, response] = useCaptcha(sitekey);
  
    return (
      <main>
        <h1>reCAPTCHA</h1>
        <p>Response: {response}</p>
        <button onClick={execute}>EXECUTE CAPTCHA</button>
    
        <aside ref={captchaRef}/>
      </main>
    )
}
```
________________________________________________________
________________________________________________________
### Example [Invisible reCAPTCHA](https://developers.google.com/recaptcha/docs/invisible)

```javascript
import React from 'react';
import useCaptcha from 'usecaptcha';

const sitekey = 'YOUR_SITE_KEY'; 

const App = () => {
    const options = {
      size: 'invisible',
    }; 
    const [captchaRef, execute, response] = useCaptcha(sitekey, options);
    
    return (
      <main>
        <h1>reCAPTCHA</h1>
        <p>Response: {response}</p>
        <button onClick={execute}>EXECUTE CAPTCHA</button>
    
        <aside ref={captchaRef}/>
      </main>
    )
}
```
________________________________________________________
________________________________________________________
### Example with options:

```javascript
import React from 'react';
import useCaptcha from 'usecaptcha';

const sitekey = 'YOUR_SITE_KEY'; 

const App = () => {
    const options = {
      size: 'size',
      theme: 'dark',
      callback: (response) => console.log(response),
    }; 
    const [captchaRef, execute, response] = useCaptcha(sitekey, options);
    
    return (
      <main>
        <h1>reCAPTCHA</h1>
        <p>Response: {response}</p>
        <button onClick={execute}>EXECUTE CAPTCHA</button>
    
        <aside ref={captchaRef}/>
      </main>
    )
}
```
________________________________________________________

 [DEMO](https://sakalx.github.io/useCaptcha/)
________________________________________________________
________________________________________________________
#### options
| Name | Value | Description |
| --- | --- | --- |
| **badge** | [`bottomright`,`bottomleft`,`inline`] | Optional for invisible reCAPTCHA. Reposition the reCAPTCHA badge. 'inline' lets you position it with CSS. |
| **theme** | [`dark`,`light`] | Optional. The color theme of the widget. |
| **size** | [`invisible`,`compact `,`normal`] | Optional. Used to create an invisible widget bound to a div and programmatically executed, or the size of the reCAPTCHA checkbox. |
| **language** | [[`Language Codes`](https://developers.google.com/recaptcha/docs/language)] | Optional. Forces the widget to render in a specific language. Auto-detects the user's language if unspecified. See [language codes](https://developers.google.com/recaptcha/docs/language) |
| **callback** | [`function`] | Optional. The callback function, executed when the user submits a successful response. The response token is passed to your callback. |
| **expiredCallback** | [`function`] | Optional. The callback function, executed when the reCAPTCHA response expires and the user needs to re-verify. |
| **errorCallback** | [`function`] | Optional. The callback function, executed when reCAPTCHA encounters an error (usually network connectivity) and cannot continue until connectivity is restored. If you specify a function here, you are responsible for informing the user that they should retry. |
 
 ________________________________________________________
 ________________________________________________________
#### Server Side Validation
[Verifying response](https://developers.google.com/recaptcha/docs/verify#api_request)
________________________________________________________
________________________________________________________
