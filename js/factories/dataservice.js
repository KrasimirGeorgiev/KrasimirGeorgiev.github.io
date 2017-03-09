/*
 * IIFE to keep code safe and outside the global namespace
 */
(function(){

    /*
     * Declaring a factory service as part of the existing turtleFacts Module.
     */
    angular
        .module("turtleFacts")
        .factory("DataService", DataService);

    /*
     * Actual definition of the function used for this factory
     */
    function DataService(){
        /*
         * dataObj is used to simulate getting the data from a backend server
         * The object will hold data which will then be returned to the other
         * factory declared in js/factory/quiz.js which has this factory
         * as a dependency
         */

        var dataObj = {
            turtlesData: turtlesData,
            quizQuestions: quizQuestions,
            correctAnswers: correctAnswers
        };

        // returning the dataObj to anything that uses this factory as a 
        // dependency
        return dataObj;
    }

    /*
     * all of the below variables are simulating data that would typically be 
     * retrieved using an HTTP call to an API endpoint.
     *
     * For simplicity sake this data is hardcoded into the app as this tutorial
     * is about building the angular app, not the backend.
     *
     * The correctAnswers variable would be retrieved when the user has 
     * finished the quiz and would be used to mark the users answers against 
     * the correct answers
     *
     * the quizQuestions is an array of objects, each containing data 
     * pertaining to a single question. This includes:
     *                          - The type of question: image or text
     *                          - Text of the question (aka the actual question)
     *                          - A set of 4 possible answers, either text or 
     *                              images as indicated above
     *                          - a selected flag which will be used to know if
     *                              the user has selected 
     *                          an answer yet.
     *                          - Whether the user got the question correct or 
     *                              not
     *
     * The final turtleData variable hold the information that will be 
     * displayed in the list view when the app loads. This includes the name 
     * and an image of each turtle as well as other information such as the 
     * location and the size of the turtles
     *
     */

    var correctAnswers = [1, 2, 2, 0, 1, 3, 2, 0, 0, 3, 1, 1, 1, 0, 3, 1, 1, 1, 3];

    var quizQuestions  = [
        {
            type: "text",
            text: "Does C# support multiple inheritance?",
            possibilities: [
                {
                    answer: "Yes"
                },
                {
                    answer: "No"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What is the top .NET class that everything is derived from?",
            possibilities: [
                {
                    answer: "Object"
                },
                {
                    answer: "System.Net"
                },
                {
                    answer: "System.Object"
                },
                {
                    answer: "System"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which .NET collection class allows elements to be accessed using a unique key? ",
            possibilities: [
                {
                    answer: "ListDictionary"
                },
                {
                    answer: "Stack"
                },
                {
                    answer: "Hashtable"
                },
                {
                    answer: "ArrayList"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Will the finally block get executed if an exception has not occurred?",
            possibilities: [
                {
                    answer: "Yes"
                },
                {
                    answer: "No"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Can multiple catch blocks be executed for a single try statement?",
            possibilities: [
                {
                    answer: "Yes"
                },
                {
                    answer: "No"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "You can prevent a class from being inherited by another class by using which keyword?",
            possibilities: [
                {
                    answer: "Locked"
                },
                {
                    answer: "Closed"
                },
                {
                    answer: "Shut"
                },
                {
                    answer: "Sealed"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "When do you absolutely have to declare a class as abstract?",
            possibilities: [
                {
                    answer: "When the class itself is inherited from an abstract class, but not all base abstract methods have been overriden."
                },
                {
                    answer: "When at least one of the methods in the class is abstract."
                },
                {
                    answer: "Answers: 1 and 2"
                },
                {
                    answer: "None of the above"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Does .NET support the ability to inherit multiple interfaces?",
            possibilities: [
                {
                    answer: "Yes"
                },
                {
                    answer: "No"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What's the different between an interface and an abstract class?",
            possibilities: [
                {
                    answer: "An abstract class can not be instantiated but can contain code; An interface only contains method definitions, without any code"
                },
                {
                    answer: "An interface can contain code; An abstract class only contains method definitions"
                },
                {
                    answer: "They are the same thing"
                },
                {
                    answer: "None of the above"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What does the keyword \"virtual\" declare for a method or a property?",
            possibilities: [
                {
                    answer: "Seals the mothod/property so no one can inherit it"
                },
                {
                    answer: "It restricts the accessibility"
                },
                {
                    answer: "It \"forbids\" it to be overridden"
                },
                {
                    answer: "It allows it to be overridden in a derived class"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What is method overriding?",
            possibilities: [
                {
                    answer: "Overriding is when you have multiple methods in the same scope, with the same name but different signatures."
                },
                {
                    answer: "Overriding is a principle that allows you to change the functionality of a method in a child class."
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What is method overloading?",
            possibilities: [
                {
                    answer: "Overloading is a principle that allows you to change the functionality of a method in a child class."
                },
                {
                    answer: "Overloading is when you have multiple methods in the same scope, with the same name but different signatures."
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "The C# keyword \"int\" maps to which .NET type?",
            possibilities: [
                {
                    answer: "System.Int16"
                },
                {
                    answer: "System.Int32"
                },
                {
                    answer: "System.Int64"
                },
                {
                    answer: "System.Int128"                   
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which of these statements correctly declares a two-dimensional integer array in C#?",
            possibilities: [
                {
                    answer: "Int[,] myArray;"
                },
                {
                    answer: "Int[][] myArray;"
                },
                {
                    answer: "Int[2] myArray"
                },
                {
                    answer: "System.Array[,] myArray"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "If a method is marked as protected internal, who can access it?",
            possibilities: [
                {
                    answer: "Classes that are both in the same assembly and derived from the declaring class."
                },
                {
                    answer: "Only methods that are in the same class as the method in question."
                },
                {
                    answer: "Internal methods can only be called using reflection."
                },
                {
                    answer: "Classes within the same assembly, and classes derived from the declaring class."
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What is boxing?",
            possibilities: [
                {
                    answer: "Encapsulating an object in a value type."
                },
                {
                    answer: "Encapsulating a copy of a value type in an object"
                },
                {
                    answer: "Encapsulating a copy of an object in a value type"
                },
                {
                    answer: "Encapsulating a value type in an object"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which compiler switch creates an xml file from the xml comments in the files in an assembly?",
            possibilities: [
                {
                    answer: "/text"
                },
                {
                    answer: "/doc"
                },
                {
                    answer: "/xml"
                },
                {
                    answer: "/help"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which of the following operations can you NOT perform on an ADO.NET DataSet?",
            possibilities: [
                {
                    answer: "A DataSet can be synchronized with the database"
                },
                {
                    answer: "A DataSet can be synchronized with a RecordSet"
                },
                {
                    answer: "A DataSet can be converted to XML"
                },
                {
                    answer: "You can infer the schema from a DataSet"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "In Object Oriented Programming, which answer best describes encapsulation?",
            possibilities: [
                {
                    answer: "The conversion of one type of object to another"
                },
                {
                    answer: "The runtime resolution of method calls"
                },
                {
                    answer: "The exposition of data"
                },
                {
                    answer: "The separation of interface and implementation"
                }
            ],
            selected: null,
            correct: null
        },
    ];

    var turtlesData = [
        {
            name: "CSharp",
            type: "Object oriented programming language",
            image_url: "http://sdtimes.com/wp-content/uploads/2015/04/0423.sdt-csharp7.jpg",
            description: "A multi-paradigm programming language encompassing strong typing, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines. It was developed by Microsoft within its .NET initiative and later approved as a standard by Ecma (ECMA-334) and ISO (ISO/IEC 23270:2006). C# is one of the programming languages designed for the Common Language Infrastructure. C# is a general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 7.0 which was released in 2017 along with Visual Studio 2017."
        },
        {
            name: "JavaScript",
            type: "Scripting programming language",
            image_url: "https://udemy-images.udemy.com/course/750x422/495484_385c_3.jpg",
            description: "a high-level, dynamic, untyped, and interpreted programming language. It has been standardized in the ECMAScript language specification. Alongside HTML and CSS, JavaScript is one of the three core technologies of World Wide Web content production; the majority of websites employ it, and all modern Web browsers support it without the need for plug-ins. JavaScript is prototype-based with first-class functions, making it a multi-paradigm language, supporting object-oriented, imperative, and functional programming styles. It has an API for working with text, arrays, dates and regular expressions, but does not include any I/O, such as networking, storage, or graphics facilities, relying for these upon the host environment in which it is embedded."
            
        },
        {
            name: "HTML",
            type: "Markup language",
            image_url: "http://www.coderomeos.org/images/categories/HTML.png",
            description: "HyperText Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS), and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web. Web browsers receive HTML documents from a webserver or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document."
            
        },
        {
            name: "CSS",
            type: "Style sheet language",
            image_url: "https://www.christianheilmann.com/wp-content/uploads/2016/10/css-is-awesome-700x375.jpg",
            description: "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language. Although most often used to set the visual style of web pages and user interfaces written in HTML and XHTML, the language can be applied to any XML document, including plain XML, SVG and XUL, and is applicable to rendering in speech, or on other media. Along with HTML and JavaScript, CSS is a cornerstone technology used by most websites to create visually engaging webpages, user interfaces for web applications, and user interfaces for many mobile applications."            
        }
    ];

})();
