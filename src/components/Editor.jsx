import { useRef } from 'react';
import Editor from '@monaco-editor/react';
import {Center,Box } from '@chakra-ui/react'
const EditorComp = () => {
    const monacoRef = useRef(null);
    const editorOptions = {
        theme: "vs-dark",
        // Add other options as needed
        roundedSelection: true, // Optional: Make text selection rounded
        borderRadius: "5px",   // Set the border radius
      };
    function handleEditorWillMount(monaco) {
      // here is the monaco instance
      // do something before editor is mounted
      monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);
      monaco.editor.defineTheme('my-theme', {
        base: 'vs',
        inherit: true,
        rules: [],
        colors: {
          'editor.background': '#000000',
        },
  });
    }
  
    function handleEditorDidMount(editor, monaco) {
      // here is another way to get monaco instance
      // you can also store it in `useRef` for further usage
      monacoRef.current = monaco;
      monaco.editor.defineTheme='dark' ;
    }
    const containerStyle = {
        borderRadius: "5px", // Adjust the value as needed
      };
  return (

    <Center >
    <Box w='50vw' h='50vh' borderRadius='10px' overflow='hidden'>
    <Editor height="100%" width="100%" defaultLanguage="javascript" defaultValue="// Type Here"  
      containerStyle={containerStyle}
      theme="vs-dark"
      options={editorOptions}
      beforeMount={handleEditorWillMount}
      onMount={handleEditorDidMount}
    />
    </Box>
    </Center>
  )
}

export default EditorComp