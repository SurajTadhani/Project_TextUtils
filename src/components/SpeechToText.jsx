import React, { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import './SpeechToText.css'

const SpeechToText = () => {
    const [textToCopy, setTextToCopy] = useState()
    const [startListen, setListen] = useState(false)
    const navigate = useNavigate();
    const [isCopied, setCopied] = useClipboard(textToCopy,{
        successDuration: 2000
    });
    const startListening = () => {
        SpeechRecognition.startListening({ continuous: true, language : 'en-IN' })
        setListen(true)
    }
    const stopListening = () => {
        SpeechRecognition.stopListening()
        setListen(false)
    }
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition()
    if (!browserSupportsSpeechRecognition) {
        return null
      }
  return (
    <div className='container mt-5'>
         <div role="button" className="cursor-pointer mb-3">
                  <IoArrowBack
                    className="fs-1 cursor-pointer text-black border rounded-5 p-2 "
                    onClick={() => navigate(-1)}
                  />
                </div>
      <div className="">
        <h2>Speech to Text Converter</h2>
        <br />
        <div  className='overflow-y-scroll w-full border border-1 rounded-3 shadow-sm p-4 my-3 fs-3 main-div' onClick={() => setTextToCopy(transcript)}>
         
          
   {transcript}
        </div>
        <div className="d-flex justify-content-evenly gap-3 flex-column flex-md-row align-items-center">
            
            <button className='btn btn-primary px-5' onClick={setCopied}>
       {isCopied ? "Copied!" : "Copy To Clipboard"}
    </button>
            <button onClick={startListening} className='btn btn-primary px-5'>{startListen ? "Listening...." : "Start Listening"}</button>
            <button onClick={stopListening} className='btn btn-primary px-5'>Stop Listening</button>
        </div>
      </div>
    </div>
  )
}

export default SpeechToText
