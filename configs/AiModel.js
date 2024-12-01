// const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require("@google/generative-ai");

// const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
// const genAI = new GoogleGenerativeAI(apiKey);

// const model = genAI.getGenerativeModel({
//   model: "gemini-1.5-flash",
// });

// export const generationConfig = {
//   temperature: 1,
//   topP: 0.95,
//   topK: 40,
//   maxOutputTokens: 8192,
//   responseMimeType: "application/json",
// };

// export const generateCourseOutline = async (courseId, topic, courseType, difficultyLevel) => {
//   try {
//     const courseOutlineAIModel = await model.startChat({
//       generationConfig,
//       history: [
//         {
//           role: "user",
//           parts: [
//             { text: `Generate a study material for ${topic} for ${courseType} and level of difficulty will be ${difficultyLevel}\nwith summary of courses, list of chapters along with summary for each chapter, Topic list in each chapter, All result in JSON format.` },
//           ],
//         },
//         {
//           role: "model",
//           parts: [
//             { text: `{
//               "courseTitle": "${topic} for ${courseType}",
//               "difficulty": "${difficultyLevel}",
//               "chapters": [...],
//               "examTips": [...]
//             }` },
//           ],
//         },
//       ],
//     });

//     // Assuming the response is in JSON format
//     const result = JSON.parse(courseOutline.response.text());
//     console.log(result); // Process or return the result
//     return result;
//   } catch (error) {
//     console.error("Error generating course outline:", error);
//     return { error: "Failed to generate course outline" };
//   }
// };



const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

  export const courseOutlineAIModel = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "Generate a study material for Java for Java and level of difficulty will be Hard with summary of courses, list of chapters along with summary for each chapter, Topic list in each chapter, All result in JSON format."},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n{\n  \"courseTitle\": \"Advanced Java Programming\",\n  \"difficulty\": \"Hard\",\n  \"courseSummary\": \"This course delves into the advanced concepts and intricacies of Java programming, building upon a strong foundational understanding.  It covers topics crucial for developing high-performance, scalable, and robust applications.  Students will explore design patterns, concurrency, JVM internals, and advanced frameworks, equipping them to tackle complex real-world challenges.\",\n  \"chapters\": [\n    {\n      \"chapterTitle\": \"Advanced Concurrency and Multithreading\",\n      \"chapterSummary\": \"This chapter explores advanced techniques in Java concurrency, going beyond basic threads and synchronization.  It delves into complex scenarios, deadlock avoidance, and advanced concurrency utilities.\",\n      \"topics\": [\n        \"Concurrent Collections (ConcurrentHashMap, BlockingQueue, etc.)\",\n        \"Advanced Synchronization Techniques (ReadWriteLock, Semaphore, CountDownLatch)\",\n        \"Deadlock Detection and Prevention\",\n        \"Thread Pools and Executor Framework\",\n        \"Fork/Join Framework\",\n        \"CompletableFuture and Reactive Programming Concepts\"\n      ]\n    },\n    {\n      \"chapterTitle\": \"JVM Internals and Performance Tuning\",\n      \"chapterSummary\": \"This chapter provides an in-depth understanding of the Java Virtual Machine (JVM), its architecture, garbage collection mechanisms, and performance optimization strategies.\",\n      \"topics\": [\n        \"JVM Architecture (Class Loading, Runtime Data Areas)\",\n        \"Garbage Collection Algorithms (Mark and Sweep, G1GC, ZGC)\",\n        \"Memory Management and Heap Tuning\",\n        \"Performance Monitoring and Profiling Tools (JProfiler, YourKit)\",\n        \"Java Flight Recorder and Mission Control\",\n        \"Understanding JVM Flags and Optimizations\"\n      ]\n    },\n    {\n      \"chapterTitle\": \"Design Patterns and Software Architecture\",\n      \"chapterSummary\": \"This chapter explores various design patterns and architectural styles to build robust and maintainable Java applications. It emphasizes practical application and choosing the right pattern for specific scenarios.\",\n      \"topics\": [\n        \"Creational Patterns (Factory, Singleton, Builder)\",\n        \"Structural Patterns (Adapter, Decorator, Facade)\",\n        \"Behavioral Patterns (Observer, Strategy, Template Method)\",\n        \"Microservices Architecture\",\n        \"Event-Driven Architecture\",\n        \"Application of Design Principles (SOLID principles)\"\n      ]\n    },\n    {\n      \"chapterTitle\": \"Advanced Java Frameworks and Libraries\",\n      \"chapterSummary\": \"This chapter explores advanced Java frameworks and libraries beyond the basics, focusing on their intricacies and practical applications in building complex systems.\",\n      \"topics\": [\n        \"Spring Framework (Advanced features like AOP, transactions, security)\",\n        \"Hibernate ORM Framework (Advanced mapping techniques, optimization)\",\n        \"Reactive Programming with Project Reactor or RxJava\",\n        \"Testing Frameworks (JUnit, Mockito, advanced testing techniques)\",\n        \"Working with NoSQL Databases (MongoDB, Cassandra)\",\n        \"Building RESTful APIs with Spring Boot\"\n      ]\n    },\n    {\n      \"chapterTitle\": \"Security in Java Applications\",\n      \"chapterSummary\": \"This chapter covers various security aspects critical to building secure Java applications, including authentication, authorization, and data protection.\",\n      \"topics\": [\n        \"Authentication and Authorization Mechanisms (OAuth 2.0, JWT)\",\n        \"Secure Coding Practices\",\n        \"Data Encryption and Decryption (AES, RSA)\",\n        \"SQL Injection Prevention\",\n        \"Cross-Site Scripting (XSS) Prevention\",\n        \"Implementing Secure Web Applications (HTTPS, SSL Certificates)\"\n      ]\n    }\n  ]\n}\n```\n"},
        ],
      },
    ],
  });

  export const generateNotesAiModel = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "Generate exam material detail content for each chapter , Make sure to include all topic points in very depth and detailed, also add short and important points in the content, make sure to give content in HTML format(Do not add HTMLKL,Head,Body,title tag),title should be of h2 , The chapters:\n{\n      \"chapterTitle\": \"Advanced Data Structures and Algorithms\",\n      \"chapterSummary\": \"This chapter explores advanced data structures beyond basic lists and dictionaries, and delves into complex algorithms and their Python implementations.\",\n      \"topics\": [\n        \"Trie data structure and implementation\",\n        \"Suffix trees and applications\",\n        \"Advanced graph algorithms (shortest path, minimum spanning tree)\",\n        \"Dynamic programming techniques and optimization\",\n        \"Amortized analysis of algorithms\",\n        \"Space and time complexity analysis\"\n      ]\n    }\n"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```html\n<h2>Advanced Data Structures and Algorithms</h2>\n\n<h3>Trie Data Structure and Implementation</h3>\n<p>This section covers the Trie (prefix tree) data structure, a tree-like structure used for efficient retrieval of keys in a set, often with applications in auto-completion and spell-checking.  The key characteristics are explored in detail:</p>\n<ul>\n  <li><strong>Basic Trie Structure:</strong> Nodes representing prefixes, with children nodes for each character extension.  Each node may store additional information, such as end-of-word markers.</li>\n  <li><strong>Implementation Details:</strong>  Discussion of Python implementations using dictionaries or classes, focusing on insertion, search, and deletion operations.  Code examples illustrating these operations are provided.</li>\n  <li><strong>Space and Time Complexity:</strong> Analysis of space and time complexities for various operations, considering worst-case and average-case scenarios. The influence of branching factor will be examined.</li>\n  <li><strong>Applications:</strong>  Detailed examination of real-world use cases, such as auto-complete suggestions in search engines, spell checkers, and IP routing tables. </li>\n  <li><strong>Variations:</strong> Brief exploration of variations like compressed tries and ternary search tries, highlighting their advantages and disadvantages. </li>\n</ul>\n<strong>Important Points:</strong> Tries are highly efficient for prefix-based searches.  Space complexity can be high for large datasets with many common prefixes.\n\n\n<h3>Suffix Trees and Applications</h3>\n<p>Suffix trees, also known as suffix tries, are powerful data structures that store all suffixes of a string. This section focuses on:</p>\n<ul>\n  <li><strong>Construction Algorithms:</strong>  Discussion of Ukkonen's algorithm (a linear-time algorithm) and other commonly used construction techniques.  Conceptual overview rather than detailed implementation is prioritized.</li>\n  <li><strong>Properties of Suffix Trees:</strong>  Explanation of key properties, such as unique paths representing suffixes, and the relationship between substrings and paths within the tree.</li>\n  <li><strong>Applications:</strong>  Detailed exploration of applications including pattern matching, longest common substring/subsequence problems, finding repetitions in strings, and bioinformatics applications (e.g., gene sequencing).</li>\n  <li><strong>Space and Time Complexity:</strong> Analysis of space and time complexities for suffix tree construction and searching.</li>\n</ul>\n<strong>Important Points:</strong>  Suffix trees offer linear-time pattern matching.  Construction can be computationally intensive, but the benefits outweigh the costs for many applications.\n\n\n<h3>Advanced Graph Algorithms (Shortest Path, Minimum Spanning Tree)</h3>\n<p>This section covers advanced graph algorithms beyond basic traversal:</p>\n<ul>\n  <li><strong>Shortest Path Algorithms:</strong>  Detailed explanation of Dijkstra's algorithm (for non-negative edge weights), Bellman-Ford algorithm (handling negative edge weights), and the A* search algorithm (heuristic-based).</li>\n  <li><strong>Minimum Spanning Tree Algorithms:</strong>  Detailed exploration of Prim's algorithm and Kruskal's algorithm, with comparisons of their performance characteristics.</li>\n  <li><strong>Implementation Details:</strong>  Python implementations of these algorithms using adjacency matrices and adjacency lists, emphasizing efficiency considerations.</li>\n  <li><strong>Applications:</strong>  Real-world applications in network routing, transportation planning, and circuit design.</li>\n  <li><strong>Algorithm Comparisons:</strong>  Comparison of the different algorithms, including their time and space complexities, and suitability for different types of graphs.</li>\n</ul>\n<strong>Important Points:</strong> Dijkstra's algorithm is optimal for non-negative weights. Bellman-Ford detects negative cycles.  Prim's and Kruskal's algorithms both find minimum spanning trees efficiently.\n\n\n<h3>Dynamic Programming Techniques and Optimization</h3>\n<p>This section delves into the power of dynamic programming:</p>\n<ul>\n  <li><strong>Principles of Dynamic Programming:</strong>  Detailed explanation of the overlapping subproblems and optimal substructure properties that characterize problems amenable to dynamic programming.</li>\n  <li><strong>Memoization and Tabulation:</strong>  Detailed comparison and contrast of top-down (memoization) and bottom-up (tabulation) approaches to dynamic programming implementation.</li>\n  <li><strong>Example Problems:</strong>  In-depth analysis and implementation of classic dynamic programming problems like the knapsack problem, longest common subsequence, and sequence alignment.</li>\n  <li><strong>Optimization Techniques:</strong>  Exploration of techniques to optimize dynamic programming solutions, such as space optimization and algorithm-specific enhancements.</li>\n</ul>\n<strong>Important Points:</strong> Dynamic programming trades space for time.  Careful selection between memoization and tabulation can impact efficiency.\n\n\n<h3>Amortized Analysis of Algorithms</h3>\n<p>This section covers amortized analysis, a technique for analyzing the average performance of a sequence of operations:</p>\n<ul>\n  <li><strong>Aggregate Method:</strong>  Explanation of the aggregate method, where the total cost of a sequence of operations is analyzed and divided by the number of operations.</li>\n  <li><strong>Accounting Method:</strong>  Explanation of the accounting method, where a cost is assigned to each operation, potentially with \"credit\" saved for future operations.</li>\n  <li><strong>Potential Method:</strong>  Explanation of the potential method, which uses a potential function to track the \"potential energy\" of a data structure.</li>\n  <li><strong>Example Analyses:</strong>  Application of these methods to analyze the amortized cost of operations on dynamic arrays and other data structures.</li>\n</ul>\n<strong>Important Points:</strong> Amortized analysis provides a more realistic picture of algorithm performance than worst-case analysis alone.\n\n\n<h3>Space and Time Complexity Analysis</h3>\n<p>This section revisits and expands on the fundamental concepts of space and time complexity:</p>\n<ul>\n  <li><strong>Big O Notation:</strong>  Review and reinforcement of Big O notation, including asymptotic analysis and common complexity classes (e.g., O(1), O(log n), O(n), O(n log n), O(n^2)).</li>\n  <li><strong>Space Complexity Analysis:</strong>  Detailed discussion of how to analyze the space requirements of algorithms, considering both auxiliary space and space used by the input.</li>\n  <li><strong>Time Complexity Analysis:</strong>  Detailed discussion of how to analyze the time requirements of algorithms, focusing on the dominant operations and their frequency.</li>\n  <li><strong>Analyzing Recursive Algorithms:</strong>  Techniques for analyzing the time and space complexity of recursive algorithms using recurrence relations.</li>\n  <li><strong>Best, Average, and Worst-Case Analysis:</strong>  Clear distinctions between best-case, average-case, and worst-case scenarios and their implications for algorithm choice.</li>\n</ul>\n<strong>Important Points:</strong> Big O notation describes the growth rate of an algorithm's resource consumption.  Accurate complexity analysis is crucial for selecting the right algorithm for a given problem.\n```\n"},
        ],
      },
    ],
  });

  // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
  // console.log(result.response.text());