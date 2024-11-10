document.addEventListener("DOMContentLoaded", function () {    
    // Load the header
    fetch('header.html')
      .then(response => response.text())
      .then(data => {
        const headerElement = document.getElementById('header');
        if (headerElement) {
            headerElement.innerHTML = data;
        }
      });
  
    // Load the footer
    fetch('footer.html')
      .then(response => response.text())
      .then(data => {
        const footerElement = document.getElementById('footer');
        if (footerElement) {
            footerElement.innerHTML = data;
        }
      });
  });
  