const cursos = [
  {
    title: "Behavior Driven Python with pytest-bdd",
    image: "2021_tau_behavior_driven_python.png",
    platform: "Test Automation University",
    "completion-date": "11/18/2021",
    "cert-id": "67eb0422",
    type: ["QA"],
  },
  {
    title: "Introduction to Cypress",
    image: "2023_tau_introduction_cypress.png",
    platform: "Test Automation University",
    "completion-date": "1/19/2023",
    "cert-id": "4fe21d78",
    type: ["QA"],
  },
  {
    title: "Setting a Foundation for Successful Test Automation",
    image: "2023_tau_setting_foundation_successful_test_automation.png",
    platform: "Test Automation University",
    "completion-date": "01/27/2023",
    "cert-id": "46a364f2",
    type: ["QA"],
  },
  {
    title: "Web Element Locator Strategies",
    image: "2023_tau_web_element_locator_strategies.png",
    platform: "Test Automation University",
    "completion-date": "2/10/2023",
    "cert-id": "76f2d8c4",
    type: ["QA"],
  },
  {
    title: "Python Programming",
    image: "2023_tau_python_programming.png",
    platform: "Test Automation University",
    "completion-date": "02/21/2023",
    "cert-id": "75068aca",
    type: ["Dev"],
  },
  {
    title: "Source Control for Test Automation with Git",
    image: "2023_tau_source_control_test_automation_git.png",
    platform: "Test Automation University",
    "completion-date": "04/02/2023",
    "cert-id": "5eb73ad6",
    type: ["QA", "DevOps"],
  },
  {
    title: "Exploring Service APIs through Test Automation",
    image: "2023_tau_exploring_service_APIS_test_automation.png",
    platform: "Test Automation University",
    "completion-date": "05/03/2023",
    "cert-id": "6c4eabc0",
    length: "1hs 17min",
    type: ["QA"],
  },
  {
    title: "Introduction to JavaScript",
    image: "2023_tau_introduction_javascript.png",
    platform: "Test Automation University",
    "completion-date": "06/16/2023",
    "cert-id": "50a83268",
    length: "1hs 33min",
    type: ["Dev"],
  },
  {
    title: "Jest JavaScript Testing Framework",
    image: "2023_tau_jest_javascript_tetsing_framework.png",
    platform: "Test Automation University",
    "completion-date": "06/22/2023",
    "cert-id": "13d79952",
    length: "51min",
    type: ["QA"],
  },
  {
    title: "Continuous Integration with Jenkins",
    image: "2023_continuos_integration_jenkins.png",
    platform: "Test Automation University",
    "completion-date": "11/20/2023",
    "cert-id": "4fe9a44c",
    length: "1hs 35min",
    type: ["QA", "DevOps"],
  },
  {
    title: "Continuos Testing with Azure DevOps",
    image: "2023_tau_test_automation_devops.png",
    platform: "Test Automation University",
    "completion-date": "11/27/2023",
    "cert-id": "72458520",
    length: "1hs 25min",
    type: ["QA", "DevOps"],
  },
  {
    title: "Test Automation in DevOps",
    image: "2023_tau_test_automation_devops.png",
    platform: "Test Automation University",
    "completion-date": "12/04/2023",
    "cert-id": "1904f90d",
    type: ["QA", "DevOps"],
  },
  {
    title: "GitHub Actions for Testing",
    image: "2024_tau_github_actions_testing.png",
    platform: "Test Automation University",
    "completion-date": "01/15/2024",
    "cert-id": "612eeebe",
    length: "1hs 29min",
    type: ["QA", "DevOps"],
  },
  {
    title: "Introduction to Cypress",
    image: "2024_tau_introduction_cypress.png",
    platform: "Test Automation University",
    "completion-date": "01/21/2024",
    "cert-id": "12de5cb21",
    length: "1hs 13min",
    type: ["QA"],
  },
  {
    title: "Introduction to Playwright",
    image: "2024_tau_introduction_playwright.png",
    platform: "Test Automation University",
    "completion-date": "10/28/2024",
    "cert-id": "d09264c4",
    length: "1hs 24min",
    type: ["QA"],
  },
  {
    title: "Playwright with BDD and TypeScript",
    image: "2024_udemy_playwright_BDD_typeScript.jpg",
    platform: "Udemy",
    "completion-date": "12/15/2024",
    length: "15hs 50min",
    "cert-id": "UC-60641a29-acbf-43a4-8575-9319df04f9f0",
    type: ["QA"],
  },
  {
    title: "Cloud development y Metodologías ágiles",
    pdf: "2014_catolica_cloud_dev.pdf",
    platform: "Universidad Católica de Córdoba",
    "completion-date": "11/28/2014",
    type: ["Dev"],
  },
  {
    title: "Programación en Android",
    pdf: "2014_catolica_android.pdf",
    platform: "Universidad Católica de Córdoba",
    "completion-date": "09/23/2014",
    type: ["Dev"],
  },
  {
    title:
      "Lenguajes tecno-mediáticos en educación superior: desafíos y Posibilidades para el trabajo docente- n. Avanzado",
    pdf: "2018_catolica_lenguajes_tecno-mediaticos.pdf",
    platform: "Universidad Católica de Córdoba",
    "completion-date": "08/07/2018",
    type: ["Universidad"],
  },
  {
    title:
      "Diseño tecno-pedagógico en tus clases: entre lo sincrónico y lo Asincrónico",
    pdf: "2024_catolica_disenio_tecno-pedagogico",
    platform: "Universidad Católica de Córdoba",
    "completion-date": "07/19/2024",
    type: ["Universidad"],
  },
  {
    title: "Portfolio institucional de recursos para docentes",
    pdf: "2021_catolica_portfolio.pdf",
    platform: "Universidad Católica de Córdoba",
    "completion-date": "12/21/2021",
    type: ["Universidad"],
  },
  {
    title: "Taller de edición de videos educativos",
    platform: "Universidad Católica de Córdoba",
    "completion-date": "2021",
    type: ["Universidad"],
  },
  {
    title:
      "Turnitin y la integridad académica: herramienta para prevenir el Plagio",
    pdf: "2023_catolica_turnitin.pdf",
    platform: "Universidad Católica de Córdoba",
    "completion-date": "12/11/2023",
    type: ["Universidad"],
  },
];
