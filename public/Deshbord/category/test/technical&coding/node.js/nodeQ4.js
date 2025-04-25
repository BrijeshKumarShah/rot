const questions = [
        { num: 101, question: "101 What does 'npm ci' do differently than 'npm install'?", options: ["Installs strictly from package-lock.json", "Updates dependencies", "Clears the cache", "Runs in interactive mode"], answer: "Installs strictly from package-lock.json", attempted: false, selected: "" },
        { num: 102, question: "102 What’s the purpose of 'nvm' in Node.js development?", options: ["Manage multiple Node.js versions", "Monitor network traffic", "Visualize memory usage", "Encrypt tokens"], answer: "Manage multiple Node.js versions", attempted: false, selected: "" },
        { num: 103, question: "103 Which module is commonly used to serve static files in a Node.js web app?", options: ["express.static", "http", "fs", "stream"], answer: "express.static", attempted: false, selected: "" },
        { num: 104, question: "104 How do you check if a file exists in Node.js (asynchronously)?", options: ["fs.access()", "fs.check()", "fs.read()", "fs.existsSync()"], answer: "fs.access()", attempted: false, selected: "" },
        { num: 105, question: "105 What does 'fs.createReadStream' return?", options: ["Readable stream", "Promise", "Buffer", "Writable stream"], answer: "Readable stream", attempted: false, selected: "" },
        { num: 106, question: "106 Which event on a stream indicates that all data has been consumed?", options: ["'end'", "'close'", "'finish'", "'done'"], answer: "'end'", attempted: false, selected: "" },
        { num: 107, question: "107 What does the 'cluster' module allow in Node.js?", options: ["Create multiple processes to utilize CPU cores", "Group HTTP requests", "Organize database calls", "Cache static assets"], answer: "Create multiple processes to utilize CPU cores", attempted: false, selected: "" },
        { num: 108, question: "108 Which middleware is commonly used to parse incoming JSON requests in Express?", options: ["express.json()", "express.parse()", "bodyParser.urlencoded()", "app.decoder()"], answer: "express.json()", attempted: false, selected: "" },
        { num: 109, question: "109 Which Node.js method is used to end a response?", options: ["res.end()", "res.finish()", "res.done()", "res.terminate()"], answer: "res.end()", attempted: false, selected: "" },
        { num: 110, question: "110 How do you handle async errors in Express routes?", options: ["Wrap in try/catch and use next(err)", "Set global variable", "Use catch block without next", "Throw and ignore"], answer: "Wrap in try/catch and use next(err)", attempted: false, selected: "" },
        { num: 111, question: "111 What is a callback hell?", options: ["Nested callbacks that are hard to read and maintain", "Syntax error", "Database timeout", "Unhandled exceptions"], answer: "Nested callbacks that are hard to read and maintain", attempted: false, selected: "" },
        { num: 112, question: "112 Which module allows logging in Node.js?", options: ["winston", "logify", "nodemon", "streamer"], answer: "winston", attempted: false, selected: "" },
        { num: 113, question: "113 Which package is used for environment variable management in Node.js?", options: ["dotenv", "envify", "conf", "envm"], answer: "dotenv", attempted: false, selected: "" },
        { num: 114, question: "114 What’s the purpose of middleware in Express.js?", options: ["Modify request/response or handle errors", "Schedule jobs", "Start server", "Deploy app"], answer: "Modify request/response or handle errors", attempted: false, selected: "" },
        { num: 115, question: "115 What is the default HTTP module behavior in Node.js?", options: ["Handles low-level HTTP requests and responses", "Routes APIs", "Parses forms", "Encrypts payloads"], answer: "Handles low-level HTTP requests and responses", attempted: false, selected: "" },
        { num: 116, question: "116 Which object contains query string data in Express.js?", options: ["req.query", "req.params", "req.body", "req.path"], answer: "req.query", attempted: false, selected: "" },
        { num: 117, question: "117 How to listen on a port using Express?", options: ["app.listen(port)", "server.port()", "express.listen()", "app.port()"], answer: "app.listen(port)", attempted: false, selected: "" },
        { num: 118, question: "118 Which method is used to send JSON response in Express?", options: ["res.json()", "res.send()", "res.output()", "res.stringify()"], answer: "res.json()", attempted: false, selected: "" },
        { num: 119, question: "119 What is the use of the 'cors' package?", options: ["Enable Cross-Origin Resource Sharing", "Compress routes", "Secure database", "Authenticate user"], answer: "Enable Cross-Origin Resource Sharing", attempted: false, selected: "" },
        { num: 120, question: "120 How to gracefully stop a Node.js server?", options: ["server.close()", "app.end()", "server.shutdown()", "process.terminate()"], answer: "server.close()", attempted: false, selected: "" },
        { num: 121, question: "121 How to schedule jobs in Node.js?", options: ["Using node-cron", "setTimeout", "express.delay()", "http.job()"], answer: "Using node-cron", attempted: false, selected: "" },
        { num: 122, question: "122 What does 'npm run dev' usually refer to?", options: ["Run development script from package.json", "Install dev dependencies", "Run debugger", "Restart app"], answer: "Run development script from package.json", attempted: false, selected: "" },
        { num: 123, question: "123 How can you enforce HTTPS in an Express app?", options: ["Redirect HTTP to HTTPS using middleware", "Disable HTTP methods", "Enable CORS", "Use express.static"], answer: "Redirect HTTP to HTTPS using middleware", attempted: false, selected: "" },
        { num: 124, question: "124 What is the role of Helmet in a Node.js app?", options: ["Secure app by setting HTTP headers", "Encrypt database", "Validate user", "Log requests"], answer: "Secure app by setting HTTP headers", attempted: false, selected: "" },
        { num: 125, question: "125 What is rate limiting used for?", options: ["Prevent abuse by limiting requests", "Compress output", "Balance CPU", "Minify code"], answer: "Prevent abuse by limiting requests", attempted: false, selected: "" },
        { num: 126, question: "126 What’s the use of Joi or Yup libraries?", options: ["Data validation", "Query optimization", "Security scanning", "Database seeding"], answer: "Data validation", attempted: false, selected: "" },
        { num: 127, question: "127 What does 'npm audit' do?", options: ["Scans for known vulnerabilities", "Optimize package.json", "Clear logs", "Analyze traffic"], answer: "Scans for known vulnerabilities", attempted: false, selected: "" },
        { num: 128, question: "128 What is the role of 'bcrypt' in Node.js?", options: ["Hash passwords securely", "Parse cookies", "Log data", "Create tokens"], answer: "Hash passwords securely", attempted: false, selected: "" },
        { num: 129, question: "129 What is a middleware stack?", options: ["Sequence of middleware functions", "Heap structure", "Thread pool", "File array"], answer: "Sequence of middleware functions", attempted: false, selected: "" },
        { num: 130, question: "130 How do you define dynamic routes in Express?", options: ["/user/:id", "/user/*", "/user&:id", "/user#id"], answer: "/user/:id", attempted: false, selected: "" },
        { num: 131, question: "131 What is body-parser used for?", options: ["Parse incoming request bodies", "Encrypt requests", "Format response", "Cache files"], answer: "Parse incoming request bodies", attempted: false, selected: "" },
        { num: 132, question: "132 What is the default port number for HTTP server in Node.js?", options: ["80", "3000", "8080", "443"], answer: "80", attempted: false, selected: "" },
        { num: 133, question: "133 What does 'process.env.NODE_ENV' usually represent?", options: ["Environment type (e.g., production, development)", "Node version", "Memory usage", "Error level"], answer: "Environment type (e.g., production, development)", attempted: false, selected: "" },
        { num: 134, question: "134 How do you handle 404 errors in Express?", options: ["Create a middleware after all routes", "Use express.fallback()", "Check req.null", "Set status in app.listen"], answer: "Create a middleware after all routes", attempted: false, selected: "" },
        { num: 135, question: "135 How can you reload a Node.js app on file change?", options: ["Using nodemon", "With reload.js", "By clearing cache", "Via fs.watch()"], answer: "Using nodemon", attempted: false, selected: "" },
        { num: 136, question: "136 What is the use of 'jsonwebtoken' package?", options: ["Sign and verify JWT tokens", "Parse JSON", "Encrypt files", "Authorize IPs"], answer: "Sign and verify JWT tokens", attempted: false, selected: "" },
        { num: 137, question: "137 How to parse cookies in a Node.js app?", options: ["Using cookie-parser", "With url.parse()", "Using cors", "Using crypto"], answer: "Using cookie-parser", attempted: false, selected: "" },
        { num: 138, question: "138 Which HTTP method is used to update a resource?", options: ["PUT", "GET", "POST", "OPTIONS"], answer: "PUT", attempted: false, selected: "" },
        { num: 139, question: "139 What is a memory leak?", options: ["Unused memory not released", "Large memory allocated", "Stack overflow", "Missing garbage collector"], answer: "Unused memory not released", attempted: false, selected: "" },
        { num: 140, question: "140 How do you handle CORS in a Node.js server?", options: ["Use cors package and configure headers", "Disable routes", "Enable logs", "Compress payload"], answer: "Use cors package and configure headers", attempted: false, selected: "" },
        { num: 141, question: "141 What is an event-driven architecture?", options: ["Logic triggered by emitted events", "Loop-based control", "Thread-per-request model", "Monolithic structure"], answer: "Logic triggered by emitted events", attempted: false, selected: "" },
        { num: 142, question: "142 What is 'middleware chaining' in Express?", options: ["Multiple functions run in sequence using next()", "Running modules in parallel", "Calling APIs recursively", "Managing socket threads"], answer: "Multiple functions run in sequence using next()", attempted: false, selected: "" },
        { num: 143, question: "143 Which object represents the HTTP response in Express?", options: ["res", "req", "app", "ctx"], answer: "res", attempted: false, selected: "" },
        { num: 144, question: "144 How can you restrict access to certain routes in Express?", options: ["Use auth middleware", "Rename route", "Set req.path = null", "Throw error manually"], answer: "Use auth middleware", attempted: false, selected: "" },
        { num: 145, question: "145 What does res.status(404).send() do?", options: ["Sends a 404 Not Found response", "Redirects to homepage", "Logs 404", "Closes server"], answer: "Sends a 404 Not Found response", attempted: false, selected: "" },
        { num: 146, question: "146 What is a route parameter in Express?", options: ["Dynamic segment in URL path", "Query string", "Header field", "Static file path"], answer: "Dynamic segment in URL path", attempted: false, selected: "" },
        { num: 147, question: "147 What does req.body contain?", options: ["Parsed body data of incoming request", "Header fields", "User IP", "Cookie values"], answer: "Parsed body data of incoming request", attempted: false, selected: "" },
        { num: 148, question: "148 How do you define a POST route in Express?", options: ["app.post('/path', handler)", "app.POST('/path', handler)", "app.route('/post')", "app.write('/path')"], answer: "app.post('/path', handler)", attempted: false, selected: "" },
        { num: 149, question: "149 What is the role of try-catch in async-await?", options: ["Handle errors in await code", "Block event loop", "Throw timeout", "Initialize app"], answer: "Handle errors in await code", attempted: false, selected: "" },
        { num: 150, question: "150 What does 'return next()' do in middleware?", options: ["Pass control to next middleware", "End response", "Reload route", "Reset server"], answer: "Pass control to next middleware", attempted: false, selected: "" }
];

    let currentQuestion = 0;

        function loadQuestion(index) {
            document.getElementById("question").textContent = questions[index].question;
            document.getElementById("questionCounter").textContent = `Question ${index + 1} of ${questions.length}`;
            const optionsElement = document.getElementById("options");
            optionsElement.innerHTML = "";
            questions[index].options.forEach(option => {
                optionsElement.innerHTML += `<li><input type="radio" name="option" value="${option}" onclick="markAttempted(${index}, '${option}')"> ${option}</li>`;
            });
            updateCircles();
        }

        function markAttempted(index, selectedAnswer) {
            questions[index].attempted = true;
            questions[index].selected = selectedAnswer;
            updateCircles();
        }

        function nextQuestion() {
            if (currentQuestion < questions.length - 1) {
                currentQuestion++;
                loadQuestion(currentQuestion);
            }
        }

        function prevQuestion() {
            if (currentQuestion > 0) {
                currentQuestion--;
                loadQuestion(currentQuestion);
            }
        }

        function updateCircles() {
            const circleContainer = document.getElementById("circleContainer");
            circleContainer.innerHTML = "";
            questions.forEach((q, i) => {
                let status = i === currentQuestion ? "active" : q.attempted ? "answered" : "not-attempted";
                circleContainer.innerHTML += `<div class="circle ${status}" onclick="jumpToQuestion(${i})">${i + 1}</div>`;
            });
        }

        function jumpToQuestion(index) {
            currentQuestion = index;
            loadQuestion(index);
        }

        function submitQuiz() {
            let confirmation = confirm("Are you sure you want to submit the test?");
            
            if (!confirmation) {
                return; // अगर यूज़र 'Cancel' करता है तो आगे नहीं बढ़ेंगे
            }

            let attempted = 0;
            let notAttempted = 0;
            let score = 0;
            const results = [];

            questions.forEach(q => {
                if (q.attempted) {
                    attempted++;
                    if (q.selected === q.answer) {
                        score++;
                    }
                } else {
                    notAttempted++;
                }
                results.push({ question: q.question, selected: q.selected || "Not Answered", correct: q.answer });
            });

            localStorage.setItem("attempted", attempted);
            localStorage.setItem("notAttempted", notAttempted);
            localStorage.setItem("score", score);
            localStorage.setItem("results", JSON.stringify(results));

            // रिजल्ट देखने से पहले एक और कन्फर्मेशन ले सकते हैं
            let viewResult = confirm("Test submitted successfully! Do you want to view your result?");
            if (viewResult) {
                window.location.href = "/Deshbord/category/test/submit-test.html";
            }
        }
        window.onload = () => {
            loadQuestion(currentQuestion);
        };