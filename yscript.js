// Hamburger menu toggle
document.getElementById("hamburger").addEventListener("click", function () {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("show");
});

// Sticky navbar on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const navLinks = document.getElementById("nav-links");

  if (window.scrollY > 50) {
    navbar.classList.add("sticky");
    if (navLinks.classList.contains("show")) {
      navLinks.classList.remove("show");
    }
  } else {
    navbar.classList.remove("sticky");
  }
});

const popupContentMap = {
  krish: `
    Hi, I’m <strong>Krish Ahuja</strong>. With over 10 years of experience as a Workday Techno-Functional Consultant, I have played a key role in more than 10 end-to-end Workday implementations and have supported a wide range of AMS projects. My expertise lies in helping organizations get the most out of Workday by delivering practical solutions and ensuring smooth HR operations.
    <br><br>

    <strong>Key Areas of Expertise</strong><br><br>

    <strong>Workday HCM (Human Capital Management):</strong><br>
    I have a deep understanding of Workday HCM, from configuring core HR processes to managing complex organizational hierarchies. My work helps businesses simplify HR management, improve compliance, and enhance the overall employee experience.
    <br><br>

    <strong>Workday Security:</strong><br>
    I specialize in establishing secure and efficient access within Workday. By designing robust security roles, groups, and permissions, I ensure that sensitive information is protected while users have the access they need to perform their roles effectively.
    <br><br>

    <strong>Workday Reports & Calculated Fields:</strong><br>
    My extensive experience in Workday reporting and calculated fields allows me to turn data into actionable insights. I create custom and advanced reports, build calculated fields, and design dashboards that empower organizations to make informed decisions and monitor key HR metrics with ease.
    <br><br>

    <strong>Workday Docs:</strong><br>
    I am adept at utilizing Workday Docs to streamline documentation processes within the platform. From creating secure templates to integrating documents into HR workflows, I help teams collaborate efficiently and maintain compliance.
    <br><br>

    Combining technical proficiency with a strong functional perspective, I am passionate about enabling organizations to fully leverage Workday’s capabilities. If you’re interested in optimizing your Workday environment or need expert guidance, I’d be happy to connect.
  `,

  satish: `
    Hi, I’m <strong>Satish Bansal</strong>. I bring over 9 years of in-depth experience in Workday HCM with a strong focus on Functional Consulting and Process Optimization. I’ve guided numerous global clients through seamless implementations, upgrades, and ongoing support initiatives.
    <br><br>

    <strong>Key Areas of Expertise</strong><br><br>

    <strong>Business Process Configuration:</strong><br>
    I specialize in streamlining and customizing Workday business processes to align with client goals. My approach ensures high process efficiency, reduced errors, and improved user satisfaction.
    <br><br>

    <strong>Workday Core HCM:</strong><br>
    From hire to retire, I manage the full employee lifecycle within Workday. I provide expertise in job profiles, positions, compensation setup, staffing models, and organization structures.
    <br><br>

    <strong>Workday Security & Compliance:</strong><br>
    I design and maintain secure access models that safeguard sensitive data while enabling operational efficiency. I also help organizations meet audit and compliance requirements effectively.
    <br><br>

    <strong>Functional Testing & Support:</strong><br>
    I manage UAT cycles, defect resolution, and production support, ensuring minimal downtime and high system performance post-deployment.
    <br><br>

    My strength lies in translating business needs into scalable Workday solutions. I'm committed to helping clients get the most out of their Workday investment through expert consulting and reliable partnership.
  `,

  anvi: `
    Hi, I’m <strong>Anvi Kaushik</strong>. With a strong foundation in Workday HCM and a sharp eye for process improvement, I focus on delivering functional excellence and user-centric solutions to complex business challenges.
    <br><br>

    <strong>Key Areas of Expertise</strong><br><br>

    <strong>Workday Absence & Time Tracking:</strong><br>
    I configure and manage absence plans, time tracking rules, and scheduling setups that help organizations handle compliance, improve accuracy, and reduce manual efforts.
    <br><br>

    <strong>Workday Recruiting:</strong><br>
    I design seamless recruiting experiences by setting up job requisitions, candidate pipelines, and interview workflows that enhance hiring efficiency.
    <br><br>

    <strong>Workday Talent & Performance:</strong><br>
    I help organizations align their talent strategies by leveraging Workday’s performance review cycles, goal setting, and feedback tools.
    <br><br>

    <strong>End-User Training & Documentation:</strong><br>
    I create simple, effective training content and documentation that improves Workday adoption rates and user confidence.
    <br><br>

    I’m driven by a passion for making Workday intuitive and impactful for every user. Whether it’s setting up a new module or solving an existing challenge, I thrive on delivering functional clarity and support.
  `
};

// View More popup function (modified)
function showPopup(buttonElement) {
  const expertKey = buttonElement.getAttribute("data-expert");
  const popupText = popupContentMap[expertKey] || "Expert info not available";
  document.getElementById("popupContent").innerHTML = `<p>${popupText}</p>`;
  document.getElementById("popupOverlay").style.display = "flex";
}

// Hide popup
function hidePopup() {
  document.getElementById("popupOverlay").style.display = "none";
}

function closePopup() {
  document.getElementById("popupOverlay").style.display = "none";
}

