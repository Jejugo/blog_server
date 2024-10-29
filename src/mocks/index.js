const dummyText = `
    <h1>Maximizing Developer Productivity</h1>
    <p>In the fast-paced world of software development, time is money, and being productive means delivering high-quality code efficiently. Whether you’re working on a frontend interface or a complex backend system, the right tools and strategies can significantly boost your output. In this article, we’ll explore some of the best tools and tips to maximize your productivity as a developer.</p>
    
    <h2>1. Version Control with Git</h2>
    <p>One of the most essential tools for any developer is Git. It allows you to track changes, collaborate with other developers, and roll back any unwanted updates easily.</p>
    <p><strong>Pro Tip:</strong> Use branching strategies like Git Flow or GitHub Flow to manage features, releases, and bug fixes effectively. This way, you can keep your main branch clean and production-ready while working on new features.</p>
    <p><strong>Recommended Tools:</strong></p>
    <ul>
        <li>GitHub</li>
        <li>GitLab</li>
        <li>Bitbucket</li>
    </ul>

    <h2>2. Integrated Development Environments (IDEs)</h2>
    <p>Your coding environment can make or break your productivity. Using a powerful IDE with the right plugins can save you tons of time by automating repetitive tasks, suggesting code snippets, and debugging efficiently.</p>
    <p><strong>Pro Tip:</strong> Customize your IDE with shortcuts, themes, and essential plugins that fit your workflow. A minimalist, distraction-free environment often leads to better focus.</p>
    <p><strong>Popular IDEs:</strong></p>
    <ul>
        <li>VSCode: Lightweight with an extensive marketplace of plugins.</li>
        <li>JetBrains IntelliJ IDEA: Great for Java developers with advanced refactoring features.</li>
        <li>Sublime Text: Simple and fast, perfect for lightweight tasks.</li>
    </ul>

    <h2>3. Task Automation with Continuous Integration</h2>
    <p>Continuous Integration (CI) tools help automate testing, building, and deploying your code. Setting up automated pipelines ensures that your code is tested regularly, reducing bugs and deployment issues down the line.</p>
    <p><strong>Pro Tip:</strong> Integrate CI tools early in your project to catch bugs before they become problematic. Focus on unit testing to quickly pinpoint issues during development.</p>
    <p><strong>Recommended CI Tools:</strong></p>
    <ul>
        <li>Jenkins: Open-source and highly customizable.</li>
        <li>CircleCI: Easy setup and powerful features for quick deployment.</li>
        <li>GitHub Actions: Native to GitHub, allows for CI/CD directly in your repo.</li>
    </ul>

    <h2>4. Managing Your Time Efficiently</h2>
    <p>As a developer, time management is crucial. Many of us fall into the trap of spending too much time solving problems in a complex way when a simpler solution exists. To avoid this, try the Pareto Principle—focus on solving the 20% of tasks that will give you 80% of the results.</p>
    <p><strong>Pro Tip:</strong> Use time-blocking to allocate focused hours on coding tasks, minimizing distractions. Tools like Pomodoro Timers can help you maintain productivity without burning out.</p>
    <p><strong>Recommended Tools:</strong></p>
    <ul>
        <li>Trello: For organizing tasks with boards and lists.</li>
        <li>Notion: An all-in-one workspace for project planning, documentation, and note-taking.</li>
        <li>RescueTime: Track and manage your time to avoid distractions.</li>
    </ul>

    <h2>5. Enhancing Code Quality with Linting and Formatting Tools</h2>
    <p>Clean code is more maintainable and readable. Automated linting and formatting tools ensure consistency in your codebase, catching common issues before you commit.</p>
    <p><strong>Pro Tip:</strong> Set up pre-commit hooks with linting tools like ESLint or Prettier to automate code formatting and ensure every commit meets your quality standards.</p>
    <p><strong>Tools to Try:</strong></p>
    <ul>
        <li>ESLint: For JavaScript linting.</li>
        <li>Prettier: Automatic code formatter that supports multiple languages.</li>
        <li>Stylelint: Great for maintaining consistency in your CSS/SASS files.</li>
    </ul>

    <h2>Final Thoughts</h2>
    <p>Boosting productivity as a developer is all about combining the right tools with efficient workflows. Whether you’re building a mobile app, an investment portfolio system, or just exploring a new side project, finding a balance between automation, focus, and collaboration is key. Experiment with different tools and strategies until you find what works best for your style!</p>`;

export const posts = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "10-08-2023",
    category: "Travel",
    author: "Steve Gates",
    title: "A Journey Through Bohemiam Beauty: Exploring the Streets of Prague",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "14-07-2023",
    category: "Fashion",
    author: "Steve Gates",
    title: "Timeless Fashion with a Modern Twist Winter Collection",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "22-03-2023",
    category: "Food",
    author: "Steve Gates",
    title: "My Favorite Authentic Italian Pasta Dishes",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "05-01-2023",
    category: "Food",
    author: "Steve Gates",
    title: "Navigating First Impressions: Introduce Yourself",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "10-08-2023",
    category: "Travel",
    author: "Steve Gates",
    title: "A Journey Through Bohemiam Beauty: Exploring the Streets of Prague",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 6,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "14-07-2023",
    category: "Fashion",
    author: "Steve Gates",
    title: "Timeless Fashion with a Modern Twist Winter Collection",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 7,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "22-03-2023",
    category: "Food",
    author: "Steve Gates",
    title: "My Favorite Authentic Italian Pasta Dishes",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 8,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "05-01-2023",
    category: "Food",
    author: "Steve Gates",
    title: "Navigating First Impressions: Introduce Yourself",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 9,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "05-01-2023",
    category: "Food",
    author: "Steve Gates",
    title: "Navigating First Impressions: Introduce Yourself",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 10,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "10-08-2023",
    category: "Travel",
    author: "Steve Gates",
    title: "A Journey Through Bohemiam Beauty: Exploring the Streets of Prague",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 11,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "14-07-2023",
    category: "Fashion",
    author: "Steve Gates",
    title: "Timeless Fashion with a Modern Twist Winter Collection",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 12,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "22-03-2023",
    category: "Food",
    author: "Steve Gates",
    title: "My Favorite Authentic Italian Pasta Dishes",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 13,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "05-01-2023",
    category: "Food",
    author: "Steve Gates",
    title: "Navigating First Impressions: Introduce Yourself",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 14,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "10-08-2023",
    category: "Travel",
    author: "Steve Gates",
    title: "A Journey Through Bohemiam Beauty: Exploring the Streets of Prague",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 15,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "14-07-2023",
    category: "Fashion",
    author: "Steve Gates",
    title: "Timeless Fashion with a Modern Twist Winter Collection",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 16,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "22-03-2023",
    category: "Food",
    author: "Steve Gates",
    title: "My Favorite Authentic Italian Pasta Dishes",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 17,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "05-01-2023",
    category: "Food",
    author: "Steve Gates",
    title: "Navigating First Impressions: Introduce Yourself",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 18,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "05-01-2023",
    category: "Food",
    author: "Steve Gates",
    title: "Navigating First Impressions: Introduce Yourself",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 19,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "10-08-2023",
    category: "Travel",
    author: "Steve Gates",
    title: "A Journey Through Bohemiam Beauty: Exploring the Streets of Prague",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 20,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "14-07-2023",
    category: "Fashion",
    author: "Steve Gates",
    title: "Timeless Fashion with a Modern Twist Winter Collection",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 21,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "22-03-2023",
    category: "Food",
    author: "Steve Gates",
    title: "My Favorite Authentic Italian Pasta Dishes",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 22,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "05-01-2023",
    category: "Food",
    author: "Steve Gates",
    title: "Navigating First Impressions: Introduce Yourself",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 23,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "10-08-2023",
    category: "Travel",
    author: "Steve Gates",
    title: "A Journey Through Bohemiam Beauty: Exploring the Streets of Prague",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 24,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "14-07-2023",
    category: "Fashion",
    author: "Steve Gates",
    title: "Timeless Fashion with a Modern Twist Winter Collection",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 25,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "22-03-2023",
    category: "Food",
    author: "Steve Gates",
    title: "My Favorite Authentic Italian Pasta Dishes",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 26,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "05-01-2023",
    category: "Food",
    author: "Steve Gates",
    title: "Navigating First Impressions: Introduce Yourself",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 27,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "05-01-2023",
    category: "Food",
    author: "Steve Gates",
    title: "Navigating First Impressions: Introduce Yourself",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 28,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "10-08-2023",
    category: "Travel",
    author: "Steve Gates",
    title: "A Journey Through Bohemiam Beauty: Exploring the Streets of Prague",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 29,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "14-07-2023",
    category: "Fashion",
    author: "Steve Gates",
    title: "Timeless Fashion with a Modern Twist Winter Collection",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 30,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "22-03-2023",
    category: "Food",
    author: "Steve Gates",
    title: "My Favorite Authentic Italian Pasta Dishes",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 31,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "05-01-2023",
    category: "Food",
    author: "Steve Gates",
    title: "Navigating First Impressions: Introduce Yourself",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 32,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "10-08-2023",
    category: "Travel",
    author: "Steve Gates",
    title: "A Journey Through Bohemiam Beauty: Exploring the Streets of Prague",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 33,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "14-07-2023",
    category: "Fashion",
    author: "Steve Gates",
    title: "Timeless Fashion with a Modern Twist Winter Collection",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 34,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "22-03-2023",
    category: "Food",
    author: "Steve Gates",
    title: "My Favorite Authentic Italian Pasta Dishes",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 35,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "05-01-2023",
    category: "Food",
    author: "Steve Gates",
    title: "Navigating First Impressions: Introduce Yourself",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 36,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "05-01-2023",
    category: "Food",
    author: "Steve Gates",
    title: "Navigating First Impressions: Introduce Yourself",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 37,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "10-08-2023",
    category: "Travel",
    author: "Steve Gates",
    title: "A Journey Through Bohemiam Beauty: Exploring the Streets of Prague",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 38,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "14-07-2023",
    category: "Fashion",
    author: "Steve Gates",
    title: "Timeless Fashion with a Modern Twist Winter Collection",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 39,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "22-03-2023",
    category: "Food",
    author: "Steve Gates",
    title: "My Favorite Authentic Italian Pasta Dishes",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 40,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "05-01-2023",
    category: "Food",
    author: "Steve Gates",
    title: "Navigating First Impressions: Introduce Yourself",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 41,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "10-08-2023",
    category: "Travel",
    author: "Steve Gates",
    title: "A Journey Through Bohemiam Beauty: Exploring the Streets of Prague",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 42,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "14-07-2023",
    category: "Fashion",
    author: "Steve Gates",
    title: "Timeless Fashion with a Modern Twist Winter Collection",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 43,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "22-03-2023",
    category: "Food",
    author: "Steve Gates",
    title: "My Favorite Authentic Italian Pasta Dishes",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 44,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "05-01-2023",
    category: "Food",
    author: "Steve Gates",
    title: "Navigating First Impressions: Introduce Yourself",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 45,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "05-01-2023",
    category: "Food",
    author: "Steve Gates",
    title: "Navigating First Impressions: Introduce Yourself",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 46,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "10-08-2023",
    category: "Travel",
    author: "Steve Gates",
    title: "A Journey Through Bohemiam Beauty: Exploring the Streets of Prague",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 47,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "14-07-2023",
    category: "Fashion",
    author: "Steve Gates",
    title: "Timeless Fashion with a Modern Twist Winter Collection",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 48,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "22-03-2023",
    category: "Food",
    author: "Steve Gates",
    title: "My Favorite Authentic Italian Pasta Dishes",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 49,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "05-01-2023",
    category: "Food",
    author: "Steve Gates",
    title: "Navigating First Impressions: Introduce Yourself",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 50,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "10-08-2023",
    category: "Travel",
    author: "Steve Gates",
    title: "A Journey Through Bohemiam Beauty: Exploring the Streets of Prague",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 51,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "14-07-2023",
    category: "Fashion",
    author: "Steve Gates",
    title: "Timeless Fashion with a Modern Twist Winter Collection",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 52,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "22-03-2023",
    category: "Food",
    author: "Steve Gates",
    title: "My Favorite Authentic Italian Pasta Dishes",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 53,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "05-01-2023",
    category: "Food",
    author: "Steve Gates",
    title: "Navigating First Impressions: Introduce Yourself",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 54,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "05-01-2023",
    category: "Food",
    author: "Steve Gates",
    title: "Navigating First Impressions: Introduce Yourself",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 55,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "10-08-2023",
    category: "Travel",
    author: "Steve Gates",
    title: "A Journey Through Bohemiam Beauty: Exploring the Streets of Prague",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 56,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "14-07-2023",
    category: "Fashion",
    author: "Steve Gates",
    title: "Timeless Fashion with a Modern Twist Winter Collection",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 57,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "22-03-2023",
    category: "Food",
    author: "Steve Gates",
    title: "My Favorite Authentic Italian Pasta Dishes",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 58,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "05-01-2023",
    category: "Food",
    author: "Steve Gates",
    title: "Navigating First Impressions: Introduce Yourself",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 59,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "10-08-2023",
    category: "Travel",
    author: "Steve Gates",
    title: "A Journey Through Bohemiam Beauty: Exploring the Streets of Prague",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 60,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "14-07-2023",
    category: "Fashion",
    author: "Steve Gates",
    title: "Timeless Fashion with a Modern Twist Winter Collection",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 61,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "22-03-2023",
    category: "Food",
    author: "Steve Gates",
    title: "My Favorite Authentic Italian Pasta Dishes",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 62,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "05-01-2023",
    category: "Food",
    author: "Steve Gates",
    title: "Navigating First Impressions: Introduce Yourself",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 63,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "05-01-2023",
    category: "Food",
    author: "Steve Gates",
    title: "Navigating First Impressions: Introduce Yourself",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 64,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "10-08-2023",
    category: "Travel",
    author: "Steve Gates",
    title: "A Journey Through Bohemiam Beauty: Exploring the Streets of Prague",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 65,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "14-07-2023",
    category: "Fashion",
    author: "Steve Gates",
    title: "Timeless Fashion with a Modern Twist Winter Collection",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 66,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "22-03-2023",
    category: "Food",
    author: "Steve Gates",
    title: "My Favorite Authentic Italian Pasta Dishes",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 67,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "05-01-2023",
    category: "Food",
    author: "Steve Gates",
    title: "Navigating First Impressions: Introduce Yourself",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 68,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "10-08-2023",
    category: "Travel",
    author: "Steve Gates",
    title: "A Journey Through Bohemiam Beauty: Exploring the Streets of Prague",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 69,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "14-07-2023",
    category: "Fashion",
    author: "Steve Gates",
    title: "Timeless Fashion with a Modern Twist Winter Collection",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 70,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "22-03-2023",
    category: "Food",
    author: "Steve Gates",
    title: "My Favorite Authentic Italian Pasta Dishes",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 71,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "05-01-2023",
    category: "Food",
    author: "Steve Gates",
    title: "Navigating First Impressions: Introduce Yourself",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 72,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "05-01-2023",
    category: "Food",
    author: "Steve Gates",
    title: "Navigating First Impressions: Introduce Yourself",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 73,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "10-08-2023",
    category: "Travel",
    author: "Steve Gates",
    title: "A Journey Through Bohemiam Beauty: Exploring the Streets of Prague",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 74,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "14-07-2023",
    category: "Fashion",
    author: "Steve Gates",
    title: "Timeless Fashion with a Modern Twist Winter Collection",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 75,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "22-03-2023",
    category: "Food",
    author: "Steve Gates",
    title: "My Favorite Authentic Italian Pasta Dishes",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 76,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "05-01-2023",
    category: "Food",
    author: "Steve Gates",
    title: "Navigating First Impressions: Introduce Yourself",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 77,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "10-08-2023",
    category: "Travel",
    author: "Steve Gates",
    title: "A Journey Through Bohemiam Beauty: Exploring the Streets of Prague",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 78,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "14-07-2023",
    category: "Fashion",
    author: "Steve Gates",
    title: "Timeless Fashion with a Modern Twist Winter Collection",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 79,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "22-03-2023",
    category: "Food",
    author: "Steve Gates",
    title: "My Favorite Authentic Italian Pasta Dishes",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 80,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "05-01-2023",
    category: "Food",
    author: "Steve Gates",
    title: "Navigating First Impressions: Introduce Yourself",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 81,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "05-01-2023",
    category: "Food",
    author: "Steve Gates",
    title: "Navigating First Impressions: Introduce Yourself",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 82,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "10-08-2023",
    category: "Travel",
    author: "Steve Gates",
    title: "A Journey Through Bohemiam Beauty: Exploring the Streets of Prague",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 83,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "14-07-2023",
    category: "Fashion",
    author: "Steve Gates",
    title: "Timeless Fashion with a Modern Twist Winter Collection",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 84,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "22-03-2023",
    category: "Food",
    author: "Steve Gates",
    title: "My Favorite Authentic Italian Pasta Dishes",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 85,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "05-01-2023",
    category: "Food",
    author: "Steve Gates",
    title: "Navigating First Impressions: Introduce Yourself",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 86,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "10-08-2023",
    category: "Travel",
    author: "Steve Gates",
    title: "A Journey Through Bohemiam Beauty: Exploring the Streets of Prague",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 87,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "14-07-2023",
    category: "Fashion",
    author: "Steve Gates",
    title: "Timeless Fashion with a Modern Twist Winter Collection",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 88,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "22-03-2023",
    category: "Food",
    author: "Steve Gates",
    title: "My Favorite Authentic Italian Pasta Dishes",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 89,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "05-01-2023",
    category: "Food",
    author: "Steve Gates",
    title: "Navigating First Impressions: Introduce Yourself",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 90,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "05-01-2023",
    category: "Food",
    author: "Steve Gates",
    title: "Navigating First Impressions: Introduce Yourself",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 91,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "10-08-2023",
    category: "Travel",
    author: "Steve Gates",
    title: "A Journey Through Bohemiam Beauty: Exploring the Streets of Prague",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 92,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "14-07-2023",
    category: "Fashion",
    author: "Steve Gates",
    title: "Timeless Fashion with a Modern Twist Winter Collection",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 93,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "22-03-2023",
    category: "Food",
    author: "Steve Gates",
    title: "My Favorite Authentic Italian Pasta Dishes",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 94,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "05-01-2023",
    category: "Food",
    author: "Steve Gates",
    title: "Navigating First Impressions: Introduce Yourself",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 95,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "10-08-2023",
    category: "Travel",
    author: "Steve Gates",
    title: "A Journey Through Bohemiam Beauty: Exploring the Streets of Prague",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 96,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "14-07-2023",
    category: "Fashion",
    author: "Steve Gates",
    title: "Timeless Fashion with a Modern Twist Winter Collection",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 97,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "22-03-2023",
    category: "Food",
    author: "Steve Gates",
    title: "My Favorite Authentic Italian Pasta Dishes",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 98,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "05-01-2023",
    category: "Food",
    author: "Steve Gates",
    title: "Navigating First Impressions: Introduce Yourself",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
  {
    id: 99,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1639262498805-17c7dc422d37",
    date: "05-01-2023",
    category: "Food",
    author: "Steve Gates",
    title: "Navigating First Impressions: Introduce Yourself",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: dummyText,
  },
];
