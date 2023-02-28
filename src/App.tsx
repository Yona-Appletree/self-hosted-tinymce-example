import React from 'react';
import './App.css';
import { Editor } from '@tinymce/tinymce-react'
import 'tinymce/tinymce'

function App() {
  return <><Editor tinymceScriptSrc={"/tinymce"}></Editor></>;
}


export default App;
