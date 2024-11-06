import { useState } from "react";
const Textform = () => {
  const [Text, setText] = useState("");
  const [copy, setcopy] = useState("copy text");

  const upperCase = () => {
    let newText = Text.toUpperCase();
    setText(newText);
  };
  const lowerCase = () => {
    let newText = Text.toLowerCase();
    setText(newText);
  };

  const copiedText = () => {
    if (Text.length > 2) {
      navigator.clipboard
        .writeText(Text) //write the text in clipboard
        
        .then(() => {    
          setcopy("copied"); //changed the text of "copy text" btn
          
         setTimeout(() => {
           setcopy("copy text");
         }, 1000);
          
        });
      
    } else {
      alert("failed to copy text");
    }
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <h1>Enter your text here to analyze !</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="Enter your text here"
          value={Text}
          onChange={handleOnChange}
          id="exampleFormControlTextarea1"
          rows="6"
        ></textarea>
      </div>
      <div>
        <button className="btn btn-primary" onClick={upperCase}>
          convert to uppercase
        </button>
        <button className="btn btn-primary mx-1 my-2" onClick={lowerCase}>
          convert to lowercase
        </button>
        <button className="btn btn-warning" onClick={copiedText}>
          {copy}
        </button>
      </div>

      <div className="container">
        <h1 className="my-3">Your Text Summary.</h1>
        <h4>
          {Text.split(" ").length} words & {Text.length} character
        </h4>
        <h4>
          Time to read : {0.008 * Text.split("").length}
          <span className="text-success"> min</span>
        </h4>
        <h2>Preview</h2>
        <p>{Text}</p>
      </div>
    </>
  );
};

export default Textform;
