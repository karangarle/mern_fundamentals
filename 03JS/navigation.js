(function () {
  const lessons = [
    "00_learning_roadmap.html",
    "01javascript.html",
    "02datatypes.html",
    "03type_conversion.html",
    "04arithmetic_operators.html",
    "05assignment_operators.html",
    "06increment_decrement.html",
    "07comparison_operators.html",
    "08logical_operators.html",
    "09ternary_operator.html",
    "10conditions.html",
    "11switch.html",
    "12loops.html",
    "13whileLoop.html",
    "14doWhileLoop.html",
    "15forLoop.html",
    "16forInLoop.html",
    "17forOfLoop.html",
    "18functions.html",
    "19scope.html",
    "20callback_functions.html",
    "21tryCatch.html",
    "22throwError.html",
    "23objects.html",
    "24array.html",
    "25arrayMethods.html",
    "26arrayMethods2.html",
    "27string_methods.html",
    "28math_object.html",
    "29date_object.html",
    "30dom.html",
    "31dom_events.html",
    "32es6_template_literals.html",
    "33destructuring.html",
    "34spread.html",
    "35rest_default_params.html",
    "36hoisting.html",
    "37closure.html",
    "38this_keyword.html",
    "39constructor_class.html",
    "40prototype.html",
    "41map_set.html",
    "42json_localStorage.html",
    "43promise.html",
    "44async_await.html",
    "45event_loop.html",
    "46modules.html",
    "47interview_questions.html",
  ];

  const currentFile = window.location.pathname.split("/").pop();
  const currentIndex = lessons.indexOf(currentFile);

  if (currentIndex === -1) {
    return;
  }

  const nav = document.createElement("nav");
  nav.className = "lesson-nav";

  const backLink = document.createElement("a");
  backLink.href = "00_learning_roadmap.html";
  backLink.textContent = "Back to Roadmap";

  const label = document.createElement("span");
  label.textContent = `Lesson ${currentIndex} of ${lessons.length - 1}`;

  const controls = document.createElement("div");

  if (currentIndex > 0) {
    const prevLink = document.createElement("a");
    prevLink.href = lessons[currentIndex - 1];
    prevLink.textContent = "Previous";
    controls.appendChild(prevLink);
  }

  if (currentIndex < lessons.length - 1) {
    const nextLink = document.createElement("a");
    nextLink.href = lessons[currentIndex + 1];
    nextLink.textContent = "Next";
    controls.appendChild(nextLink);
  }

  nav.appendChild(backLink);
  nav.appendChild(label);
  nav.appendChild(controls);
  document.body.prepend(nav);

  const doctype = document.doctype
    ? `<!doctype ${document.doctype.name}>\n`
    : "";
  const pageCode = doctype + document.documentElement.outerHTML;

  const codeSection = document.createElement("section");
  codeSection.className = "code-viewer";

  const codeHeader = document.createElement("div");
  codeHeader.className = "code-viewer-header";

  const codeTitle = document.createElement("h2");
  codeTitle.textContent = "Page Code";

  const codeActions = document.createElement("div");
  codeActions.className = "code-actions";

  const toggleButton = document.createElement("button");
  toggleButton.type = "button";
  toggleButton.textContent = "Show Code";

  const copyButton = document.createElement("button");
  copyButton.type = "button";
  copyButton.textContent = "Copy Code";

  const codeBlock = document.createElement("pre");
  codeBlock.className = "code-block";
  codeBlock.hidden = true;

  const codeElement = document.createElement("code");
  codeElement.textContent = pageCode;
  codeBlock.appendChild(codeElement);

  toggleButton.addEventListener("click", function () {
    codeBlock.hidden = !codeBlock.hidden;
    toggleButton.textContent = codeBlock.hidden ? "Show Code" : "Hide Code";
  });

  copyButton.addEventListener("click", async function () {
    try {
      await navigator.clipboard.writeText(pageCode);
      copyButton.textContent = "Copied";
    } catch (error) {
      const textArea = document.createElement("textarea");
      textArea.value = pageCode;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      copyButton.textContent = "Copied";
    }

    setTimeout(function () {
      copyButton.textContent = "Copy Code";
    }, 1500);
  });

  codeActions.appendChild(toggleButton);
  codeActions.appendChild(copyButton);
  codeHeader.appendChild(codeTitle);
  codeHeader.appendChild(codeActions);
  codeSection.appendChild(codeHeader);
  codeSection.appendChild(codeBlock);
  document.body.appendChild(codeSection);
})();
