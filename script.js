// Get link elements
const professional = document.getElementById("professional");
const education = document.getElementById("education");
const experience = document.getElementById("experience");
const skills = document.getElementById("skills");
const projects = document.getElementById("projects");
const languages = document.getElementById("languages");

const contact = document.getElementById("contact");

const darkMode = document.getElementById('square-1');
const lightMode = document.getElementById('square-2');

const squareHorizontal = document.getElementById('square-6');

// Get target content div element
const targetDiv = document.getElementById("dynamic-text");

// Contents
const professionalContent =`
  <h3>Professional Summary</h3>
  <p>Dynamic and highly-motivated Full-Stack Developer with a strong design background and entrepreneurial spirit.</p>
  <p>Excellent problem-solving skills with a detail-oriented approach. Equipped with diverse work experience, ranging from design and development to customer service and sales management. Adept at leveraging tech proficiency and leadership abilities to drive business growth, client retention, and team success.</p>
`;

const educationContent =`
  <h3>Education</h3>
  <h4>Certification in Full-Stack Development (C#, React)</h4> <p>Epicodus, Portland, Oregon (2023)</p>
  <ul>
    <li>Intensive 27-week, full-time, in-person bootcamp focused on full-stack development.</li>
    <li>Acquired expertise in Git, GitHub, BASH, HTML, CSS, JavaScript, MySQL, C# and .NET.</li>
    <li>Developed applications using React and Bootstrap.</li>
    <li>Collaborated in teams and practiced pair programming.</li>
    <li>Enhanced communication and teamwork through daily coding challenges and weekly project submissions.</li>
  </ul>
  
  <h4>Certification in Front-End Development - General Assembly</h4> <p>San Francisco, California (2019)</p>
  <ul>
    <li>Completed 60 hours in Front-End development.</li>
    <li>Built web applications using HTML, CSS, JQuery, and Bootstrap.</li>
  </ul>

  <h4>Bachelor of Design degree, Industrial Design - Shenkar College of Engineering and Design</h4> <p>Israel (2014 - 2018)</p>
  <ul>
    <li>Mastered 3D modeling, prototyping, and material utilization.</li>
    <li>Applied iterative design methodologies.</li>
    <li>Improved visual and graphic design techniques, from sketching to digital rendering.</li>
    <li>Participated in a multi-week interdisciplinary product challenge, enhancing collaboration.</li>
  </ul>
`;

const experienceContent =`
  <h3>Professional Experience</h3>
  <h4>Studio Manager & Sales Team Leader</h4> <p>Santa Fe Spa Center, Santa Fe, NM (2022-2023)</p>
  <ul>
    <li>Led sales and clinic teams.</li>
    <li>Drove sales growth and customer satisfaction.</li>
    <li>Fostered client relationships for high retention and repeat business.</li>
  </ul>

  <h4>Sales Team Member & Graphic Designer</h4> <p>Le Caprice, Corte Madera, CA (2018-2021)</p>
  <ul>
    <li>Sold medical-grade skincare products with a focus on relationship building.</li>
    <li>Created digital and print marketing materials, including newsletters, banners, ads, brochures, and instructions.</li>
  </ul>
  
  <h4>Application Designer & Developer</h4> <p>Ares, Tel Aviv, IL (2015-2017)</p>
  <ul>
    <li>Designed and developed a dating app for the gay community with a focus on user safety.</li>
    <li>Managed all aspects of app design and production, including UX/UI.</li>
    <li>Facilitated meetings with investors and showcased app prototypes to mobile app developers.</li>
  </ul>

  <h4>Transcription Contractor</h4> <p>Appen, Tel Aviv, IL (2015)</p>
  <ul>
    <li>Collaborated with Apple on Siri's AI language translation in Hebrew.</li>
  </ul>
`;

const skillsContent =`
  <h3>Skills</h3>
  <h4>Software:</h4> <p>Adobe Photoshop, Illustrator, InDesign, XD, Solidworks, Rhinoceros 3D, Keyshot, VSCode.</p>
  <h4>Programming:</h4> <p>C#, ASP.NET,  MySQL, React, HTML, CSS, JavaScript, JQuery, BASH.</p>
`;
  
const projectsContent =`
  <h3>Projects</h3>
  <h4>Plant Professor:<a href="#"">(GitHub)</a></h4>
  <p>Web application that provides information on plants using fetch API. Built using vanilla JavaScript.</p>
  
  <h4>Pig Dice: <a href="https://github.com/Object-ions/Pig-Dice"">(GitHub)</a></h4> <p>Pig Dice is a simple dice game creates with vanilla JavaScript. Two players take turns to roll a single six-sided die.</p>

  <h4>Pierres Bakery (Console Application):<a href="https://github.com/Object-ions/PierresBakery.git" target="_blank">(GitHub)</a></h4>
  <p>This C# console application helps customers place their orders and calculate the total cost.</p>

  <h4>Animal Shelter (API):<a href="https://github.com/Object-ions/AnimalShelter.Solution"">(GitHub)</a></h4>
  <p>A web Api (only) that allows the user to make API calls in order to check the animal shelter database.</p>
  
  <h4>Pierre's SST- (MVC Web Application):<a href="#"">(GitHub)</a></h4> 
  <p>Web application that provides information on plants using fetch API. Built using vanilla JavaScript.</p>
`;

const languagesContent = `
  <div class="language">
  <h4>Hebrew:</h4> <p>Native</p>
  <h4>English:</h4> <p>Fluent</p>
  </div>
`;

const contactContent = `
  <div class="Contact me">
  <h4>Phone:</h4> <p>+1 (925) 323-1356</p>
  <h4>E-mail:</h4> <p>moshikoatia@gmail.com</p>
  </div>
`;

const textToType = `
  Dynamic and highly-motivated Full-Stack Developer with a strong design background and entrepreneurial spirit.

  Excellent problem-solving skills with a detail-oriented approach. Equipped with diverse work experience, ranging from design and development to customer service and sales management. Adept at leveraging tech proficiency and leadership abilities to drive business growth, client retention, and team success.
`;
let currentIndex = 0;
const typingElement = document.getElementById("typing-text");

function typeLetter() {
  if (currentIndex < textToType.length) {
    typingElement.textContent += textToType[currentIndex];
    currentIndex++;
    setTimeout(typeLetter, 50);
  }
}

function replaceElements(event) {
  switch(event.target.id) {
    case "professional":
      targetDiv.innerHTML = professionalContent;
    break;
    case "education":
      targetDiv.innerHTML = educationContent;
    break;
    case "experience":
      targetDiv.innerHTML = experienceContent;
    break;
    case "skills":
      targetDiv.innerHTML = skillsContent;
    break;
    case "projects":
      targetDiv.innerHTML = projectsContent;
    break;
    case "languages":
      targetDiv.innerHTML = languagesContent;
    break;
    case "contact":
      targetDiv.innerHTML = contactContent;
    break;
    default:
      targetDiv.innerHTML = "";
    break;
  }
}

function enableDarkMode() {
  document.body.classList.add('dark-mode');
}

function disableDarkMode() {
  document.body.classList.remove('dark-mode');
}

typeLetter();

// Event listeners
professional.addEventListener("click", replaceElements);
education.addEventListener("click", replaceElements);
experience.addEventListener("click", replaceElements);
skills.addEventListener("click", replaceElements);
projects.addEventListener("click", replaceElements);
languages.addEventListener("click", replaceElements);
contact.addEventListener("click", replaceElements);

darkMode.addEventListener('click', enableDarkMode);
lightMode.addEventListener('click', disableDarkMode);


document.addEventListener('mousemove', function(event) {
  const newLeft = event.clientX - squareHorizontal.offsetWidth / 2;
  squareHorizontal.style.left = newLeft + 'px';
});
