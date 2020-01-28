"use strict";
//IIFE - Immediately Invoked Function Expression
// mean? -> anonymous self-executing function

let app;
(function(app){

    // Declare Function Variables here...
    console.log("%cDeclaring Variables", "color: red;")
   let productsLI; // variable for part A

   //Variable for partB

   let contactUsLI;
   let contactUsLIParent;
   let bottomNav;
   let h4CopyRight;
   let pageBody;
   let jqueryScriptParent;
   let jqueryScript;
    /**
     * 
     * Variable initialization in this function
     *
     */
    function Start()
    {   
        //part A
        // step 1 - bind / connect to the element that you wish to manipulate
    products = document.getElementById("products");
    products.textContent = "Projects";
    productsLI.firstElementChild.innerHTML ="<i class='fas fa-hamsa'></i>projects"
    //PART B
contactUsLI = document.getElementById('contact');
contactUsLIParent = contactUsLI.parentNode;
HRLI = contactUsLI.cloneNode(true);

HRLI.id = "hr";


contactUsLIParent.insertBefore(HRLI, contactUsLI);




    //PART C
    bottomNav = document.createElement('nav');
    bottomNav.className = "navbar fixed -bottom navbar light to light ";
   
    h4CopyRight = document.createElement('h4');
    h4CopyRight.innerHTML ="&copy: CopyRight 2020";

    bottomNav.appendChild(h4CopyRight);

    pageBody = document.getElementsByTagName('body')[0];
    

    jqueryScriptParent = pageBody.children[4].parentNode;

    jqueryScriptParent.insertBefore(bottomNav, pageBody.children[4]);
   
   
    Main();
    }

    /**
     * Main Program entry point is here
     *
     */
    function Main()
    {
        console.log("%cMain Program Body", "color: green;")
    }
    
    

    window.addEventListener("load", Start);
})(app || (app = {}));

