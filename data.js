let publications = [
	{
		title: "Peer-to-peer update dissemination in browser-based networked virtual environments",
		year: "2020",
		publisher: "QMUL",
		publisherFull: "Queen Mary University of London",
		description: `This is my PhD thesis, and is the ultimate reference for real-time P2P update dissemination. It contains surveys and taxonomies of past solutions and evaluation methodologies, a detailed mapping of the problem space, in-depth measurement studies of rich NVE network traces, as well as the complete design, implementation, and evaluation of the state-of-the-art in UD systems. Among other contributions, the evaluation framework and workloads have been made available under open-source licences. Libraries derived from this work are available at <a href="https://libfabric.com" target="_blank">libfabric.com</a>.`,
		link: {
			href: "https://amar.io/thesis.pdf",
			label: "PDF"
		}
	}, {
		title: "Towards Cheap Scalable Browser Multiplayer",
		year: "2019",
		publisher: "CoG 2019",
		publisherFull: "In Conference on Games (CoG) 2019; IEEE",
		description: "In this work, we introduce and evaluate a P2P-based method and library that aims to minimse running costs and development overhead for independent, multiplayer, browser games.",
		link: {
			href: "res/papers/PID5999227.pdf",
			label: "PDF"
		}
	}, {
		title: "Zest: REST over ZeroMQ",
		year: "2019",
		publisher: "SPT-IoT 2019",
		publisherFull: "In Proceedings of the 3rd Workshop on Security, Privacy and Trust in the Internet of Things, in conjunction with IEEE PERCOM",
		description: "In this paper we introduce, Zest (REST over ZeroMQ), a middleware technology in support of an Internet of Things (IoT).",
		link: {
			href: "res/papers/1570510166.pdf",
			label: "PDF"
		}
	}, {
		title: "Providing Occupancy as a Service with Databox",
		year: "2018",
		publisher: "CitiFog 2018",
		publisherFull: "In Proceedings of the 1st ACM International Workshop on Smart Cities and Fog Computing; (pp. 29-34) ACM",
		description: "In this paper we present Occupancy-as-a-Service (OaaS) implemented as an app on Databox.",
		link: {
			href: "res/papers/citifog18-final7.pdf",
			label: "PDF"
		}
	}, {
		title: "An Information-Theoretic Approach to Time-Series Data Privacy",
		year: "2018",
		publisher: "W-P2DS 2018 / EuroDW 2018",
		publisherFull: "In Proceedings of the 1st Workshop on Privacy by Design in Distributed Systems; (p. 3) ACM",
		description: "This paper presents a system for efficiently augmenting token-based access control with privacy-awareness without significantly impacting performance or utility.",
		link: {
			href: "res/papers/a3-amar.pdf",
			label: "PDF"
		}
	}, {
		title: "An Analysis of Home IoT Network Traffic and Behaviour",
		year: "2018",
		publisher: "arXiv:1803.05368 [cs.NI]",
		publisherFull: "arXiv:1803.05368 [cs.NI]",
		description: "In this work, we analyse and fingerprint network traces from a testbed of common IoT devices and demonstrate where privacy and security risks manifest themselves.",
		link: {
			href: "res/papers/1803.05368.pdf",
			label: "PDF"
		}
	}, {
		title: "Building Accountability into the Internet of Things: The IoT Databox Model",
		year: "2017",
		publisher: "Journal of Reliable Intelligent Environments December 2017",
		publisherFull: "Journal of Reliable Intelligent Environments; (pp. 1-17) Springer",
		description: "This paper outlines the IoT Databox model as a means of making the Internet of Things (IoT) accountable to individuals.",
		link: {
			href: "res/papers/JREI-D-17-00019.pdf",
			label: "PDF"
		}
	}, {
		title: "Balanced Message Distribution in Distributed Message Handling Systems",
		year: "2017",
		publisher: "US Patent (serial number: 15/794440) 2017",
		publisherFull: "US Patent (serial number: 15/794440)",
		description: "This patent describes a combination of methodologies for arriving at near-optimal message distribution decisions in distributed messaging systems under specific constraints.",
		link: {
			href: "res/papers/US20190129771A1.pdf",
			label: "PDF"
		}
	}, {
		title: "Route-based Authorization and Discovery for Personal Data",
		year: "2017",
		publisher: "EuroDW 2017",
		publisherFull: "In the 11th EuroSys Doctoral Workshop",
		description: "When faced with systems in which third party components need to advertise the availability of data they gather, while other such components need to access it, solutions for delegated authorisation and discovery APIs for interoperability are needed. This work explores possible solutions, and converges on a testable implementation.",
		link: {
			href: "res/papers/eurodw17-final3.pdf",
			label: "PDF"
		}
	}, {
		title: "Personal Data Management with the Databox: What's Inside the Box?",
		year: "2016",
		publisher: "CAN 2016",
		publisherFull: "In Proceedings of the 2016 ACM Workshop on Cloud-Assisted Networking; (pp. 49-54) ACM",
		description: "A more detailed look at the Databox as it stood; a collection of physical and cloudhosted software components that provide for an individual data subject to manage, log and audit access to their data by other parties.",
		link: {
			href: "res/papers/p49-mortier.pdf",
			label: "PDF"
		}
	}, {
		title: "Privacy-Aware Infrastructure for Managing Personal Data",
		year: "2016",
		publisher: "SIGCOMM 2016",
		publisherFull: "In Proceedings of the 2016 ACM SIGCOMM Conference; (pp. 571-572) ACM",
		description: "A poster abstract giving an overview of Databox systems as they stood with a stronger focus on arbiter interactions.",
		link: {
			href: "res/papers/p571-amar.pdf",
			label: "PDF"
		}
	}, {
		title: "Incremental Dense Multi-modal 3D Scene Reconstruction",
		year: "2015",
		publisher: "IROS 2015",
		publisherFull: "In Intelligent Robots and Systems (IROS), 2015 IEEE/RSJ International Conference on; (pp. 908-915) IEEE",
		description: "In this paper, we propose a probabilistic model that efficiently exploits complementarity between different depth-sensing modalities for incremental dense scene reconstruction.",
		link: {
			href: "res/papers/ondra2015iros.pdf",
			label: "PDF"
		}
	}
];

let awards = [
	{
		name: "ProductHunt #1 Product of the Day/Week",
		year: "2020",
		image: {
			thumb: "res/images/awards/top-post-badge.svg",
			alt: "ProductHunt Badges",
		},
		description: `<a href="https://krew.live" target="_blank">Krew</a> was featured on <a href="https://www.producthunt.com/posts/krew" target="_blank">ProductHunt</a> and was finalist for Product of the Year. It was an honour to stand out against so many amazing products and to join the ranks of the legends before us.`
	}, {
		name: "IEEE CoG Registration Grant",
		year: "2019",
		image: {
			thumb: "res/images/awards/ieee-cog-logo.png",
			alt: "IEEE CoG Logo",
		},
		description: "A £620 grant, awarded by the JP fund, to cover the registration to <a href=\"http://ieee-cog.org/2019/\" target=\"_blank\">IEEE CoG 2019</a> in London (no travel expenses needed!) where Yousef <a href=\"/res/images/awards/yousef-poster-cog19.jpg\" target=\"_blank\">presented</a> a poster."
	}, {
		name: "EuroSys 2018 Shadow PC and Conference Travel Grant",
		year: "2018",
		image: {
			thumb: "res/images/awards/eurosys-logo.png",
			alt: "EuroSys Logo",
		},
		description: "Two travel grants to Shadow PC meeting and top-tier systems conference EuroSys in Porto, Portugal, where Yousef <a href=\"/res/images/awards/yousef-poster-eurodw18.jpg\" target=\"_blank\">presented</a> a poster and <a href=\"/res/images/awards/yousef-presenting-eurodw18.jpg\" target=\"_blank\">gave</a> a workshop talk for EuroDW '17 (slides available <a href=\"http://conferences.inf.ed.ac.uk/EuroDW2018/#program\" target=\"_blank\">here</a>) as well as <a href=\"/res/images/awards/yousef-presenting-wp2ds18.jpg\" target=\"_blank\">giving</a> a workshop talk for the first W-P2DS (slides available <a href=\"/res/papers/w-p2ds18-presentation.pdf\" target=\"_blank\">here</a>)."
	}, {
		name: "EuroSys 2017 Travel Grant",
		year: "2017",
		image: {
			thumb: "res/images/awards/eurosys-logo.png",
			alt: "EuroSys Logo",
		},
		description: "A grant of $500 covering travel and lodging in addition to free registration to top-tier systems conference EuroSys in Belgrade, Serbia, where Yousef <a href=\"/res/images/awards/yousef-poster-eurodw17.jpg\" target=\"_blank\">presented</a> a poster and <a href=\"/res/images/awards/yousef-presenting-eurodw17.jpg\" target=\"_blank\">gave</a> a workshop talk (EuroDW '17). Abstract and slides are available <a href=\"https://eurodw17.kaust.edu.sa/workshop.html\" target=\"_blank\">here</a>."
	}, {
		name: "IEEE Circuit Building Competition Winner",
		year: "2017",
		image: {
			thumb: "res/images/awards/ieee-student-branch.png",
			alt: "QMUL IEEE Student Branch Logo",
		},
		description: "For fairness, entrants were divided into beginners and veterans. Yousef was selected as winner among the veteran contestants, based on build speed, circuit layout, design, soldering quality, and functionality. Photos available <a href=\"http://ieeesb.eecs.qmul.ac.uk/2017/02/22/valentines-day-circuit-building-2017/\" target=\"_blank\">here</a> — that Amazon gift card, valued at £35, was aptly used to buy more electronics."
	}, {
		name: "SIGCOMM 2016 Travel Grant",
		year: "2016",
		image: {
			thumb: "res/images/awards/sigcomm16-logo.png",
			alt: "SIGCOMM 2016 Logo",
		},
		description: "A grant of $1,500 covering registration, lodging, and travel to ACM's Special Interest Group on Data Communications (SIGCOMM) conference in Florianópolis, Brazil, where Yousef <a href=\"/res/images/awards/yousef-poster-sigcomm16.jpg\" target=\"_blank\">presented</a> a poster, attended stimulating talks, and met brilliant people."
	}, {
		name: "AP Jarvis Prize",
		year: "2014",
		image: {
			thumb: "res/images/awards/apjarvis-thumb.png",
			alt: "AP Jarvis Award Certificate",
			href: "res/images/awards/apjarvis-small.png"
		},
		description: "An annual award, valued at £50, for an outstanding performance in the project undertaken by students in the final year in Electronic and Electrical Engineering. In addition, the project poster was voted student favourite!"
	}, {
		name: "Personal Skills Award (Advanced)",
		year: "2014",
		image: {
			thumb: "res/images/awards/PSA-thumb.png",
			alt: "PSA Advanced Award Certificate",
			href: "res/images/awards/PSA-small.png"
		},
		description: "The advanced level of the university's optional employability award, achieved by demonstrating an exceptional commitment to developing employability through attending workshops, networking events, and volunteering. Additionally, PSA (Advanced) students demonstrate professional skills to an employer led interview panel and foster professional practice. <a href=\"http://intranet.birmingham.ac.uk/as/employability/psa/index.aspx\" target=\"_blank\">More info...</a>"
	}, {
		name: "PASS Leader of the Year 2013-2014",
		year: "2014",
		image: {
			thumb: "res/images/awards/PASS-thumb.png",
			alt: "PASS Leader of the Year Certificate",
			href: "res/images/awards/PASS-small.png"
		},
		description: "The <a href=\"http://intranet.birmingham.ac.uk/as/libraryservices/pass/whatispass.aspx\" target=\"_blank\">Peer-assisted Study Sessions (PASS)</a> scheme is part of an internationally recognised network where higher year students lead study sessions for lower year students. <a href=\"http://web.archive.org/web/20150816043636/https://intranet.birmingham.ac.uk/as/libraryservices/pass/awards.aspx\" target=\"_blank\">Yousef</a> was named <a href=\"http://intranet.birmingham.ac.uk/as/libraryservices/pass/awards.aspx\" target=\"_blank\">PASS Leader of the Year</a> after successfully setting up the scheme in the department of EECE after lobbying the administration for over a year as Chair of Student Representatives. <a href=\"http://www.birmingham.ac.uk/schools/eece/news/pass-awards.aspx\" target=\"_blank\">Full news article...</a>"
	}, {
		name: "Student Mobile App Competition (SMAC) Winner",
		year: "2014",
		image: {
			thumb: "res/images/awards/SMAC-thumb.png",
			alt: "SMAC Certificate",
			href: "res/images/awards/SMAC-small.png"
		},
		description: "A competition, led by the university's IT Innovation Centre, thats goal is to prototype the best mobile app that will most benefit the university and students as a whole. The competition was won by writing a marketplace app for students to buy and sell secondhand textbooks with built in messaging. Prizes included an Amazon Kindle Fire HD tablet and a 14 week paid industrial placement offer (which was respectfully declined). <a href=\"http://intranet.birmingham.ac.uk/it/innovation/Student-Mobile-App-Competition/Student-Mobile-App-Competition-2014.aspx\" target=\"_blank\">More info...</a>"
	}, {
		name: "IBM Mainframe Challenge 2012 Winner",
		year: "2013",
		image: {
			thumb: "res/images/awards/IBM.png",
			alt: "IBM Mainframe Challenge 2012 Logo",
		},
		description: "Achieved by swiftly completing a series of mainframe and systems programming tasks on IBM's own servers. <a href=\"http://www-05.ibm.com/employment/uk/graduate-programmes/mainframe/index.shtml\" target=\"_blank\">More info...</a>"
	}, {
		name: "First Class Excellence Scholarship x4",
		year: "2009-2013",
		image: {
			thumb: "res/images/awards/scholarship-thumb.png",
			alt: "First Class Excellence Scholarship Letter",
			href: "res/images/awards/scholarship-mall.png"
		},
		description: "Awarded for excellent baccalaureate results and maintained for four consecutive years (the entire degree) by consistently achieving first class honours."
	}
];

let experience = [
	{
		role: "Co-founder / CTO",
		organisation: "Krew Live Ltd",
		period: "Apr 2020 – Present",
		//description: `<a href="https://krew.live" target="_blank">Krew</a> combines community and fitness. We have classes for any device and AI-powered leaderboards if your device has a camera! Easily share highlights and invite your friends to join you in hundreds of live and on-demand classes. We've been featured as #1 product of the day and week on <a href="https://www.producthunt.com/posts/krew" target="_blank">ProductHunt</a> and we raised a total of $1.8MM at an 8-figure valuation in less than a year by our <a href="https://www.businessinsider.com/krew-pitch-deck-fitness-peloton-seed-round-2021-9" target="_blank">seed round</a>.`
		description: `<a href="https://krew.build" target="_blank">Krew</a> is an AI studio specialising in AI-related strategy and implementation. We have build deep tech products across healthcare, fitness, bizops for desktop and mobile usage. Our world-class team has been featured on publications such as <a href="https://www.businessinsider.com/krew-pitch-deck-fitness-peloton-seed-round-2021-9" target="_blank">Business Insider</a> and our producs were ranked #1 product of the day and week on <a href="https://www.producthunt.com/posts/krew" target="_blank">ProductHunt</a>.`
	}, {
		role: "Fractional CTO",
		organisation: "Cura Systems Ltd",
		period: "Jul 2020 – Present",
		description: `AI secretary for clinicians, deployed in a week to two top private practices (London Clinic, Cleveland Clinic)`
	}, {
		role: "Fractional CTO",
		organisation: "Support Muslim Business Forum Ltd",
		period: "Jul 2022 – Present",
		description: `A large UK-based business network, setting up a LinkedIn-like platform with 200+ active users`
	}, {
		role: "Fractional CTO",
		organisation: "Sawa Global Ltd",
		period: "Nov 2021 – Present",
		description: `Non-profit mosque app, built the app used by 180+ mosques across the UK and their communities`
	}, {
		role: "Entrepreneur (LD14)",
		organisation: "Entrepreneur First",
		period: "Apr 2020 – Sept 2020",
		description: `Member of the 14th London cohort of world's leading talent investor and deep tech startup accelerator <a href="https://www.joinef.com/" target="_blank">Entrepreneur First</a> where we founded Krew <a href="https://krew.live/" target="_blank">Krew</a>, became <a href="https://www.producthunt.com/posts/krew" target="_blank">&#35;1 product of the day and week</a> on Product Hunt, and secured pre-seed funding at a million USD valuation.`
	}, {
		role: "Founder",
		organisation: "Grandtutors",
		period: "Aug 2019 – Mar 2020",
		description: `<a href="https://grandtutors.org/" target="_blank">Grandtutors</a> provides vetting, agency, training, marketing, and managerial services to London-based tutors, in exchange for nominal per-lesson royalty payments. We also ran larger adult education classes across various venues in London, as well as free technological literacy classes for the elderly, up until the pandemic.`
	}, {
		role: "Programming Teacher",
		organisation: "The London School of Mathematics and Programming",
		period: "Sep 2019 – Mar 2020",
		description: `Teaching Scratch classes to ages 8&ndash;10, three different Python courses to age ranges from 10 onwards, and assisting/substituting several other courses. All of my teaching material is freely available <a href="https://py.amar.io/" target="_blank">online</a>.`
	}, {
		role: "Primary School Computing Teacher",
		organisation: "Oriel Academy",
		period: "Feb 2019 – July 2019",
		description: `Teaching computing to approximately 240 children across years 1 to 5, utilising pedagogical and behavioural management skills.
<h6>Certifications</h6>
<ul>
	<li><a href="res/certificates/dbs.jpg" target="_blank">DBS Check</a></li>
	<li><a href="res/certificates/safeguarding.pdf" target="_blank">NSPCC Safeguarding Certification</a></li>
	<li><a href="res/certificates/prevent.pdf" target="_blank">Prevent Certification</a></li>
	<li>First Aid</li>
</ul>`
	}, {
		role: "Researcher",
		organisation: "Nokia Bell Labs Stuttgart",
		period: "May 2017 – Aug 2017",
		description: "Research in distributed function scheduling and dynamic load balancing for minimising latency in the context of serverless computing."
	}, {
		role: "Teaching Assistant",
		organisation: "Queen Mary University of London",
		period: "Jan 2016 – Jan 2019",
		description: `Teaching, supervision, and examination of undergraduates and postgraduates in a variety of EECS modules.
<ul>
	<li>Digital Systems Design (hardware design and VHDL)</li>
	<li>Software and Network Services Design / IT Programming (basically a Java module)</li>
	<li>2x Digital Media and Social Networks (graphs, network analysis, web APIs)</li>
</ul>`
	}, {
		role: "Researcher",
		organisation: "University of Oxford",
		period: "Sept 2015 – Sept 2016",
		description: `Research in robotics, computer vision, machine learning, and A.I. &ndash; among other areas with <a href="http://www.robots.ox.ac.uk/~tvg/" target="_blank">Torr Vision Group</a> under <a href="http://www.robots.ox.ac.uk/~phst/" target="_blank">Professor Philip Torr</a> at the Department of Engineering Science.
<h6>Publications</h6>
<ul>
	<li><a href="res/papers/ondra2015iros.pdf" target="_blank">Incremental Dense Multi-modal 3D Scene Reconstruction</a></li>
</ul>`
	}, {
		role: "Programming Tutor",
		organisation: "Self-employed",
		period: "Sept 2010 – June 2014",
		description: "Personal tutor to 16 students"
	}, {
		role: "Teaching Assistant",
		organisation: "University of Birmingham",
		period: "Nov 2011 – Nov 2011",
		description: "Teaching and supervision of a group of sixth form students considering higher education."
	}, {
		role: "Shop Floor Worker",
		organisation: "Aquila Aviation by Excellence AG",
		period: "May 2008 – Sept 2008",
		description: "Construction and assembly of fiber composite plane parts. Extensive experience in sweeping the factory after hours and dealing with occupational injuries."
	}
];

let education = [
	{
		qualification: "PhD in Electronic Engineering and Computer Science",
		institution: "Queen Mary University of London<br/>University of Genoa<br/>Imperial College London",
		period: "Jan 2016 – Apr 2020",
		description: `PhD research with a focus on Systems, Networks, Privacy, and Security
<h6>Societies</h6>
<ul>
	<li>Artificial Intelligence and Robotics Society</li>
	<li>IEEE Student Branch</li>
	<li>Engineers Without Borders</li>
	<li>Trading and Investment Society</li>
	<li>Design Society</li>
</ul>`
	}, {
		qualification: "Master of Engineering in Computer Systems Engineering with Business Management",
		institution: "The University of Birmingham",
		period: "Sept 2010 – July 2014",
		description: `<h6>First class Honours</h6>
Decided to transfer course from Electronic Engineering with Business Management on completion of my first year. Awarded the First Class Excellence Scholarship for four consecutive years as a result of an impeccable record.
<h6>Societies</h6>
<ul>
	<li>Electronic, Electrical & Computer Engineering Society</li>
	<li>Birmingham Enterprise and Entrepreneur’s Society (BEES)</li>
	<li>Games Development Society</li>
	<li>Investment Society</li>
</ul>
<h6>Modules Pertinent to Current Interests</h6>
<ul>
	<li>Data Mining</li>
	<li>Computer Vision</li>
	<li>Computer Networking</li>
	<li>Computer Hardware and Digital Design</li>
	<li>Digital Systems and Embedded Computing</li>
	<li>Digital Logic and Microprocessor Systems</li>
	<li>Object Oriented Software Design</li>
	<li>Computer Systems, Algorithms and Data Structures</li>
	<li>C Programming and Algorithmic Problem Solving</li>
	<li>Project Management and Professional Practice</li>
	<li>Advanced Interactive 3D Design for Virtual Environments and Serious Games</li>
</ul>
<h6>Miscellaneous</h6>
<ul>
	<li>Student Representative of the Department of Electronic, Electrical, and Computer Engineering for 2 consecutive years and Student Rep Chair for 1 year</li>
	<li>Peer Assisted Study Sessions (PASS) Leader; tutoring first year students</li>
	<li>Ambassador for the University of Birmingham on a cultural exchange program in China for future direct-entry students</li>
	<li>EECE Green Impact project assistant for 2 years and sole student delegate</li>
	<li>Certification of completion of Birmingham Start-Up Masterclasses 2013</li>
</ul>`
	}, {
		qualification: "European Baccalaureate",
		institution: "European School Frankfurt am Main",
		period: "Sept 2002 – Sept 2010",
		description: `<ul>
	<li>Twice medalist at the annual European School Science Symposium</li>
	<li>Student council president candidate</li>
	<li>Lead role in 3 Shakespearean plays</li>
</ul>`
	}
];

let volunteering = [
	{
		role: "Tech and Entrepreneruship Mentor",
		description: `Yousef tries to give back by providing mentorship and practical support to budding entrepreneurs and developers, through <a href="https://muslamicmakers.com" target="_blank">Muslamic Makers</a>, <a href="https://adplist.org" target="_blank">ADPList</a>, and <a href="https://underdogdevs.org" target="_blank">Underdog Devs</a>.`
	}, {
		role: "Sustainability Ambassador",
		description: `Yousef volunteered as Welcome Team member and later Sustainability Ambassador for <a href="https://mycauseuk.com/" target="_blank">My Cause UK</a> to raise money for <a href="https://www.thecalmzone.net/" target="_blank">CALM</a>.`
	}, {
		role: "Duolingo Global Ambassador",
		description: `Yousef runs the sole <a href="https://events.duolingo.com/london-german-2/" target="_blank">German chapter in London</a> with over 1,800 members for the popular language learning platform <a href="https://www.duolingo.com/" target="_blank">Duolingo</a>, organising and hosting weekly German language events.`
	}, {
		role: "Various STEM Outreach",
		description: `<ul>
	<li><a href="https://www.stem.org.uk/stem-ambassadors" target="_blank">STEM Ambassador</a> for 3 years through which I maintain DBS certification</li>
	<li><a href="https://faraday-secondary.theiet.org/" target="_blank">Faraday Challenge</a> Volunteer</li>
	<li><a href="http://www.teentech.com/" target="_blank">Teen Tech</a> Instructor (Telford, Surrey, London) teaching classes from dozens of schools to build an <a href="https://www.eecs.qmul.ac.uk/~andrewm/arduinitar.html" target="_blank">Arduinitar</a></li>
	<li>Teen Tech Competition Consultant leading <a href="https://twitter.com/teentechevent/status/879368699140067329" target="_blank">our team</a> to victory!</li>
	<li><a href="http://www.firstlegoleague.org/" target="_blank">Lego League</a> Judge</li>
</ul>`
	}, {
		role: "Open Source Maintainer",
		description: `Yousef's open source work warrants its own section. Aside from the myriad of codebases Yousef has contributed to on and off of <a href="https://github.com/yousefamar" target="_blank">GitHub</a>, Yousef helps thousands of people on <a href="https://stackexchange.com/users/508897/yousef-amar" target="_blank">Stack Exchange sites</a>, maintains packages for Arch and Void Linux, and is active in several video game modding communities and has grown a large following. More information on these will be added to the <a href="#projects" target="_blank">project</a> graph soon.`
	}, {
		role: "Invited Speaker",
		description: "Yousef is regularly invited to present and discuss Islam and its influence in his life to the senior year Catholic class at his old school."
	}, {
		role: "Student Representative and Chair",
		description: "Yousef was elected student representative of the Department of Electronic, Electrical, and Computer Engineering for 2 consecutive years and Student Rep Chair for 1 year."
	}, {
		role: "EECE Green Impact Project Assistant",
		description: "Yousef was the sole student delegate in the department Green Impact team for 2 years, mobilising the student body as their representative to spur on sustainability. As a result, the team won the Gold, Gold Plus for Lab, and Community Action awards."
	}, {
		role: "Peer Assisted Study Sessions (PASS) Leader",
		description: "As a PASS leader, Yousef tutored first year students, and was named university-wide PASS leader of the year due to utilising his capacity as student representative to successfully lobby the EECE department to introduce the PASS scheme for the modules students would benefit most from."
	}, {
		role: "Cultural Ambassador",
		description: "Ambassador for the University of Birmingham on a two-week cultural exchange program to China (Beijing, Wuhan) for future direct-entry students."
	}
];

let projects = [
	{
		name: "4<sup>th</sup> Year MEng Final Year Project",
		image: {
			thumb: "res/images/projects/fourth-year.png",
			alt: "Shipwreck 3D scan"
		},
		description: "Design and implementation of a low-cost UAV sensor system for constructing object and topographical 3D models in real-time.",
		link: {
			href: "javascript:alert('Coming soon!')",
			label: "Report"
		}
	}, {
		name: "3<sup>rd</sup> Year MEng Group Project",
		image: {
			thumb: "res/images/projects/third-year.png",
			alt: "Quadcopter-mounted teddy bear"
		},
		description: "Building a quadcopter that can autonomously transport a payload from the roof of the EECE building to an arbitrary target.",
		link: {
			href: "javascript:alert('Coming soon!')",
			label: "Report"
		}
	}
];

let skills = [
	"English (fluent)",
	"German (fluent)",
	"Arabic (fluent)",
	"Italian (4 years)",
	"Mandarin (1 year)",
	"HTML5",
	"CSS3",
	"JavaScript",
	"LiveScript",
	"PHP",
	"SQL",
	"Node.js",
	"AngularJS",
	"React",
	"Vue.js",
	"MongoDB",
	"AWS (EC2, S3, R53)",
	"Java",
	"Python",
	"C",
	"C++",
	"C#",
	"Unity3D",
	"Blender",
	"VHDL",
	"OpenGL",
	"GLSL",
	"WebGL",
	"WebSocket",
	"CUDA",
	"OpenCL",
	"SSE Programming",
	"R",
	"MATLAB",
	"Bash",
	"CUPL",
	"MP Assembly",
	"LaTeX",
	"Cordova",
	"Git/Hg/SVN",
	"IBM z/OS mainframe (CICS, WebSphere MQ, JCL)"
];
