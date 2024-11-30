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

  // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
  // console.log(result.response.text());