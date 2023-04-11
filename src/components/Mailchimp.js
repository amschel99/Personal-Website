import React, { useState } from 'react';

function MailchimpForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('https://<your-username>.us1.list-manage.com/subscribe/post-json?u=<your-u>&id=<your-id>&c=?', {
      method: 'POST',
      mode: 'no-cors',
      body: new FormData(event.target)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setEmail('');
    })
    .catch(error => console.error(error));
  };

  return (
    <div id="mc_embed_signup">
      <form onSubmit={handleSubmit} noValidate>
        <div id="mc_embed_signup_scroll">
          <h2>Subscribe</h2>
          <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
          <div className="mc-field-group">
            <label htmlFor="mce-EMAIL">Email Address  <span className="asterisk">*</span></label>
            <input type="email" value={email} name="EMAIL" className="required email" id="mce-EMAIL" onChange={(event) => setEmail(event.target.value)} required />
            <span id="mce-EMAIL-HELPERTEXT" className="helper_text"></span>
          </div>
          <div id="mce-responses" className="clear">
            <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
            <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
          </div>
          <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_19ab3433c4d8fab33df9052d2_3af49055ee" tabIndex="-1" value="" /></div>
          <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
        </div>
      </form>
    </div>
  );
}

export default MailchimpForm;
