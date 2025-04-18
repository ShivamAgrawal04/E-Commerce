<!-- // Terminal -->

Qus - what is the terminal
Ans - A terminal is a command-line interface (CLI) used to interact with a computer's operating system. It allows you to type and execute text-based commands to perform tasks like:
Navigating through files and directories
Running programs and scripts
Installing and managing software
Managing system processes and resources
Configuring system settings

Types of Terminals:
Command Prompt (CMD) – Default terminal on Windows.
PowerShell – More powerful terminal on Windows with scripting capabilities.
Bash (Bourne Again Shell) – Default terminal on Linux and macOS.
Zsh (Z Shell) – An extended version of Bash with additional features.

<!-- // Git & Github -->

Qus - What is git?
Ans - Git is a version control system (VCS) that helps developers track and manage changes in their codebase. It allows multiple developers to work on a project simultaneously without overwriting each other’s work.

⭐ Key Features of Git:
Distributed version control – Every developer has a complete copy of the code repository.
Branching and Merging – Developers can create separate branches to work on new features and merge them back into the main branch once completed.
Tracking changes – Git records every change made to the code, allowing developers to revert to a previous state if needed.
Collaboration – Multiple developers can work on the same project without conflicts.

Qus - What is GitHub?
Ans - GitHub is a cloud-based platform that provides hosting for Git repositories. It allows developers to store their code online and collaborate with others using Git.

⭐ Key Features of GitHub:
Remote storage – Hosts Git repositories online.
Collaboration – Allows multiple developers to work on the same project.
Pull requests – Developers can propose changes and request reviews.
Issue tracking – Helps track bugs and feature requests.
Actions – Automate workflows like testing, building, and deployment.

1. git config --global user.name "github_name" <!-- // There 3 types to set user local/gloabl/system here we use global -->
2. git config --global user.email "github_email.com"
3. git config --list
4. git clone repo_link_paste_here
5. git status
6. git add .
7. git commit -m "anyMessage and it is compulsary"
8. git push origin main
9. git init <!-- // It is used to create a new git repo -->
10. git remote add origin github_repo_link
11. git remote -v
12. git branch
13. git branch -M main <!-- // To rename the branch-->
14. git push origin main
15. git push -u origin main <!-- // Its set the upstream origin-->
16. git push <!-- // if u set upstream origin then you use this otherwise use git push origin main-->
17. git commit -am "update file" <!-- // if you have only one file to upload so you add or commit using this command-->
18. git checkout branch_name <!-- // To navigate -->
19. git chechout -b new_branch_name <!-- // To create new Branch-->
20. git branch -d branch_name <!-- // To delete branch-->
21. git merge branch_name <!-- // To merge 2 branches-->
22. git diff branch_name <!-- // To compare commits, branches, files &more -->
23. git pull origin main <!--// Used to fetch and download content from a remote repo and immediately update the local repo to match that content-->
24. git reset file_name // staged changes for specific file
25. git reset // staged changes for all files
26. git reset HEAD-1 // commited changes (for one commit)
27. git log
28. git reset commit_hashed_code // if you want to commit 2 or any type to reset commit so first do git log and take the commit_hashed_code paste with this command
29. git reset --hard commit_hashed_code // if you want also remove changes from commit so use this

<!-- Node JS -->

Qus - What is node JS
Ans - "Node.js is a JavaScript runtime enviroment built on the V8 engine that allows developers to run JavaScript outside the browser. It’s non-blocking, event-driven, and great for handling I/O-heavy tasks like APIs and real-time applications."
global, .help, process, process.argv

<!-- Express -->

Qus - what is Express JS
Ans - "Express.js is a lightweight and flexible web framework for Node.js. It simplifies building web applications and APIs by providing easy-to-use routing, middleware, and HTTP handling. Express.js follows a minimalistic approach and allows developers to create RESTful services quickly. It also supports middleware for handling authentication, logging, and data parsing."

Qus - what is difference between require & import
Ans - "require() is used in CommonJS and loads the entire module synchronously, even if you only need a specific function. import is used in ECMAScript Modules (ESM) and allows you to selectively import only the functions or objects you need, which improves performance and reduces memory usage. import also works asynchronously and is supported in both modern Node.js and browsers."

Qus - Difference between library and framework
Ans - "A library is a collection of pre-written code that provides specific functionality, and the developer controls when and how to use it. In contrast, a framework provides a complete structure and follows the 'Inversion of Control' principle, where the framework controls the flow and calls the developer's code when needed. Libraries give more flexibility, while frameworks provide more structure and built-in solutions."

Qus - What is Routing
Ans - "Routing is the process of mapping URLs to specific components or handlers. In client-side routing (like React), JavaScript handles the routing without reloading the page, providing a faster and smoother user experience. In server-side routing (like Express.js), the server processes each request and returns a new HTML page. Client-side routing is more efficient for SPAs, while server-side routing is better for SEO and initial load time."

Qus - How query works
Ans - URL - localhost:3000/search?q=hello&id=123

```
app.get("/search",(req,res)=>{
    console.log(req.query)
    const {q} = req.query;
    if(!q) res.send("No query specified")
    res.send(`The query is this ${q}`)
})
```

<!-- EJS -->

Qus - what is EJS
Ans - "EJS (Embedded JavaScript) is a templating engine for Node.js that allows you to generate dynamic HTML using JavaScript. It enables you to pass data from the server to the template and render dynamic content based on that data. You can use JavaScript logic like if, for, and foreach directly within the template. It works well with Express.js and makes it easy to handle dynamic content."

Qus - How to use EJS
Ans - we use ejs to set the view engine on main index.js file
app.set("view engine","ejs");

view engine find a view folder where your ejs files store its like a root folder you also change the folder name but you need to specify the folder name if you change the folder name

Qus - can we need to require a ejs file?
Ans - No, we do not need to require an EJS file directly. When you set 'view engine' to 'ejs' using app.set('view engine', 'ejs'), Express automatically handles loading and compiling EJS files from the /views folder. You can render an EJS file using res.render() without requiring it manually.

Qus - When you set 'view engine' to 'ejs' using app.set('view engine', 'ejs')

if not do this then we need?
Ans - "If you don’t set the 'view engine' to 'ejs', you need to manually specify the .ejs extension in res.render() because Express won’t automatically recognize the file type. Setting 'view engine' allows Express to automatically detect and compile EJS files without needing the file extension." 😎

Qus - how we pass the data into the ejs file
Ans - app.get("/rollDice",(req, res) =>{
const dicVal = Math.floor(math.random()\*6)+1
res.render("rollDice.ejs",{dicVal})
})

rollDice.ejs

<h1>Dice Value is: <%= dicVal =></h1>

Qus - how we serving static files like html and css static files
Ans - app.use(express.static("public"))
app.use(express.static(path.join(\_\_dirname,"public")))

Qus - how we use includes
Ans - <%- include("includes/head.ejs"); %>

Qus - difference between .set() and .use()
Ans - ".set() is used to define app-level settings like port, view engine, and static file paths. .use() is used to register middleware functions that execute on every incoming request unless a specific path is provided." 😎

Qus - what does get request
Ans - "A GET request is used to get data from a server. The data can be sent using query or route parameters as strings. GET requests should only read data, not change it. Also, there is a size limit (about 2048 characters)." 😎

Qus - what does post request
Ans - "A POST request is used to send data to a server to create or update something. The data is sent in the request body, and sending the same request multiple times can create multiple records. There is no size limit, and you can send any type of data (like text, JSON, files, etc.)." 😎

<!-- OOPS -->

a) object prototypes b) New operator c) Constructor d) classes e) keywords (extend, super)

Qus - What is Object prototypes
Ans - "An object prototype is a template that allows objects to share methods and properties. If an object doesn’t have a property or method, JavaScript will search for it in the prototype." 😎

Qus - how to create userdefined prototype
Ans - const arr = ["Shivam","Anurag"]
Array.prototype.sayHello = function(){
return `Hello ${this.join(' and ')}`
}

const obj = {
name:"Shivam",age:24
}
Object.prototype.sayHello = function(){
return `Hello ${this.name}`
}

```
arr.__proto__ (reference)
Array.prototype (actual object)
String.prototype
```

// This is not a efficient method
fucntion personMaker(name, age){
const person = {
name:name,
age:age,
talk():function(){
return this.name = name
}
}
}

const p11 = personMaker("Shivam",21)

// this is the efficient method its a constructor
function Person(name, age){
this.name = name
this.age = age;
}
Person.prototype.talk() = funtion(){
return `Hi, My name is ${this.name}`
}
const p1 = new Person("Shiv",21)

// this is the correct method to write this thing correct and make a readiabilty code

```
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    talk(){
        return `Hi, My name is ${this.name}`
    }
}
let p1 = new Person("Shiv",21)
```

<!-- Inheritance -->

```
class Student extend Person{
    constructor(name,age,marks){
        super(name,age)
        this.marks = marks;
    }
}

let s1 = new Student("Hello",21,458);
```

Qus - What is REST (Representational state transfer) ?

Ans - "REST is a set of rules for building web services where the server and client communicate using standard HTTP methods like GET, POST, PUT, and DELETE. Each request is independent and stateless, and resources are accessed using URLs." 😎

<!-- Database -->
<!-- MySQL -->

Qus - What is Database?
Ans - "A database is a place where data is stored and organized so that it can be easily accessed and managed. There are two main types of databases — relational (SQL) and non-relational (NoSQL)." 😎

Qus - what is SQL
Ans - "SQL is a language used to store and manage data in tables. You can use commands like SELECT, INSERT, UPDATE, and DELETE to work with data." 😎

<!-- Commands -->

```
1. CREATE DATABASE db_name;
2. CREATE DATABASE IF NOT EXISTS db_name;
3. DROP DATABASE db_name;
4. DROP DATABASE IF EXISTS db_name;
5. USE db_name;
6. CREATE TABLE table_name (column_name1 datatype constraint,column_name2 datatype constraint,column_name3 datatype constraint);
7. INSERT INTO table_name VALUES (),(),();
8. SELECT * FROM table_name;
9. SHOW DATABASES;
10. SHOW TABLES;
11. DROP TABLE table_name;
12. CREATE TABLE user(id INT, age INT, name varchar(30) NOT NULL,city varchar(20),email varchar(50) UNIQUE,followers INT DEFAULT 0, following INT,CONSTRAINT CHECK (age >=13 AND city='delhi') ); // its chech it age not greater than 13 and city not matched delhi then data will not insert it will give you error
```

<!-- constraints -->

NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK, DEFAULT

Qus - What is Primary key?
Ans - Primary Key: "A primary key is used to uniquely identify each row in a table. It must be unique and cannot be null."
Qus - What is Foreign Key?
Ans - Foreign Key: "A foreign key is used to create a link between two tables. It refers to the primary key of another table and ensures data consistency." 😎

Qus - ✅ What are Clauses in SQL? 😎

Ans - A clause is a part of an SQL query that helps you filter, sort, and organize data from a database.
👉 Clauses work with SELECT, INSERT, UPDATE, and DELETE statements to refine the results. Common clauses include WHERE, ORDER BY, GROUP BY, HAVING, LIMIT, and OFFSET." 😎

<!-- Where Clause -->

select \* from user where age >= 18;

<!-- Where Clause Operators -->

arthimatic +, -, \*, /, %
comparison =, !=, >=, <=, <, >
logical AND (to check for both conditions will be true), OR(to check for one of the conditions will be true), NOT(to negate the given condition), IN(match any values in the list), BETWEEN(selects for a given range), ALL, LIKE, ANY
bitwise &, |

<!-- Limit Clause -->

select \* from user where age > 15 limit 2;

<!-- ORDER BY -->

ASC for acending
DESC for decending
SELECT \* FROM table_name ORDER BY col_name ASC

<!-- HAVING CLAUSE -->

Similar to where clause ex- applies some condition on rows but it is used when we want to apply any condition after grouping
Select age,COUNT(id) from user GROUP BY age HAVING count(id) > 2;

<!-- GROUP BY -->

generally we use GROUP BY with some aggregate function.
if you use GROUP BY and you need to print the name or other column which is not use group by then you will written with aggregate functoion otherwise will give error
SELECT COUNT(id) FROM user GROUP BY age;
SELECT COUNT(id),age FROM user GROUP BY age;
SELECT COUNT(id),age,name FROM user GROUP BY age; // This line will give error becuase you are not group by the name column

<!-- Aggregate function -->

COUNT(), MAX(), MIN(), SUM(), AVG()
SELECT MAX(age) FROM user;
SELECT MIN(age) FROM user;
SELECT COUNT(age) FROM user where age > 15;
SELECT AVG(age) FROM user
SELECT SUM(age) FROM user

<!-- General ORDER -->

SELECT columns
FROM table_name
WHERE condition
GROUP BY columns
HAVING condition
ORDER BY columns ASC;

<!-- UPDATE ROWS -->

UPDATE table_name SET followers = 500 WHERE age = 16;
SET SQL_SAFE_UPDATES = 0 // SQL will not give permissions to update data directly so in sql SQL_safe_updates name things will be exists which is by default 1 so we need to set 0 first then you will use the update command it work successfully

<!-- DELETE ROWS -->

DELETE FROM user WHERE age = 14;
DELETE FROM user //if you don't use where condition then it will delet All rows

<!-- ALTER Queries -->

If you need to run the query in Columns so use alter queryies

ALTER TABLE user ADD COLUMN city VARCHAR(20) DEFAULT "Delhi"; // ADD COLUMNS
ALTER TABLE user DROP COLUMN city; // DROP COLUMN
ALTER TABLE user RENAME TO instauser; // its change the table name
ALTER TABLE instauser CHANGE COLUMN followers subs INT DEFAULT 0; // change the column name
ALTER TABLE instauser MODIFY subs INT DEFAULT 0; // to modify the column dataType

<!-- TRUNCATE -->

TRUNCATE TABLE user; // its delete all data not table

mysql -u root -p

Qus - How many type to run sql queries
Ans - many type to run sql queries

1. through workbench
2. through nodejs package
3. through command line
4. through create sql file
   ex- schema.sql
   show tables
   in sql command we run this file using (source schema.sql)

<!-- SQL relationship -->

1. one to one
2. one to many
3. many to many

<!-- MONGODB -->

Qus - what is mongoose?
Ans - "Mongoose is an ODM library for MongoDB and Node.js. It allows you to define a schema, model data, and perform CRUD operations easily using JavaScript methods." 😎

Qus - What is mongoshell?
Ans - "Mongo Shell (mongosh) is a command-line interface used to connect with a MongoDB database, run queries, and manage data using JavaScript-based commands." 😎

Qus - why we use js methods in mongoshell?
Ans - "MongoDB uses JavaScript methods in the shell because MongoDB stores data in BSON(Binary JSON) (similar to JSON), which matches JavaScript object format. This makes it easy to query, update, and manage data using familiar JavaScript methods." 😎

Note - mongodb always store data in BSON form when we add data according to JSON form it automatically convert the data into the BSON

Note - When you update the value then schema method validation will not work if you need to check same schema validation when you update the data then you will need to define in update query {runValidators:true} or you need to define this userSchema.set('runValidators', true); in your schema if you not write the runValidators again and again on update query

Qus - Difference between json and bson
Qus - What is schema Validation
Qus - what is mongoose buffering?
Ans - mongoose use operational buffereing, mongoose lets you start using your models immediately, without waiting for mongoose to establish a connection to MongoDB

Qus - what is De-Normalization?
Ans - 👉 Denormalization is the process of combining tables to improve read performance by reducing the need for joins. It stores some duplicate data to make data retrieval faster, but it may increase storage size. 😎

Qus - What is handling deletion?
Ans - Handling deletion means properly removing data from a database or system while ensuring that related data and dependencies are handled correctly, using methods like cascade delete, set null, restrict, or soft delete. 😎

<!-- MongoShell Commands -->

mongosh

1. use College // to create db if not exist and use
2. show dbs // show all databases
3. show collections // it show all collections means in sql like tables
4. db.collection.insertOne(); // inset a single document into a collection Ex- db.student.insertOne({name: "student",age:21,city:"Delhi"})
5. db.collection.insertMany(); // insets multiple documents into a collection Ex- db.student.insertOne({name: "SHivam",age:21,city:"Mumbai"}, {name: "Anurag",age:21,city:"Indore"})
6. db.collection.find(); // it shows all the data in your collection and its return cursor(refrence of the original document) Ex- db.student.find()
7. db.collection.findOne(); // it show only one data according to your given details and its return actual document Ex- db.student.findOne({name:"SHivam"});

<!-- Query Operators -->

$gt = if we find the age greater than 20 Ex- db.student.find({age:{$gt:20}})
$gte = greater than and equal Ex - db.student.find({age:{$gte:20}})

$in = if we find the students who live in delhi or mumbai Ex- db.student.find({city:{$in:["Delhi","Mumbai"]}})

$or = if you need any one condition will be true. find students who's age is greater than 20 and live in delhi Ex - db.student.find({$or:[{age:{$gt:20}},{city:"Delhi"}]});

8. db.collection.updateOne(filter,update,options) // update data Ex- db.student.updateOne({name:"SHivam"},{$set:{age:24}}) // $set = add key it not exist or if exist then update the key with new data

9. db.collection.updateMany()
10. db.collection.replaceOne() // its change complete document/data;
11. db.collection.deleteOne()
12. db.collection.deleteMany()
13. db.collection.deleteMany({}) // its delete all documents/data
14. db.dropDatabase() // its delete your complete database

<!-- Mongo Relationship -->

<!-- Mongoose in nodejs -->

User.create({name:"shivam",age:24})
User.insertMany([{name:"Tanmay",age:24},{name:"Anurag",age:24},{name:"Rahul",age:24},{name:"Radhe",age:24}])

Qus - What is middleware?
Ans - Middleware is a function that runs between the request and response. It can change the request or response, handle tasks like authentication, logging, error handling, etc. Middleware can either end the request or pass it to the next middleware using next() if more work is needed. 😎

<!-- Logger - creating log files -->

```
app.use((req,res,next)=>{
    req.responseTime = new Date(Date.now()).toString();
    console.log(req.method,req.path req.responseTime, req.hostname)
    next();
}) // this middleware is used for all path requests
```

```
app.use("/random",(req,res,next)=>{
    req.responseTime = new Date(Date.now()).toString();
    console.log(req.method,req.path req.responseTime, req.hostname)
    next();
}) // this middleware is used for all path requests which is start with /random
```

Qus - What is express router?
Ans - Express Router is a feature in Express.js that allows you to create modular and organized route handlers. It helps keep the code clean by grouping related routes together, making it easier to manage large applications. 😎

Qus - what is stateful and stateless?
Ans - 👉 Stateful means the component or function remembers data (state) and can change over time.
👉 Stateless means the component or function does not store any state and only depends on the input to produce output. 😎

Qus - What is state?
Ans - State is a way to store and manage data in an application. It holds the current status of the app, and when the state changes, the UI updates automatically to reflect those changes. 😎

Qus - What is express-session?
Ans - Express Session is a middleware in Express.js that allows you to store user session data on the server. It helps track user information (like login status) between requests by creating a session ID and storing it in a cookie on the client side. The session data is stored on the server and linked to the session ID.

Qus - What is cross-sciption attack?
Ans -

Qus - What is monorepo?
Ans -
