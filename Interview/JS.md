Qus - what are different data types in JS?  
Ans - JavaScript has eight main data types, and they fall into two categories: primitive and non-primitive (reference) types.

1. Primitive - Number, String, Boolean, undefined, null, BigInt, Symbol

2. Non-Primitive - Object, Array, Function, Date, RegExp

Qus - What is Dom?  
Ans - The document object model is a programming interface for web documents. It represent the sturcture of a webpage as a tree of objects. Where each element in the HTML or XML document is a node in the tree. Through the DOM, programming languages like JS can intreact with and modify the content, structure and style of a webpage dynamically

Qus - What is the difference between event bubbling and capturing in JS?  
Ans - Event Capturing - The event starts from the top of the DOM tree and travels down to the target element.
Event Bubbling - The event starts from the target element and travels up to the top of the DOM tree.

Qus - What is "use strict" in jS?  
Ans - 'use strict' enforces stricter parsing and error handling in the JS code. Helping to catch common mistakes, prevent certain actions that could lead to bugs, and make the code more predictable and easier to maintain.

```
"use strict"
function hello(){
  a = 10;
  console.log(a)
}
hello();
```

Note - if we use "use strict" then its give error x is not defined or if i not use "use strict" then it will run perfectly without an error because it set the variable as a global varibale in the window object

Qus - What is the this keyword in JS?  
Ans - this keyword refers to the current execution context or the object that is currently executing the code. Its value can vary depending on how a function is called

```
function showThis(){
  console.log(this);
}

showThis(); // global context

const obj = {
  name:"john",
  greet: function() {
    console.log(this.name);
  }
}
obj.greet(); // Function context

const obj = {
  name:"john",
  greet: function() {
    const inner = () => {
      console.log(this.name);
    }
    inner();
  }
}
obj.greet(); // Arrow Function context

function person() {
  this.name = name;
}

const john = new Person("John");
console.log(john.name); // Constructor Function context

<button id="myButton">Click me</button>
<script>
document.getElementById("myButton").addEventListner("click",function(){
  console.log(this);
})
</script> // Event handler context
```

Qus - what is the type of class?  
Ans - The class keyword is just syntactic sugar introduced in ES6 (ECMAScript 2015) to make object-oriented programming feel cleaner and more like other languages (e.g., Java, C++). But JavaScript is still fundamentally prototype-based, not class-based.

When you use the class syntax:

1. JavaScript creates a constructor function.

2. Any methods defined inside the class are added to the class's prototype.

3. The class itself is still a function — with some rules added:

   - It must be called with new.

   - Its methods are non-enumerable by default.

   - It’s in strict mode.

```
class Shiv {
  constructor() {
    console.log("Hello");
  }
}

console.log(typeof(Shiv)); // Output: "function"

```

Qus - What are promises?  
Ans - Promises are special objects in JavaScript that represent the eventual completion (or failure) of an asynchronous operation. A Promise has three states: it starts in a "pending" state, and then it either gets "fulfilled" (resolved) or "rejected" based on the outcome of the asynchronous operation.

Qus - can you create a promise and resolve it when a button is clicked?  
Ans -

```
const promise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("✅ It worked!");
  } else {
    reject("❌ It failed!");
  }
});

promise
  .then(result => console.log(result))   // runs on success
  .catch(error => console.log(error));   // runs on failure
```

Qus - what is module in js?  
Ans - A module is a separate JavaScript file that contains reusable code. We use export to share parts of the code, and import to use them in other files.

Qus - How we can use await keyword without a async function.  
Ans - Normally, await can only be used inside an async function.
But with modern JavaScript, if the file is treated as an ES module, we can use top-level await — which allows us to use await directly at the top level of the file.

```
<script type="module" src="main.js"></script>


// main.js
const response = await fetch('/api/data');
const data = await response.json();
console.log(data);
```

If the environment doesn’t support top-level await, we can use an async IIFE — an Immediately Invoked Function Expression — as a workaround:

```
(async () => {
  const data = await fetchData();
  console.log(data);
})();

```

Qus - if i so js type module then how will create global variable?  
Ans -

Qus - What’s the difference between Promises and async/await?  
Ans - Promises and async/await both handle asynchronous code. async/await is just syntactic sugar over Promises, making the code easier to read and write.

```
// Promise version
getData().then(res => console.log(res)).catch(err => console.error(err));

// async/await version
async function fetchData() {
  try {
    const res = await getData();
    console.log(res);
  } catch (err) {
    console.error(err);
  }
}
fetchData();
```

Qus - What do you mean by hoisting in JS?
Ans - Hoisiting in js refers to the behavior when a declared variable or funtions is moved or hoisted to the top of the scope in which they exist, during the compile phase.
There are two types of hoisting 1) variable hoisting - Only the declaration are hoisted, not the initialization 2) function hoisting - function declaration are fully hoisted meaning you can call a function even before you define it in the code 3) Varibales declared with let and const are also hoisted but are not intialized They exist in temporal deadzone

Qus - What is callback hell, and how can we fix it?  
Ans -

Qus - How do promises improve callback handling?  
Ans -

Qus - What is the purpose of package.json?  
Ans -

Qus - What is the differnce between process.nextTick() and setImmediate()?  
Ans -

Qus - What is a Closure?
Ans - A closure happens when an inner function remembers values from its outer function even after the outer function has finished."

```

Ex-
const outerFunction = (name) => {
return () => {
console.log(`Hello, ${name}`);
};
};

const greet = outerFunction("John");
greet(); // Output: Hello, John

```

Qus - What is a Higher-Order Function?
Ans - "A higher-order function is a function that takes a function as an argument or returns a function."

```

Ex-
const higherOrderFunction = (fn) => {
return () => {
console.log("Before function");
fn(); // Takes a function as an argument
console.log("After function");
};
};

const sayHello = () => console.log("Hello");

const wrappedFunction = higherOrderFunction(sayHello);
wrappedFunction();

```

Qus - What if it's Both a Closure and a Higher-Order Function?
Ans -If a function takes another function as an argument AND remembers values from the outer function, it's both a Closure and a Higher-Order Function."

```

Ex-
const asyncHandler = (fn) => {
return async (req, res, next) => {
try {
await fn(req, res, next); // Takes fn as an argument (Higher-Order)
} catch (error) {
next(error);
}
};
};

app.get('/example', asyncHandler(async (req, res) => {
res.send("Hello from route!");
}));

```

Qus - WAP where user click anywhere on the screen so make a circle. where is it click so mouse on the center and here create circle and how many time user click then generate the circle again and again and only two circle will show then third time if user click then circle will be disappear and again create circle and make sure not intersect with each other

```

```

// MERN

Qus - What is the advantages of CDN?  
Ans -

Qus - What are middleware functions in express, and how do they work?  
Ans -

Qus - What is the role of body parsers in express, and how do you use them?  
Ans -

Qus - What are the difference between req.params, req.query and req.body?  
Ans -

Qus - How do you handle routing in expressJS?  
Ans -

Qus - How can you handle errors in NodeJS?  
Ans -

Qus - Explain Asynchronous and Non-blocking programming?  
Ans -

- Asynchronus - Asynchronus programming allows your code to start a task and move on to the next one without waiting for the previous task to finish

- Non-blocking - Non-blocking programming refers to the way nodejs handles tasks without stopping(or blocking ) the execution of other tasks

Qus - What is the event loop in Nodejs
Ans - The event loop in nodejs is a mechanism that handles asynchronus operations. It allows nodejs to perform non blocking I/o operation even though JS is single threaded

Qus - What is middleware in expressJS?  
Ans - middleware in express is a function that has access to the request objext (req), the response object (res), and the next middleware function in the application's request-response cycle.

```
              logging
middleware -> data parsing
              authentication
```

Qus - What is streams in NodeJs?  
Ans -

Qus -

Qus - How does NodeJS handles child threads?  
Ans - NodeJs handles child threads by using worker threads for parallel processing and child processes for creating independent processes. The event loop and non-blocking I/O handle most asynchronus tasks, ensuring that nodesjs remains efficient and fast

event loop & non blocking I/o -> workter threads -> child processes

Qus - what is the difference between cookies and localstorage?  
Ans - cookies - primarily used for session management, personalization, and tracking user behavior

- When you log into a website (like gmail), a cookie is created to remember your login session
- A website like amazon uses cookies to remember your preferences
- Websites often use cookies to track user behavior for analytics

local storage - used to store larger amounts of data on the client side for web applications.

- Online games can use local storage to save your progress, scores and settings so that when you return to the game later, you can pick up right where you left off

Qus - How can you prevent a bot from scraping your publicly accessible API?  
Ans -

1. API rate limiting - limiting the number of requests a user can make to an API within a certain period of time.

2. CAPTCHA Integration(Completely Automated Public Turing test to tell Computer's and Humans Apart) - It's verifies wherther you're person or a bot through the puzzle or anything

3. Creating Honeypots - A honeypot is like a trap for bots. It's a hidden element that real users never see or interact with, but bots will.

4. Obfuscating API endpoints - Obfuscation means making your API endpoints (the web addresses your API uses) less obvious or harder to find.
   Ex- /api/get-data rather than use like this /api/z74faf
5. Anomaly detection - spotting anythings that looks unusual or suspicious, like a sudden spike in requests.

Qus - What is the difference between localStorage and sessionStorage?  
Ans - localStorage - Data Stored in localStorage has no expiration time. It remains available even after the browser or tab is closed and will persist until is explicitly deleted by user or through code.

sessionStorage - Data stored in sessionStorage is tied to the specific session of the browser. It gets cleared when the browser tab is closed, meaning the data is only available as long as the tab or window is open.

Qus - How can page loading time be reduced?
Ans - optimize images - use formates like webp, which offers similar file sizes with good quality
minimize Http request - combine css and js files where possible
enable browser caching - Allow brosers to store some elements of the page
Content delivery network - reduces latency by serving it from a server closest to the user
use Lazy loading - delay the loading of images and videos until they are needed ex- pinterest website where i scroll down then images will be loaded otherwise will not be load the images

Qus - what is the difference between SOAP(Simple Object Access Protocol) and REST(Representational State Transfer)?  
Ans -
| Aspects | SOAP | REST |
| :-----: | :------------------------------------------: | :-------------------------------------------: |
| What it is | A Strict set of rules for sending messages | A way to use existing web rules to get data |
| Data Format | Only uses XML(more Compilicated) | Can use JSON, XML, or even pain text (easier) |
| Connection Type | Can remember past requests (stateful) or not | Dosen't remember past requests (Stateless) |
| How it works | Uses its own rules for sending and receiving | Uses standard web mehods like POST, GET. |

The major differene between SOAP and REST is that SOAP is a protocol with strict standards and advanced features, making it suitable for complex, secure applications, while REST is an architectural style that is simpler and more flexible, making it ideal for web services that require speed and scalability

Qus - How is graphQl different from REST?  
Ans -
| Feature | GraphQL | REST |
| :--: | :--: | :--: |
| Data Fetching | Single endpoint for all queries | Multiple endpoints for different resources |
| Response Structure | Client defines structure of the response | Server defines structure of the respone |
| Over/under-fetching | Reduces over-fetching and under-fetching | Often leads to over-fetching or under-fetching |

While both GraphQL and REST API can achieve similar end results, their approaches differ siginificantly. In REST API's like JSON placeholder, you fetch data from a specific endpoint and perform filtering on the client-side, while in GraphQL, you can tailor your queries to retrieve only the neccessary data directly from the server.

// HTML
QUS - What is HTML
ANS -

QUS - Why do we use doctype
Ans - to tell the browser that which version of HTML we're using

QUS - what is the use of head tag
ANS -

Qus - In HTML We link our JS file. What is the better place to link it in html in head tag or body tag? and why?
ANS-

QUS - Can we create any custom element
Ans-

QUS - what will be the display value of random created element
ANS - The random created element is display - inline

QUS - what is the difference between inline and block
Ans - first difference we can not give width and height in inline element
we can give margin left and right but we not give top and bottom margin to inline element float will not work on inline elements also ignored overflow and z-index in inline and nesting only inline in inline not do div inside a span block element start on new line

QUS - what is the display properties of image
ANS -

Qus - what is box model
Ans -

QUS - have you ever seen any element which does not have a rectangular shape
Ans -

// React

Qus - How do you handle form in react?  
Ans -

- Managing the forms input
- Capturing user input
- responding to form submission

Qus - What is server-side rendering and how is it beneficial ?  
Ans - Server Side rendering (SSR) is a technique where a web page is rendered on the server before it is sent to the user's browser. Instead of sending a blank HTML file with JS code that builds the page on client side, the server generates the HTML with content already included and sends it to the browser.

- faster initial load - since the HTML is pre-rendered on the server, the browser can display the content quickly, improving the perceived load time for users
- better seo - search engines can easil index the content of server-rendered pages because they don't need to execite JS to see the content
- improved performance - since most of the rendering is done on the server, client devices don't need to do as much work to render the page which is helpul for users on slower or less powerfull devices.
- Reduced interaction time - with SSR, users can interact with the content more quickly becuase they don't have to wait for the JS to fully load before seeing anything.

Qus - What do you understand by redux?  
Ans - components manage their own internal state, but as an appkication grows, managing shared state multiple components can become complex. This is where redux helps by providing a single global state that any component can access

Qus - Explain virtual Dom, and How it works.  
Ans - The Virtual DOM is a concept used to improve the efficiency of updating the user interface in web applications, especially in JS frameworks like react. It acts as a lightweight copy of the real DOM, allowing changes to be made quickly without directly modifying the actual DOM each time.

Qus - What is state management in React?  
Ans - State management involves controlling the flow and handling of data within your app to ensure the UI responds correctly to user inputs and data changes.

There are multiples types of state management 1) Component state 2) Props drilling 3) context api 4) state management libraries

Qus - What are some of the commonly used hooks ?  
Ans - useState, useEffect, useContext useRef, useReducer.

Qus - Explain the component lifecycle in react?  
Ans - The component lifecycle in react refers to the sequence of events that happen to a component from its creation (mounting) to its removal (unmounting)

- mounting - When the component is created and inserted into the DOM
- updating - When the component's state or props change
- unmounting - shutting down the process

Qus - What is Context API, and how is it different from props?  
Ans - The Context API is a feature in react that allows you to share state and data across components without having to pass props down manually at every level. It helps manage global state and avoids "prop drilling", where you have to pass data through many layers of components.

Qus - How can you optimize performance within a react application?  
Ans -

- built-in performance optimization - Pure component and React.memo
- code splitting - Load parts when its needed
- optimize context usage - Be smart with shared data
- Memorization - Remember Calculation and functions
- Reduce component re-renders - Control when components update

Qus - What do you mean by a higher-order component in React?  
Ans -

// HR
Tell me about yourself
What are your strengths & weakness
Why do you want this job
why should we hire you?
Where do you see yourself in the text 5 years
 Have you done breakfast if not then why?
 What is your technology stack
 Have you worked with team what is the ideal team member according to you
 Location preference
 Do you work with team
 5 pros and cons of your state
 How you review the process of this placement drive
 Any questions for me
 what do you know about LTI
 ready to Relocation
 technical skills
 soft skills
 qualities of a leader

// css
Qus - What are the components of a css Box model?  
Ans -

Qus - What is difference between class selector and id selector?  
Ans -
