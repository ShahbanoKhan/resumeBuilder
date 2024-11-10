const resumeForm = document.getElementById("resumeForm") as HTMLFormElement | null;

if (resumeForm) {
  resumeForm.addEventListener("submit", (event: SubmitEvent) => {
    event.preventDefault(); // Prevent default form submission

    // Gather user input
    const name = (document.querySelector('input[placeholder="Enter your name"]') as HTMLInputElement).value;
    const email = (document.querySelector('input[placeholder="Enter your email"]') as HTMLInputElement).value;
    const phone = (document.querySelector('input[placeholder="Enter your phone number"]') as HTMLInputElement).value;
    const linkedin = (document.querySelector('input[placeholder="Enter your Linkedin url"]') as HTMLInputElement).value;
    const degree = (document.querySelector('input[placeholder="Enter your Degree"]') as HTMLInputElement).value;
    const uni = (document.querySelector('input[placeholder="Enter your Institution"]') as HTMLInputElement).value;
    const gpa = (document.querySelector('input[placeholder="Enter your GPA (optional)"]') as HTMLInputElement).value;
    const date = (document.querySelector('input[type="date"]') as HTMLInputElement).value;
    const role = (document.querySelector('input[placeholder="Job Title"]') as HTMLInputElement).value;
    const company = (document.querySelector('input[placeholder="Company Name"]') as HTMLInputElement).value;
    const responsibilities = (document.querySelector('input[placeholder="Responsibilities"]') as HTMLInputElement).value;
    const skill1 = (document.querySelector('input[placeholder="Skill#1"]') as HTMLInputElement).value;
    const skill2 = (document.querySelector('input[placeholder="Skill#2"]') as HTMLInputElement).value;
    const skill3 = (document.querySelector('input[placeholder="Skill#3"]') as HTMLInputElement).value;
    const project1 = (document.querySelector('input[placeholder="Brief description1"]') as HTMLInputElement).value;
    const project2 = (document.querySelector('input[placeholder="Brief description2"]') as HTMLInputElement).value;

    // Open a new window for the resume
    const newWindow = window.open("", "_blank");
    newWindow!.document.write(`
      <html>
        <head>
          <title>My Resume</title>
          <link rel="stylesheet" href="resumeTemplate1.css">
        </head>
        <body>
          <div class="container-wrapper">
            <div class="container" id="resumeContent">
              <header>
                <h1>${name}</h1>
                <div class="contact">
                  <p>Email: ${email} <br> Phone: ${phone} <br> LinkedIn: ${linkedin}</p>
                </div>
              </header>
              <section class="section">
                <h2>Education</h2>
                <ul>
                  <div class="degree-date">
                    <li><strong>Degree:</strong> ${degree}</li>
                    <div class="date">${date}</div>
                  </div>
                  <li><strong>Institution:</strong> ${uni}</li>
                  <li>GPA: ${gpa} (Optional)</li>
                </ul>
              </section>
              <section class="section">
                <h2>Professional Experience</h2>
                <ul>
                  <div class="degree-date">
                    <li><strong>Role:</strong> ${role}</li>
                  </div>
                  <li><strong>Company:</strong> ${company}</li>
                  <li>Responsibilities:
                    <ul>
                      <li>${responsibilities}</li>
                    </ul>
                  </li>
                </ul>
              </section>
              <section class="section">
                <h2>Skills</h2>
                <div class="skills">
                  <div class="skill">${skill1}</div>
                  <div class="skill">${skill2}</div>
                  <div class="skill">${skill3}</div>
                </div>
              </section>
              <section class="section">
                <h2>Projects</h2>
                <ul>
                  <li>${project1}</li>
                  <li>${project2}</li>
                </ul>
              </section>
              <button id="downloadPdf">Download PDF</button>
            </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.min.js"></script>
            <script>
              document.getElementById("downloadPdf").addEventListener("click", function() {
                const resumeContent = document.getElementById("resumeContent");
                html2pdf().from(resumeContent).save("resume.pdf");
              });
            </script>
          </div>
        </body>
      </html>
    `);

    newWindow!.document.close(); // Close the document to ensure the new window finishes loading
  });
}