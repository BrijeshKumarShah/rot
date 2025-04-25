const questions = [
        { num: 51, question: "51 What is the role of the V8 engine in Node.js?", options: ["Executes JavaScript code", "Handles HTTP requests", "Provides async I/O", "Manages OS-level threads"], answer: "Executes JavaScript code", attempted: false, selected: "" },
        { num: 52, question: "52 How does Node.js handle concurrency despite being single-threaded?", options: ["Event loop and asynchronous callbacks", "Using multiple threads", "Blocking I/O model", "Separate interpreter instances"], answer: "Event loop and asynchronous callbacks", attempted: false, selected: "" },
        { num: 53, question: "53 Which module allows you to spawn child processes in Node.js?", options: ["child_process", "os", "process", "cluster"], answer: "child_process", attempted: false, selected: "" },
        { num: 54, question: "54 What is the purpose of 'cluster.fork()'?", options: ["Create new worker processes", "Fork memory", "Split arrays", "Create multiple modules"], answer: "Create new worker processes", attempted: false, selected: "" },
        { num: 55, question: "55 What is the benefit of using Streams in Node.js?", options: ["Efficient memory usage for large data", "Faster execution of loops", "Reduced module size", "Easier routing"], answer: "Efficient memory usage for large data", attempted: false, selected: "" },
        { num: 56, question: "56 What does 'zlib' module provide?", options: ["Compression and decompression", "Data encryption", "Path utilities", "Unit testing"], answer: "Compression and decompression", attempted: false, selected: "" },
        { num: 57, question: "57 Which built-in module handles TLS/SSL protocols in Node.js?", options: ["tls", "https", "crypto", "net"], answer: "tls", attempted: false, selected: "" },
        { num: 58, question: "58 What does 'require.resolve()' return?", options: ["Resolved path of a module", "Exports of a module", "Dependency list", "Global object"], answer: "Resolved path of a module", attempted: false, selected: "" },
        { num: 59, question: "59 Which memory area is primarily managed by V8 in Node.js?", options: ["Heap", "Stack", "Call queue", "Thread pool"], answer: "Heap", attempted: false, selected: "" },
        { num: 60, question: "60 What is the significance of the 'libuv' library in Node.js?", options: ["Provides asynchronous I/O", "Executes JavaScript code", "Manages buffers", "Resolves modules"], answer: "Provides asynchronous I/O", attempted: false, selected: "" },
        { num: 61, question: "61 What is a 'tick' in Node.js?", options: ["Single iteration of the event loop", "CPU cycle", "Buffer flush", "Module resolution"], answer: "Single iteration of the event loop", attempted: false, selected: "" },
        { num: 62, question: "62 How does 'process.nextTick()' differ from 'setImmediate()'?", options: ["Executes before any I/O events", "Executes after all I/O", "Runs before script ends", "Blocks event loop"], answer: "Executes before any I/O events", attempted: false, selected: "" },
        { num: 63, question: "63 What is the 'REPL' in Node.js used for?", options: ["Testing and debugging code interactively", "Running production servers", "Parsing logs", "Managing routes"], answer: "Testing and debugging code interactively", attempted: false, selected: "" },
        { num: 64, question: "64 Which event is emitted when a stream finishes reading?", options: ["'end'", "'finish'", "'close'", "'data'"], answer: "'end'", attempted: false, selected: "" },
        { num: 65, question: "65 What are Buffers in Node.js used for?", options: ["Handling binary data", "Managing HTTP routes", "Caching views", "Encrypting passwords"], answer: "Handling binary data", attempted: false, selected: "" },
        { num: 66, question: "66 What is the purpose of the 'crypto' module in Node.js?", options: ["Provide cryptographic functionalities", "Encrypt the event loop", "Secure session storage", "Authenticate JWTs"], answer: "Provide cryptographic functionalities", attempted: false, selected: "" },
        { num: 67, question: "67 What does the 'domain' module do?", options: ["Handles multiple I/O error contexts", "Creates multiple VMs", "Secures app sandbox", "Routes domains"], answer: "Handles multiple I/O error contexts", attempted: false, selected: "" },
        { num: 68, question: "68 How does 'EventEmitter' work in Node.js?", options: ["Allows creation and handling of custom events", "Routes HTTP requests", "Handles promises", "Encrypts user data"], answer: "Allows creation and handling of custom events", attempted: false, selected: "" },
        { num: 69, question: "69 Which Node.js method listens for unhandled promise rejections?", options: ["process.on('unhandledRejection')", "promise.catch()", "error.listen()", "process.once('exit')"], answer: "process.on('unhandledRejection')", attempted: false, selected: "" },
        { num: 70, question: "70 What does 'global' represent in Node.js?", options: ["The global namespace object", "Top of the call stack", "Reserved memory pool", "Module wrapper function"], answer: "The global namespace object", attempted: false, selected: "" },
        { num: 71, question: "71 What is 'vm' module used for in Node.js?", options: ["Run code in a sandboxed context", "Create virtual machines", "Memory optimization", "Process management"], answer: "Run code in a sandboxed context", attempted: false, selected: "" },
        { num: 72, question: "72 What is the difference between 'spawn' and 'exec' in child_process?", options: ["'spawn' streams output, 'exec' buffers it", "'exec' streams output, 'spawn' buffers it", "Both are identical", "Spawn is synchronous"], answer: "'spawn' streams output, 'exec' buffers it", attempted: false, selected: "" },
        { num: 73, question: "73 What is the best way to handle large file uploads in Node.js?", options: ["Use streams to avoid memory overflow", "Load file into memory then parse", "Use JSON parsing", "Use setInterval"], answer: "Use streams to avoid memory overflow", attempted: false, selected: "" },
        { num: 74, question: "74 What does 'process.hrtime()' return?", options: ["High-resolution real time in [seconds, nanoseconds]", "Epoch timestamp", "Total CPU usage", "Thread count"], answer: "High-resolution real time in [seconds, nanoseconds]", attempted: false, selected: "" },
        { num: 75, question: "75 What are WeakRefs used for in Node.js?", options: ["Manage weak references to objects", "Free memory immediately", "Track object equality", "Create circular references"], answer: "Manage weak references to objects", attempted: false, selected: "" },
        { num: 76, question: "76 What does 'NODE_OPTIONS' environment variable allow?", options: ["Pass V8 options to Node.js", "Select npm registry", "Toggle debugging", "Enable CORS"], answer: "Pass V8 options to Node.js", attempted: false, selected: "" },
        { num: 77, question: "77 What is the output of Buffer.from('abc')?", options: ["<Buffer 61 62 63>", "abc", "[97, 98, 99]", "buffer:abc"], answer: "<Buffer 61 62 63>", attempted: false, selected: "" },
        { num: 78, question: "78 What is the purpose of 'util.promisify()'?", options: ["Convert callback-based functions to promises", "Make async code blocking", "Create event listeners", "Write file buffers"], answer: "Convert callback-based functions to promises", attempted: false, selected: "" },
        { num: 79, question: "79 What is the default behavior of uncaught exceptions in Node.js?", options: ["Terminates the process", "Ignores the error", "Logs and continues", "Retries automatically"], answer: "Terminates the process", attempted: false, selected: "" },
        { num: 80, question: "80 How do you monitor memory usage in Node.js?", options: ["process.memoryUsage()", "global.gc()", "vm.usage()", "heap.track()"], answer: "process.memoryUsage()", attempted: false, selected: "" },
        { num: 81, question: "81 What is the main benefit of using 'async_hooks' module?", options: ["Track async resources lifecycle", "Debug global variables", "Encrypt requests", "Measure HTTP latency"], answer: "Track async resources lifecycle", attempted: false, selected: "" },
        { num: 82, question: "82 What does the 'http2' module support?", options: ["HTTP/2 protocol features", "WebSockets", "JWT signing", "GraphQL parsing"], answer: "HTTP/2 protocol features", attempted: false, selected: "" },
        { num: 83, question: "83 How do you prevent event loop blocking in Node.js?", options: ["Avoid long synchronous operations", "Use while(true)", "Block IO intentionally", "Use single thread"], answer: "Avoid long synchronous operations", attempted: false, selected: "" },
        { num: 84, question: "84 Which tool analyzes CPU profiling in Node.js?", options: ["clinic.js", "npm audit", "express-trace", "crypto.perf"], answer: "clinic.js", attempted: false, selected: "" },
        { num: 85, question: "85 What does 'assert' module provide?", options: ["Test invariants in code", "Handle permissions", "Encrypt headers", "Sign cookies"], answer: "Test invariants in code", attempted: false, selected: "" },
        { num: 86, question: "86 Which tool bundles Node.js apps for production?", options: ["webpack", "nodemon", "jshint", "nvm"], answer: "webpack", attempted: false, selected: "" },
        { num: 87, question: "87 What is the primary goal of 'sandboxing' in Node.js?", options: ["Securely execute untrusted code", "Optimize loop performance", "Minimize module size", "Buffer logs"], answer: "Securely execute untrusted code", attempted: false, selected: "" },
        { num: 88, question: "88 Which Node.js core module supports DNS resolution?", options: ["dns", "net", "http", "tls"], answer: "dns", attempted: false, selected: "" },
        { num: 89, question: "89 What does 'require.main === module' check?", options: ["If file is run directly", "Module path validity", "Dependency status", "Cluster master node"], answer: "If file is run directly", attempted: false, selected: "" },
        { num: 90, question: "90 What does 'global.gc()' do?", options: ["Triggers garbage collection (with --expose-gc)", "Clears global cache", "Executes callbacks", "Emits close event"], answer: "Triggers garbage collection (with --expose-gc)", attempted: false, selected: "" },
        { num: 91, question: "91 What is the use of 'trace_events' in Node.js?", options: ["Performance tracing diagnostics", "Set breakpoints", "Enable stream logging", "Debug middleware"], answer: "Performance tracing diagnostics", attempted: false, selected: "" },
        { num: 92, question: "92 Which flag enables ES Modules in Node.js?", options: ["--experimental-modules", "--esm", "--use-es", "--import-module"], answer: "--experimental-modules", attempted: false, selected: "" },
        { num: 93, question: "93 What is the role of the 'timers' module?", options: ["Schedule execution using setTimeout, setInterval", "Manage timestamps", "Control HTTP timeout", "Handle event duration"], answer: "Schedule execution using setTimeout, setInterval", attempted: false, selected: "" },
        { num: 94, question: "94 What is 'heapdump' used for?", options: ["Generate snapshots of memory heap", "Dump logs to disk", "Clear stack trace", "Reallocate buffer memory"], answer: "Generate snapshots of memory heap", attempted: false, selected: "" },
        { num: 95, question: "95 Which API provides performance metrics in Node.js?", options: ["perf_hooks", "metrics", "analyzer", "os.diagnostics"], answer: "perf_hooks", attempted: false, selected: "" },
        { num: 96, question: "96 What is the purpose of using 'http.Agent'?", options: ["Manage connection persistence and reuse", "Route requests", "Track headers", "Optimize sockets"], answer: "Manage connection persistence and reuse", attempted: false, selected: "" },
        { num: 97, question: "97 What does 'process.abort()' do?", options: ["Forcefully crashes the process and core dumps", "Soft exit", "Logs debug info", "Flushes stdout"], answer: "Forcefully crashes the process and core dumps", attempted: false, selected: "" },
        { num: 98, question: "98 How do you manage unhandled exceptions securely?", options: ["Use a centralized error handler and process manager", "Suppress logs", "Restart within same thread", "Use setTimeout"], answer: "Use a centralized error handler and process manager", attempted: false, selected: "" },
        { num: 99, question: "99 What does 'worker_threads' module enable?", options: ["Multi-threading within Node.js", "Child processes with IPC", "TLS-based routing", "Memory cache encryption"], answer: "Multi-threading within Node.js", attempted: false, selected: "" },
        { num: 100, question: "100 Which flag allows debugging Node.js using Chrome DevTools?", options: ["--inspect", "--debug", "--trace", "--analyze"], answer: "--inspect", attempted: false, selected: "" } 
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
