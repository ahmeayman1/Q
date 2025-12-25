/* ================= TRUE / FALSE ================= */

const tfQuestions = [
  {type:"tf", q:"Nutrition is defined as the science of food and its relationship to health.", a:true},
  {type:"tf", q:"Proteins are the primary energy source among the main nutrient groups.", a:false},
  {type:"tf", q:"A nutritionist is a professional who only advises on weight loss matters.", a:false},
  {type:"tf", q:"Malnutrition refers exclusively to undernutrition and does not include overnutrition.", a:false},
  {type:"tf", q:"Dietetics involves planning and preparing meals for both healthy individuals and patients.", a:true},
  {type:"tf", q:"According to the text, healthy children learn better than malnourished children.", a:true},
  {type:"tf", q:"Smooth, clear skin is a sign of good nutrition.", a:true},
  {type:"tf", q:"Vitamin A deficiency can lead to night blindness and poor vision.", a:true},
  {type:"tf", q:"Applied nutrition focuses only on clinical settings and not public health.", a:false},
  {type:"tf", q:"Carbohydrates are primarily responsible for growth and repair of tissues.", a:false}
];

/* ================= MCQ ================= */

const mcqQuestions = [
  {
    type:"mcq",
    q:"What is nutrition primarily defined as?",
    options:[
      "The study of vitamins and minerals",
      "The science of food and its relationship to health",
      "The process of digesting food",
      "The analysis of dietary patterns"
    ],
    a:1
  },
  {
    type:"mcq",
    q:"Which nutrient group is described as the primary energy source?",
    options:["Proteins","Fats","Carbohydrates","Vitamins"],
    a:2
  },
  {
    type:"mcq",
    q:"What health condition results from inadequate, excessive, or imbalanced intake of nutrients?",
    options:["Metabolism","Dietetics","Malnutrition","Applied nutrition"],
    a:2
  },
  {
    type:"mcq",
    q:"Better nutrition is related to all EXCEPT:",
    options:[
      "Stronger immune systems",
      "Lower risk of communicable diseases",
      "Lower risk of cardiovascular disease",
      "Safer pregnancy and childbirth"
    ],
    a:1
  },
  {
    type:"mcq",
    q:"What is a nutritionist defined as?",
    options:[
      "A person who prepares therapeutic meals",
      "A medical doctor specializing in digestive disorders",
      "Someone who studies the chemical composition of food",
      "A professional who advises on matters related to food, nutrition, and health"
    ],
    a:3
  },
  {
    type:"mcq",
    q:"Which of the following is NOT included in malnutrition?",
    options:["Undernutrition","Overnutrition","Micronutrient deficiencies","Genetic disorders"],
    a:3
  },
  {
    type:"mcq",
    q:"What is dietetics?",
    options:[
      "The study of weight loss methods",
      "The practical application of nutrition principles",
      "The chemical analysis of food components",
      "The production of specialized food supplements"
    ],
    a:1
  },
  {
    type:"mcq",
    q:"Which nutrient group is primarily responsible for growth and repair of tissues?",
    options:["Carbohydrates","Proteins","Vitamins","Minerals"],
    a:1
  },
  {
    type:"mcq",
    q:"What is a sign of good nutrition?",
    options:[
      "Rounded shoulders",
      "Frequent infections",
      "Strong, well-developed muscles",
      "Protruding abdomen"
    ],
    a:2
  },
  {
    type:"mcq",
    q:"Which vitamin deficiency is associated with night blindness?",
    options:["Vitamin C","Vitamin D","Vitamin A","Vitamin B"],
    a:2
  },
  {
    type:"mcq",
    q:"What is applied nutrition?",
    options:[
      "Creating nutrient supplements",
      "Application of nutrition knowledge in public health and clinical settings",
      "Study of food preparation",
      "Analysis of food distribution"
    ],
    a:1
  },
  {
    type:"mcq",
    q:"Which condition is NOT mentioned as a form of malnutrition?",
    options:["Wasting","Kwashiorkor","Stunting","Obesity"],
    a:3
  },
  {
    type:"mcq",
    q:"A characteristic of good nutrition in terms of energy is:",
    options:[
      "Moderate energy for tasks",
      "High energy only in morning",
      "Plenty of energy for work and play",
      "Minimal activity"
    ],
    a:2
  },
  {
    type:"mcq",
    q:"A consequence of Vitamin C deficiency is:",
    options:[
      "Bowed legs",
      "Night blindness",
      "Spongy or bleeding gums",
      "Hearing impairment"
    ],
    a:2
  },
  {
    type:"mcq",
    q:"A nervous system feature seen in malnutrition is:",
    options:[
      "Calm demeanor",
      "Quick learning",
      "Irritability and poor concentration",
      "Steady nerves"
    ],
    a:2
  },
  {
    type:"mcq",
    q:"The double burden of malnutrition refers to:",
    options:[
      "High food cost",
      "Undernutrition and overweight",
      "Rural and urban malnutrition",
      "Child and adult malnutrition"
    ],
    a:1
  },
  {
    type:"mcq",
    q:"Which bone condition is associated with malnutrition?",
    options:["Arthritis","Osteoporosis","Scoliosis","Tendonitis"],
    a:1
  },
  {
    type:"mcq",
    q:"Adequate nutrition helps communities by:",
    options:[
      "Reducing healthcare costs",
      "Creating more jobs",
      "Breaking cycles of poverty and hunger",
      "Increasing tourism"
    ],
    a:2
  },
  {
    type:"mcq",
    q:"A characteristic of malnutrition regarding infection is:",
    options:[
      "Moderate resistance",
      "Frequent infections and slow recovery",
      "Resistance to bacteria only",
      "Temporary immunity"
    ],
    a:1
  },
  {
    type:"mcq",
    q:"Which is NOT a function of nutrients?",
    options:[
      "Maintenance of life",
      "Energy production",
      "Prevention of genetic mutations",
      "Support of vital processes"
    ],
    a:2
  }
];

/* ================= MERGE & SHUFFLE ================= */

let questions = [...tfQuestions, ...mcqQuestions]
  .sort(() => Math.random() - 0.5);

let index = 0;
let answers = Array(questions.length).fill(null);

/* ================= ELEMENTS ================= */

const qText = document.getElementById("questionText");
const optionsDiv = document.getElementById("options");
const counter = document.getElementById("counter");
const progress = document.getElementById("progressBar");
const nextBtn = document.getElementById("nextBtn");
const retryBtn = document.getElementById("retryBtn");
const qList = document.getElementById("questionsList");

/* ================= MENU ================= */

function toggleMenu(){
  const m=document.getElementById("sideMenu");
  const o=document.getElementById("overlay");
  if(m.style.right==="0px"){m.style.right="-250px";o.style.display="none";}
  else{m.style.right="0";o.style.display="block";}
}

/* ================= QUIZ ================= */

function startQuiz(){
  index=0;
  answers.fill(null);
  document.getElementById("home").style.display="none";
  document.getElementById("quiz").style.display="block";
  loadQuestion();
}

function loadQuestion(){
  optionsDiv.innerHTML="";
  counter.innerText=`Question ${index+1} / ${questions.length}`;
  progress.style.width=((index+1)/questions.length*100)+"%";

  const q=questions[index];
  qText.innerText=q.q;

  if(q.type==="tf"){
    createOption("True", true);
    createOption("False", false);
  }else{
    q.options.forEach((opt,i)=>createOption(opt,i));
  }

  if(answers[index]!==null) lockOptions();
  nextBtn.style.display="inline-block";
}

function createOption(text,val){
  const btn=document.createElement("button");
  btn.innerText=text;
  btn.onclick=()=>select(val);
  optionsDiv.appendChild(btn);
}

function select(val){
  if(answers[index]!==null) return;

  answers[index]=val;
  const q=questions[index];

  optionsDiv.childNodes.forEach((b,i)=>{
    let correct=false;

    if(q.type==="tf"){
      correct=((i===0)===q.a);
      if(correct) b.style.background="#27ae60";
      else if(((i===0)===val)) b.style.background="#e74c3c";
    }else{
      if(i===q.a) b.style.background="#27ae60";
      else if(i===val) b.style.background="#e74c3c";
    }
    b.disabled=true;
  });
}

function lockOptions(){
  optionsDiv.childNodes.forEach(b=>b.disabled=true);
}

function nextQuestion(){
  if(index<questions.length-1){
    index++;
    loadQuestion();
  }else{
    finishQuiz();
  }
}

function finishQuiz(){
  const score=answers.filter((a,i)=>a===questions[i].a).length;
  qText.innerText=`✅ Finished — Score ${score} / ${questions.length}`;
  optionsDiv.innerHTML="";
  nextBtn.style.display="none";
  retryBtn.style.display="inline-block";
}

function retryQuiz(){
  location.reload();
}

function toggleQuestions(){
  qList.innerHTML="";
  qList.style.display=qList.style.display==="block"?"none":"block";

  answers.forEach((a,i)=>{
    const d=document.createElement("div");
    d.className="q-item "+(a===null?"unanswered":a===questions[i].a?"correct":"wrong");
    d.innerText=i+1;
    d.onclick=()=>{index=i;loadQuestion();qList.style.display="none";}
    qList.appendChild(d);
  });
}