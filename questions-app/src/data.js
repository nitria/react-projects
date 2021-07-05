export const data = [
  {
    generalQuestions: [
      {
        id: 0,
        question:
          "Explain the difference between cookies, session storage, and local storage?",
        answer:
          "LocalStorage as it's called it's local storage for your browsers, it can save up to 10MB, SessionStorage does the same, but as it's name saying, it's session based and will be deleted after closing your browser, also can save less than LocalStorage, like up to 5MB, but Cookies are very tiny data storing in your browser, that can save up 4KB and can be accessed through server or browser both.",
      },
    ],
  },
  {
    htmlQuestions: [
      {
        id: 0,
        question: "What is HTML?",
        answer:
          "HTML - Hypertext Markup Language is the standard markup language for creating web pages and web applications.",
      },
      {
        id: 1,
        question: "What is the difference between span and div?",
        answer: "span is an inline element and div is a block element.",
      },
      {
        id: 2,
        question:
          "What is the difference between an ID selector and the Class selector in Css?",
        answer:
          "IDs are unique. Each element can have only one ID and the HTML page can have only one element with that ID. Classes are not unique. You can use the same class on multiple elements and an element can have multiple classes.",
      },
      {
        id: 3,
        question: "What are data- attributes good for?",
        answer:
          "HTML5 is designed with extensibility in mind for data that should be associated with a particular element but need not have any defined meaning. data-* attributes allow us to store extra information on standard, semantic HTML elements without other hacks such as non-standard attributes, or extra properties on DOM.",
      },
      {
        id: 4,
        question: "How do you serve a page with content in multiple languages?",
        answer:
          "When an HTTP request is made to a server, the requesting user agent usually sends information about language preferences, such as in the Accept-Language header. The server can then use this information to return a version of the document in the appropriate language if such an alternative is available. The returned HTML document should also declare the lang attribute in the <html> tag, such as <html lang='en'>...</html>.",
      },
      {
        id: 5,
        question:
          "Consider HTML5 as an open web platform. What are the building blocks of HTML5?",
        answer:
          "Semantics — Allowing you to describe more precisely what your content is. Connectivity — Allowing you to communicate with the server in new and innovative ways. Offline and storage — Allowing webpages to store data on the client-side locally and operate offline more efficiently. Multimedia — Making video and audio first-class citizens in the Open Web. 2D/3D graphics and effects — Allowing a much more diverse range of presentation options. Performance and integration — Providing greater speed optimization and better usage of computer hardware. Device access — Allowing for the usage of various input and output devices. Styling — Letting authors write more sophisticated themes.",
      },
      {
        id: 6,
        question:
          "Describe the difference between <script>, <script async> and <script defer>.",
        answer:
          "<script> - HTML parsing is blocked, the script is fetched and executed immediately, HTML parsing resumes after the script is executed. <script async> - The script will be fetched in parallel to HTML parsing and executed as soon as it is available (potentially before HTML parsing completes). Use async when the script is independent of any other scripts on the page, for example analytics. <script defer> - The script will be fetched in parallel to HTML parsing and executed when the page has finished parsing. If there are multiple of them, each deferred script is executed in the order they were encoun­tered in the document.",
      },
      {
        id: 7,
        question:
          "Why is it generally a good idea to position CSS <link>s between <head></head> and JS <script>s just before </body>? Do you know any exceptions?",
        answer:
          "Placing <link>s in the <head> allows the page to render progressively which improves user experience. The problem with putting stylesheets near the bottom of the document is that it prohibits progressive rendering in many browsers, including Internet Explorer. Some browsers block rendering to avoid having to repaint elements of the page if their styles change. The user is stuck viewing a blank white page. Placing <scripts>s just before </body> will allow the HTML to be parsed and displayed to the user first because <script>s block HTML parsing while they are being downloaded and executed.</script>.",
      },
      {
        id: 8,
        question:
          "Why you would use a srcset attribute in an image tag? Explain the process the browser uses when evaluating the content of this attribute.",
        answer:
          "Srcset allows you to define a list of different image resources along with size information so that browser can pick the most appropriate image based on the actual device's resolution.",
      },
      {
        id: 9,
        question: "What are empty elements in HTML ?",
        answer:
          "An empty element is an element that cannot have any child nodes.",
      },
    ],
  },
  {
    cssQuestions: [
      {
        id: 0,
        question:
          "What are the differences between visibility hidden and display none?",
        answer:
          "Display: none, removes the element from the normal layout flow and allow other elements to fill in. visibility: hidden tag is rendered, it takes space in the normal flow but doesn't show it.",
      },
      {
        id: 1,
        question:
          "What's the difference between 'resetting' and 'normalizing' CSS? Which would you choose, and why?",
        answer:
          "Normalize.css is mainly a set of styles, based on what its author thought would look good, and make it look consistent across browsers. Reset basically strips styling from elements so you have more control over the styling of everything.",
      },
      {
        id: 2,
        question: "Describe Floats and how they work.",
        answer:
          "The float CSS property places an element on the left or right side of its container, allowing text and inline elements to wrap around it.",
      },
      {
        id: 3,
        question: "Describe z-index and how stacking context is formed",
        answer:
          "he z-index property in CSS controls the vertical stacking order of elements that overlap. z-index only effects elements that have a position value which is not static. Without any z-index value, elements stack in the order that they appear in the DOM (the lowest one down at the same hierarchy level appears on top). Elements with non-static positioning (and their children) will always appear on top of elements with default static positioning, regardless of HTML hierarchy. A stacking context is an element that contains a set of layers. Within a local stacking context, the z-index values of its children are set relative to that element rather than to the document root.",
      },
      {
        id: 4,
        question:
          "How would you approach fixing browser-specific styling issues?",
        answer:
          "    After identifying the issue and the offending browser, use a separate style sheet that only loads when that specific browser is being used. This technique requires server-side rendering though. Use libraries like Bootstrap that already handles these styling issues for you. Use autoprefixer to automatically add vendor prefixes to your code.Use Reset CSS or Normalize.css.",
      },
      {
        id: 5,
        question:
          "What are the different ways to visually hide content (and make it available only for screen readers)?",
        answer:
          "visibility: hidden. However the element is still in the flow of the page, and still takes up space. width: 0; height: 0. Make the element not take up any space on the screen at all, resulting in not showing it. position; absolute; left: -99999px. Position it outside of the screen.text-indent: -9999px. This only works on text within the block elements.",
      },
      {
        id: 6,
        question: "Are you familiar with styling SVG?",
        answer:
          "Yes, there are several ways to color shapes (including specifying attributes on the object) using inline CSS, an embedded CSS section, or an external CSS file. Most SVG you'll find around the web use inline CSS, but there are advantages and disadvantages associated with each type. Basic coloring can be done by setting two attributes on the node: fill and stroke. fill sets the color inside the object and stroke sets the color of the line drawn around the object. You can use the same CSS color naming schemes that you use in HTML",
      },
      {
        id: 7,
        question:
          "Can you give an example of an @media property other than screen?",
        answer:
          "all - for all media type devices, print - for printers, speech - for screenreaders that 'reads' the page out loud, screen - for computer screens, tablets, smart-phones etc.",
      },
    ],
  },
  {
    javascriptQuestions: [
      {
        id: 0,
        question:
          "What's the difference between a variable that is: null, undefined or undeclared?",
        answer:
          "Undeclared variables are created when you assign a value to an identifier that is not previously created using var, let or const. A variable that is undefined is a variable that has been declared, but not assigned a value.A variable that is null will have been explicitly assigned to the null value. It represents no value and is different from undefined in the sense that it has been explicitly assigned.",
      },
    ],
  },
];
