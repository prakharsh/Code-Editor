import Editor from '@monaco-editor/react';
import { useRef,useState } from 'react';
import {
        Flex,
        Box,
        Switch, 
        Button, 
        Wrap,
        useToast,
        WrapItem
        } from '@chakra-ui/react'


const EditorComp = () => {

  const editorRef = useRef(null); // to create later reference of editor
  const toast = useToast()
  const [lockState,setLockState]=useState(false) ; // initial setup for lock state

  // function to do initial setup after editor mount 
  function handleEditorDidMount(editor) {
    editorRef.current = editor; // creating refrence of editor
  }

  //Function to implement copy to clipboard Functionality
  function copyCode(){
    let text=editorRef.current.getValue()
    navigator.clipboard.writeText(text)
    toast({
      title: 'Code Copied.',
      status: 'success',
      duration: 5000,
      isClosable: true,
    })
  }

  //Funtion to implement save code as file functionality
  function downloadCode(){
    const fileData=editorRef.current.getValue() ;
    const blob = new Blob([fileData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "Code.js";
    link.href = url;
    link.click();
  }

  //funtion to implement lock/unloack functioanlity
  function handleLock(){
          setLockState(!lockState) ;
  }
  //------------------------//

  return (

    <Flex  justify='center' direction='column' align='center'>
      <Flex justify='space-between' align='center' w='70vw' h='100px'>
            <Button colorScheme='gray' onClick={copyCode}><i className="fa-solid fa-copy fa-xl"></i> </Button>
            <Wrap >
              <WrapItem pt='12px' ><i className="fa-solid fa-lock fa-xl"></i></WrapItem>
              <WrapItem><Switch size='lg' onChange={handleLock}/></WrapItem>
            </Wrap>
            <Button colorScheme='gray' onClick={downloadCode}><i className="fa-solid fa-download fa-xl"></i></Button>
                
      </Flex>
      <Box w='70vw' h='70vh' borderRadius='10px' overflow='hidden'  >
        <Editor 
          height="100%" 
          width="100%" 
          defaultLanguage="javascript" 
          defaultValue="// Code Here"  
          theme="vs-dark"
          options={{
            readOnly: lockState, 
            autoIndent: true,
            formatOnPaste: true,
            formatOnType: true
          }}
          onMount={handleEditorDidMount}
        />
      </Box>
    </Flex>
  )
}

export default EditorComp