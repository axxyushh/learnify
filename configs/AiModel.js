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
          {text: "Generate exam material detail content for each chapter , Make sure to include all topic points in depth and detailed in the content, make sure to give content in HTML format(Do not add HTMLKL,Head,Body,title tag),title should be of h2 The chapters: \n{\n      \"chapterTitle\": \"Advanced Data Structures and Algorithms\",\n      \"chapterSummary\": \"This chapter explores advanced data structures beyond basic lists and dictionaries, and delves into complex algorithms and their Python implementations.\",\n      \"topics\": [\n        \"Trie data structure and implementation\",\n        \"Suffix trees and applications\",\n        \"Advanced graph algorithms (shortest path, minimum spanning tree)\",\n        \"Dynamic programming techniques and optimization\",\n        \"Amortized analysis of algorithms\",\n        \"Space and time complexity analysis\"\n      ]\n    },\n"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```html\n<h2>Advanced Data Structures and Algorithms</h2>\n\n<h3>Trie Data Structure and Implementation</h3>\n<p>This section covers the Trie data structure, a tree-like structure used for efficient retrieval of keys in a set (often strings).  We will explore:</p>\n<ul>\n  <li><strong>Trie Definition and Properties:</strong>  A detailed explanation of the Trie's structure, including nodes, edges, and the representation of keys.  We will discuss the advantages of Tries over other data structures like hash tables for prefix-based searches.</li>\n  <li><strong>Trie Implementation in Python:</strong>  Practical implementation using classes and methods. This will include code examples demonstrating insertion, search, and deletion operations.  Different implementation strategies (using dictionaries or lists for children) will be compared.</li>\n  <li><strong>Applications of Tries:</strong>  Real-world examples of Trie usage, such as autocomplete systems, spell checkers, and IP routing tables.  We will analyze the efficiency of Tries in these contexts.</li>\n  <li><strong>Variations of Tries:</strong>  A brief overview of different Trie variations, such as Patricia Tries (compressed Tries) and Ternary Search Tries, and their performance implications.</li>\n</ul>\n\n<h3>Suffix Trees and Applications</h3>\n<p>This section introduces Suffix Trees, a powerful data structure used for string pattern matching and other string-related problems.  The content will cover:</p>\n<ul>\n  <li><strong>Suffix Tree Construction:</strong>  Discussion of Ukkonen's algorithm (or a simplified version) for efficient suffix tree construction.  The algorithm's steps will be explained with examples.</li>\n  <li><strong>Suffix Tree Properties:</strong>  Explanation of key properties of suffix trees, such as their compact representation of all suffixes of a string.</li>\n  <li><strong>Pattern Matching with Suffix Trees:</strong>  Detailed explanation of how to use a suffix tree to efficiently find occurrences of a pattern within a text string.  Time complexity analysis will be included.</li>\n  <li><strong>Applications of Suffix Trees:</strong>  Exploration of various applications, such as longest common substring, longest repeated substring, approximate string matching, and bioinformatics problems.</li>\n</ul>\n\n\n<h3>Advanced Graph Algorithms (Shortest Path, Minimum Spanning Tree)</h3>\n<p>This section delves into advanced graph algorithms, focusing on:</p>\n<ul>\n  <li><strong>Shortest Path Algorithms:</strong>  Detailed explanation of Dijkstra's algorithm and the Bellman-Ford algorithm.  We will compare their time complexities and discuss their suitability for different types of graphs (weighted/unweighted, directed/undirected).</li>\n  <li><strong>Minimum Spanning Tree Algorithms:</strong>  In-depth coverage of Prim's algorithm and Kruskal's algorithm.  We will discuss their time complexities and compare their performance characteristics.</li>\n  <li><strong>Implementation Details:</strong>  Python code implementations of Dijkstra's, Bellman-Ford, Prim's, and Kruskal's algorithms will be provided and explained.</li>\n  <li><strong>Applications:</strong>  Real-world applications of shortest path and minimum spanning tree algorithms, such as network routing, transportation planning, and circuit design.</li>\n</ul>\n\n\n<h3>Dynamic Programming Techniques and Optimization</h3>\n<p>This section explores dynamic programming, a powerful algorithmic paradigm for solving optimization problems.</p>\n<ul>\n  <li><strong>Principle of Optimality:</strong>  A thorough explanation of the core concept underlying dynamic programming.</li>\n  <li><strong>Memoization and Tabulation:</strong>  Detailed comparison and contrast of these two common dynamic programming approaches, with code examples illustrating each method.</li>\n  <li><strong>Classic Dynamic Programming Problems:</strong>  In-depth analysis and solution of classic problems such as the knapsack problem, the longest common subsequence problem, and the edit distance problem.</li>\n  <li><strong>Optimization Strategies:</strong>  Discussion of techniques to optimize dynamic programming solutions, such as space optimization and reducing redundant computations.</li>\n</ul>\n\n\n<h3>Amortized Analysis of Algorithms</h3>\n<p>This section focuses on amortized analysis, a technique used to analyze the average time complexity of a sequence of operations.</p>\n<ul>\n  <li><strong>Aggregate Method:</strong>  Explanation of the aggregate method for amortized analysis, with examples.</li>\n  <li><strong>Accounting Method:</strong>  Explanation of the accounting method, including the concept of \"prepaying\" for expensive operations.</li>\n  <li><strong>Potential Method:</strong>  Explanation of the potential method, a more general approach to amortized analysis.</li>\n  <li><strong>Examples:</strong>  Analysis of amortized time complexity for data structures like dynamic arrays and hash tables.</li>\n</ul>\n\n\n<h3>Space and Time Complexity Analysis</h3>\n<p>This section reviews and expands upon space and time complexity analysis, crucial for evaluating algorithm efficiency.</p>\n<ul>\n  <li><strong>Big O Notation:</strong>  A detailed review of Big O notation and its significance in expressing algorithm complexity.</li>\n  <li><strong>Space Complexity:</strong>  Analyzing the space requirements of algorithms and data structures, including auxiliary space.</li>\n  <li><strong>Time Complexity:</strong>  Analyzing the time requirements of algorithms, focusing on best-case, average-case, and worst-case scenarios.</li>\n  <li><strong>Analyzing Recursive Algorithms:</strong>  Techniques for analyzing the time and space complexity of recursive algorithms using recurrence relations.</li>\n  <li><strong>Amortized Analysis Revisited:</strong>  How amortized analysis relates to overall time complexity.</li>\n\n</ul>\n```\n"},
        ],
      },
    ],
  });


  export  const GenerateStudyTypeContentAiModel = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "Generate the Flashcard on topic: Flutter Fundamentals, User Interface(UI) development, Basic App Navigation in JSON format with front back content, Maximum 15."},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n[\n  {\n    \"front\": \"What is a Widget in Flutter?\",\n    \"back\": \"The fundamental building block of Flutter UI. Everything you see on the screen is a widget.\"\n  },\n  {\n    \"front\": \"What are the two main types of widgets?\",\n    \"back\": \"StatelessWidget and StatefulWidget.\"\n  },\n  {\n    \"front\": \"Explain the difference between StatelessWidget and StatefulWidget.\",\n    \"back\": \"StatelessWidget: immutable, doesn't change after creation. StatefulWidget: mutable, can update its UI.\"\n  },\n  {\n    \"front\": \"What is the purpose of the `build()` method?\",\n    \"back\": \"It describes the UI of a widget based on its current state. Called whenever a widget needs to be redrawn.\"\n  },\n  {\n    \"front\": \"Name three common layout widgets.\",\n    \"back\": \"Row, Column, and Container.\"\n  },\n  {\n    \"front\": \"What is the role of a `Container` widget?\",\n    \"back\": \"Provides padding, margin, background color, and other styling to its child widget(s).\"\n  },\n  {\n    \"front\": \"How do you add a Text widget to the UI?\",\n    \"back\": \"Using the `Text()` constructor, specifying the text as a string argument.\"\n  },\n  {\n    \"front\": \"What widget is typically used for images?\",\n    \"back\": \"Image.network() or Image.asset()\"\n  },\n  {\n    \"front\": \"What is the `MaterialApp` widget?\",\n    \"back\": \"The root widget for most Flutter apps, providing Material Design theming and navigation.\"\n  },\n  {\n    \"front\": \"How to navigate to a new screen using `Navigator`?\",\n    \"back\": \"Use `Navigator.push()` to push a new route onto the navigation stack and `Navigator.pop()` to return.\"\n  },\n  {\n    \"front\": \"What is a Route in Flutter Navigation?\",\n    \"back\": \"A Route represents a single screen or page in your app's navigation.\"\n  },\n  {\n    \"front\": \"What is the purpose of a `Scaffold` widget?\",\n    \"back\": \"Provides a basic visual layout structure for a Material Design app, including app bar, body, and floating action button.\"\n  },\n  {\n    \"front\": \"How to pass data between screens during navigation?\",\n    \"back\": \"Use arguments with `Navigator.push()` and receive them in the new screen's constructor.\"\n  },\n  {\n    \"front\": \"What is a `Key` in Flutter?\",\n    \"back\": \"Used to uniquely identify widgets, allowing Flutter to efficiently update the UI.  Useful when using dynamic lists or animating widgets.\"\n  },\n  {\n    \"front\": \"What is the difference between `setState()` and `rebuild()`?\",\n    \"back\": \"`setState()` triggers a rebuild of the StatefulWidget. `rebuild()` is called internally by Flutter; you don't directly call it.\"\n  }\n]\n```\n"},
        ],
      },
    ],
  });




  // export const chatSession = model.startChat({
  //   generationConfig,
  //   history: [
  //     {
  //       role: "user",
  //       parts: [
  //         {text: "Generate the Flashcard on topic: Flutter Fundamentals, User Interface(UI) development, Basic App Navigation in JSON format with front back content, Maximum 15."},
  //       ],
  //     },
  //     {
  //       role: "model",
  //       parts: [
  //         {text: "```json\n[\n  {\n    \"front\": \"What is a Widget in Flutter?\",\n    \"back\": \"The fundamental building block of Flutter UI. Everything you see on the screen is a widget.\"\n  },\n  {\n    \"front\": \"What are the two main types of widgets?\",\n    \"back\": \"StatelessWidget and StatefulWidget.\"\n  },\n  {\n    \"front\": \"Explain the difference between StatelessWidget and StatefulWidget.\",\n    \"back\": \"StatelessWidget: immutable, doesn't change after creation. StatefulWidget: mutable, can update its UI.\"\n  },\n  {\n    \"front\": \"What is the purpose of the `build()` method?\",\n    \"back\": \"It describes the UI of a widget based on its current state. Called whenever a widget needs to be redrawn.\"\n  },\n  {\n    \"front\": \"Name three common layout widgets.\",\n    \"back\": \"Row, Column, and Container.\"\n  },\n  {\n    \"front\": \"What is the role of a `Container` widget?\",\n    \"back\": \"Provides padding, margin, background color, and other styling to its child widget(s).\"\n  },\n  {\n    \"front\": \"How do you add a Text widget to the UI?\",\n    \"back\": \"Using the `Text()` constructor, specifying the text as a string argument.\"\n  },\n  {\n    \"front\": \"What widget is typically used for images?\",\n    \"back\": \"Image.network() or Image.asset()\"\n  },\n  {\n    \"front\": \"What is the `MaterialApp` widget?\",\n    \"back\": \"The root widget for most Flutter apps, providing Material Design theming and navigation.\"\n  },\n  {\n    \"front\": \"How to navigate to a new screen using `Navigator`?\",\n    \"back\": \"Use `Navigator.push()` to push a new route onto the navigation stack and `Navigator.pop()` to return.\"\n  },\n  {\n    \"front\": \"What is a Route in Flutter Navigation?\",\n    \"back\": \"A Route represents a single screen or page in your app's navigation.\"\n  },\n  {\n    \"front\": \"What is the purpose of a `Scaffold` widget?\",\n    \"back\": \"Provides a basic visual layout structure for a Material Design app, including app bar, body, and floating action button.\"\n  },\n  {\n    \"front\": \"How to pass data between screens during navigation?\",\n    \"back\": \"Use arguments with `Navigator.push()` and receive them in the new screen's constructor.\"\n  },\n  {\n    \"front\": \"What is a `Key` in Flutter?\",\n    \"back\": \"Used to uniquely identify widgets, allowing Flutter to efficiently update the UI.  Useful when using dynamic lists or animating widgets.\"\n  },\n  {\n    \"front\": \"What is the difference between `setState()` and `rebuild()`?\",\n    \"back\": \"`setState()` triggers a rebuild of the StatefulWidget. `rebuild()` is called internally by Flutter; you don't directly call it.\"\n  }\n]\n```\n"},
  //       ],
  //     },
  //   ],
  // });

  // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
  // console.log(result.response.text());