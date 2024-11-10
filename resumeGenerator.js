var resumeForm = document.getElementById("resumeForm");
if (resumeForm) {
    resumeForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission
        // Gather user input
        var name = document.querySelector('input[placeholder="Enter your name"]').value;
        var email = document.querySelector('input[placeholder="Enter your email"]').value;
        var phone = document.querySelector('input[placeholder="Enter your phone number"]').value;
        var linkedin = document.querySelector('input[placeholder="Enter your Linkedin url"]').value;
        var degree = document.querySelector('input[placeholder="Enter your Degree"]').value;
        var uni = document.querySelector('input[placeholder="Enter your Institution"]').value;
        var gpa = document.querySelector('input[placeholder="Enter your GPA (optional)"]').value;
        var date = document.querySelector('input[type="date"]').value;
        var role = document.querySelector('input[placeholder="Job Title"]').value;
        var company = document.querySelector('input[placeholder="Company Name"]').value;
        var responsibilities = document.querySelector('input[placeholder="Responsibilities"]').value;
        var skill1 = document.querySelector('input[placeholder="Skill#1"]').value;
        var skill2 = document.querySelector('input[placeholder="Skill#2"]').value;
        var skill3 = document.querySelector('input[placeholder="Skill#3"]').value;
        var project1 = document.querySelector('input[placeholder="Brief description1"]').value;
        var project2 = document.querySelector('input[placeholder="Brief description2"]').value;
        // Open a new window for the resume
        var newWindow = window.open("", "_blank");
        newWindow.document.write("\n      <html>\n        <head>\n          <title>My Resume</title>\n          <link rel=\"stylesheet\" href=\"resumeTemplate1.css\">\n        </head>\n        <body>\n          <div class=\"container-wrapper\">\n            <div class=\"container\" id=\"resumeContent\">\n              <header>\n                <h1>".concat(name, "</h1>\n                <div class=\"contact\">\n                  <p>Email: ").concat(email, " <br> Phone: ").concat(phone, " <br> LinkedIn: ").concat(linkedin, "</p>\n                </div>\n              </header>\n              <section class=\"section\">\n                <h2>Education</h2>\n                <ul>\n                  <div class=\"degree-date\">\n                    <li><strong>Degree:</strong> ").concat(degree, "</li>\n                    <div class=\"date\">").concat(date, "</div>\n                  </div>\n                  <li><strong>Institution:</strong> ").concat(uni, "</li>\n                  <li>GPA: ").concat(gpa, " (Optional)</li>\n                </ul>\n              </section>\n              <section class=\"section\">\n                <h2>Professional Experience</h2>\n                <ul>\n                  <div class=\"degree-date\">\n                    <li><strong>Role:</strong> ").concat(role, "</li>\n                  </div>\n                  <li><strong>Company:</strong> ").concat(company, "</li>\n                  <li>Responsibilities:\n                    <ul>\n                      <li>").concat(responsibilities, "</li>\n                    </ul>\n                  </li>\n                </ul>\n              </section>\n              <section class=\"section\">\n                <h2>Skills</h2>\n                <div class=\"skills\">\n                  <div class=\"skill\">").concat(skill1, "</div>\n                  <div class=\"skill\">").concat(skill2, "</div>\n                  <div class=\"skill\">").concat(skill3, "</div>\n                </div>\n              </section>\n              <section class=\"section\">\n                <h2>Projects</h2>\n                <ul>\n                  <li>").concat(project1, "</li>\n                  <li>").concat(project2, "</li>\n                </ul>\n              </section>\n              <button id=\"downloadPdf\">Download PDF</button>\n            </div>\n            <script src=\"https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.min.js\"></script>\n            <script>\n              document.getElementById(\"downloadPdf\").addEventListener(\"click\", function() {\n                const resumeContent = document.getElementById(\"resumeContent\");\n                html2pdf().from(resumeContent).save(\"resume.pdf\");\n              });\n            </script>\n          </div>\n        </body>\n      </html>\n    "));
        newWindow.document.close(); // Close the document to ensure the new window finishes loading
    });
}
