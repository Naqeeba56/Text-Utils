import Navbar from './Navbar';
import Textfile from './Textfile';
import '../App.css';
import React, { useState } from 'react';
import Alert from './Alert';


function Home({togglemodes, mode, showalert, alert}) {

  return (
    <>
      <Navbar mode={mode} togglemodes={togglemodes} />
      <Alert alert={alert} />
      <Textfile showalert={showalert} Heading='Try Text-Utils - Word counter,Character counter, Remove ExtraSpaces ' mode={mode} />
      {/* <About/> */}
    </>
  );
}

export default Home
