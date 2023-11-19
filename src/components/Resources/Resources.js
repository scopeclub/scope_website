import "./Resources.css";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";


function Resources() {
  return (
    <motion.div
      className="g-body"
      initial={{ y: 1, scale: 1, opacity: 0 }}
      animate={{
        y: "20px",
        opacity: 1,
      }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Resources</title>
      </Helmet>
    
<div class="container">

    <h1 class="heading">Our Courses</h1>

    <div class="box-container">

        <div class="box">
            <img src="./Resources/image/html.jpeg" alt=""/>
            <h3>HTML 5</h3>
            <p>The HyperText Markup Language or HTML is the standard 
                markup language for documents designed to be displayed in a web browser.</p>
            <a href="https://www.w3schools.com/html/html_intro.asp" target="_blank"  class="btn">Notes</a>
            <a href="https://www.mygreatlearning.com/academy/learn-for-free/courses/html-tutorial1" target="_blank" class="btn">Videos</a>
        </div>

        <div class="box">
            <img src="./Resources/image/css.jpeg" alt=""/>
            <h3>CSS 3</h3>
            <p>Cascading Style Sheets is a style sheet language used for describing the
                 presentation of a document written in a markup language such as HTML.</p>
            <a href="https://www.w3schools.com/css/" target="_blank" class="btn">Notes</a>
            <a href="https://www.mygreatlearning.com/academy/learn-for-free/courses/css-tutorial" target="_blank" class="btn">Videos</a>
        </div>

        <div class="box">
            <img src="./Resources/image/js.jpeg" alt=""/>
            <h3>JavaScript</h3>
            <p>JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else
            </p>
            <a href="https://books.goalkicker.com/JavaScriptBook/" target="_blank"  class="btn">Notes</a>
            <a href="https://youtu.be/BI1o2H9z9fo?si=uTwu4CUFi9KODm6i" target="_blank" class="btn">Videos</a>
        </div>

        <div class="box">
            <img src="./Resources/image/github.png" alt=""/>
            <h3>GitHub</h3>
            <p>GitHub is a web-based platform that allows software developers to collaborate and use version control
            </p>
            <a href="https://www.w3schools.com/git/default.asp" target="_blank" class="btn">Notes</a>
            <a href="https://youtu.be/Ez8F0nW6S-w?si=m8Q8IA8WwKGZ8Phl" target="_blank" class="btn">Videos</a>
        </div>

        <div class="box">
            <img src="./Resources/image/python.jpeg" alt=""/>
            <h3>Python</h3>
            <p>Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.
            </p>
            <a href="https://www.w3schools.com/python/" target="_blank" class="btn">Notes</a>
            <a href="https://youtu.be/XKHEtdqhLK8?si=Jn6F8xjrhM1wYjp-" target="_blank" class="btn">Videos</a>
        </div>

        <div class="box">
            <img src="./Resources/image/react.jpeg" alt=""/>
            <h3>React.js</h3>
            <p>React is a free and open-source front-end JavaScript library for building user interfaces based on components.
            </p>
            <a href="https://www.30daysofreact.com/" target="_blank" class="btn">Notes</a>
            <a href="https://youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&si=o_Q3bSyH1WngiEpB" target="_blank" class="btn">Videos</a>
        </div>

        <div class="box">
            <img src="./Resources/image/c.webp" alt=""/>
            <h3>C Language</h3>
            <p>C is a general-purpose computer programming language. It was created in the 1970s by Dennis Ritchie, and remains very widely used and influential.
            </p>
            <a href="https://drive.google.com/file/d/1tutv0bc3XzsYoEszTJGHiE-xMHDgFocK/view?usp=sharing" target="_blank" class="btn">Notes</a>
            <a href="https://drive.google.com/drive/folders/1seT4EBWDIolcMNNodoDgQ7w1VH_9JEXV?usp=drive_link" target="_blank" class="btn">Videos</a>
        </div>

        <div class="box">
            <img src="./Resources/image/c++.jpg" alt=""/>
            <h3>C++</h3>
            <p>C++ is an object-oriented programming language which gives a clear structure to programs and allows code to be reused, lowering development costs
            </p>
            <a href="https://drive.google.com/drive/folders/1q4y9wbRsN3A-20hsv_jNRe0382nRMq0_?usp=sharing" target="_blank" class="btn">Notes</a>
            <a href="https://youtu.be/ZzaPdXTrSb8?feature=shared" target="_blank" class="btn">Videos</a>
        </div>

    </div>

</div>







    </motion.div>
  );
}

export default Resources;
