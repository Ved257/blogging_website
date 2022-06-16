import React from "react";
import "./Write.css";
// import Sidebar from "../../components/Sidebar/Sidebar";
import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
// import { useState } from "react";
import FeatherIcon from "feather-icons-react";
import axios from "../../utils/axios";

const Write = () => {
  // const [display, setDisplay] = useState(false);
  // const [content, setContent] = useState(<></>);
  const editorRef = useRef(null);
  const log = () => {
    // console.log(editorRef.current.getContent());
    // setContent(editorRef.current.getContent());
    // setDisplay(true);
  };

  const handleLogout = async () => {
    try {
      await axios.get("https://localhost:4000/user/logout");
      window.location.href = "/";
    } catch (err) {
      console.log(err);
    }

  };

  return (
    <div className="write">
      <div
        className="logout"
        style={{
          position: "absolute",
          top: "0%",
          right: "0%",
          padding: "20px",
        }}
        onClick={handleLogout}
      >
        <FeatherIcon icon="log-out" className="logout" onClick={handleLogout} />
      </div>
      {/* <Sidebar /> */}
      <div className="write-container">
        {/* <textarea className='write-textarea' placeholder='Write something...'>
        </textarea> */}
        <Editor
          className="write-container"
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue="<p>This is the initial content of the editor.</p>"
          init={{
            height: 500,
            width: "100%",
            menubar: true,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
            ],
            toolbar:
              "undo redo | formatselect | " +
              "bold italic backcolor | alignleft aligncenter  | fontstyle" +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help" +
              "|" +
              "link image media",
            // "heading",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
        <div style={{ display: "inline-block" }}>
          <button className="display" onClick={log}>
            Save content
          </button>{" "}
          <button className="display" onClick={log}>
            Display content
          </button>
        </div>
      </div>
      {/* <div className="write-preview">
        {display ? (
          <div dangerouslySetInnerHTML={{ __html: content }} />
        ) : (
          <div>No content yet.</div>
        )}
      </div> */}
    </div>
  );
};

export default Write;
