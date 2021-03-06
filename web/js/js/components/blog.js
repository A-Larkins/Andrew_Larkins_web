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
        In this homework I learned some object oriented javascript. I found it pretty tricky
        as I am still getting used to having to inject javascript into html tags. It is starting
        to make a bit of sense though. Will learn more upcoming.
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
        In this homework I learned how to make a slideshow. The html page is just the
        outline and the javascript is really the main part of the web page. It injects
        into the html dom elements. In this case it is to make 3 slideshows. Each have
        3 pictures each. In the first one, the user can click on a previous picture button
        and the slidshow will go back to the previous picture, and a forward button where
        the user can click on a button and go to the next picture. The pictures are stored
        using an object oriented programming style. 
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
        In this homework I learned how to make a click sortable
        table using ajax and json.
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
        This homework was the first step in the process to make a tutorial
        about a javascript component. I chose to make an audio length converter
        to convert the time of an audio file if it is sped up.
    </p>
    <ul>
        <li>
            To see my Tutorial Proposal and Proof Of Concept, click under the tutorial icon 
            in the navigation bar.
        </li>
    </ul>
    
    <h2>HW 7 Database</h2>
    <p>
        In this lab and homework, I set up a lab using mysql workbench. 
        To do this I first set up mysql workbench then connected to the temple
        server. Next, I created a web user table and a guitar table. I filled them
        both with columns and then filled in the collumns with data. Then I executed
        2 queries to show the data of the 2 tables.
    </p>
    <ul>
        <li>
            More info including pictures of the procedures can be found in the
            homework icon on the homepage. It downloads a word doc.
        </li>
    </ul>
    
    <h2>HW 8 Web API</h2>
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
    
    <h2>HW 9 Data Display</h2>
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
    
    <h2>HW 10 SPA Intro</h2>
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
    
    <h2>HW 11 SPA Advanced</h2>
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
