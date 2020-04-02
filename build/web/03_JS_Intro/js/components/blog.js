function blog(id) {

// ` this is a "back tick". Use it to define multi-line strings in JavaScript.
var content = `  
    <br>
    <h2>HW 1 Home Page</h2>
    
    <p>
        In this homework I learned about HTML, CSS, and how to publish a web page.
        I also got familiar with using the Netbeans ide, as well as how to get
        the web application going. I also learned how to use file transfer protocol.
        Because I run the linux operating system, Manjaro on the laptop I used for school,
        I used the open source software, Filezilla.
        The parts that I found easy were learning about tags and stuff. I used
        w3schools and it helped me understand alot.
        The parts that I found hard or confusing were the file hosting on the temple server.
        I think I understand how it works, but it is still a bit confusing. I am sure
        I will learn more as I go along.
    </p>
    
    <h2>HW 2 Routing</h2>
    <p>
        In this homework (using sample code), I turned my web page into a simple,
        home grown Single Page Application. With an SPA, each click (e.g., 
        on the "home" or "blog" icons) causes content to be injected into 
        a single page - the title/nav and footer do not change. 
        The alternative (no user interface code reuse) 
        would be to copy off multiple pages and 
        change the content of each page. Although I may not yet fully understand 
        all the JavaScript that implements the SPA "routing", I'll come back and 
        study this code after I have learned more about JavaScript.
    </p>
    <p>
        The parts that I found easy were using the file heirarchy inside of netbeans.
        By that I mean locating the js code that was inside the js folder and the
        componenets folder.
        The parts that I found hard or confusing were the parts that I do not fully understand
        yet. But I will be learning lots more about javascript for the rest of the semester!
    </p>
    <ul>
        <li>
            To see how my routing works, click on these icons: home, then blog, 
            then home again. Note the URLs that show in the browser's address 
            bar. Also confirm that the browser's forward and back buttons work fine.
        </li>
    </ul>
    
    <h2>HW 3 JS Intro</h2>
    <p>
        In this homework I learned ... 
        The parts that I found easy were ... 
        The parts that I found hard or confusing were ... 
    </p>
    <ul>
        <li>
            To run this code, click 
            <a target="_blank" href="03_JS_Intro/index.html">here</a> or 
            click on the "JS Intro" link under the homework icon.
        </li>
    </ul>
 
    <h2>HW 4 JS Advanced</h2>
    <p>
        In this homework I learned ... 
        The parts that I found easy were ... 
        The parts that I found hard or confusing were ... 
    </p>
    <ul>
        <li>
            To run this code, click 
            <a target="_blank" href="04_JS_Adv/index.html">here</a> or 
            click on the "JS Advanced" link under the homework icon.
        </li>
    </ul>
    
    <h2>HW 5 JS Framework Style Coding</h2>
    <p>
        In this homework I learned ... 
        The parts that I found easy were ... 
        The parts that I found hard or confusing were ... 
    </p>
    <ul>
        <li>
            To see how my JavaScript code works, 
            click <a target="_blank" href="05_JS_FW/index.html">here</a> or 
            click on the "JS Framework Style" link under the homework icon.
        </li>
    </ul>
    
    <h2>HW 6 Tutorial Proposal</h2>
    <p>
        In this homework I learned ... 
        The parts that I found easy were ... 
        The parts that I found hard or confusing were ... 
    </p>
    <ul>
        <li>
            To see my Tutorial Proposal and Proof Of Concept, click under the tutorial icon 
            in the navigation bar.
        </li>
    </ul>
    
    <h2>HW 7 Web API</h2>
    <p>
        In this homework I learned how to write server side programs to implement 
        Web APIs which can be invoked by client side code (JavaScript in an HTML page).
        [Say more about what you learned ...] 
        The parts that I found easy were ... 
        The parts that I found hard or confusing were ... 
    </p>
    <ul>
        <li>
            To invoke my Web API that lists all users, click 
            <a target="_blank" href="webAPI/listAllUsers.jsp">here</a> or 
            click on the "Web API - User List" link under the homework icon.
        </li>
        <li>
            To invoke my Web API that lists all my [other] records, click 
            <a target="_blank" href="webAPI/listAllOther.jsp">here</a> or 
            click on the "Web API - Other List" link under the homework icon.
         </li>
    </ul>
    
    <h2>HW 8 Data Display</h2>
    <p>
        In this homework I learned how to invoke server side Web APIs
        (using AJAX) and display the results nicely on a web page. 
        [Say more about what you learned ...] 
        The parts that I found easy were ... 
        The parts that I found hard or confusing were ... 
    </p>
    <ul>
        <li>
            To see my user and [other] data displayed within my "home grown" 
            Single Page Application, click on the 
            links under the search icon in the navigation bar. 
        </li>
    </ul>
    
    <h2>HW 9 SPA Intro</h2>
    <p>
        In this homework I learned how to use a Single Page Application Framework.
        [Talk about what you learned...] 
    </p>
    <p>
        
        The parts that I found easy were ... 
        The parts that I found hard or confusing were ... 
    </p>
    <ul>
        <li>
            To run my homework, click 
            <a target="_blank" href="09_SPA_Intro/index.html">here</a> or 
            click on the "SPA Intro" link under the homework icon.
        </li>
    </ul>
    
    <h2>HW 10 SPA Advanced</h2>
    <p>
        In this homework I learned ... 
        The parts that I found easy were ... 
        The parts that I found hard or confusing were ... 
    </p>
    <ul>
        <li>
            To run my homework, click 
            <a target="_blank" href="10_SPA_Adv/index.html">here</a> or 
            click on the "SPA Advanced" link under the homework icon.
        </li>
    </ul>
    
    <h2>Tutorial</h2>
    <p>
        By doing the tutorial I learned ... 
        The parts that I found easy were ... 
        The parts that I found hard or confusing were ... 
    </p>

    <ul>
        <li>
            To see my tutorial, click on "proposal", "demo", and "log" under the tutorial icon 
            in the navigation bar.
        </li>
    </ul>
    `;
        document.getElementById(id).innerHTML = content;
}
