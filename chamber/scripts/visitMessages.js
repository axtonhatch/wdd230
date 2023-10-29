document.addEventListener("DOMContentLoaded", function() {
    // Function to calculate the number of days between two dates
    function calculateDaysBetweenDates(date1, date2) {
      const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds
      return Math.round(Math.abs((date1 - date2) / oneDay));
    }
  
    // Get the current date
    const currentDate = new Date();
  
    // Check if localStorage has a visit date
    if (localStorage.getItem("visitDate")) {
      // Get the stored visit date from localStorage
      const storedVisitDate = new Date(localStorage.getItem("visitDate"));
  
      // Calculate the number of days between visits
      const daysDifference = calculateDaysBetweenDates(currentDate, storedVisitDate);
  
      // Display different messages based on the time difference
      const sidebar = document.getElementById("sidebar");
      if (daysDifference === 1) {
        sidebar.textContent = "You last visited 1 day ago.";
      } else if (daysDifference < 1) {
        sidebar.textContent = "Back so soon! Awesome!";
      } else {
        sidebar.textContent = "You last visited " + daysDifference + " days ago.";
      }
    } else {
      // If it's the first visit, set the visit date to the current date
      localStorage.setItem("visitDate", currentDate);
      document.getElementById("sidebar").textContent = "Welcome! Let us know if you have any questions.";
    }
  });
  