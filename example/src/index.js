import React from 'react';
import ReactDOM from 'react-dom';

import useCaptcha from '../../src';

const Captcha = () => {
  const options = {size: 'invisible'};
  const [captchaRef, execute, token, captchaId] = useCaptcha('6Lft57oUAAAAAIrd2RBVoHO3WwGGdn0A42aQ6ozZ', options);
  console.log(token);

  return (
      <div>
        <h1>Captcha</h1>
        <h2 onClick={() => execute()}>Show captcha</h2>
        <section ref={captchaRef}/>
      </div>
  );
};

ReactDOM.render(<Captcha/>, document.getElementById('root'));
