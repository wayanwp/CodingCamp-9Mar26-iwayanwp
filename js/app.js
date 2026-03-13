// Main application initialization

// Initialize ThemeManager
const themeManager = new ThemeManager();

// Initialize theme before page renders to prevent flash
themeManager.initialize();

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Wire up theme toggle button
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      themeManager.toggleTheme();
    });
  }
  
  // Initialize other app features here
  console.log('App initialized with theme:', themeManager.currentTheme);
});
