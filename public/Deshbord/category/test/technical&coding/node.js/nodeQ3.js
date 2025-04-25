const questions = [
        { num: 51, question: "51 What does the 'os' module in Node.js provide?", options: ["System-related utility methods", "Network tools", "File permissions", "User authentication"], answer: "System-related utility methods", attempted: false, selected: "" },
        { num: 52, question: "52 Which method is used to write to a file asynchronously?", options: ["fs.writeFile", "fs.writeFileSync", "fs.save", "fs.append"], answer: "fs.writeFile", attempted: false, selected: "" },
        { num: 53, question: "53 Which method appends data to a file in Node.js?", options: ["fs.appendFile", "fs.writeFile", "fs.concatFile", "fs.addFile"], answer: "fs.appendFile", attempted: false, selected: "" },
        { num: 54, question: "54 How do you listen to an event in Node.js?", options: ["emitter.on('event', callback)", "event.listen()", "event.subscribe()", "emitter.add()"], answer: "emitter.on('event', callback)", attempted: false, selected: "" },
        { num: 55, question: "55 What is the first argument passed to a Node.js callback?", options: ["Error", "Result", "Boolean", "Object"], answer: "Error", attempted: false, selected: "" },
        { num: 56, question: "56 What does 'child_process' module do?", options: ["Spawns subprocesses", "Handles sessions", "Manages memory", "Controls users"], answer: "Spawns subprocesses", attempted: false, selected: "" },
        { num: 57, question: "57 What is a stream in Node.js?", options: ["Data flow abstraction", "Database query", "Routing method", "Thread manager"], answer: "Data flow abstraction", attempted: false, selected: "" },
        { num: 58, question: "58 What does 'fs.existsSync(path)' do?", options: ["Checks if file exists", "Deletes a file", "Creates a file", "Appends a file"], answer: "Checks if file exists", attempted: false, selected: "" },
        { num: 59, question: "59 What is the purpose of 'util.promisify()'?", options: ["Converts callback to promise", "Logs output", "Parses JSON", "Stops async functions"], answer: "Converts callback to promise", attempted: false, selected: "" },
        { num: 60, question: "60 Which function executes shell commands?", options: ["exec()", "run()", "launch()", "shell()"], answer: "exec()", attempted: false, selected: "" },
        { num: 61, question: "61 What does 'process.cwd()' return?", options: ["Current working directory", "Node version", "Process memory usage", "Current username"], answer: "Current working directory", attempted: false, selected: "" },
        { num: 62, question: "62 Which stream is used for input in Node.js?", options: ["process.stdin", "fs.read", "input.stream", "event.input"], answer: "process.stdin", attempted: false, selected: "" },
        { num: 63, question: "63 What does the 'readline' module do?", options: ["Reads input line-by-line", "Reads JSON", "Writes to file", "Creates databases"], answer: "Reads input line-by-line", attempted: false, selected: "" },
        { num: 64, question: "64 Which flag runs a Node.js file with experimental modules?", options: ["--experimental-modules", "--modules", "--esm", "--use-esm"], answer: "--experimental-modules", attempted: false, selected: "" },
        { num: 65, question: "65 What does the 'zlib' module provide?", options: ["Compression functionality", "Logging features", "Database support", "Caching support"], answer: "Compression functionality", attempted: false, selected: "" },
        { num: 66, question: "66 What kind of architecture does Node.js use?", options: ["Event-driven, non-blocking I/O", "Multi-threaded", "Blocking I/O", "Client-side scripting"], answer: "Event-driven, non-blocking I/O", attempted: false, selected: "" },
        { num: 67, question: "67 How do you stop a timer created with setInterval?", options: ["clearInterval(timerId)", "stopTimer(timerId)", "cancelInterval(timerId)", "timer.stop()"], answer: "clearInterval(timerId)", attempted: false, selected: "" },
        { num: 68, question: "68 What does 'process.memoryUsage()' return?", options: ["Memory stats", "CPU usage", "RAM speed", "Thread count"], answer: "Memory stats", attempted: false, selected: "" },
        { num: 69, question: "69 What is 'global' in Node.js?", options: ["Global namespace object", "A Node.js file", "A reserved keyword", "A database"], answer: "Global namespace object", attempted: false, selected: "" },
        { num: 70, question: "70 What does 'Buffer' in Node.js represent?", options: ["Raw binary data", "Memory pointer", "Disk storage", "Image format"], answer: "Raw binary data", attempted: false, selected: "" },
        { num: 71, question: "71 What is an IIFE in JavaScript (used in Node)?", options: ["Immediately Invoked Function Expression", "Instance Initial Function Expression", "Internal Import Function Expression", "Injected Inline Function Expression"], answer: "Immediately Invoked Function Expression", attempted: false, selected: "" },
        { num: 72, question: "72 What is the correct way to use a promise?", options: ["promise.then().catch()", "promise.try().catch()", "await.promise()", "resolve.promise()"], answer: "promise.then().catch()", attempted: false, selected: "" },
        { num: 73, question: "73 What does the 'crypto' module handle?", options: ["Cryptographic operations", "User login", "Database encryption", "VPN setup"], answer: "Cryptographic operations", attempted: false, selected: "" },
        { num: 74, question: "74 Which method writes to stdout?", options: ["process.stdout.write()", "console.output()", "fs.write()", "stream.send()"], answer: "process.stdout.write()", attempted: false, selected: "" },
        { num: 75, question: "75 What is 'path.basename()' used for?", options: ["Gets last part of a file path", "Creates a new path", "Deletes a path", "Reads a file"], answer: "Gets last part of a file path", attempted: false, selected: "" },
        { num: 76, question: "76 What is a callback hell?", options: ["Nested callbacks causing messy code", "Memory leak", "Performance bottleneck", "Blocking I/O"], answer: "Nested callbacks causing messy code", attempted: false, selected: "" },
        { num: 77, question: "77 What is the function of 'res.redirect()' in Express?", options: ["Redirects to a different route", "Ends the server", "Logs to console", "Cleans the cache"], answer: "Redirects to a different route", attempted: false, selected: "" },
        { num: 78, question: "78 Which method is used to serve static files in Express?", options: ["express.static()", "express.staticServe()", "express.public()", "express.serveFiles()"], answer: "express.static()", attempted: false, selected: "" },
        { num: 79, question: "79 What does 'res.json()' do in Express?", options: ["Sends JSON response", "Parses JSON input", "Fetches JSON file", "Saves JSON data"], answer: "Sends JSON response", attempted: false, selected: "" },
        { num: 80, question: "80 What does 'app.listen()' do in Express?", options: ["Starts the server", "Adds a route", "Closes the server", "Listens to events"], answer: "Starts the server", attempted: false, selected: "" },
        { num: 81, question: "81 What is 'next(err)' used for in middleware?", options: ["Forward errors to error handler", "Skip to next route", "Log errors only", "Restart the server"], answer: "Forward errors to error handler", attempted: false, selected: "" },
        { num: 82, question: "82 Which npm command shows all globally installed packages?", options: ["npm list -g", "npm global list", "npm all", "npm packages"], answer: "npm list -g", attempted: false, selected: "" },
        { num: 83, question: "83 Which file indicates the dependencies of a project?", options: ["package.json", "node_modules.json", "index.js", "app.config"], answer: "package.json", attempted: false, selected: "" },
        { num: 84, question: "84 Which function creates a new directory in fs module?", options: ["fs.mkdir()", "fs.createDir()", "fs.makeDir()", "fs.newDir()"], answer: "fs.mkdir()", attempted: false, selected: "" },
        { num: 85, question: "85 What is the default port for Node.js apps?", options: ["There is no default", "80", "3000", "5000"], answer: "There is no default", attempted: false, selected: "" },
        { num: 86, question: "86 Which method handles multiple asynchronous operations?", options: ["Promise.all()", "async.parallel()", "callback.join()", "fs.multiple()"], answer: "Promise.all()", attempted: false, selected: "" },
        { num: 87, question: "87 What does 'npm outdated' do?", options: ["Lists outdated packages", "Removes unused packages", "Clears cache", "Updates all packages"], answer: "Lists outdated packages", attempted: false, selected: "" },
        { num: 88, question: "88 What is the purpose of nodemailer?", options: ["Send emails from Node.js", "Validate forms", "Encrypt passwords", "Upload files"], answer: "Send emails from Node.js", attempted: false, selected: "" },
        { num: 89, question: "89 How do you debug a Node.js app?", options: ["node --inspect app.js", "node debug.js", "node inspect.js", "debug node app.js"], answer: "node --inspect app.js", attempted: false, selected: "" },
        { num: 90, question: "90 What is the result of 'typeof module'?", options: ["object", "function", "undefined", "module"], answer: "object", attempted: false, selected: "" },
        { num: 91, question: "91 Which module handles URL parsing in Node.js?", options: ["url", "querystring", "path", "fs"], answer: "url", attempted: false, selected: "" },
        { num: 92, question: "92 What does 'require.resolve()' do?", options: ["Returns the resolved path of a module", "Creates a new module", "Resolves a promise", "Lists dependencies"], answer: "Returns the resolved path of a module", attempted: false, selected: "" },
        { num: 93, question: "93 Which function handles JSON conversion to string?", options: ["JSON.stringify()", "JSON.encode()", "JSON.format()", "JSON.textify()"], answer: "JSON.stringify()", attempted: false, selected: "" },
        { num: 94, question: "94 What does 'EventEmitter.once()' do?", options: ["Listens for a one-time event", "Listens forever", "Stops on error", "Creates a loop"], answer: "Listens for a one-time event", attempted: false, selected: "" },
        { num: 95, question: "95 What is 'cluster.fork()' used for?", options: ["Spawns a new worker process", "Splits a file", "Creates a backup", "Initiates a cron job"], answer: "Spawns a new worker process", attempted: false, selected: "" },
        { num: 96, question: "96 What is a thunk in Node.js?", options: ["A delayed computation", "A routing function", "A type of event", "A database driver"], answer: "A delayed computation", attempted: false, selected: "" },
        { num: 97, question: "97 How can you kill a process in Node.js?", options: ["process.kill(pid)", "process.exit(pid)", "end(pid)", "terminate(pid)"], answer: "process.kill(pid)", attempted: false, selected: "" },
        { num: 98, question: "98 What is the main thread of Node.js called?", options: ["Event loop", "Main loop", "Core process", "Master thread"], answer: "Event loop", attempted: false, selected: "" },
        { num: 99, question: "99 What does the 'timers' module do?", options: ["Provides timer functions", "Creates animations", "Schedules cron jobs", "Logs runtime"], answer: "Provides timer functions", attempted: false, selected: "" },
        { num: 100, question: "100 How do you schedule a job in Node.js?", options: ["Using node-cron", "Using node-job", "Using schedule.js", "Using job-handler"], answer: "Using node-cron", attempted: false, selected: "" }
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