const chatBody = document.getElementById('chat-body');
const userInput = document.getElementById('user-input');
const chatContainer = document.getElementById('chat-container');

const knowledgeBase = {
  "hi": [
    "Hello there! How can I help you with your education needs?",
    "Hi! How can I help you with your education needs?",
    "Hi! 😊 Need help with anything at Evergreen?"
  ],
  "hello": [
    "Hello! What would you like to ask about our courses or admissions?",
    "Hello there! 👋 How can I support you today?",
    "Hello! 😊 Feel free to ask about Evergreen programs."
  ],
  "hey": [
    "Hey! Need any help with Evergreen programs or admissions?",
    "Hey there! 😊 Got questions about our university?",
    "Hey! I'm here to help you with Evergreen-related info."
  ],
  "good morning": "Good morning! What would you like to know about Evergreen University?",
  "good afternoon": "Good afternoon! How can I assist you with Evergreen programs or admissions?",
  "good evening": "Good evening! Do you have questions about our courses or applying?",
  "good night": "Good night! Feel free to ask me anytime about Evergreen University.",
  "greetings": "Greetings! I'm your Evergreen AI Counselor. How may I assist you today?",
  "what courses are available": "We offer IT, Business, Arts, and Sciences programs.",
  "how can i apply": "You can apply through our website's online form. Need the link?",
  "thank you": "You're welcome! Is there anything else I can assist you with?"

};


const evergreenKeywords = [
  "evergreen", "university", "admission", "admissions", "ai", "cybersecurity", "data science", "software engineering", "courses offered", "courses",
  "fees", "fee", "apply", "application", "campus", "campuses", "contact", "phone", "location", "branches", "payment", "name",
  "pay", "cost", "price", "colombo", "galle", "matara", "email", "office", "degree", "faculty", "inquiry", "student", 
  "students", "register", "registration", "deadline", "intake", "semester", "exam", "exams", "examination", "certificate",
  "diploma", "bachelor", "master", "msc", "phd", "postgraduate", "undergraduate", "lecture", "lecturer", "lectures",
  "syllabus", "timetable", "results", "index", "academic", "helpdesk", "scholarship", "scholarships", "discount", 
  "installments", "hostel", "accommodation", "library", "resource center", "learning", "labs", "lab", "computer lab",
  "student portal", "exam results", "grading", "transcript", "enroll", "enrollment", "prospectus", "brochure", 
  "ai course", "data course", "cybersecurity course", "software course", "sri lanka university", "higher education", 
  "education sri lanka", "private university", "international university", "foreign degree", "online degree", 
  "distance learning", "education center", "student ID", "help", "support", "advisor", "counselor", "guidance", 
  "career", "job", "internship", "industrial training", "graduate", "graduation", "convocation", "calendar", "academic year", 
  "start date", "end date", "closing date", "school leavers", "AL results", "O/L", "A/L", "foundation", "IT degree", 
  "certificate course", "degree program", "duration", "visa", "foreign students", "local students", "exam fees", 
  "course materials", "learning platform", "online learning", "student guide", "tutorial", "labs", "virtual classroom",
  "orientation", "counseling", "career center", "SLQF", "TVEC", "UGC", "NAITA", "certificate issuing", "verifications", 
  "apply now", "how to apply", "requirements", "entry qualifications", "eligibility", "minimum requirements",
  "student services", "alumni", "school outreach", "open day", "open days", "education fair", "expo", 
  "science", "technology", "engineering", "math", "stem", "coding", "computer science", "programming",
  "AI lab", "machine learning", "deep learning", "data analytics", "network security", "ethical hacking", 
  "student account", "ID card", "password reset", "support contact", "IT support", "student email","cost","price", "fees", "programs", 
];


function normalizeText(text) {
  return text.toLowerCase().replace(/[^\w\s]/gi, '').trim();
}

async function getCustomResponse(prompt) {
  const clean = normalizeText(prompt);

  if (clean.includes("evergreen international university") || clean.includes("about evergreen")) {
    return `Evergreen International University is a top Sri Lankan institution offering IT courses in AI, Cybersecurity, Data Science, and Software Engineering.`;
  }

  if (clean.includes("name")) {
    return "The university is called <strong>Evergreen International University</strong>.";
  }

  if (clean.includes("courses") || clean.includes("programs")) {
    return `We offer the following IT-related courses:<br>
1. Artificial Intelligence<br>
2. Cybersecurity<br>
3. Data Science<br>
4. Software Engineering`;
  }

  const askingCourseFees = (
    clean.includes("course") &&
    (clean.includes("fees") || clean.includes("fee") || clean.includes("cost") || clean.includes("price"))
  );

  if (askingCourseFees) {
    return `Here are the course fees per semester:<br>
- Artificial Intelligence: Rs.300000.00<br>
- Cybersecurity: Rs.280000.00<br>
- Data Science: Rs.320000.00<br>
- Software Engineering: Rs.290000.00`;

  } else if (clean.includes("fees") || clean.includes("cost") || clean.includes("price")) {
    return "Please ask specifically about the <strong>course fees</strong> of Evergreen International University.";
  }

  if (clean.includes("what is evergreen international university?") || clean.includes("about evergreen")) {
    return `Evergreen International University is a top Sri Lankan institution offering IT courses in AI, Cybersecurity, Data Science, and Software Engineering.`;
  }

  if (clean.includes("contact") || clean.includes("phone")) {
    return "You can reach us at <strong>+94 12 34 567</strong> or email: info@evergreen.edu";
  }

  if (clean.includes("branches") || clean.includes("locations")) {
    return "We have branches in Matara, Colombo, and Galle.";
  }

  if (clean.includes("apply") || clean.includes("admission")) {
    return "You can apply online through our website: <a href='https://evergreen.edu/apply' target='_blank'>evergreen.edu/apply</a>";
  }

  if (clean.includes("payment") || clean.includes("pay")) {
    return "Payments can be made via bank transfer, online payment, or credit/debit card.";
  }

  if (clean.includes("course fee for ai") || clean.includes("artificial intelligence fee")) {
    return "The fee for the Artificial Intelligence course is Rs.300000.00 per semester.";
  }

  if (clean.includes("how much does data science cost") || clean.includes("data science fee")) {
    return "The Data Science program costs Rs.320000.00 per semester.";
  }

  if (clean.includes("phone number of evergreen university") || clean.includes("call evergreen")) {
    return "You can call Evergreen University at +94 12 34 567.";
  }

  if (clean.includes("contact the admissions office")) {
    return "You can reach the admissions office at +94 12 34 567 or email info@evergreen.edu.";
  }

  if (clean.includes("software engineering program cost")) {
    return "The Software Engineering program includes hands-on projects and is Rs.290000.00 per semester.";
  }

  if (clean.includes("what are the available courses") || clean.includes("courses offered")) {
    return "We offer IT-related courses such as Artificial Intelligence, Cybersecurity, Data Science, and Software Engineering.";
  }

  if (clean.includes("payment options") || clean.includes("how can i pay")) {
    return "Payments can be made via bank transfer, credit/debit card, or online payment gateway.";
  }

  if (clean.includes("is evergreen university in colombo")) {
    return "Yes, we have a branch in Colombo along with others in Galle and Matara.";
  }

  if (clean.includes("where is evergreen university located")) {
    return "Evergreen University has campuses in Colombo, Matara, and Galle.";
  }

  if (clean.includes("contact the admissions office")) {
    return "You can reach the admissions office at +94 12 34 567 or email info@evergreen.edu.";
  }

  if (clean.includes("evergreen university in colombo")) {
    return "Yes, we have a branch in Colombo along with others in Galle and Matara.";
  }

  if (clean.includes("where is evergreen university located")) {
    return "Evergreen University has campuses in Colombo, Matara, and Galle.";
  }

  if (clean.includes("phone number of evergreen university")) {
    return "You can call Evergreen University at +94 12 34 567.";
  }

  if (clean.includes("what are the available courses")) {
    return "We offer IT-related courses such as Artificial Intelligence, Cybersecurity, Data Science, and Software Engineering.";
  }

  if (clean.includes("course fee for ai") || clean.includes("artificial intelligence fee")) {
    return "The fee for the Artificial Intelligence course is Rs.300000.00 per semester.";
  }

  if (clean.includes("how much does data science cost") || clean.includes("data science fee")) {
    return "The Data Science program costs Rs.320000.00 per semester.";
  }

  if (clean.includes("payment options") || clean.includes("how can i pay")) {
    return "Payments can be made via bank transfer, credit/debit card, or online payment gateway.";
  }

  if (clean.includes("how can i apply") || clean.includes("apply to evergreen")) {
    return "You can apply online through our website: <a href='https://evergreen.edu/apply' target='_blank'>evergreen.edu/apply</a>";
  }

  if (clean.includes("software engineering program")) {
    return "The Software Engineering program includes hands-on projects and is Rs.290000.00 per semester.";
  }

  if (clean.includes("apply to evergreen")) {
    return "You can apply online through our website: <a href='https://evergreen.edu/apply' target='_blank'>evergreen.edu/apply</a>";
  }

  if (clean.includes("course fee for ai") || clean.includes("artificial intelligence fee")) {
    return "The fee for the Artificial Intelligence course is Rs.300000.00 per semester.";
  }

  if (clean.includes("how much does data science cost") || clean.includes("data science fee")) {
    return "The Data Science program costs Rs.320000.00 per semester.";
  }

  if (clean.includes("phone number of evergreen university") || clean.includes("call evergreen")) {
    return "You can call Evergreen University at +94 12 34 567.";
  }

  if (clean.includes("contact the admissions office")) {
    return "You can reach the admissions office at +94 12 34 567 or email info@evergreen.edu.";
  }

  if (clean.includes("software engineering program")) {
    return "The Software Engineering program includes hands-on projects and is Rs.290000.00 per semester.";
  }

  if (clean.includes("what are the available courses") || clean.includes("courses offered")) {
    return "We offer IT-related courses such as Artificial Intelligence, Cybersecurity, Data Science, and Software Engineering.";
  }

  if (clean.includes("payment options") || clean.includes("how can i pay")) {
    return "Payments can be made via bank transfer, credit/debit card, or online payment gateway.";
  }

  if (clean.includes("is evergreen university in colombo")) {
    return "Yes, we have a branch in Colombo along with others in Galle and Matara.";
  }

  if (clean.includes("where is evergreen university located")) {
    return "Evergreen University has campuses in Colombo, Matara, and Galle.";
  }

  const known = knowledgeBase[clean];
  if (known) {
    if (Array.isArray(known)) {
      const randomIndex = Math.floor(Math.random() * known.length);
      return known[randomIndex];
    }
    return known;
  }

  return "⚠️ I'm here to answer questions only about Evergreen International University. Please ask about courses, course fees, admission, or contact info.";
}

function toggleTheme() {
  chatContainer.classList.toggle('dark-mode');
}

function addMessage(sender, text) {
  const msg = document.createElement('div');
  const className = sender === "bot" ? 'bot-message' : 'user-message';
  const profilePic = sender === "bot"
    ? 'https://www.shutterstock.com/image-vector/happy-robot-3d-ai-character-600nw-2464455965.jpg'
    : 'https://4vector.com/i/free-vector-female-user-icon-clip-art_125659_female-user-icon-clip-art/Female_User_Icon_clip_art_hight.png';

  msg.className = `message ${className}`;
  msg.innerHTML = `
    <img src="${profilePic}" class="profile-pic">
    <div class="text-bubble">${text}</div>
  `;
  chatBody.appendChild(msg);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function showTypingIndicator() {
  const typing = document.createElement('div');
  typing.className = 'message bot-message typing';
  typing.innerHTML = `
    <img src="https://www.shutterstock.com/image-vector/happy-robot-3d-ai-character-600nw-2464455965.jpg" class="profile-pic">
    <div class="typing-indicator"><span></span><span></span><span></span></div>
  `;
  chatBody.appendChild(typing);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function removeTypingIndicator() {
  const typing = document.querySelector('.typing');
  if (typing) typing.remove();
}

async function sendMessage() {
  const message = userInput.value.trim();
  if (!message) return;

  addMessage("user", message);
  showTypingIndicator();
  userInput.value = '';

  const normalized = normalizeText(message);
  const hasKeyword = evergreenKeywords.some(k => normalized.includes(k));
  const inKnowledgeBase = !!knowledgeBase[normalized];

  if (!hasKeyword && !inKnowledgeBase) {
    removeTypingIndicator();
    addMessage("bot", "⚠️ Please ask something related to Evergreen International University.");
    return;
  }

  const response = await getCustomResponse(message);
  removeTypingIndicator();
  addMessage("bot", response);
}

function startVoiceInput() {
  if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
    alert("Your browser doesn't support voice input.");
    return;
  }

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.onresult = function (event) {
    const voiceText = event.results[0][0].transcript;
    userInput.value = voiceText;
    sendMessage();
  };
  recognition.start();
}

userInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') sendMessage();
});
