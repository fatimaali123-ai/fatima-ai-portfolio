import React, { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { QRCodeSVG } from 'qrcode.react'
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Atom, Award, BookOpen,
  BriefcaseBusiness, Check, ChevronDown, Code2, ExternalLink, Github,
  GraduationCap, Heart, Layers3, Linkedin, Mail, Menu, MousePointer2,
  Sparkles, X, Terminal, BrainCircuit, FileBadge, Globe2, Download,
  FolderGit2, Cpu, Palette, Star, Send, Zap
} from 'lucide-react'

const PROFILE = {
  name: 'Fatima Ali',
  title: 'Artificial Intelligence Undergraduate',
  university: 'DHA Suffa University',
  degree: 'BS Artificial Intelligence',
  dates: '2024 — 2028',
  location: 'Karachi, Pakistan',
  github: 'https://github.com/fatimaali123-ai',
  linkedin: 'https://www.linkedin.com/', // TODO: replace with your exact LinkedIn profile URL
  email: '', // TODO: add a professional email address
  livePortfolio: 'https://fatimaali123-ai.github.io/fatima-ai-portfolio/', // update after deployment
}

const skills = [
  { name: 'Python', group: 'Languages', level: 'Fundamentals', icon: 'Py' },
  { name: 'Java', group: 'Languages', level: 'OOP', icon: 'Ja' },
  { name: 'C++', group: 'Languages', level: 'Academic projects', icon: 'C+' },
  { name: 'C', group: 'Languages', level: 'Academic projects', icon: 'C' },
  { name: 'JavaScript', group: 'Web', level: 'Fundamentals', icon: 'JS' },
  { name: 'HTML & CSS', group: 'Web', level: 'Responsive UI basics', icon: '</>' },
  { name: 'Data Structures', group: 'Core CS', level: 'Coursework', icon: 'DS' },
  { name: 'Git & GitHub', group: 'Tools', level: 'Version control', icon: 'GH' },
  { name: 'SQL / MySQL', group: 'Tools', level: 'Academic practice', icon: 'DB' },
  { name: 'SPSS', group: 'Tools', level: 'Basic', icon: 'S' },
  { name: 'Cisco Packet Tracer', group: 'Tools', level: 'Lab practice', icon: 'PT' },
  { name: 'Arduino UNO', group: 'Hardware', level: 'Prototype project', icon: 'A' },
]
const projects = [
  {
    number: '01', title: 'Content Performance Prioritization',
    type: 'Machine Learning · Capstone', tag: 'ML',
    description: 'A decision-support workflow that ranks content for human review using historical search, traffic, engagement, content-age, and position signals associated with decline.',
    stack: ['Python', 'Pandas', 'Scikit-learn', 'Jupyter'],
    outcome: 'Random Forest evaluation reached Precision@20 = 1.00 and Precision@50 = 1.00 on a client-grouped test split. Results are model-evaluation metrics, not a guarantee of future performance.',
    link: 'https://github.com/fatimaali123-ai/flyrank-internship',
    label: 'View internship repository',
    visual: 'ml',
  },
  {
    number: '02', title: 'Student Management System',
    type: 'Java · Object-Oriented Programming', tag: 'JAVA',
    description: 'An academic management project built to practise object-oriented design and structured student-record workflows.',
    stack: ['Java', 'OOP', 'Classes & Objects'],
    outcome: 'Course project. Add screenshots and the exact repository link before sharing publicly.',
    link: 'https://github.com/fatimaali123-ai',
    label: 'Explore GitHub',
    visual: 'java',
  },
  {
    number: '03', title: 'Hospital Management System',
    type: 'Java · Academic Project', tag: 'JAVA',
    description: 'A coursework project focused on organizing hospital-related records and practising application logic.',
    stack: ['Java', 'OOP', 'Problem Solving'],
    outcome: 'Add a README, screenshots, and repository link when ready.',
    link: 'https://github.com/fatimaali123-ai',
    label: 'Explore GitHub',
    visual: 'hospital',
  },
  {
    number: '04', title: 'Adventure Booking Website',
    type: 'Frontend · Web Development', tag: 'WEB',
    description: 'A travel-themed interface made with foundational web technologies, focusing on page structure and visual presentation.',
    stack: ['HTML', 'CSS', 'Responsive layout'],
    outcome: 'Add a live demo or source repository URL when available.',
    link: 'https://github.com/fatimaali123-ai',
    label: 'Explore GitHub',
    visual: 'web',
  },
  {
    number: '05', title: 'Arduino Auto Parking Garage',
    type: 'Embedded Systems · Prototype', tag: 'IOT',
    description: 'A small hardware project exploring an automated parking-garage concept using an Arduino UNO.',
    stack: ['Arduino UNO', 'Sensors', 'Embedded logic'],
    outcome: 'Add a wiring photo, demonstration video, and source code link if available.',
    link: 'https://github.com/fatimaali123-ai',
    label: 'Explore GitHub',
    visual: 'arduino',
  },
  {
    number: '06', title: 'Logic-Based JavaScript Games',
    type: 'Frontend · Logic & Interaction', tag: 'WEB',
    description: 'Small interactive games created to practise JavaScript logic, event handling, and browser interaction.',
    stack: ['JavaScript', 'HTML', 'CSS'],
    outcome: 'Add individual game demos or a single repository link when ready.',
    link: 'https://github.com/fatimaali123-ai',
    label: 'Explore GitHub',
    visual: 'games',
  },
]
const credentials = [
  { title: 'Stanford Code in Place', issuer: 'Stanford University', category: 'Course', detail: 'Python learning programme. Add the original certificate or completion proof before publishing.', image: '/credentials/stanford-code-in-place.jpg', file: '', status: 'Add your certificate image or PDF' },
  { title: 'Harvard CS50x Puzzle Day · Spring 2025', issuer: 'Harvard University · CS50', category: 'Achievement', detail: 'Puzzle Day achievement. Use the actual certificate, badge, or participation proof you received.', image: '/credentials/harvard-cs50-puzzle-day.jpg', file: '', status: 'Add your certificate or participation proof' },
  { title: 'FlyRank ML Internship Certificate', issuer: 'FlyRank', category: 'Internship', detail: 'Your internship credential. Add the original certificate image to show it in the gallery.', image: '/credentials/flyrank-internship-certificate.jpg', file: '', status: 'Add your FlyRank internship certificate' },
  { title: 'FlyRank Recommendation Letter', issuer: 'FlyRank', category: 'Recommendation', detail: 'A professional recommendation letter from your FlyRank internship. Upload a readable image or PDF preview; remove any private information you do not want public.', image: '/credentials/flyrank-recommendation-letter.jpg', file: '', status: 'Add your FlyRank recommendation letter' },
  { title: 'Meta Hacker Cup · Individual', issuer: 'Meta', category: 'Competition', detail: 'Competition participation (2025). Add proof only if you have a certificate, badge, or result page.', image: '/credentials/meta-hacker-cup.jpg', file: '', status: 'Add proof if available' },
  { title: 'Calico’25', issuer: 'Calico', category: 'Participation', detail: 'Participation entry. Add the relevant certificate or event proof if available.', image: '/credentials/calico-25.jpg', file: '', status: 'Add proof if available' },
]
const experiences = [
  { date: '2026', title: 'Machine Learning Intern', company: 'FlyRank', body: 'Worked on a content performance analysis capstone: framed a review-prioritization question, audited search and engagement signals, evaluated a Random Forest baseline, and documented a human-review action playbook.', current: true },
  { date: '2024 — 2028', title: 'BS Artificial Intelligence', company: 'DHA Suffa University', body: 'Undergraduate study spanning programming, core computer science, and AI-related coursework.', current: false },
]

const reveal = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: .62, ease: [0.22, 1, 0.36, 1] } } }
const stagger = { hidden: {}, visible: { transition: { staggerChildren: .09 } } }

function SectionHeading({ eyebrow, title, text, index }) {
  return <motion.div className="section-heading" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .2 }}>
    <div className="section-index"><span>{index}</span><i /></div>
    <div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{text && <p className="section-description">{text}</p>}</div>
  </motion.div>
}
function Pill({ children }) { return <span className="pill">{children}</span> }
function ExternalLinkIcon() { return <ArrowUpRight size={15} /> }

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState('All')
  const [selectedCredential, setSelectedCredential] = useState(null)
  const [qrOpen, setQrOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const categories = ['All', 'ML', 'JAVA', 'WEB', 'IOT']
  const filteredProjects = useMemo(() => filter === 'All' ? projects : projects.filter(p => p.tag === filter), [filter])
  const closeMenu = () => setMenuOpen(false)

  const copyEmail = async () => {
    const text = PROFILE.email || 'Add your email in src/App.jsx before using this button.'
    try { await navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 1800) }
    catch { window.location.href = `mailto:${PROFILE.email}` }
  }

  return <div className="site-shell">
    <div className="ambient ambient-one" /><div className="ambient ambient-two" /><div className="grain" />
    <header className="topbar">
      <a href="#home" className="brand" onClick={closeMenu} aria-label="Fatima Ali home">
        <span className="brand-mark">f<span>.</span></span><span className="brand-word">fatima ali<small>AI · SOFTWARE · CURIOSITY</small></span>
      </a>
      <button className="mobile-menu" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>
        {[['About','#about'],['Skills','#skills'],['Projects','#projects'],['Credentials','#credentials'],['Contact','#contact']].map(([label,href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
        <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's connect <ArrowUpRight size={14}/></a>
      </nav>
    </header>

    <main id="home">
      <section className="hero container">
        <motion.div className="hero-copy" initial="hidden" animate="visible" variants={stagger}>
          <motion.div className="availability" variants={reveal}><span className="availability-dot" /> OPEN TO REMOTE INTERNSHIP OPPORTUNITIES <Sparkles size={13}/></motion.div>
          <motion.p className="hero-kicker" variants={reveal}>HELLO, WORLD! I'M</motion.p>
          <motion.h1 variants={reveal}>Fatima <span>Ali</span><sup>✳</sup></motion.h1>
          <motion.div className="hero-role" variants={reveal}><span className="role-line" /> AI undergraduate <span className="role-dot">·</span> aspiring ML engineer</motion.div>
          <motion.p className="hero-description" variants={reveal}>I turn curiosity into code — exploring artificial intelligence, building thoughtful software, and learning how data can help people make better decisions.</motion.p>
          <motion.div className="hero-actions" variants={reveal}>
            <a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={17}/></a>
            <a className="button button-quiet" href="#contact">Get in touch <ArrowUpRight size={16}/></a>
          </motion.div>
          <motion.div className="hero-socials" variants={reveal}>
            <a href={PROFILE.github} target="_blank" rel="noreferrer"><Github size={16}/> GitHub <ExternalLinkIcon/></a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn <ExternalLinkIcon/></a>
            <button onClick={() => setQrOpen(true)}><QrMark/> QR portfolio</button>
          </motion.div>
        </motion.div>

        <motion.div className="hero-art" initial={{ opacity: 0, scale: .92, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: .9, delay: .18, ease: 'easeOut' }}>
          <div className="art-orbit orbit-a" /><div className="art-orbit orbit-b" />
          <div className="art-sticker sticker-star"><Sparkles size={23}/></div>
          <div className="art-sticker sticker-heart"><Heart size={19} fill="currentColor"/></div>
          <div className="code-window">
            <div className="window-top"><div className="window-dots"><i/><i/><i/></div><span>fatima.py</span><span className="window-lock"><Code2 size={13}/></span></div>
            <div className="code-content">
              <div className="code-line"><span className="line-no">01</span><code><b>class</b> <em>Developer</em>:</code></div>
              <div className="code-line"><span className="line-no">02</span><code className="indent"><b>name</b> = <i>"Fatima Ali"</i></code></div>
              <div className="code-line"><span className="line-no">03</span><code className="indent"><b>focus</b> = [</code></div>
              <div className="code-line"><span className="line-no">04</span><code className="indent2"><i>"Artificial Intelligence"</i>,</code></div>
              <div className="code-line"><span className="line-no">05</span><code className="indent2"><i>"Machine Learning"</i>,</code></div>
              <div className="code-line"><span className="line-no">06</span><code className="indent2"><i>"Building useful things"</i></code></div>
              <div className="code-line"><span className="line-no">07</span><code className="indent">]</code></div>
              <div className="code-line"><span className="line-no">08</span><code className="indent"><b>status</b> = <i>"always learning ✿"</i><span className="cursor"/></code></div>
            </div>
            <div className="code-footer"><span><span className="footer-dot"/> Python</span><span>UTF-8</span><span>Ln 08, Col 35</span></div>
          </div>
          <div className="floating-note note-top"><span className="note-icon"><BrainCircuit size={17}/></span><span><b>AI / ML</b><small>Curious by design</small></span></div>
          <div className="floating-note note-bottom"><span className="note-icon note-icon-pink"><Heart size={17}/></span><span><b>Made with care</b><small>One project at a time</small></span></div>
          <div className="art-caption">CREATIVITY MEETS LOGIC <span>↗</span></div>
        </motion.div>
        <a href="#about" className="scroll-cue"><span className="scroll-mouse"><i/></span> SCROLL TO EXPLORE <ArrowDownRight size={14}/></a>
      </section>

      <section className="quick-stats container" aria-label="Portfolio highlights">
        {[['01','AI degree','Undergraduate journey'],['06','Projects','Learning through building'],['03','Credentials','Courses & experience'],['∞','Curiosity','Always in progress']].map(([n,t,s],i)=><motion.div className="stat-card" key={t} variants={reveal} initial="hidden" whileInView="visible" viewport={{once:true}} transition={{delay:i*.07}}><span className="stat-number">{n}</span><div><b>{t}</b><small>{s}</small></div><ArrowUpRight className="stat-arrow" size={16}/></motion.div>)}
      </section>

      <section className="section container about-section" id="about">
        <SectionHeading index="01" eyebrow="A LITTLE INTRODUCTION" title={<>Curious mind.<br/><span className="serif-accent">Builder's heart.</span></>} text="A little about the person behind the code."/>
        <div className="about-grid">
          <motion.div className="about-story" variants={reveal} initial="hidden" whileInView="visible" viewport={{once:true}}>
            <p className="large-copy">I'm an AI undergraduate who loves the space where <span>logic, creativity, and real-world problems</span> meet.</p>
            <p>I'm building my foundation in programming and computer science while exploring machine learning through hands-on projects. I enjoy breaking a big problem into smaller pieces, learning the tools behind it, and turning the result into something useful.</p>
            <p>My recent highlight is a FlyRank machine-learning internship capstone focused on prioritizing content for human review using historical search and engagement signals.</p>
            <div className="signature">learning, building, repeating <span>♡</span></div>
          </motion.div>
          <motion.div className="about-facts" variants={stagger} initial="hidden" whileInView="visible" viewport={{once:true}}>
            <motion.div className="fact-card" variants={reveal}><span className="fact-icon"><GraduationCap size={19}/></span><div><small>EDUCATION</small><b>BS Artificial Intelligence</b><p>DHA Suffa University · 2024–2028</p></div></motion.div>
            <motion.div className="fact-card" variants={reveal}><span className="fact-icon"><MapPinIcon/></span><div><small>BASED IN</small><b>Karachi, Pakistan</b><p>Interested in remote opportunities</p></div></motion.div>
            <motion.div className="fact-card" variants={reveal}><span className="fact-icon"><BrainCircuit size={19}/></span><div><small>EXPLORING</small><b>AI · ML · Software</b><p>Foundations first, then deeper research</p></div></motion.div>
            <div className="soft-note"><Sparkles size={17}/><span>Good code solves problems.<br/><b>Great code considers people.</b></span></div>
          </motion.div>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="container">
          <SectionHeading index="02" eyebrow="MY TOOLKIT" title={<>Skills I'm <span className="serif-accent">growing.</span></>} text="A practical toolkit built through coursework, experiments, and projects. Proficiency labels are intentionally honest."/>
          <motion.div className="skills-layout" variants={stagger} initial="hidden" whileInView="visible" viewport={{once:true, amount:.12}}>
            <motion.div className="skills-intro" variants={reveal}><div className="skills-orb"><Atom size={44} strokeWidth={1.15}/><span/></div><p className="eyebrow">CURRENT TOOLKIT</p><h3>Curiosity is<br/>my favourite tool.</h3><p>I believe in showing what I can do today, while staying excited about what I'll learn tomorrow.</p><div className="skill-legend"><span><i className="legend-dot legend-solid"/> Practised</span><span><i className="legend-dot legend-outline"/> Learning / foundations</span></div></motion.div>
            <div className="skill-grid">{skills.map((s,i)=><motion.div variants={reveal} className="skill-card" key={s.name} whileHover={{y:-5, rotate: i%2===0 ? -.4 : .4}}><span className="skill-monogram">{s.icon}</span><div className="skill-info"><b>{s.name}</b><small>{s.group} · {s.level}</small></div><ArrowUpRight size={14} className="skill-arrow"/></motion.div>)}</div>
          </motion.div>
          <div className="toolbelt"><span>ALSO EXPLORED</span><Pill>Jupyter Notebook</Pill><Pill>Google Colab</Pill><Pill>Scikit-learn</Pill><Pill>Pandas</Pill><Pill>Arduino</Pill><Pill>Packet Tracer</Pill></div>
        </div>
      </section>

      <section className="section container projects-section" id="projects">
        <SectionHeading index="03" eyebrow="SELECTED WORK" title={<>Little ideas, <span className="serif-accent">real builds.</span></>} text="Coursework and experiments that show how I'm learning to solve problems. Some project links are placeholders until individual repositories are added."/>
        <div className="project-toolbar"><p><span className="toolbar-dot"/> A WORK IN PROGRESS, ALWAYS</p><div className="filter-tabs">{categories.map(c=><button key={c} className={filter===c?'active':''} onClick={()=>setFilter(c)}>{c==='All'?'All work':c}</button>)}</div></div>
        <motion.div className="project-grid" layout>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p,i)=><motion.article className={`project-card project-${p.visual}`} key={p.number} layout initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,scale:.97}} transition={{duration:.28}}>
              <div className="project-art">
                <span className="project-number">{p.number} / 06</span>
                <span className="project-art-icon">{p.visual==='ml'?<BrainCircuit/>:p.visual==='java'?<Code2/>:p.visual==='hospital'?<Heart/>:p.visual==='web'?<Globe2/>:p.visual==='arduino'?<Cpu/>:<Zap/>}</span>
                {p.visual==='ml' ? <div className="chart-motif"><i style={{height:'24%'}}/><i style={{height:'40%'}}/><i style={{height:'34%'}}/><i style={{height:'62%'}}/><i style={{height:'48%'}}/><i style={{height:'80%'}}/><i style={{height:'68%'}}/><i style={{height:'95%'}}/></div> :
                 <div className="project-orbit"><span/><span/><span/></div>}
                <span className="project-type">{p.type}</span>
              </div>
              <div className="project-body"><div className="project-title-row"><h3>{p.title}</h3><span className="project-tag">{p.tag}</span></div><p>{p.description}</p><div className="project-stack">{p.stack.map(t=><span key={t}>{t}</span>)}</div>
                {p.visual==='ml'&&<div className="project-result"><Star size={14}/><span>{p.outcome}</span></div>}
                <a href={p.link} target="_blank" rel="noreferrer" className="project-link">{p.label}<ArrowUpRight size={16}/></a>
              </div>
            </motion.article>)}
          </AnimatePresence>
        </motion.div>
        <div className="project-footnote"><span>✳</span> Portfolio note: add verified repository links, screenshots, and live demos to make each project independently reviewable.</div>
      </section>

      <section className="section internship-section">
        <div className="container">
          <SectionHeading index="04" eyebrow="EXPERIENCE & EDUCATION" title={<>The journey <span className="serif-accent">so far.</span></>} text="The experiences that are shaping my foundation in AI and software development."/>
          <div className="timeline">
            {experiences.map((e,i)=><motion.div className="timeline-item" key={e.title} variants={reveal} initial="hidden" whileInView="visible" viewport={{once:true}}><div className="timeline-rail"><span className={e.current?'rail-dot rail-current':'rail-dot'}/><i/></div><div className="timeline-date">{e.date}</div><div className="timeline-content"><div className="timeline-title"><div><h3>{e.title}</h3><p>{e.company}</p></div>{e.current&&<span className="current-label"><span/> FEATURED</span>}</div><p className="timeline-body">{e.body}</p>{e.current&&<a href={PROFILE.github} className="text-link" target="_blank" rel="noreferrer">Explore capstone repository <ArrowUpRight size={15}/></a>}</div></motion.div>)}
          </div>
          <div className="internship-callout"><div className="callout-symbol"><Layers3 size={24}/></div><div><p className="eyebrow">CAPSTONE SPOTLIGHT</p><h3>Content Performance Prioritization Using Search & Engagement Signals</h3><p>Decision support only: the model ranks content for human review. It does not automatically refresh content or establish that any signal causes a decline.</p></div><a href={PROFILE.github} target="_blank" rel="noreferrer" className="callout-arrow" aria-label="Open FlyRank GitHub repository"><ArrowUpRight/></a></div>
        </div>
      </section>

      <section className="section credentials-section" id="credentials">
        <div className="container">
          <SectionHeading index="05" eyebrow="LEARNING & RECOGNITION" title={<>Proof of <span className="serif-accent">progress.</span></>} text="Courses, achievements, and professional experience. Open a card to see what still needs to be attached before sharing."/>
          <div className="credential-grid">
            {credentials.map((c,i)=><motion.button className="credential-card" key={c.title} variants={reveal} initial="hidden" whileInView="visible" viewport={{once:true}} transition={{delay:i*.08}} onClick={()=>setSelectedCredential(c)}>
              <div className={`credential-art credential-art-${i}`}>{c.image && <img className="credential-preview" src={c.image} alt={`${c.title} preview`} onError={(e)=>{e.currentTarget.style.display='none'}}/>}<span className="credential-stamp">{c.category==='Course'?<BookOpen/>:c.category==='Achievement'?<Award/>:<BriefcaseBusiness/>}</span><span className="credential-serial">CREDENTIAL / {String(i+1).padStart(2,'0')}</span><div className="credential-spark">✳</div><span className="credential-kind">{c.category}</span><span className="credential-upload-hint">ADD YOUR IMAGE</span></div>
              <div className="credential-info"><small>{c.issuer}</small><h3>{c.title}</h3><span className="credential-action">View details <ArrowUpRight size={14}/></span></div>
            </motion.button>)}
          </div>
          <div className="credential-disclaimer"><FileBadge size={17}/><p><b>Before publishing:</b> upload your original certificate images/PDFs or verified credential URLs. This portfolio does not fabricate certificates or imply verification where a link hasn't been supplied.</p></div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="container contact-container">
          <div className="contact-decoration decor-one">✳</div><div className="contact-decoration decor-two">♡</div>
          <SectionHeading index="06" eyebrow="SAY HELLO" title={<>Have a good idea?<br/><span className="serif-accent">Let's build it.</span></>} text="I'm interested in learning opportunities, thoughtful collaborations, and remote internships where I can contribute and grow."/>
          <div className="contact-grid">
            <div className="contact-copy"><p>Whether you have an opportunity, feedback on a project, or just want to talk tech — I'd love to connect.</p><div className="contact-links">
              <a href={PROFILE.github} target="_blank" rel="noreferrer"><span><Github/></span><div><small>GITHUB</small><b>fatimaali123-ai</b></div><ArrowUpRight/></a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer"><span><Linkedin/></span><div><small>LINKEDIN</small><b>Connect professionally</b></div><ArrowUpRight/></a>
              <button onClick={copyEmail}><span><Mail/></span><div><small>EMAIL</small><b>{PROFILE.email || 'Add your email address'}</b></div>{copied?<Check/>:<ArrowUpRight/>}</button>
            </div>{copied&&<p className="copy-feedback">{PROFILE.email?'Email copied!':'Placeholder copied — update your email in src/App.jsx.'}</p>}</div>
            <div className="contact-note"><div className="note-topline"><span className="mini-spark">✳</span><span>ONE LAST THING</span></div><h3>Thanks for<br/>stopping by<span>.</span></h3><p>This portfolio is a living document — just like my learning journey. New projects, better ideas, and more experiments are always on the way.</p><div className="note-signoff">Made with curiosity <Heart size={14} fill="currentColor"/></div><div className="note-doodle">✳</div></div>
          </div>
          <div className="qr-inline"><div><span className="qr-small-icon"><QrMark/></span><div><b>Take my portfolio with you</b><small>Generate a QR code for a business card or CV.</small></div></div><button className="button button-primary" onClick={()=>setQrOpen(true)}>Generate QR <ArrowUpRight size={16}/></button></div>
        </div>
      </section>
    </main>

    <footer className="footer"><div className="container footer-inner"><a href="#home" className="brand footer-brand"><span className="brand-mark">f<span>.</span></span><span className="brand-word">fatima ali<small>BUILT WITH CURIOSITY</small></span></a><p>© {new Date().getFullYear()} Fatima Ali. Thoughtfully in progress <span>✳</span></p><a href="#home" className="back-top">BACK TO TOP <ArrowUpRight size={14}/></a></div></footer>

    <AnimatePresence>{selectedCredential&&<motion.div className="modal-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setSelectedCredential(null)}><motion.div className="modal-card" initial={{opacity:0,y:18,scale:.97}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:12}} onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setSelectedCredential(null)} aria-label="Close"><X/></button><span className="modal-icon"><Award size={24}/></span><p className="eyebrow">{selectedCredential.category} · CREDENTIAL</p><h3>{selectedCredential.title}</h3><p className="modal-issuer">{selectedCredential.issuer}</p><p>{selectedCredential.detail}</p><div className="credential-modal-preview"><img src={selectedCredential.image} alt={`${selectedCredential.title} preview`} onError={(e)=>{e.currentTarget.style.display='none'}}/><div className="missing-file"><FileBadge size={18}/><span><b>Image placeholder</b><small>{selectedCredential.status}</small><small>Save your image at: public{selectedCredential.image}</small></span></div></div><button className="button button-primary modal-done" onClick={()=>setSelectedCredential(null)}>Got it <Check size={16}/></button></motion.div></motion.div>}</AnimatePresence>
    <AnimatePresence>{qrOpen&&<motion.div className="modal-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setQrOpen(false)}><motion.div className="modal-card qr-modal" initial={{opacity:0,y:18,scale:.97}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:12}} onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setQrOpen(false)} aria-label="Close"><X/></button><span className="modal-icon"><QrMark/></span><p className="eyebrow">SCAN · CONNECT · EXPLORE</p><h3>Your portfolio QR</h3><p>Once deployed, this QR code will open your live portfolio. Update the URL in <code>src/App.jsx</code> first.</p><div className="qr-code-box"><QRCodeSVG value={PROFILE.livePortfolio} size={190} bgColor="#ffffff" fgColor="#28213b" level="H" includeMargin/></div><span className="qr-url">{PROFILE.livePortfolio}</span><button className="button button-primary modal-done" onClick={()=>window.open(PROFILE.livePortfolio,'_blank','noopener,noreferrer')}>Open portfolio URL <ArrowUpRight size={16}/></button></motion.div></motion.div>}</AnimatePresence>
  </div>
}

function MapPinIcon() { return <Globe2 size={19}/> }
function QrMark() { return <span className="qr-mark" aria-hidden="true"><i/><i/><i/><b/><b/><b/></span> }

export default App
