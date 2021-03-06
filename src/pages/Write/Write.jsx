import React from "react";
import { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import FeatherIcon from "feather-icons-react";
import axios from "../../utils/axios";
import cookie from "react-cookies";
import { useEffect } from "react";
import "./Write.css";



const Write = () => {
  const email = cookie.load("email");
  const [user, setUser] = useState({});
  // const [display, setDisplay] = useState(false);
  const [content, setContent] = useState(<></>);
  const editorRef = useRef(null);

  const log = () => {
    console.log(editorRef.current.getContent());
    setContent(editorRef.current.getContent());
    // setDisplay(true);
  };

  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:4000/user/logout");
      window.location.href = "/login";
    } catch (err) {
      console.log(err);
    }
  };

  const saveContent = async () => {
    try {
      setContent(editorRef.current.getContent());
      const data = {
        title: " ",
        content: content,
        userID: user._id,
      };
      cookie.save("blogID", data.id);
      await axios
        .post("http://localhost:4000/blog/postBlog", data)
        .then((res) => {
          console.log(res);
          window.location.href = "/congratulations";
          cookie.save("blogID", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  

  //get the user detail
  useEffect(() => {
    axios
      .get(`http://localhost:4000/user/getOneUser/${email}`, {})
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(user);

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
          apiKey="y8xh8v3d0xom8mi2fi6dmf2p46h6fkbqe5s2zx114e49k6gh"
          className="write-container"
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue="<p>This is the initial content of the editor.</p>"
          init={{
            height: 500,
            width: "100%",
            menubar: true,
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
          <button className="display" onClick={saveContent}>
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
