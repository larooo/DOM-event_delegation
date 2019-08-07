//  allows you to avoid adding event listeners to specific nodes. Instead the event listener is added to one parent

// document.getElementById("parent-list").addEventListener("click", function(e) {
//   // e.target is the clicked element
//   if (e.target && e.target.nodeName == "LI") {
//     // List item found - Output the ID
//     console.log("List-item", e.target.id.replace("post-", ""), " was clicked");
//   }
// });

document.getElementById("myDiv").addEventListener("click", function(e) {
  if (e.target.matches("a.classA")) {
    console.log(" Anchor element clicked!");
  }
});

//............................................
// you can focus on things over and over and the callback event will never run

document.addEventListener(
  "focus",
  function(e) {
    console.log(e.target.name);
  },
  true //The last argument in addEventListener() is called useCapture. We almost always set it to false.,For events that don’t bubble, set it to true to capture the event anyways.
);
