const form = document.getElementById("settingsForm");
const resetBtn = document.getElementById("resetBtn");

// Load saved settings from localStorage and apply to inputs & site
function loadSettings() {
  const bgColor = localStorage.getItem("bgColor") || "#f9f9f9";
  const textColor = localStorage.getItem("textColor") || "#333333";
  const linkColor = localStorage.getItem("linkColor") || "#0077b6";
  const fontSize = localStorage.getItem("fontSize") || "16";
  const darkMode = localStorage.getItem("darkMode") === "true";

  document.getElementById("bgColor").value = bgColor;
  document.getElementById("textColor").value = textColor;
  document.getElementById("linkColor").value = linkColor;
  document.getElementById("fontSize").value = fontSize;
  document.getElementById("darkModeToggle").checked = darkMode;

  applySettings({ bgColor, textColor, linkColor, fontSize, darkMode });
}

// Apply styles to document based on settings
function applySettings({ bgColor, textColor, linkColor, fontSize, darkMode }) {
  document.body.style.backgroundColor = darkMode ? "#121212" : bgColor;
  document.body.style.color = darkMode ? "#ddd" : textColor;

  // Change all links
  document.querySelectorAll("a").forEach(a => {
    a.style.color = darkMode ? "#66aaff" : linkColor;
  });

  document.body.style.fontSize = fontSize + "px";
}

// Save settings from form to localStorage
form.addEventListener("submit", e => {
  e.preventDefault();
  const bgColor = form.bgColor.value;
  const textColor = form.textColor.value;
  const linkColor = form.linkColor.value;
  const fontSize = form.fontSize.value;
  const darkMode = form.darkModeToggle.checked;

  localStorage.setItem("bgColor", bgColor);
  localStorage.setItem("textColor", textColor);
  localStorage.setItem("linkColor", linkColor);
  localStorage.setItem("fontSize", fontSize);
  localStorage.setItem("darkMode", darkMode);

  applySettings({ bgColor, textColor, linkColor, fontSize, darkMode });
  alert("Settings saved!");
});

// Reset button clears localStorage and reloads defaults
resetBtn.addEventListener("click", () => {
  localStorage.clear();
  loadSettings();
  alert("Settings reset to default.");
});

// Load settings on page load
loadSettings();
