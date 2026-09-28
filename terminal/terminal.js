const output = document.getElementById("terminal-output");
const input = document.getElementById("command-input");
const commandDisplay = document.getElementById("command-display");

const commandHistory = [];
let historyIndex = -1;

const commands = {
  help: () => `
available commands:

  whoami       display user information
  about        about me
  interests    current areas of interest
  skills       technologies and tools
  neofetch     system information
  status       current focus
  clear        clear terminal
`,

  whoami: () =>
    "redshift",

  about: () => `
Computer Science student at PES University.

Interested in understanding systems from the
fundamentals and turning that understanding
into practical solutions.
`,

  interests: () => `
Machine Learning
Artificial Intelligence
Data Structures & Algorithms
Computer Networks
Operating Systems
Linux
Open Source
Mathematics
`,

  skills: () => `
Languages:
  C
  Python
  JavaScript
  TypeScript

Tools:
  Linux
  Git
  GitHub
  VS Code

ML:
  PyTorch
  TensorFlow
`,

  neofetch: () => `
          redshift@github
          ----------------
OS        Ubuntu
Shell     bash
Editor    VS Code
Language  C / Python / JS / TS
Focus     ML / Systems / DSA
University PES University
`,

  status: () =>
    "Learning. Building. Improving."
};

const availableCommands = Object.keys(commands);

function writeLine(text, className = "output") {
  const line = document.createElement("div");

  line.className = `line ${className}`;
  line.textContent = text;

  output.appendChild(line);

  output.scrollTop = output.scrollHeight;
}

function typeLine(text, className = "output", speed = 25) {
  return new Promise((resolve) => {
    const line = document.createElement("div");

    line.className = `line ${className}`;

    output.appendChild(line);

    let index = 0;

    const interval = setInterval(() => {
      line.textContent += text[index];

      index++;

      output.scrollTop = output.scrollHeight;

      if (index >= text.length) {
        clearInterval(interval);
        resolve();
      }
    }, speed);
  });
}

function delay(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

function updateCommandDisplay() {
  commandDisplay.textContent = input.value;
}

async function boot() {
  input.disabled = true;

  await typeLine(
    "Initializing environment...",
    "muted",
    20
  );

  await delay(250);

  await typeLine(
    "Loading profile...",
    "muted",
    20
  );

  await delay(250);

  await typeLine(
    "Loading shell...",
    "muted",
    20
  );

  await delay(250);

  await typeLine(
    "Loading modules...",
    "muted",
    20
  );

  await delay(350);

  await typeLine(
    "Ready.",
    "output",
    30
  );

  await delay(400);

  writeLine("");

  await typeLine(
    "Type 'help' to see available commands.",
    "muted",
    20
  );

  writeLine("");

  await typeLine(
    "Available commands:",
    "output",
    20
  );

  writeLine("");

  await typeLine(
    "  whoami       display user information",
    "output",
    10
  );

  await typeLine(
    "  about        about me",
    "output",
    10
  );

  await typeLine(
    "  interests    current areas of interest",
    "output",
    10
  );

  await typeLine(
    "  skills       technologies and tools",
    "output",
    10
  );

  await typeLine(
    "  neofetch     system information",
    "output",
    10
  );

  await typeLine(
    "  status       current focus",
    "output",
    10
  );

  await typeLine(
    "  clear        clear terminal",
    "output",
    10
  );

  writeLine("");

  input.disabled = false;

  input.focus();

  updateCommandDisplay();
}

function execute(command) {
  const trimmed = command.trim().toLowerCase();

  if (!trimmed) {
    return;
  }

  commandHistory.push(command);

  historyIndex = commandHistory.length;

  writeLine(
    `redshift@github:~$ ${command}`,
    "command"
  );

  if (trimmed === "clear") {
    output.innerHTML = "";
    return;
  }

  if (commands[trimmed]) {
    writeLine(commands[trimmed]());
    return;
  }

  writeLine(
    `command not found: ${trimmed}. Type "help" for available commands.`,
    "muted"
  );
}

input.addEventListener("input", () => {
  updateCommandDisplay();
});

input.addEventListener("keydown", (event) => {

  if (event.key === "Enter") {

    execute(input.value);

    input.value = "";

    updateCommandDisplay();

    return;
  }

  if (event.key === "Tab") {

    event.preventDefault();

    const current =
      input.value.trim().toLowerCase();

    if (!current) {
      return;
    }

    const matches =
      availableCommands.filter(
        command =>
          command.startsWith(current)
      );

    if (matches.length === 1) {

      input.value = matches[0];

      updateCommandDisplay();
    }

    return;
  }

  if (event.key === "ArrowUp") {

    event.preventDefault();

    if (commandHistory.length === 0) {
      return;
    }

    historyIndex =
      Math.max(
        0,
        historyIndex - 1
      );

    input.value =
      commandHistory[historyIndex];

    updateCommandDisplay();

    return;
  }

  if (event.key === "ArrowDown") {

    event.preventDefault();

    if (commandHistory.length === 0) {
      return;
    }

    historyIndex++;

    if (
      historyIndex >=
      commandHistory.length
    ) {

      historyIndex =
        commandHistory.length;

      input.value = "";

      updateCommandDisplay();

      return;
    }

    input.value =
      commandHistory[historyIndex];

    updateCommandDisplay();
  }
});

document.addEventListener("click", () => {
  if (!input.disabled) {
    input.focus();
  }
});

boot();