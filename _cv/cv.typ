#import "nabcv.typ": cv

#let cd = toml("cv.toml").cv // cv data

#show: cv.with(
  name: cd.name,
  headline: cd.at("headline", default: none),
  location: cd.at("location", default: none),
  keywords: cd.at("keywords", default: none),
  email: cd.at("email", default: none),
  phone: cd.at("phone", default: none),
  address: cd.at("address", default: none),
  profiles: cd.at("profiles", default: none),
  summary: cd.at("summary", default: none),
  motivation: cd.at("motivation", default: none),
  experience: cd.at("experience", default: none),
  education: cd.at("education", default: none),
  awards: cd.at("awards", default: none),
  courses: cd.at("courses", default: none),
  skills: cd.at("skills", default: none),
  values: cd.at("values", default: none),
  hobbies: cd.at("hobbies", default: none),
  references: cd.at("references", default: none),
  publications: cd.at("publications", default: none),
  projects: cd.at("projects", default: none),

  // Custom section selection and order
  sidebar-sections: ("photo", "contact", "skills", "projects"),
  main-sections: ("summary", "experience", "education"),

  photo: image("cv-photo.png"),
  photo-size: 50%,
  // Map Website/Portfolio to a globe icon
  profiles-config: (
    LinkedIn: (icon: "linkedin", url-base: "https://linkedin.com/in/"),
    GitHub: (icon: "github", url-base: "https://github.com/"),
    Website: (icon: "globe", url-base: "https://"),
  ),

  // Font Awesome icons for skills section
  skill-icons: (
    "Programming Languages": "terminal",
    "Data Engineering": "diagram-project",
    "BI & Data Apps": "chart-column",
    "Data Science & ML": "cubes",
    "DevOps & Tooling": "server",
  ),

  // Premium theme color palette
  theme: (
    primary: rgb("#2B2D42"), // Deep charcoal
    secondary: rgb("#1D3557"), // Premium dark blue
    accent: rgb("#457B9D"), // Medium steel blue
    links: rgb("#1D3557"), // Matching links with secondary
    sidebar-bg: rgb("#F8F9FA"), // Off-white/light gray sidebar background
    summary: rgb("#2B2D42"),
  ),
)
