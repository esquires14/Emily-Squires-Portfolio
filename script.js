// ==================== //
// PROJECTS 
// ==================== //

const PROJECTS = [
    {
        name: 'SpendWise',
        description: 'Full-stack personal finance tracker with expense categorization, budget tracking, and data visualization charts. Built with Spring Boot REST API, React frontend, and PostgreSQL deployed to Railway. Includes complete SDLC documentation: design plan, QA test plan, test cases, and retrospective.',
        language: 'Java',
        topics: ['spring-boot', 'react', 'postgresql', 'rest-api', 'railway'],
        html_url: 'https://github.com/esquires14/spendwise',
        isFeatured: true
    },
    {
        name: 'QA-Toolkit-Web-App',
        description: 'Single-file multi-tab QA tool with test case generation, bug reporting, and coverage tracking dashboards. Extended with a Spring Boot backend supporting session persistence and server-side PDF export.',
        language: 'JavaScript',
        topics: ['html', 'css', 'javascript', 'spring-boot', 'qa-tools'],
        html_url: 'https://github.com/esquires14/qa-toolkit',
        isFeatured: true
    },
    {
        name: 'WGU-Vacation-Scheduler-Android',
        description: 'Android app with full CRUD operations for vacation and excursion management using Room persistence library. Implemented notification scheduling, data validation, and multi-screen navigation with intent-based routing.',
        language: 'Java',
        topics: ['android', 'java', 'room-database', 'material-design', 'mobile'],
        html_url: 'https://github.com/esquires14/-WGU-Vacation-Scheduler-Android',
        isFeatured: true
    },
    {
        name: 'WGU-Java-Frameworks',
        description: 'E-commerce application for a custom PC parts shop built with Spring Boot and Thymeleaf. Features inventory management with min/max stock levels, full CRUD operations, input validation, and a purchase system.',
        language: 'Java',
        topics: ['spring-boot', 'thymeleaf', 'java', 'e-commerce', 'jpa'],
        html_url: 'https://github.com/esquires14/WGU-Java-Frameworks',
        isFeatured: false
    },
    {
        name: 'WGU-Hotel-Page',
        description: 'Hotel booking application with Spring Boot backend and Angular frontend. Features multithreaded language translation, time zone conversion, currency exchange, and Docker containerization.',
        language: 'Java',
        topics: ['spring-boot', 'angular', 'java', 'multithreading', 'docker'],
        html_url: 'https://github.com/esquires14/WGU-Hotel-Page',
        isFeatured: false
    },
    {
        name: 'TaskFlow-Java',
        description: 'Task management application built with Java featuring task organization, priority management, and deadline tracking.',
        language: 'Java',
        topics: ['java', 'task-management', 'productivity'],
        html_url: 'https://github.com/esquires14/TaskFlow-Java',
        isFeatured: false
    },
    {
        name: 'student-records-manager',
        description: 'Java application for managing student information with CRUD operations and data persistence.',
        language: 'Java',
        topics: ['java', 'crud', 'database', 'student-management'],
        html_url: 'https://github.com/esquires14/student-records-manager',
        isFeatured: false
    },
    {
        name: 'Portfolio',
        description: 'Personal portfolio website showcasing projects, skills, and certifications with responsive design and modern UI.',
        language: 'HTML',
        topics: ['portfolio', 'javascript', 'html', 'css', 'responsive'],
        html_url: 'https://github.com/esquires14/Portfolio',
        isFeatured: false
    },
    {
        name: 'personal_taskmanager',
        description: 'Personal task manager with clean CSS styling and task organization features.',
        language: 'CSS',
        topics: ['css', 'task-manager', 'frontend'],
        html_url: 'https://github.com/esquires14/personal_taskmanager',
        isFeatured: false
    }
];

// Technology icon mapping
const techIcons = {
    'JavaScript': 'fab fa-js-square',
    'Python': 'fab fa-python',
    'Java': 'fab fa-java',
    'TypeScript': 'fab fa-js',
    'HTML': 'fab fa-html5',
    'CSS': 'fab fa-css3-alt',
    'React': 'fab fa-react',
    'Angular': 'fab fa-angular',
    'Node': 'fab fa-node-js',
    'Android': 'fab fa-android'
};

// ==================== //
// MOBILE NAVIGATION
// ==================== //
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger?.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ==================== //
// SMOOTH SCROLL
// ==================== //
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== //
// NAVBAR SCROLL EFFECT
// ==================== //
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }
});

// ==================== //
// DISPLAY PROJECTS
// ==================== //

// Create project card HTML
function createProjectCard(repo, isFeatured) {
    const language = repo.language || 'Code';
    const icon = techIcons[language] || 'fas fa-code';
    const description = repo.description || 'No description available';
    
    const topics = repo.topics || [];
    const techTags = topics.length > 0 
        ? topics.slice(0, 5).map(tag => `<span class="tech-tag">${tag}</span>`).join('')
        : `<span class="tech-tag">${language}</span>`;
    
    const featuredClass = isFeatured ? 'featured' : '';
    
    return `
        <div class="project-card ${featuredClass}">
            <div class="project-header">
                <i class="${icon} project-icon"></i>
                <h3 class="project-title">${repo.name}</h3>
            </div>
            <p class="project-description">${description}</p>
            <div class="project-tech">
                ${techTags}
            </div>
            <div class="project-links">
                <a href="${repo.html_url}" target="_blank" class="project-link">
                    <i class="fab fa-github"></i> View Code
                </a>
                ${repo.homepage ? `
                    <a href="${repo.homepage}" target="_blank" class="project-link">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>
                ` : ''}
            </div>
        </div>
    `;
}

// Display all projects
function displayProjects() {
    console.log('=== Displaying Projects ===');
    console.log('Total projects:', PROJECTS.length);
    
    const featured = PROJECTS.filter(p => p.isFeatured);
    const all = PROJECTS;
    
    console.log('Featured projects:', featured.length);
    
    const featuredContainer = document.getElementById('featured-projects');
    const allReposContainer = document.getElementById('all-repos');
    
    if (featuredContainer) {
        featuredContainer.innerHTML = featured.map(repo => createProjectCard(repo, true)).join('');
        console.log('✅ Featured projects displayed');
    }
    
    if (allReposContainer) {
        allReposContainer.innerHTML = all.map(repo => createProjectCard(repo, false)).join('');
        console.log('✅ All projects displayed');
    }
}

// ==================== //
// RESUME DOWNLOAD
// ==================== //
document.getElementById('download-resume')?.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Add your resume PDF to the portfolio folder and update this link!');
});

// ==================== //
// INITIALIZE
// ==================== //
document.addEventListener('DOMContentLoaded', () => {
    // Display projects
    displayProjects();
    
    // Hero fade-in animation
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        setTimeout(() => {
            heroContent.style.animation = 'fadeInUp 1s ease forwards';
        }, 100);
    }
});

// ==================== //
// ACTIVE NAV LINK
// ==================== //
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});