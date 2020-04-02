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
        to convert the time of an audio file if it is sped up. I just finished this,
        check it out in the tutorial icon or the blog entry below.
        
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
        This was cool because I used JSP pages. It was cool to see another useful
        implementation of the java programming language.
        The parts that I found easy were linking the jar files, since I have become
        pretty good with managing files on directories. This was a bit daunting
        to me when I first started programming.
        The parts that I found hard or confusing were because I did know where the files
        were, I was surprised to find out that I wasn't exactly sure how to use
        the package files. 
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
        In order to get data from the database tables, I needed to tunnel into
        the Temple server. This is because of the server side java code.
        I was able to pull up to the minute data from the tables.
        This all was similar to the last homework, but instead I got to
        check out an intro to react. React is useful for single page applications.
        The parts that I found easy were the understanding of the reusability
        of the last homework. I still used all the java code that I used last week,
        just this time envoking them with React.
        The parts that I found hard or confusing were still the java server side
        stuff now is still daunting. I do understand what I'm doing with interacting
        with the database, but I'm not exactly sure yet of the methods used to do so.
        It is something I expect to continue to learn in my next courses at Temple.
    </p>
    <ul>
        <li>
            To see my user and [other] data displayed within my "home grown" 
            Single Page Application, click on any of the icons in the navbar! 
        </li>
    </ul>
    
    <h2>Tutorial</h2>
    <p>
        I found out by doing this project is that I am still very confused
        by the javascript language... I keep hearing alot of talk about
        frameworks that make it easier to use, but I'll have to see.
        Making programs in Java and C# make way more sense in my head
        than Javascript at the moment.
        The parts that I found easy were getting an idea to make, because I
        already had the component idea that I wanted to make.
        The parts that I found hard or confusing were all the steps required
        to make the component idea that I wanted to make. Once it is finally done
        as I'm writing this.. I realize that I have probably learned alot, though.
        Mostly just getting my buttons to wire to the right functions was the
        most confusing part... I ended up making a bunch of objects and calling
        the makeComponent js function in the seperate file. I do like what I came
        up with though, but I think I could hava made the same thing in c# in 10 minutes,
        but instead I found this really difficult for mostly the event wiring reason.
        I couldn't figure out how to properly pass which button was clicked on.
        Took a while..
    </p>

    <ul>
        <li>
            To see my tutorial, click on "proposal", "demo", and "log" under the tutorial icon 
            in the navigation bar. I think what I came up with is pretty neat.
        </li>
    </ul>
    `;
        document.getElementById(id).innerHTML = content;
}
