import React, { useState } from 'react';

export default function Textfile(props) {
  const wordschange = () => {
   
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showalert("It has been converted to UpperCase", "success")
  };
  const lowercasechange = () => {
  
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showalert("It has been converted to lowercase", "success")
  };
  const clearfulltext = () => {
    
    let newtext = '';
    setText(newtext);
    props.showalert("text has been cleared", "success")
  };
  const textchange = (event) => {
    
    setText(event.target.value);
  };

  const Copyclipboard = () => {
    let copytext = document.getElementById('My-text');
    copytext.select();
    navigator.clipboard.writeText(copytext.value);
    props.showalert("text Copied to clipboard", "success")
  };

  const handleextraspace = () => {
    let etctext = text.split(/[ ]+/);
    setText(etctext.join(' '));
    props.showalert("Extra Spaces has been removed", "success")
  };

  const [text, setText] = useState('Enter Your desired text here ');

  return (
    <div className='container my-5'  >
      <h1 className='my-4' style={{color: props.mode === 'dark' ? 'white' : 'black' }}>{props.Heading} </h1>
      <div class='mb-3'>
        <textarea style={{backgroundColor: props.mode === 'dark' ? '#9ac8ff' : 'white',color :props.mode === 'dark' ? 'white' : 'black' }}
          class='form-control'
          id='My-text'
          value={text}
          rows='8'
          placeholder='Enter your text here '
          onChange={textchange}
        ></textarea>
      </div>
      <button disabled={text.length===0} className='btn btn-primary btn-sm my-1' onClick={wordschange}>
        Convert to Uppercase
      </button>
      <button disabled={text.length===0} className='btn btn-primary mx-2 btn-sm my-1' onClick={lowercasechange}>
        Convert to LowerCase
      </button>
      <button disabled={text.length===0} className='btn btn-primary mx-2 btn-sm my-1' onClick={clearfulltext}>
        Clear text
      </button>
      <button disabled={text.length===0} className='btn btn-primary mx-2 btn-sm my-1' onClick={Copyclipboard}>
        Copy text
      </button>
      <button disabled={text.length===0}
        className='btn btn-primary mx-2 btn-sm my-1'
        onClick={handleextraspace}
      >
        Remove Extra Spaces
      </button>
      <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h2 className='my-3' > Word Counter</h2>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words. {text.length} characters
        </p>
        <p> {0.008 * text.split(' ').length} Minutes to Read</p>
      </div>
      <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h2>Preview</h2>
        <p className=' py-2 '>{text.length>0?text : "Nothing to Preview !"}</p>
      </div>
    </div>
  );
}
