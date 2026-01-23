// ===== ELEMENTS =====
const startBtn = document.getElementById("startBtn");
const setupContainer = document.getElementById("setupContainer");
const jobDescriptionInput = document.getElementById("jobDescription");
const questionCountSelect = document.getElementById("questionCount");

const interviewSection = document.getElementById("interviewSection");
const questionText = document.getElementById("questionText");
const timerEl = document.getElementById("timer");
const preview = document.getElementById("preview");
const statusText = document.getElementById("statusText");
const questionCounter = document.getElementById("questionCounter");
const progressFill = document.getElementById("progressFill");
const recordingStatus = document.getElementById("recordingStatus");

// ===== QUESTION ENGINE =====
const baseQuestions = [
  "Tell me about yourself.",
  "What interests you about this role?",
  "What are your strongest skills?",
  "What is your biggest weakness?",
  "Describe a challenging situation you handled.",
  "Where do you see yourself in 5 years?",
  "Tell me about a project you're proud of.",
  "How do you handle pressure?",
  "Why should we hire you?",
];

const roleTemplates = {
  software: [
  "Explain a recent technical problem you solved.",
  "What programming languages are you strongest in?",
  "Describe your debugging process.",
  "How do you ensure code quality?",
  "Explain a system you designed.",
  "How do you handle version control?",
  "Describe a performance issue you fixed.",
  "How do you write scalable code?",
  "What testing strategies do you use?",
  "How do you secure an application?",
  "Explain REST APIs in your own words.",
  "Describe a project you are proud of.",
  "How do you handle technical debt?",
  "Explain object-oriented programming principles.",
  "How do you optimize database queries?",
  "Describe a time you refactored code.",
  "How do you document your work?",
  "How do you collaborate with other developers?",
  "Explain microservices architecture.",
  "How do you handle production bugs?",
  "How do you design APIs?",
  "Explain multithreading.",
  "How do you ensure application reliability?",
  "Describe your code review process.",
  "How do you test edge cases?",
  "Explain caching strategies.",
  "How do you improve system performance?",
  "Describe your experience with cloud platforms.",
  "How do you handle security vulnerabilities?",
  "What makes good software design?"
],

marketing: [
  "How do you measure campaign success?",
  "Describe a successful campaign you ran.",
  "How do you target the right audience?",
  "Explain SEO in simple terms.",
  "How do you improve conversion rates?",
  "What metrics do you track regularly?",
  "How do you conduct market research?",
  "Describe your content strategy.",
  "How do you optimize ad spend?",
  "How do you analyze competitors?",
  "What tools do you use for marketing?",
  "Describe a failed campaign and what you learned.",
  "How do you build brand awareness?",
  "Explain customer journey mapping.",
  "How do you perform A/B testing?",
  "How do you segment audiences?",
  "How do you manage influencer marketing?",
  "Describe your email marketing strategy.",
  "How do you increase customer retention?",
  "How do you handle negative feedback?",
  "Explain marketing funnels.",
  "How do you measure ROI?",
  "Describe your social media strategy.",
  "How do you optimize landing pages?",
  "How do you manage multi-channel campaigns?",
  "Explain paid vs organic marketing.",
  "How do you forecast campaign results?",
  "Describe your growth marketing approach.",
  "How do you launch a new product?",
  "What makes a great marketing campaign?"
],

data: [
  "Explain a dataset you analyzed.",
  "How do you handle missing data?",
  "What tools do you use for analysis?",
  "Describe a business insight you discovered.",
  "How do you validate your models?",
  "Explain overfitting in simple terms.",
  "How do you clean messy data?",
  "Describe a prediction model you built.",
  "How do you visualize results?",
  "Explain correlation vs causation.",
  "Describe an A/B test you ran.",
  "How do you ensure data accuracy?",
  "How do you handle outliers?",
  "Explain feature engineering.",
  "How do you select relevant variables?",
  "Describe a dashboard you built.",
  "How do you handle big datasets?",
  "Explain data normalization.",
  "How do you automate data pipelines?",
  "Describe your experience with SQL.",
  "How do you test data quality?",
  "Explain regression analysis.",
  "How do you communicate insights to stakeholders?",
  "Describe time-series analysis.",
  "How do you handle unstructured data?",
  "Explain data governance.",
  "How do you track KPIs?",
  "Describe your experience with BI tools.",
  "How do you validate assumptions?",
  "What makes good data analysis?"
],

management: [
  "How do you handle team conflicts?",
  "Describe your leadership style.",
  "How do you prioritize tasks?",
  "Tell me about a difficult decision you made.",
  "How do you motivate your team?",
  "How do you give feedback?",
  "Describe a time you managed change.",
  "How do you handle underperformance?",
  "How do you delegate tasks?",
  "How do you manage deadlines?",
  "Describe your communication style.",
  "How do you build trust?",
  "How do you set goals?",
  "How do you manage stakeholder expectations?",
  "Describe a crisis you handled.",
  "How do you measure team success?",
  "How do you coach employees?",
  "How do you resolve disagreements?",
  "Describe your decision-making process.",
  "How do you handle stress?",
  "How do you lead remote teams?",
  "How do you manage performance reviews?",
  "Describe a time you failed as a leader.",
  "How do you manage change resistance?",
  "How do you encourage innovation?",
  "How do you improve team morale?",
  "How do you handle competing priorities?",
  "Describe a successful team project.",
  "How do you develop future leaders?",
  "What makes a great manager?"
],

design: [
  "Describe your design process.",
  "How do you handle user feedback?",
  "Explain a project you designed.",
  "How do you balance usability and aesthetics?",
  "What tools do you use for design?",
  "How do you conduct user research?",
  "Describe your wireframing process.",
  "How do you test designs?",
  "Explain accessibility in design.",
  "How do you work with developers?",
  "Describe a redesign you did.",
  "How do you ensure consistency?",
  "How do you handle design critiques?",
  "Explain design systems.",
  "How do you prioritize features in UI?",
  "Describe your prototyping workflow.",
  "How do you validate design decisions?",
  "How do you conduct usability testing?",
  "Explain responsive design.",
  "How do you design for mobile?",
  "How do you use color theory?",
  "How do you handle tight deadlines?",
  "Describe your typography choices.",
  "How do you ensure brand alignment?",
  "How do you document designs?",
  "How do you improve user experience?",
  "Describe a design failure you learned from.",
  "How do you handle conflicting feedback?",
  "How do you measure design success?",
  "What makes great design?"
],

business: [
  "How do you close a deal?",
  "Describe your sales process.",
  "How do you handle objections?",
  "Explain a big win you had.",
  "How do you build relationships?",
  "How do you qualify leads?",
  "Describe a difficult client.",
  "How do you upsell?",
  "How do you retain customers?",
  "Explain your negotiation style.",
  "How do you manage pipelines?",
  "How do you handle rejection?",
  "How do you forecast sales?",
  "Explain customer lifetime value.",
  "How do you manage key accounts?",
  "Describe a lost deal and what you learned.",
  "How do you conduct sales presentations?",
  "How do you use CRM tools?",
  "How do you identify growth opportunities?",
  "How do you build partnerships?",
  "How do you manage churn?",
  "Explain value-based selling.",
  "How do you handle pricing objections?",
  "Describe your closing techniques.",
  "How do you follow up with prospects?",
  "How do you negotiate contracts?",
  "How do you build long-term trust?",
  "How do you manage territories?",
  "How do you meet targets?",
  "What makes a great salesperson?"
],

operations: [
  "Describe your daily workflow.",
  "How do you manage multiple tasks?",
  "How do you handle pressure?",
  "Explain a process you improved.",
  "How do you stay organized?",
  "Describe your problem-solving approach.",
  "How do you handle customer complaints?",
  "What tools do you use?",
  "How do you ensure accuracy?",
  "How do you manage deadlines?",
  "Describe a time you multitasked.",
  "How do you improve efficiency?",
  "How do you standardize processes?",
  "Explain workflow optimization.",
  "How do you manage resources?",
  "Describe a bottleneck you fixed.",
  "How do you track performance?",
  "How do you reduce errors?",
  "How do you handle unexpected issues?",
  "How do you improve turnaround time?",
  "How do you document processes?",
  "How do you handle cross-team coordination?",
  "How do you improve service quality?",
  "Describe a cost-saving initiative.",
  "How do you manage vendors?",
  "How do you scale operations?",
  "How do you train staff?",
  "How do you manage KPIs?",
  "How do you ensure compliance?",
  "What makes great operations management?"
],

hr: [
  "Describe your experience in recruitment.",
  "How do you screen candidates?",
  "How do you handle employee conflicts?",
  "Explain your onboarding process.",
  "How do you ensure employee engagement?",
  "Describe a difficult HR case you handled.",
  "How do you manage performance reviews?",
  "What HR tools have you used?",
  "How do you handle terminations?",
  "Explain labor law compliance.",
  "How do you promote company culture?",
  "How do you manage diversity and inclusion?",
  "Describe your training strategy.",
  "How do you resolve workplace disputes?",
  "How do you handle confidential information?",
  "Explain your payroll experience.",
  "How do you manage employee retention?",
  "How do you communicate policies?",
  "Describe a time you handled misconduct.",
  "How do you ensure legal compliance?",
  "How do you conduct exit interviews?",
  "How do you support leadership teams?",
  "What makes a good HR professional?",
  "How do you improve morale?",
  "How do you measure HR success?",
  "How do you manage remote teams?",
  "Describe a change management case.",
  "How do you coach managers?",
  "How do you build trust?",
  "How do you stay updated with HR trends?"
],

finance: [
  "Explain a financial report you prepared.",
  "How do you analyze budgets?",
  "Describe your forecasting process.",
  "How do you manage cash flow?",
  "Explain financial risk management.",
  "How do you ensure accuracy in reports?",
  "Describe a cost-saving strategy.",
  "How do you evaluate investments?",
  "Explain profit and loss statements.",
  "How do you handle audits?",
  "Describe your experience with taxation.",
  "How do you manage expenses?",
  "Explain financial controls.",
  "How do you use Excel for finance?",
  "Describe a financial model you built.",
  "How do you handle financial discrepancies?",
  "Explain ROI in simple terms.",
  "How do you work with stakeholders?",
  "Describe your experience with budgeting tools.",
  "How do you forecast revenue?",
  "How do you manage debt?",
  "Explain balance sheets.",
  "How do you ensure compliance?",
  "Describe a financial challenge you solved.",
  "How do you track KPIs?",
  "How do you manage payroll?",
  "Explain working capital.",
  "How do you analyze trends?",
  "Describe a time you reduced costs.",
  "How do you stay updated with finance laws?"
],

cybersecurity: [
  "Explain a security incident you handled.",
  "How do you assess security risks?",
  "Describe your incident response process.",
  "How do you secure networks?",
  "Explain encryption in simple terms.",
  "How do you manage access control?",
  "Describe your experience with firewalls.",
  "How do you detect threats?",
  "Explain phishing attacks.",
  "How do you train users on security?",
  "Describe vulnerability management.",
  "How do you perform security audits?",
  "Explain malware analysis.",
  "How do you secure cloud systems?",
  "Describe your SIEM experience.",
  "How do you manage patching?",
  "Explain zero trust model.",
  "How do you handle DDoS attacks?",
  "Describe endpoint security.",
  "How do you secure databases?",
  "Explain penetration testing.",
  "How do you respond to breaches?",
  "Describe your security tools.",
  "How do you monitor logs?",
  "Explain compliance standards.",
  "How do you manage secrets?",
  "Describe a major cyber threat.",
  "How do you secure APIs?",
  "How do you stay updated on threats?",
  "What makes a good security engineer?"
],

ai: [
  "Describe an AI project you worked on.",
  "How do you train machine learning models?",
  "Explain supervised vs unsupervised learning.",
  "How do you evaluate model performance?",
  "Describe a dataset you used.",
  "How do you prevent overfitting?",
  "Explain neural networks in simple terms.",
  "How do you handle biased data?",
  "Describe feature engineering.",
  "How do you deploy models?",
  "Explain deep learning.",
  "How do you tune hyperparameters?",
  "Describe your experience with Python for AI.",
  "How do you validate predictions?",
  "Explain reinforcement learning.",
  "How do you work with big data?",
  "Describe your model pipeline.",
  "How do you use TensorFlow or PyTorch?",
  "Explain NLP use cases.",
  "How do you handle missing values?",
  "Describe a real-world AI solution.",
  "How do you monitor models in production?",
  "Explain transfer learning.",
  "How do you scale AI systems?",
  "Describe ethical AI.",
  "How do you optimize performance?",
  "Explain computer vision.",
  "How do you select algorithms?",
  "Describe model explainability.",
  "How do you stay updated with AI research?"
],

cloud: [
  "Describe your cloud architecture experience.",
  "How do you deploy applications in the cloud?",
  "Explain IaaS, PaaS, and SaaS.",
  "How do you manage cloud costs?",
  "Describe your experience with AWS or Azure.",
  "How do you ensure cloud security?",
  "Explain auto-scaling.",
  "How do you handle cloud migrations?",
  "Describe your CI/CD in cloud.",
  "How do you monitor cloud systems?",
  "Explain load balancing.",
  "How do you design high availability?",
  "Describe disaster recovery in cloud.",
  "How do you manage IAM?",
  "Explain serverless computing.",
  "How do you optimize performance?",
  "Describe your cloud networking experience.",
  "How do you handle backups?",
  "Explain containerization in cloud.",
  "How do you use Terraform?",
  "Describe a cloud issue you fixed.",
  "How do you manage environments?",
  "Explain multi-cloud strategy.",
  "How do you handle compliance?",
  "Describe your logging strategy.",
  "How do you secure APIs in cloud?",
  "Explain edge computing.",
  "How do you handle scaling?",
  "Describe cost optimization techniques.",
  "How do you stay updated with cloud tech?"
],

devops: [
  "Describe your DevOps workflow.",
  "How do you implement CI/CD?",
  "Explain infrastructure as code.",
  "How do you monitor systems?",
  "Describe your experience with Docker.",
  "How do you manage Kubernetes?",
  "Explain automated testing.",
  "How do you handle deployments?",
  "Describe your version control strategy.",
  "How do you manage environments?",
  "Explain blue-green deployment.",
  "How do you ensure reliability?",
  "Describe your logging tools.",
  "How do you handle rollbacks?",
  "Explain configuration management.",
  "How do you secure pipelines?",
  "Describe your cloud DevOps experience.",
  "How do you manage secrets?",
  "Explain site reliability engineering.",
  "How do you scale infrastructure?",
  "Describe a DevOps incident you solved.",
  "How do you improve build times?",
  "Explain monitoring metrics.",
  "How do you handle alerts?",
  "Describe automation scripts you wrote.",
  "How do you manage dependencies?",
  "Explain container orchestration.",
  "How do you ensure uptime?",
  "Describe collaboration with developers.",
  "How do you stay updated with DevOps tools?"
],

qa: [
  "Describe your testing process.",
  "How do you write test cases?",
  "Explain manual vs automated testing.",
  "How do you report bugs?",
  "Describe your experience with Selenium.",
  "How do you test APIs?",
  "Explain regression testing.",
  "How do you ensure quality?",
  "Describe your test planning.",
  "How do you manage test data?",
  "Explain performance testing.",
  "How do you handle flaky tests?",
  "Describe your defect lifecycle.",
  "How do you test UI?",
  "Explain load testing.",
  "How do you prioritize test cases?",
  "Describe a critical bug you found.",
  "How do you work with developers?",
  "Explain test automation framework.",
  "How do you measure test coverage?",
  "Describe exploratory testing.",
  "How do you ensure usability?",
  "Explain security testing.",
  "How do you handle deadlines?",
  "Describe your documentation style.",
  "How do you test mobile apps?",
  "Explain smoke testing.",
  "How do you validate requirements?",
  "Describe a QA challenge you solved.",
  "How do you stay updated with QA tools?"
],

intern_fresher: [
  "Tell me about yourself.",
  "Why do you want this role?",
  "What skills are you learning?",
  "Describe a project you worked on.",
  "How do you handle feedback?",
  "What are your career goals?",
  "How do you manage your time?",
  "Describe a challenge you faced.",
  "What motivates you?",
  "How do you learn new things?",
  "Describe teamwork experience.",
  "How do you handle pressure?",
  "What tools do you know?",
  "Describe your strengths.",
  "What are your weaknesses?",
  "How do you solve problems?",
  "Describe your communication style.",
  "How do you handle failure?",
  "What do you expect from this job?",
  "How do you stay organized?",
  "Describe your leadership experience.",
  "How do you manage deadlines?",
  "What makes you unique?",
  "Describe a success you had.",
  "How do you take initiative?",
  "How do you work in a team?",
  "Describe your learning process.",
  "How do you adapt to change?",
  "What do you know about our company?",
  "Why should we hire you?"
],

software_engineer: [
  "Explain a recent technical problem you solved.",
  "Describe your debugging process.",
  "How do you ensure code quality?",
  "Explain a system you designed.",
  "How do you handle version control?",
  "How do you optimize application performance?",
  "Explain object-oriented design principles.",
  "How do you manage technical debt?",
  "Describe your experience with APIs.",
  "How do you handle concurrency?",
  "Explain microservices architecture.",
  "How do you test production code?",
  "Describe a major bug you fixed.",
  "How do you review pull requests?",
  "How do you design scalable systems?",
  "Explain SOLID principles.",
  "How do you handle system failures?",
  "Describe your experience with databases.",
  "How do you document software?",
  "How do you ensure system reliability?",
  "Explain design patterns you use.",
  "How do you handle legacy systems?",
  "Describe your CI/CD experience.",
  "How do you manage deployments?",
  "How do you optimize memory usage?",
  "Explain event-driven systems.",
  "How do you secure applications?",
  "Describe cross-team collaboration.",
  "How do you debug production issues?",
  "What makes great software engineering?"
],

frontend_developer: [
  "How do you optimize website performance?",
  "Explain responsive design.",
  "Describe a UI you built.",
  "How do you handle cross-browser issues?",
  "What tools do you use for frontend?",
  "How do you improve page load times?",
  "Explain CSS architecture.",
  "How do you manage application state?",
  "Describe your experience with React or Vue.",
  "How do you ensure accessibility?",
  "Explain component-based architecture.",
  "How do you test frontend code?",
  "Describe performance bottlenecks you fixed.",
  "How do you manage design systems?",
  "Explain progressive web apps.",
  "How do you handle animations?",
  "Describe your debugging workflow.",
  "How do you optimize images?",
  "How do you work with APIs?",
  "Explain SSR vs CSR.",
  "How do you manage browser compatibility?",
  "Describe frontend security risks.",
  "How do you handle user input validation?",
  "Explain mobile-first design.",
  "How do you collaborate with designers?",
  "Describe version control in frontend projects.",
  "How do you improve UX?",
  "Explain bundlers and build tools.",
  "How do you measure frontend performance?",
  "What makes a great frontend developer?"
],

backend_developer: [
  "Explain REST APIs.",
  "How do you manage databases?",
  "Describe a backend service you built.",
  "How do you handle authentication?",
  "How do you scale systems?",
  "Explain database indexing.",
  "How do you optimize API performance?",
  "Describe your caching strategy.",
  "How do you handle concurrency?",
  "Explain message queues.",
  "How do you manage data migrations?",
  "Describe your error handling strategy.",
  "How do you ensure system security?",
  "Explain microservices communication.",
  "How do you design database schemas?",
  "Describe your logging practices.",
  "How do you monitor backend services?",
  "Explain rate limiting.",
  "How do you handle file storage?",
  "Describe your experience with ORMs.",
  "How do you ensure data consistency?",
  "Explain transactions.",
  "How do you test backend code?",
  "Describe a system failure you handled.",
  "How do you manage deployments?",
  "Explain horizontal vs vertical scaling.",
  "How do you secure APIs?",
  "Describe background job processing.",
  "How do you design fault-tolerant systems?",
  "What makes great backend engineering?"
],

mobile_developer: [
  "Describe a mobile app you built.",
  "How do you handle offline data?",
  "Explain mobile UI principles.",
  "How do you optimize app performance?",
  "What platforms do you prefer?",
  "How do you manage app state?",
  "Explain mobile app architecture.",
  "How do you test mobile applications?",
  "Describe crash debugging experience.",
  "How do you manage app releases?",
  "Explain push notifications.",
  "How do you handle device fragmentation?",
  "Describe API integration.",
  "How do you optimize battery usage?",
  "Explain secure storage on mobile.",
  "How do you manage background tasks?",
  "Describe UI responsiveness techniques.",
  "How do you handle app updates?",
  "Explain mobile accessibility.",
  "How do you handle animations?",
  "Describe performance profiling tools.",
  "How do you ensure data security?",
  "Explain cross-platform development.",
  "How do you handle app store reviews?",
  "Describe error handling strategies.",
  "How do you manage memory leaks?",
  "Explain deep linking.",
  "How do you support multiple screen sizes?",
  "Describe a mobile bug you solved.",
  "What makes a great mobile developer?"
],

game_developer: [
  "Describe a game you built.",
  "How do you design game mechanics?",
  "Explain your use of engines.",
  "How do you optimize graphics?",
  "How do you handle user feedback?",
  "Describe your experience with Unity or Unreal.",
  "How do you manage physics simulations?",
  "Explain game AI techniques.",
  "How do you balance gameplay?",
  "Describe your asset pipeline.",
  "How do you handle performance bottlenecks?",
  "Explain multiplayer architecture.",
  "How do you test games?",
  "Describe your debugging workflow.",
  "How do you optimize memory usage?",
  "Explain rendering pipelines.",
  "How do you handle animations?",
  "Describe level design process.",
  "How do you implement sound design?",
  "Explain collision detection.",
  "How do you manage game states?",
  "Describe monetization strategies.",
  "How do you prevent cheating?",
  "Explain frame rate optimization.",
  "How do you handle platform-specific bugs?",
  "Describe user engagement strategies.",
  "How do you ship updates?",
  "Explain procedural generation.",
  "How do you measure player retention?",
  "What makes a great game developer?"
],

ai_engineer: [
  "Describe an AI project you worked on.",
  "How do you train models?",
  "Explain overfitting.",
  "How do you evaluate performance?",
  "How do you deploy AI systems?",
  "Explain feature engineering.",
  "How do you handle biased data?",
  "Describe a model pipeline you built.",
  "How do you tune hyperparameters?",
  "Explain neural networks.",
  "How do you monitor models in production?",
  "Describe transfer learning.",
  "How do you scale ML systems?",
  "Explain model explainability.",
  "How do you validate datasets?",
  "Describe your experience with PyTorch or TensorFlow.",
  "How do you optimize inference speed?",
  "Explain NLP pipelines.",
  "How do you handle missing values?",
  "Describe computer vision projects.",
  "How do you detect data drift?",
  "Explain ensemble models.",
  "How do you manage model versions?",
  "Describe ethical AI challenges.",
  "How do you evaluate real-world impact?",
  "Explain reinforcement learning.",
  "How do you manage big datasets?",
  "Describe your MLOps workflow.",
  "How do you debug model failures?",
  "What makes a great AI engineer?"
],

data_scientist: [
  "Explain a dataset you analyzed.",
  "How do you clean data?",
  "Describe a model you built.",
  "How do you validate results?",
  "What tools do you use?",
  "Explain feature selection.",
  "How do you handle missing values?",
  "Describe exploratory data analysis.",
  "How do you communicate insights?",
  "Explain regression vs classification.",
  "How do you avoid overfitting?",
  "Describe an A/B test you ran.",
  "How do you visualize data?",
  "Explain clustering.",
  "How do you handle outliers?",
  "Describe a time-series model.",
  "How do you evaluate model performance?",
  "Explain cross-validation.",
  "How do you deploy models?",
  "Describe your experience with SQL.",
  "How do you work with stakeholders?",
  "Explain data pipelines.",
  "How do you automate analysis?",
  "Describe a business impact you created.",
  "How do you ensure data quality?",
  "Explain hypothesis testing.",
  "How do you select algorithms?",
  "Describe your dashboarding tools.",
  "How do you track KPIs?",
  "What makes a great data scientist?"
],

ml_engineer: [
  "How do you deploy ML models?",
  "Explain feature engineering.",
  "Describe a pipeline you built.",
  "How do you monitor models?",
  "How do you handle drift?",
  "Explain model versioning.",
  "How do you optimize inference?",
  "Describe your MLOps workflow.",
  "How do you validate training data?",
  "Explain hyperparameter tuning.",
  "How do you scale ML systems?",
  "Describe model retraining strategies.",
  "How do you handle imbalanced data?",
  "Explain experiment tracking.",
  "How do you debug model failures?",
  "Describe CI/CD for ML.",
  "How do you ensure reproducibility?",
  "Explain batch vs real-time inference.",
  "How do you manage pipelines in production?",
  "Describe your feature store experience.",
  "How do you test ML systems?",
  "Explain ensemble techniques.",
  "How do you manage model dependencies?",
  "Describe deployment rollback strategies.",
  "How do you ensure data privacy?",
  "Explain distributed training.",
  "How do you measure model performance in production?",
  "Describe infrastructure for ML workloads.",
  "How do you optimize training pipelines?",
  "What makes a great ML engineer?"
],

cloud_engineer: [
  "Describe your cloud experience.",
  "How do you manage IAM?",
  "Explain auto-scaling.",
  "How do you reduce cloud costs?",
  "How do you secure cloud systems?",
  "Explain VPC networking.",
  "How do you design high availability?",
  "Describe disaster recovery strategies.",
  "How do you manage cloud monitoring?",
  "Explain load balancing.",
  "How do you deploy containerized apps?",
  "Describe serverless architectures.",
  "How do you manage secrets?",
  "Explain multi-region deployments.",
  "How do you handle backups?",
  "Describe your Terraform experience.",
  "How do you automate provisioning?",
  "Explain hybrid cloud setups.",
  "How do you manage storage services?",
  "Describe cloud migration projects.",
  "How do you handle compliance?",
  "Explain edge computing.",
  "How do you optimize latency?",
  "Describe network security groups.",
  "How do you monitor costs?",
  "Explain blue-green deployments.",
  "How do you secure APIs?",
  "Describe cloud incident response.",
  "How do you handle scaling?",
  "What makes a great cloud engineer?"
],

devops_engineer: [
  "Describe your CI/CD pipeline.",
  "How do you manage containers?",
  "Explain infrastructure as code.",
  "How do you monitor systems?",
  "How do you handle rollbacks?",
  "Describe your Kubernetes experience.",
  "How do you manage secrets?",
  "Explain blue-green deployments.",
  "How do you ensure reliability?",
  "Describe logging strategies.",
  "How do you automate testing?",
  "Explain configuration management.",
  "How do you optimize build times?",
  "Describe a production outage you handled.",
  "How do you scale infrastructure?",
  "Explain SRE principles.",
  "How do you manage environments?",
  "Describe deployment pipelines.",
  "How do you handle security in pipelines?",
  "Explain canary deployments.",
  "How do you manage dependencies?",
  "Describe monitoring metrics.",
  "How do you reduce downtime?",
  "Explain container orchestration.",
  "How do you handle alerts?",
  "Describe your cloud DevOps experience.",
  "How do you ensure system observability?",
  "Explain GitOps.",
  "How do you improve system resilience?",
  "What makes a great DevOps engineer?"
],

cybersecurity_analyst: [
  "Describe a security incident.",
  "How do you assess risk?",
  "Explain encryption.",
  "How do you secure networks?",
  "How do you monitor threats?",
  "Describe your incident response workflow.",
  "How do you perform vulnerability scans?",
  "Explain phishing detection.",
  "How do you handle malware analysis?",
  "Describe SIEM tools you've used.",
  "How do you manage access control?",
  "Explain zero trust security.",
  "How do you conduct penetration testing?",
  "Describe patch management strategies.",
  "How do you secure cloud environments?",
  "Explain endpoint protection.",
  "How do you investigate breaches?",
  "Describe log analysis techniques.",
  "How do you ensure compliance?",
  "Explain data loss prevention.",
  "How do you manage secrets?",
  "Describe security awareness training.",
  "How do you secure APIs?",
  "Explain threat modeling.",
  "How do you handle DDoS attacks?",
  "Describe forensic analysis.",
  "How do you monitor network traffic?",
  "How do you stay updated on threats?",
  "Describe your security toolkit.",
  "What makes a great cybersecurity analyst?"
],

qa_engineer: [
  "Describe your testing process.",
  "How do you automate tests?",
  "Explain regression testing.",
  "How do you report bugs?",
  "How do you ensure quality?",
  "Describe your experience with Selenium.",
  "How do you test APIs?",
  "Explain test case design.",
  "How do you manage test data?",
  "Describe your defect lifecycle.",
  "How do you handle flaky tests?",
  "Explain performance testing.",
  "How do you prioritize test cases?",
  "Describe exploratory testing.",
  "How do you validate requirements?",
  "Explain smoke testing.",
  "How do you test mobile apps?",
  "Describe UI automation frameworks.",
  "How do you collaborate with developers?",
  "Explain load testing.",
  "How do you ensure usability?",
  "Describe test planning strategies.",
  "How do you measure test coverage?",
  "Explain security testing.",
  "How do you handle deadlines?",
  "Describe documentation practices.",
  "How do you handle critical bugs?",
  "Explain continuous testing.",
  "How do you manage test environments?",
  "What makes a great QA engineer?"
],

ui_ux_designer: [
  "Describe your design process.",
  "How do you conduct user research?",
  "Explain usability testing.",
  "How do you handle feedback?",
  "What tools do you use?",
  "How do you create wireframes?",
  "Explain design systems.",
  "How do you ensure accessibility?",
  "Describe prototyping workflows.",
  "How do you balance aesthetics and usability?",
  "How do you test design assumptions?",
  "Explain responsive design.",
  "How do you work with developers?",
  "Describe user journey mapping.",
  "How do you prioritize features?",
  "Explain information architecture.",
  "How do you validate design decisions?",
  "Describe redesign projects.",
  "How do you handle conflicting feedback?",
  "Explain usability heuristics.",
  "How do you measure UX success?",
  "Describe design documentation practices.",
  "How do you conduct A/B testing?",
  "Explain mobile-first design.",
  "How do you improve onboarding flows?",
  "Describe accessibility standards.",
  "How do you handle tight deadlines?",
  "Explain visual hierarchy.",
  "How do you ensure brand consistency?",
  "What makes a great UI/UX designer?"
],

product_manager: [
  "Describe your product strategy.",
  "How do you gather requirements?",
  "Explain roadmap planning.",
  "How do you prioritize features?",
  "How do you work with teams?",
  "Describe a product launch you led.",
  "How do you define success metrics?",
  "Explain MVP development.",
  "How do you manage stakeholder expectations?",
  "Describe your user research process.",
  "How do you handle competing priorities?",
  "Explain backlog grooming.",
  "How do you validate product ideas?",
  "Describe customer feedback loops.",
  "How do you manage technical debt?",
  "Explain product-market fit.",
  "How do you conduct A/B testing?",
  "Describe feature adoption strategies.",
  "How do you handle scope creep?",
  "Explain OKRs.",
  "How do you work with engineering teams?",
  "Describe roadmap trade-offs.",
  "How do you measure product success?",
  "Explain go-to-market strategies.",
  "How do you manage cross-functional teams?",
  "Describe a failed product decision.",
  "How do you manage risks?",
  "Explain user stories.",
  "How do you handle product pivots?",
  "What makes a great product manager?"
],

project_manager: [
  "Describe a project you led.",
  "How do you manage timelines?",
  "Explain risk management.",
  "How do you handle conflicts?",
  "How do you ensure delivery?",
  "Describe your project planning process.",
  "How do you manage scope changes?",
  "Explain stakeholder communication.",
  "How do you track progress?",
  "Describe resource allocation strategies.",
  "How do you manage budgets?",
  "Explain project documentation.",
  "How do you handle delays?",
  "Describe team coordination techniques.",
  "How do you manage dependencies?",
  "Explain agile methodologies.",
  "How do you handle project risks?",
  "Describe crisis management.",
  "How do you manage vendors?",
  "Explain milestone tracking.",
  "How do you ensure quality delivery?",
  "Describe lessons learned sessions.",
  "How do you handle remote teams?",
  "Explain waterfall vs agile.",
  "How do you manage expectations?",
  "Describe performance reporting.",
  "How do you resolve bottlenecks?",
  "Explain project governance.",
  "How do you handle underperformance?",
  "What makes a great project manager?"
],

business_analyst: [
  "How do you gather business needs?",
  "Describe a solution you proposed.",
  "Explain process mapping.",
  "How do you analyze data?",
  "How do you work with stakeholders?",
  "Describe requirements documentation.",
  "How do you conduct gap analysis?",
  "Explain use case development.",
  "How do you validate solutions?",
  "Describe workflow optimization.",
  "How do you prioritize requirements?",
  "Explain business process modeling.",
  "How do you manage scope changes?",
  "Describe stakeholder communication strategies.",
  "How do you perform root cause analysis?",
  "Explain functional vs non-functional requirements.",
  "How do you ensure alignment with business goals?",
  "Describe data-driven decision making.",
  "How do you conduct impact analysis?",
  "Explain BRD vs FRD.",
  "How do you manage competing priorities?",
  "Describe change management involvement.",
  "How do you track benefits realization?",
  "Explain requirement traceability.",
  "How do you handle ambiguous requirements?",
  "Describe business case development.",
  "How do you collaborate with technical teams?",
  "Explain KPI tracking.",
  "How do you ensure stakeholder buy-in?",
  "What makes a great business analyst?"
],

marketing_manager: [
  "Describe a campaign you ran.",
  "How do you measure success?",
  "Explain your targeting strategy.",
  "How do you manage budgets?",
  "How do you improve ROI?",
  "Describe brand positioning.",
  "How do you manage multi-channel campaigns?",
  "Explain customer segmentation.",
  "How do you perform market research?",
  "Describe growth marketing strategies.",
  "How do you manage agency relationships?",
  "Explain marketing analytics.",
  "How do you handle underperforming campaigns?",
  "Describe product launch marketing.",
  "How do you manage content calendars?",
  "Explain attribution models.",
  "How do you optimize funnels?",
  "Describe email marketing strategies.",
  "How do you track customer acquisition cost?",
  "Explain A/B testing.",
  "How do you manage stakeholder expectations?",
  "Describe influencer marketing.",
  "How do you improve brand awareness?",
  "Explain lifecycle marketing.",
  "How do you handle negative PR?",
  "Describe budget forecasting.",
  "How do you align marketing with sales?",
  "Explain marketing automation.",
  "How do you measure customer retention?",
  "What makes a great marketing manager?"
],

seo_specialist: [
  "How do you improve rankings?",
  "Explain keyword research.",
  "Describe an SEO audit.",
  "How do you build backlinks?",
  "How do you track performance?",
  "Explain on-page optimization.",
  "How do you handle technical SEO?",
  "Describe site speed optimization.",
  "How do you improve CTR?",
  "Explain content SEO strategies.",
  "How do you manage site migrations?",
  "Describe schema markup.",
  "How do you handle duplicate content?",
  "Explain internal linking.",
  "How do you perform competitor analysis?",
  "Describe your experience with Google Search Console.",
  "How do you track algorithm updates?",
  "Explain mobile-first indexing.",
  "How do you optimize for featured snippets?",
  "Describe local SEO strategies.",
  "How do you measure SEO ROI?",
  "Explain crawl budget optimization.",
  "How do you handle penalties?",
  "Describe backlink audits.",
  "How do you optimize images for SEO?",
  "Explain international SEO.",
  "How do you improve site architecture?",
  "Describe content gap analysis.",
  "How do you test SEO changes?",
  "What makes a great SEO specialist?"
],

content_writer: [
  "Describe your writing process.",
  "How do you research topics?",
  "Explain SEO writing.",
  "How do you edit content?",
  "How do you meet deadlines?",
  "Describe your content planning strategy.",
  "How do you adapt tone for different audiences?",
  "Explain keyword integration.",
  "How do you optimize headlines?",
  "Describe your storytelling approach.",
  "How do you handle feedback?",
  "Explain content repurposing.",
  "How do you ensure originality?",
  "Describe long-form content creation.",
  "How do you improve readability?",
  "Explain content calendars.",
  "How do you collaborate with designers?",
  "Describe your experience with blogs.",
  "How do you write technical content?",
  "Explain conversion-focused writing.",
  "How do you measure content performance?",
  "Describe your editing tools.",
  "How do you manage multiple projects?",
  "Explain content localization.",
  "How do you handle writer’s block?",
  "Describe case study writing.",
  "How do you create engaging CTAs?",
  "Explain brand voice consistency.",
  "How do you research competitors?",
  "What makes great content writing?"
],

copywriter: [
  "How do you write persuasive copy?",
  "Describe a campaign you wrote for.",
  "How do you test headlines?",
  "How do you target audiences?",
  "How do you measure impact?",
  "Explain your copywriting framework.",
  "How do you optimize conversion copy?",
  "Describe landing page copy strategies.",
  "How do you handle brand voice?",
  "Explain emotional triggers in copy.",
  "How do you collaborate with designers?",
  "Describe email copy strategies.",
  "How do you perform A/B testing?",
  "Explain storytelling in copy.",
  "How do you handle tight deadlines?",
  "Describe social media copywriting.",
  "How do you write product descriptions?",
  "Explain value proposition writing.",
  "How do you optimize CTAs?",
  "Describe your research process.",
  "How do you handle revisions?",
  "Explain long-form copywriting.",
  "How do you measure copy effectiveness?",
  "Describe UX writing.",
  "How do you ensure clarity?",
  "Explain tone adaptation.",
  "How do you write for different platforms?",
  "Describe your editing workflow.",
  "How do you handle feedback loops?",
  "What makes great copywriting?"
],

social_media_manager: [
  "How do you grow an audience?",
  "Describe a viral post.",
  "How do you analyze engagement?",
  "How do you manage content calendars?",
  "How do you handle feedback?",
  "Explain platform-specific strategies.",
  "How do you optimize posting times?",
  "Describe hashtag strategies.",
  "How do you manage brand voice?",
  "Explain influencer collaborations.",
  "How do you handle negative comments?",
  "Describe social media analytics.",
  "How do you run paid social campaigns?",
  "Explain community management.",
  "How do you measure ROI?",
  "Describe content ideation process.",
  "How do you increase reach organically?",
  "Explain A/B testing for posts.",
  "How do you manage crises?",
  "Describe audience segmentation.",
  "How do you repurpose content?",
  "Explain engagement strategies.",
  "How do you track conversions?",
  "Describe social listening.",
  "How do you stay updated on trends?",
  "Explain brand storytelling.",
  "How do you collaborate with marketing teams?",
  "Describe scheduling tools.",
  "How do you improve follower retention?",
  "What makes a great social media manager?"
],

hr_manager: [
  "Describe your recruitment process.",
  "How do you handle conflicts?",
  "Explain onboarding.",
  "How do you retain employees?",
  "How do you ensure compliance?",
  "Describe performance management strategies.",
  "How do you manage workforce planning?",
  "Explain compensation benchmarking.",
  "How do you handle terminations?",
  "Describe employee engagement initiatives.",
  "How do you manage HR policies?",
  "Explain labor law compliance.",
  "How do you handle sensitive issues?",
  "Describe training and development programs.",
  "How do you measure HR success?",
  "Explain succession planning.",
  "How do you manage organizational change?",
  "Describe culture-building initiatives.",
  "How do you manage remote teams?",
  "Explain grievance handling.",
  "How do you coach managers?",
  "Describe HR analytics.",
  "How do you improve retention?",
  "Explain diversity and inclusion strategies.",
  "How do you conduct exit interviews?",
  "Describe employee relations experience.",
  "How do you manage compliance audits?",
  "Explain HR technology usage.",
  "How do you handle underperformance?",
  "What makes a great HR manager?"
],

recruiter: [
  "How do you source candidates?",
  "Describe screening methods.",
  "How do you assess fit?",
  "How do you handle rejections?",
  "How do you track hiring metrics?",
  "Explain candidate experience strategies.",
  "How do you manage pipelines?",
  "Describe interview techniques.",
  "How do you collaborate with hiring managers?",
  "Explain employer branding.",
  "How do you manage passive candidates?",
  "Describe ATS tools you’ve used.",
  "How do you reduce time-to-hire?",
  "Explain diversity hiring strategies.",
  "How do you conduct behavioral interviews?",
  "Describe offer negotiation.",
  "How do you manage hiring volumes?",
  "Explain sourcing channels.",
  "How do you ensure candidate engagement?",
  "Describe recruitment analytics.",
  "How do you handle last-minute dropouts?",
  "Explain campus hiring.",
  "How do you screen technical roles?",
  "Describe reference checks.",
  "How do you improve hiring quality?",
  "Explain onboarding coordination.",
  "How do you manage confidential data?",
  "Describe recruitment challenges.",
  "How do you stay updated on hiring trends?",
  "What makes a great recruiter?"
],

finance_analyst: [
  "Explain a financial model you built.",
  "How do you analyze budgets?",
  "Describe forecasting methods.",
  "How do you manage risk?",
  "How do you report insights?",
  "Explain variance analysis.",
  "How do you evaluate investments?",
  "Describe cash flow modeling.",
  "How do you handle large datasets?",
  "Explain sensitivity analysis.",
  "How do you perform valuation?",
  "Describe revenue forecasting.",
  "How do you manage stakeholder expectations?",
  "Explain financial KPIs.",
  "How do you ensure data accuracy?",
  "Describe scenario analysis.",
  "How do you optimize costs?",
  "Explain ROI calculations.",
  "How do you use Excel advanced functions?",
  "Describe financial dashboards.",
  "How do you analyze trends?",
  "Explain budgeting cycles.",
  "How do you handle audits?",
  "Describe profit margin analysis.",
  "How do you communicate insights?",
  "Explain working capital management.",
  "How do you forecast demand?",
  "Describe financial planning processes.",
  "How do you manage competing priorities?",
  "What makes a great finance analyst?"
],

accountant: [
  "Describe your accounting process.",
  "How do you prepare reports?",
  "Explain audits.",
  "How do you manage taxes?",
  "How do you ensure accuracy?",
  "Describe journal entry procedures.",
  "How do you manage reconciliations?",
  "Explain GAAP standards.",
  "How do you handle payroll accounting?",
  "Describe financial closing process.",
  "How do you manage accounts payable?",
  "Explain accounts receivable workflows.",
  "How do you detect fraud?",
  "Describe budgeting experience.",
  "How do you handle expense tracking?",
  "Explain depreciation methods.",
  "How do you manage inventory accounting?",
  "Describe tax compliance strategies.",
  "How do you prepare balance sheets?",
  "Explain internal controls.",
  "How do you manage audits?",
  "Describe cash flow statements.",
  "How do you ensure regulatory compliance?",
  "Explain cost accounting.",
  "How do you manage financial discrepancies?",
  "Describe accounting software you’ve used.",
  "How do you meet reporting deadlines?",
  "Explain revenue recognition.",
  "How do you collaborate with finance teams?",
  "What makes a great accountant?"
],

investment_analyst: [
  "How do you evaluate companies?",
  "Explain valuation methods.",
  "Describe a stock you analyzed.",
  "How do you manage risk?",
  "How do you track markets?",
  "Explain financial statement analysis.",
  "How do you perform DCF valuation?",
  "Describe portfolio construction.",
  "How do you analyze industry trends?",
  "Explain relative valuation.",
  "How do you assess management quality?",
  "Describe earnings modeling.",
  "How do you handle market volatility?",
  "Explain macroeconomic analysis.",
  "How do you manage diversification?",
  "Describe investment thesis development.",
  "How do you track portfolio performance?",
  "Explain margin of safety.",
  "How do you assess competitive advantage?",
  "Describe due diligence process.",
  "How do you forecast earnings?",
  "Explain asset allocation.",
  "How do you evaluate risk-adjusted returns?",
  "Describe valuation multiples.",
  "How do you analyze cash flows?",
  "Explain economic moats.",
  "How do you handle downside risk?",
  "Describe investment research tools.",
  "How do you stay updated on markets?",
  "What makes a great investment analyst?"
],

operations_manager: [
  "Describe process improvements.",
  "How do you manage workflows?",
  "Explain efficiency strategies.",
  "How do you handle issues?",
  "How do you track KPIs?",
  "Describe resource allocation methods.",
  "How do you manage staffing?",
  "Explain cost optimization techniques.",
  "How do you handle vendor management?",
  "Describe quality assurance strategies.",
  "How do you manage inventory?",
  "Explain capacity planning.",
  "How do you improve turnaround time?",
  "Describe operational risk management.",
  "How do you manage cross-team coordination?",
  "Explain performance monitoring.",
  "How do you handle process bottlenecks?",
  "Describe SOP development.",
  "How do you manage budgets?",
  "Explain compliance management.",
  "How do you manage continuous improvement?",
  "Describe customer satisfaction strategies.",
  "How do you manage crises?",
  "Explain workflow automation.",
  "How do you scale operations?",
  "Describe training programs.",
  "How do you manage vendor disputes?",
  "Explain logistics coordination.",
  "How do you ensure service quality?",
  "What makes a great operations manager?"
],

supply_chain_manager: [
  "Describe your logistics experience.",
  "How do you reduce costs?",
  "Explain inventory control.",
  "How do you manage vendors?",
  "How do you handle disruptions?",
  "Describe demand forecasting.",
  "How do you optimize supply chains?",
  "Explain procurement strategies.",
  "How do you manage lead times?",
  "Describe warehouse operations.",
  "How do you ensure quality standards?",
  "Explain supply chain KPIs.",
  "How do you manage global suppliers?",
  "Describe risk mitigation strategies.",
  "How do you handle stockouts?",
  "Explain vendor negotiations.",
  "How do you manage logistics partners?",
  "Describe transportation planning.",
  "How do you improve order fulfillment?",
  "Explain supply chain visibility.",
  "How do you manage returns?",
  "Describe capacity planning.",
  "How do you optimize inventory turnover?",
  "Explain just-in-time inventory.",
  "How do you handle supplier failures?",
  "Describe cost analysis methods.",
  "How do you manage sustainability goals?",
  "Explain cross-border logistics.",
  "How do you handle emergency sourcing?",
  "What makes a great supply chain manager?"
],

logistics_coordinator: [
  "How do you plan shipments?",
  "Describe a delivery issue.",
  "How do you track inventory?",
  "How do you manage vendors?",
  "How do you improve efficiency?",
  "Explain route optimization.",
  "How do you handle shipment delays?",
  "Describe warehouse coordination.",
  "How do you manage freight costs?",
  "Explain customs documentation.",
  "How do you track logistics KPIs?",
  "Describe vendor communication strategies.",
  "How do you manage transportation schedules?",
  "Explain inventory reconciliation.",
  "How do you handle damaged goods?",
  "Describe cross-border shipping experience.",
  "How do you manage warehouse layouts?",
  "Explain logistics software tools.",
  "How do you coordinate multiple carriers?",
  "Describe order fulfillment workflows.",
  "How do you manage stock discrepancies?",
  "Explain safety compliance.",
  "How do you improve turnaround times?",
  "Describe load planning.",
  "How do you handle urgent shipments?",
  "Explain logistics documentation.",
  "How do you manage returns processing?",
  "Describe freight negotiation experience.",
  "How do you ensure delivery accuracy?",
  "What makes a great logistics coordinator?"
],

customer_support_rep: [
  "How do you handle complaints?",
  "Describe a difficult customer.",
  "How do you manage tickets?",
  "How do you ensure satisfaction?",
  "How do you communicate clearly?",
  "Explain your customer empathy approach.",
  "How do you de-escalate situations?",
  "Describe CRM tools you've used.",
  "How do you prioritize support requests?",
  "Explain service-level agreements.",
  "How do you document interactions?",
  "Describe cross-team escalation.",
  "How do you handle high call volumes?",
  "Explain first-call resolution.",
  "How do you manage upset customers?",
  "Describe follow-up strategies.",
  "How do you gather customer feedback?",
  "Explain knowledge base usage.",
  "How do you improve customer retention?",
  "Describe multitasking techniques.",
  "How do you handle billing issues?",
  "Explain customer satisfaction metrics.",
  "How do you train on new products?",
  "Describe conflict resolution skills.",
  "How do you handle churn risks?",
  "Explain omnichannel support.",
  "How do you maintain professionalism?",
  "Describe handling technical queries.",
  "How do you measure service quality?",
  "What makes a great customer support representative?"
],

technical_support: [
  "How do you troubleshoot issues?",
  "Describe a case you solved.",
  "How do you explain tech to users?",
  "How do you document solutions?",
  "How do you prioritize tickets?",
  "Explain your diagnostic workflow.",
  "How do you handle system outages?",
  "Describe remote troubleshooting tools.",
  "How do you escalate complex issues?",
  "Explain incident management.",
  "How do you manage user expectations?",
  "Describe ticket lifecycle management.",
  "How do you handle repeat issues?",
  "Explain root cause analysis.",
  "How do you test fixes?",
  "Describe technical documentation practices.",
  "How do you handle hardware issues?",
  "Explain network troubleshooting.",
  "How do you ensure first-contact resolution?",
  "Describe customer communication strategies.",
  "How do you handle high-severity incidents?",
  "Explain patch troubleshooting.",
  "How do you collaborate with engineering?",
  "Describe monitoring tools you use.",
  "How do you track issue trends?",
  "Explain ticket prioritization strategies.",
  "How do you handle angry users?",
  "Describe escalation paths.",
  "How do you improve support workflows?",
  "What makes a great technical support specialist?"
],

it_support: [
  "How do you handle system issues?",
  "Describe a network problem.",
  "How do you install software?",
  "How do you secure systems?",
  "How do you assist users?",
  "Explain your troubleshooting workflow.",
  "How do you manage user accounts?",
  "Describe patch management strategies.",
  "How do you handle malware incidents?",
  "Explain backup and recovery.",
  "How do you manage hardware inventory?",
  "Describe help desk ticketing systems.",
  "How do you handle printer issues?",
  "Explain network configuration basics.",
  "How do you ensure endpoint security?",
  "Describe remote desktop tools.",
  "How do you document technical issues?",
  "Explain password management policies.",
  "How do you manage software licenses?",
  "Describe system monitoring tools.",
  "How do you troubleshoot performance issues?",
  "Explain device provisioning.",
  "How do you handle VPN issues?",
  "Describe user training strategies.",
  "How do you manage mobile device security?",
  "Explain asset management.",
  "How do you support remote workers?",
  "Describe OS deployment experience.",
  "How do you manage service outages?",
  "What makes a great IT support specialist?"
],

network_engineer: [
  "Describe your network setup.",
  "How do you secure networks?",
  "Explain routing.",
  "How do you monitor traffic?",
  "How do you troubleshoot outages?",
  "Describe VLAN configuration.",
  "How do you manage firewalls?",
  "Explain subnetting.",
  "How do you handle DDoS attacks?",
  "Describe network performance optimization.",
  "How do you manage load balancers?",
  "Explain VPN technologies.",
  "How do you ensure high availability?",
  "Describe WAN optimization.",
  "How do you handle network upgrades?",
  "Explain DNS architecture.",
  "How do you manage network monitoring tools?",
  "Describe wireless network design.",
  "How do you handle latency issues?",
  "Explain BGP routing.",
  "How do you manage IP address allocation?",
  "Describe network segmentation strategies.",
  "How do you perform network audits?",
  "Explain QoS.",
  "How do you troubleshoot packet loss?",
  "Describe SD-WAN solutions.",
  "How do you manage redundancy?",
  "Explain network automation.",
  "How do you secure remote access?",
  "What makes a great network engineer?"
],

system_administrator: [
  "How do you manage servers?",
  "Describe a system failure.",
  "How do you apply patches?",
  "How do you handle backups?",
  "How do you ensure uptime?",
  "Explain server monitoring tools.",
  "How do you manage user permissions?",
  "Describe virtualization technologies.",
  "How do you handle disaster recovery?",
  "Explain system hardening.",
  "How do you manage storage systems?",
  "Describe incident response processes.",
  "How do you handle system upgrades?",
  "Explain log management.",
  "How do you manage configuration changes?",
  "Describe automation tools you've used.",
  "How do you handle performance tuning?",
  "Explain identity management.",
  "How do you manage email servers?",
  "Describe network troubleshooting experience.",
  "How do you handle OS deployments?",
  "Explain backup verification.",
  "How do you secure servers?",
  "Describe high availability setups.",
  "How do you manage patch compliance?",
  "Explain container management.",
  "How do you document infrastructure?",
  "Describe system auditing.",
  "How do you manage remote servers?",
  "What makes a great system administrator?"
],

database_administrator: [
  "How do you optimize queries?",
  "Describe a backup strategy.",
  "How do you manage permissions?",
  "Explain replication.",
  "How do you ensure data integrity?",
  "Describe indexing strategies.",
  "How do you handle database migrations?",
  "Explain normalization.",
  "How do you monitor database performance?",
  "Describe disaster recovery for databases.",
  "How do you manage schema changes?",
  "Explain transaction isolation levels.",
  "How do you handle deadlocks?",
  "Describe high availability setups.",
  "How do you manage data security?",
  "Explain sharding.",
  "How do you optimize storage usage?",
  "Describe query execution plans.",
  "How do you manage database upgrades?",
  "Explain backup verification.",
  "How do you handle data corruption?",
  "Describe auditing strategies.",
  "How do you manage large datasets?",
  "Explain data consistency models.",
  "How do you monitor replication lag?",
  "Describe performance tuning tools.",
  "How do you handle concurrent users?",
  "Explain ACID properties.",
  "How do you automate database maintenance?",
  "What makes a great database administrator?"
],

blockchain_developer: [
  "Describe a blockchain project.",
  "Explain smart contracts.",
  "How do you ensure security?",
  "How do you optimize gas fees?",
  "How do you test contracts?",
  "Explain consensus mechanisms.",
  "How do you handle blockchain scalability?",
  "Describe experience with Ethereum or Solana.",
  "How do you manage private keys securely?",
  "Explain decentralized applications.",
  "How do you audit smart contracts?",
  "Describe token standards like ERC-20.",
  "How do you handle contract upgrades?",
  "Explain blockchain forks.",
  "How do you optimize transaction throughput?",
  "Describe layer-2 solutions.",
  "How do you manage wallets?",
  "Explain blockchain data storage.",
  "How do you prevent reentrancy attacks?",
  "Describe oracle integrations.",
  "How do you debug smart contracts?",
  "Explain cryptographic hashing.",
  "How do you manage gas estimation?",
  "Describe decentralized identity.",
  "How do you handle blockchain governance?",
  "Explain interoperability.",
  "How do you test blockchain applications?",
  "Describe NFT development.",
  "How do you manage node infrastructure?",
  "What makes a great blockchain developer?"
],

web_designer: [
  "Describe your design workflow.",
  "How do you handle client feedback?",
  "Explain responsive layouts.",
  "How do you ensure usability?",
  "What tools do you use?",
  "Describe your prototyping process.",
  "How do you manage color schemes?",
  "Explain typography principles.",
  "How do you design navigation systems?",
  "Describe accessibility considerations.",
  "How do you optimize page layouts?",
  "Explain visual hierarchy.",
  "How do you collaborate with developers?",
  "Describe branding integration.",
  "How do you test designs?",
  "Explain mobile-first design.",
  "How do you manage revisions?",
  "Describe UI consistency strategies.",
  "How do you ensure performance-friendly designs?",
  "Explain grid systems.",
  "How do you handle deadlines?",
  "Describe user-centered design.",
  "How do you manage assets?",
  "Explain responsive breakpoints.",
  "How do you conduct usability testing?",
  "Describe wireframing tools.",
  "How do you adapt designs for different audiences?",
  "Explain design handoff.",
  "How do you improve UX?",
  "What makes a great web designer?"
],

graphic_designer: [
  "Describe your creative process.",
  "How do you handle revisions?",
  "Explain branding.",
  "How do you meet deadlines?",
  "What tools do you use?",
  "Describe typography choices.",
  "How do you use color theory?",
  "Explain visual storytelling.",
  "How do you design logos?",
  "Describe layout design principles.",
  "How do you manage client expectations?",
  "Explain consistency in design.",
  "How do you handle creative blocks?",
  "Describe print vs digital design differences.",
  "How do you ensure accessibility?",
  "Explain image composition.",
  "How do you manage multiple projects?",
  "Describe your design review process.",
  "How do you collaborate with marketing teams?",
  "Explain brand guidelines.",
  "How do you optimize designs for platforms?",
  "Describe portfolio presentation.",
  "How do you handle constructive criticism?",
  "Explain design hierarchy.",
  "How do you manage file organization?",
  "Describe typography pairing.",
  "How do you test visual impact?",
  "Explain visual balance.",
  "How do you stay updated on trends?",
  "What makes a great graphic designer?"
],

video_editor: [
  "Describe your editing workflow.",
  "How do you tell stories visually?",
  "Explain color grading.",
  "How do you manage projects?",
  "What tools do you use?",
  "Describe timeline organization techniques.",
  "How do you handle audio synchronization?",
  "Explain video compression.",
  "How do you manage large media files?",
  "Describe your transition techniques.",
  "How do you optimize videos for platforms?",
  "Explain motion graphics integration.",
  "How do you manage feedback cycles?",
  "Describe editing for pacing.",
  "How do you handle raw footage?",
  "Explain frame rate choices.",
  "How do you manage subtitles and captions?",
  "Describe storytelling through cuts.",
  "How do you collaborate with directors?",
  "Explain visual continuity.",
  "How do you handle tight deadlines?",
  "Describe your export workflows.",
  "How do you optimize rendering?",
  "Explain aspect ratio selection.",
  "How do you manage revisions?",
  "Describe color correction vs grading.",
  "How do you handle sound design?",
  "Explain narrative structure in video.",
  "How do you test final outputs?",
  "What makes a great video editor?"
],

photographer: [
  "Describe your photography style.",
  "How do you prepare for shoots?",
  "Explain lighting techniques.",
  "How do you edit photos?",
  "How do you handle clients?",
  "Describe composition principles.",
  "How do you select camera settings?",
  "Explain natural vs studio lighting.",
  "How do you manage photo shoots?",
  "Describe post-processing workflow.",
  "How do you ensure sharp focus?",
  "Explain lens choices.",
  "How do you handle low-light conditions?",
  "Describe portrait photography techniques.",
  "How do you manage outdoor shoots?",
  "Explain white balance.",
  "How do you manage photo backups?",
  "Describe retouching techniques.",
  "How do you direct subjects?",
  "Explain rule of thirds.",
  "How do you manage deadlines?",
  "Describe event photography challenges.",
  "How do you build a portfolio?",
  "Explain composition framing.",
  "How do you handle client revisions?",
  "Describe color grading for photos.",
  "How do you ensure consistent quality?",
  "Explain shooting in RAW.",
  "How do you manage equipment?",
  "What makes a great photographer?"
],

journalist: [
  "Describe your reporting process.",
  "How do you verify facts?",
  "Explain investigative work.",
  "How do you meet deadlines?",
  "How do you handle ethics?",
  "Describe source verification methods.",
  "How do you conduct interviews?",
  "Explain news writing style.",
  "How do you handle breaking news?",
  "Describe editorial workflows.",
  "How do you manage confidential sources?",
  "Explain bias reduction.",
  "How do you conduct background research?",
  "Describe feature writing techniques.",
  "How do you handle corrections?",
  "Explain newsroom collaboration.",
  "How do you structure news stories?",
  "Describe data journalism.",
  "How do you manage conflicting information?",
  "Explain legal considerations in journalism.",
  "How do you report under pressure?",
  "Describe long-form investigative work.",
  "How do you maintain objectivity?",
  "Explain headline writing.",
  "How do you verify digital sources?",
  "Describe multimedia storytelling.",
  "How do you manage public records research?",
  "Explain ethical dilemmas you've faced.",
  "How do you adapt stories for platforms?",
  "What makes a great journalist?"
],

research_assistant: [
  "Describe a research project.",
  "How do you collect data?",
  "Explain analysis methods.",
  "How do you document findings?",
  "How do you ensure accuracy?",
  "Describe literature review techniques.",
  "How do you manage datasets?",
  "Explain qualitative vs quantitative research.",
  "How do you ensure data validity?",
  "Describe survey design.",
  "How do you handle missing data?",
  "Explain sampling methods.",
  "How do you manage research timelines?",
  "Describe statistical analysis tools.",
  "How do you prepare research reports?",
  "Explain experimental design.",
  "How do you collaborate with researchers?",
  "Describe data visualization techniques.",
  "How do you manage citations?",
  "Explain ethical research practices.",
  "How do you handle conflicting results?",
  "Describe hypothesis testing.",
  "How do you ensure reproducibility?",
  "Explain data cleaning methods.",
  "How do you manage confidential data?",
  "Describe peer review process.",
  "How do you track research progress?",
  "Explain research methodologies.",
  "How do you prepare presentations?",
  "What makes a great research assistant?"
],

teacher: [
  "Describe your teaching style.",
  "How do you engage students?",
  "Explain lesson planning.",
  "How do you assess learning?",
  "How do you handle challenges?",
  "Describe classroom management techniques.",
  "How do you differentiate instruction?",
  "Explain formative vs summative assessment.",
  "How do you use technology in teaching?",
  "Describe curriculum development.",
  "How do you support struggling students?",
  "Explain student motivation strategies.",
  "How do you manage diverse classrooms?",
  "Describe parent communication strategies.",
  "How do you track student progress?",
  "Explain project-based learning.",
  "How do you handle discipline issues?",
  "Describe inclusive teaching practices.",
  "How do you evaluate learning outcomes?",
  "Explain flipped classroom model.",
  "How do you encourage critical thinking?",
  "Describe collaborative learning techniques.",
  "How do you adapt lessons?",
  "Explain assessment rubrics.",
  "How do you manage time in class?",
  "Describe your professional development.",
  "How do you integrate real-world examples?",
  "Explain classroom technology tools.",
  "How do you measure teaching effectiveness?",
  "What makes a great teacher?"
],

lecturer: [
  "Describe your subject expertise.",
  "How do you structure lectures?",
  "Explain assessment methods.",
  "How do you mentor students?",
  "How do you improve outcomes?",
  "Describe syllabus development.",
  "How do you engage large classes?",
  "Explain active learning techniques.",
  "How do you evaluate student performance?",
  "Describe research integration into teaching.",
  "How do you handle diverse learners?",
  "Explain academic integrity policies.",
  "How do you manage coursework?",
  "Describe student feedback incorporation.",
  "How do you supervise projects?",
  "Explain grading rubrics.",
  "How do you manage classroom discussions?",
  "Describe lecture delivery styles.",
  "How do you use educational technology?",
  "Explain blended learning.",
  "How do you manage academic advising?",
  "Describe exam preparation strategies.",
  "How do you assess learning objectives?",
  "Explain curriculum alignment.",
  "How do you motivate students?",
  "Describe professional development.",
  "How do you manage research responsibilities?",
  "Explain peer review in academia.",
  "How do you improve teaching quality?",
  "What makes a great lecturer?"
],

trainer: [
  "Describe your training programs.",
  "How do you assess needs?",
  "Explain skill development.",
  "How do you measure success?",
  "How do you motivate learners?",
  "Describe adult learning principles.",
  "How do you design training materials?",
  "Explain learning objectives.",
  "How do you handle different learning styles?",
  "Describe hands-on training methods.",
  "How do you evaluate training effectiveness?",
  "Explain blended learning approaches.",
  "How do you manage training schedules?",
  "Describe onboarding programs.",
  "How do you handle resistant learners?",
  "Explain assessment techniques.",
  "How do you update training content?",
  "Describe virtual training strategies.",
  "How do you manage training feedback?",
  "Explain competency frameworks.",
  "How do you handle group dynamics?",
  "Describe coaching techniques.",
  "How do you ensure knowledge retention?",
  "Explain training evaluation models.",
  "How do you align training with business goals?",
  "Describe training documentation.",
  "How do you manage large training groups?",
  "Explain experiential learning.",
  "How do you adapt training programs?",
  "What makes a great trainer?"
],

career_counselor: [
  "How do you guide students?",
  "Describe career planning.",
  "Explain aptitude testing.",
  "How do you handle uncertainty?",
  "How do you track progress?",
  "Describe career assessment tools.",
  "How do you conduct career counseling sessions?",
  "Explain goal-setting frameworks.",
  "How do you help with resume building?",
  "Describe interview preparation strategies.",
  "How do you manage career transitions?",
  "Explain personality assessments.",
  "How do you help students choose majors?",
  "Describe job market research techniques.",
  "How do you support undecided students?",
  "Explain career development plans.",
  "How do you handle parental expectations?",
  "Describe mentoring approaches.",
  "How do you build student confidence?",
  "Explain networking strategies.",
  "How do you guide job search strategies?",
  "Describe career coaching methods.",
  "How do you measure counseling success?",
  "Explain internship placement processes.",
  "How do you manage career fairs?",
  "Describe career workshops.",
  "How do you support long-term career growth?",
  "Explain career path mapping.",
  "How do you handle career setbacks?",
  "What makes a great career counselor?"
]

};

// ===== STATE =====
let questions = [];
let currentIndex = 0;
let mediaRecorder;
let recordedChunks = [];
let stream;

// ===== START INTERVIEW =====
startBtn.addEventListener("click", async () => {
  const jobDesc = jobDescriptionInput.value.trim().toLowerCase();
  const count = parseInt(questionCountSelect.value, 10);

  if (!jobDesc) {
    alert("Please enter a job description.");
    return;
  }

  questions = generateQuestions(jobDesc, count);
  currentIndex = 0;

  setupContainer.style.display = "none";
  interviewSection.style.display = "flex";

  try {
    await startRecording();
    showQuestion();
  } catch (error) {
    alert("Failed to start recording: " + error.message);
    setupContainer.style.display = "flex";
    interviewSection.style.display = "none";
  }
});


// ===== QUESTION GENERATOR =====
function generateQuestions(jobDesc, count) {
  let role = "general"; // default fallback

  // Convert to lowercase for consistent matching
  const desc = jobDesc.toLowerCase();

  // Map job description keywords to roleTemplates
  if (desc.includes("software") || desc.includes("developer") || desc.includes("engineer")) {
    if (desc.includes("frontend")) role = "frontend_developer";
    else if (desc.includes("backend")) role = "backend_developer";
    else if (desc.includes("mobile")) role = "mobile_developer";
    else if (desc.includes("game")) role = "game_developer";
    else if (desc.includes("ai")) role = "ai_engineer";
    else if (desc.includes("ml")) role = "ml_engineer";
    else if (desc.includes("cloud")) role = "cloud_engineer";
    else if (desc.includes("devops")) role = "devops_engineer";
    else if (desc.includes("cybersecurity")) role = "cybersecurity_analyst";
    else if (desc.includes("qa")) role = "qa_engineer";
    else role = "software";
  }
  else if (desc.includes("marketing") || desc.includes("seo") || desc.includes("content") || desc.includes("social")) {
    if (desc.includes("manager")) role = "marketing_manager";
    else if (desc.includes("seo")) role = "seo_specialist";
    else if (desc.includes("content")) role = "content_writer";
    else if (desc.includes("copy")) role = "copywriter";
    else if (desc.includes("social")) role = "social_media_manager";
    else role = "marketing";
  }
  else if (desc.includes("data") || desc.includes("analyst") || desc.includes("machine")) {
    if (desc.includes("scientist")) role = "data_scientist";
    else if (desc.includes("ai")) role = "ai_engineer";
    else if (desc.includes("ml")) role = "ml_engineer";
    else if (desc.includes("finance")) role = "finance_analyst";
    else role = "data";
  }
  else if (desc.includes("manager") || desc.includes("lead") || desc.includes("product") || desc.includes("project")) {
    if (desc.includes("product")) role = "product_manager";
    else if (desc.includes("project")) role = "project_manager";
    else if (desc.includes("hr")) role = "hr_manager";
    else if (desc.includes("operations")) role = "operations_manager";
    else if (desc.includes("supply") || desc.includes("logistics")) role = "supply_chain_manager";
    else role = "management";
  }
  else if (desc.includes("hr") || desc.includes("recruiter")) role = "hr";
  else if (desc.includes("finance") || desc.includes("accountant") || desc.includes("investment")) {
    if (desc.includes("accountant")) role = "accountant";
    else if (desc.includes("investment")) role = "investment_analyst";
    else role = "finance";
  }
  else if (desc.includes("operations") || desc.includes("logistics") || desc.includes("supply")) {
    if (desc.includes("logistics")) role = "logistics_coordinator";
    else if (desc.includes("supply")) role = "supply_chain_manager";
    else role = "operations";
  }
  else if (desc.includes("support") || desc.includes("it") || desc.includes("technical")) {
    if (desc.includes("technical")) role = "technical_support";
    else if (desc.includes("it")) role = "it_support";
    else role = "customer_support_rep";
  }
  else if (desc.includes("network")) role = "network_engineer";
  else if (desc.includes("system")) role = "system_administrator";
  else if (desc.includes("database")) role = "database_administrator";
  else if (desc.includes("blockchain")) role = "blockchain_developer";
  else if (desc.includes("designer") || desc.includes("ui") || desc.includes("ux") || desc.includes("web") || desc.includes("graphic") || desc.includes("video") || desc.includes("photographer")) {
    if (desc.includes("ui") || desc.includes("ux")) role = "ui_ux_designer";
    else if (desc.includes("web")) role = "web_designer";
    else if (desc.includes("graphic")) role = "graphic_designer";
    else if (desc.includes("video")) role = "video_editor";
    else if (desc.includes("photographer")) role = "photographer";
    else role = "design";
  }
  else if (desc.includes("journalist") || desc.includes("research") || desc.includes("teacher") || desc.includes("lecturer") || desc.includes("trainer") || desc.includes("career")) {
    if (desc.includes("journalist")) role = "journalist";
    else if (desc.includes("research")) role = "research_assistant";
    else if (desc.includes("teacher")) role = "teacher";
    else if (desc.includes("lecturer")) role = "lecturer";
    else if (desc.includes("trainer")) role = "trainer";
    else if (desc.includes("career")) role = "career_counselor";
  }
  else if (desc.includes("intern") || desc.includes("fresher")) role = "intern_fresher";

    let pool = [...baseQuestions];

  if (roleTemplates[role]) {
    pool = pool.concat(roleTemplates[role]);
  }

  shuffle(pool);

  return pool.slice(0, count);
}

// ===== INTERVIEW FLOW =====
function showQuestion() {
  if (currentIndex >= questions.length) {
    finishInterview();
    return;
  }

  // Update progress
  const progress = ((currentIndex) / questions.length) * 100;
  progressFill.style.width = progress + "%";
  questionCounter.innerText = `Q ${currentIndex + 1}/${questions.length}`;

  questionText.innerText = `${questions[currentIndex]}`;
  startTimer(30); // ⏱️ 30 seconds per question
}

// ===== TIMER =====
function startTimer(seconds) {
  let timeLeft = seconds;
  timerEl.innerText = `${timeLeft}`;

  const interval = setInterval(() => {
    timeLeft--;
    timerEl.innerText = `${timeLeft}`;

    if (timeLeft <= 0) {
      clearInterval(interval);
      currentIndex++;
      showQuestion();
    }
  }, 1000);
}

// ===== RECORDING (AUDIO FIXED) =====
async function startRecording() {
  try {
    stream = await navigator.mediaDevices.getUserMedia({
      video: {
        width: { ideal: 1280 },
        height: { ideal: 720 }
      },
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        autoGainControl: true
      }
    });

    preview.srcObject = stream;

    // List all supported MIME types for WebM with audio
    let mimeType = "";
    const supportedTypes = [
      "video/webm; codecs=vp9,opus",
      "video/webm; codecs=vp8,opus",
      "video/webm; codecs=h264,opus",
      "video/webm; codecs=vp8",
      "video/webm"
    ];

    for (let type of supportedTypes) {
      if (MediaRecorder.isTypeSupported(type)) {
        mimeType = type;
        break;
      }
    }

    console.log("Using MIME type:", mimeType);

    mediaRecorder = new MediaRecorder(stream, {
      mimeType: mimeType,
      audioBitsPerSecond: 128000
    });

    recordedChunks = [];

    mediaRecorder.ondataavailable = e => {
      if (e.data.size > 0) {
        recordedChunks.push(e.data);
      }
    };

    mediaRecorder.onstop = () => {
      downloadRecording();
      stream.getTracks().forEach(track => track.stop());
    };

    mediaRecorder.onerror = e => {
      console.error("MediaRecorder error:", e);
      statusText.innerText = "❌ Recording error: " + e.error;
    };

    mediaRecorder.start();
    statusText.innerText = "🔴 Recording started (Video + Audio)";
  } catch (error) {
    console.error("Error accessing media:", error);
    statusText.innerText = "❌ Error: " + error.message;
    alert("Please allow camera and microphone access. Error: " + error.message);
  }
}

// ===== FINISH =====
function finishInterview() {
  // Complete the progress bar
  progressFill.style.width = "100%";
  
  questionText.innerText = "🎉 Interview Completed!";
  statusText.innerText = "⏹ Stopping & downloading recording...";

  mediaRecorder.stop(); // 🎯 AUTO STOP AT END
  
  // Redirect to main page after 3 seconds
  setTimeout(() => {
    // Reset form
    jobDescriptionInput.value = "";
    questionCountSelect.value = "10";
    
    // Show setup, hide interview
    setupContainer.style.display = "flex";
    interviewSection.style.display = "none";
    
    // Reset progress bar
    progressFill.style.width = "0%";
  }, 3000);
}

// ===== DOWNLOAD =====
function downloadRecording() {
  if (recordedChunks.length === 0) {
    statusText.innerText = "❌ No recording data captured.";
    return;
  }

  // Use the original MIME type with codecs (NOT just the base type)
  let mimeType = "video/webm";
  if (mediaRecorder && mediaRecorder.mimeType) {
    mimeType = mediaRecorder.mimeType; // Keep full MIME type with codecs
  }

  console.log("Recording MIME type:", mimeType);
  console.log("Number of chunks:", recordedChunks.length);

  const blob = new Blob(recordedChunks, { type: mimeType });
  
  // Verify blob has content
  console.log("Blob size:", blob.size, "bytes");
  console.log("Blob type:", blob.type);

  if (blob.size === 0) {
    console.error("WARNING: Blob size is 0 - no data was recorded!");
  }

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `interview_session_${new Date().toISOString().slice(0, 10)}.webm`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  // Wait before revoking to ensure download starts
  setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 100);

  statusText.innerText = "✅ Interview recording downloaded successfully!";
}

// ===== UTILS =====
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}