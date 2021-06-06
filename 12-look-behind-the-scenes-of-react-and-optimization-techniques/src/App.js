import React,{useState,useCallback,useMemo} from 'react';

import './App.css';
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";
import DemoList from "./components/Demo/DemoOutput";

function App() {
    const [showParagraph,setShowParagraph] = useState(false);
    const [allowToggle,setAllowToggle] = useState(false);
    const [listTitle,setListTitle]=useState('My List');
    const toggleParagraphHandler = useCallback(()=>{
        // setShowParagraph(!showParagraph);
        if (allowToggle){
            setShowParagraph(prevShowParagraph => !prevShowParagraph)
        }
    },[allowToggle]);
    const allowToggleHandler =() =>{
        setAllowToggle(true);
    }

    const changeTitleHandler = useCallback(() => {
        setListTitle('New Title');
    },[]);

    const listItems=useMemo(() =>[5,3,1,10,9],[] );
  return (
    // <div className="app">
    //   <h1>Hi there!</h1>
    //     <DemoOutput show={showParagraph}/>
    //     <Button onClick={toggleParagraphHandler}>Show Paragraph!</Button>
    //     <Button onClick={allowToggleHandler}>Allow Toggle</Button>
    // </div>
      <div className="app">
          <DemoList title={listTitle} items={listItems} />
          <Button onClick={changeTitleHandler}>Change List Title</Button>
      </div>
  );
}

export default App;
