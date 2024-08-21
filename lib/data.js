import Joy from "../public/team/joy1.jpeg"
import peter from "../public/team/peter.jpg"
import preetpal from "../public/team/preetpal.jpg"
import saurav from "../public/team/saurav.jpeg"
import itilus from '../public/services/itillus2.svg'
// import digitalMarketingIllus from '../public/services/digitalMarketingIllus.svg'
import digitalMarketingIllus from '../public/services/digitalnew.svg'
import consultingIllus from '../public/services/consultingIllus.svg'
import googleIcon from '../public/partners/google1.svg'
import microsoftlogo from '../public/partners/microsoft1.svg'
import aws from '../public/partners/aws1.svg'
import endorsmiimg from "../public/projects/endorsminew.png"
import edtechimg from "../public/projects/eddtech1.jpg"
import edtechimg2 from "../public/projects/edtech2.jpg"
import fund1 from "../public/projects/fundraise1.jpg"
import fund2 from "../public/projects/fundraise2.jpg"
import hospitalimg from "../public/projects/hospitalImage.jpg"
import pos1 from "../public/projects/pos1.jpg"
import pos2 from "../public/projects/pos2.jpg"
import restaurant1 from "../public/projects/restaurant1.jpg"
import restaurant2 from "../public/projects/restaurent2.jpg"
import amm1 from "../public/projects/amm1.jpg"
import amm2 from "../public/projects/amm2.jpg"
import familylaw1 from "../public/projects/familylaw1.jpg"
import familylaw2 from "../public/projects/familylaw2.jpg"

// import endorsmivid from "../public/projects/endorsmivid.webm"
export const projects=[
    {
        name: "EndorseMii",
        solution: "The platform prioritizes user experience with an intuitive interface for profile creation and management. Users can showcase their skills, certifications, and achievements easily. An endorsement system facilitates seamless requests and giving of endorsements, enhancing credibility. Comprehensive review management allows for efficient feedback handling. Networking features like messaging and group discussions foster meaningful connections.",
        result: "The platform drives increased user engagement by offering tools and features that encourage active participation and interaction. Users benefit from an enhanced professional reputation through the seamless showcasing of their skills, certifications, and achievements, as well as through the receipt of endorsements and reviews. Additionally, the platform provides abundant networking opportunities",
        challenge: "EndorseMii sought to create a user-friendly app for individuals to build their online reputation through endorsements and reviews.",
        techstack: ["VueJS", "Laravel", "Mysql"],
        media: {
            img: [endorsmiimg, endorsmiimg],
        },
        tags: ["All", "Web"]
    },
    {
        name: "EdTech Project",
        solution: "Developed Mock Test Android Application. Especially designed and developed both for students with free and paid services.",
        result: "Students can easily download ebooks, and attend mock tests for competitive exams. Every student also got a scope to record score on their dash board for self-improvement",
        challenge: "To create smooth flow of operations for students for downloading ebooks and attending online exams.",
        techstack: ["Laravel", "mysql", "firebase"],
        media: {
            img: [edtechimg, edtechimg2],
        },
        tags: ["All", "Web"]
    },
    {
        name: "ERP Solution",
        solution: "Established POS system with for different fields such as inventory management, sales, purchase, HR operations, accounting process and other correlated modules.",
        result: "Effective and automated functional process was implemented that saved time, cost and energy with additional benefit of flawless information as and when required.",
        challenge: "Mini ERP with POS system implementation for multiple functional platforms.",
        techstack: ["Laravel", "vuejs", "mysql", "saas"],
        media: {
            img: [pos1, pos2],
        },
        tags: ["All", "Web"]
    },
    {
        name: "Supermarket & Restaurant Management System",
        solution: "We designed and installed Superflow which is a saas system ideal for supermarkets and restaurants. It functions for billing and inventory management, that covers modules like sales, purchase, wallet, accounting and separate panel for vendor management essential for streamlining operations at supermarkets and restaurants.",
        result: "Cost effective system that streamlines activities at every operational level like dine in and delivery, Inventory and Stock Management, Display System, flexibility in product and menu management and modifications, SMS & Email Notification Module",
        challenge: "Implementing Superflow POS & Restaurant management system:",
        techstack: ["Mysql", "Nodejs", "nextjs", "AWS"],
        media: {
            img: [restaurant1, restaurant2],
        },
        tags: ["All", "Web"]
    },
    {
        name: "NGO Fundraise App",
        solution: " We designed a special ‘Feedtheneedy’ application that offers easy and smart operations for donors to directly pay to the organization’s bank account. We also developed a reverse module that helps sending bulk requests for funds to individuals and communities.",
        result: "Besides, this system also offered extended scope of keeping integrated record of fund mobilization.",
        challenge: "Low cost developmental support was required for two types of fund generations. One for acquiring funds for providing daily meal support to poor students and the other one was to collect bigger amount for tackling various emergencies and sudden and illnesses.",
        techstack: ["React Native", "mysql"],
        media: {
            img: [fund1, fund2],
        },
        tags: ["All", "Mobile"]
    },
    // {
    //     name: "Assamese Keyboard Solution",
    //     solution: "Successfully designed a easy to learn and operate Assamese writing application by using computer key board.",
    //     result: "It simplified work process, saved time, and reduced manpower cost to a large extent.",
    //     challenge: "To create user-friendly Assamese Keyboard within a short span of time.",
    //     techstack: ["Kotlin", "Android"],
    //     media: {
    //         img: [keyboard, keyboard2],
    //     },
    //     tags: ["All", "Mobile"]
    // },
    {
        name: "Hospital Management System",
        solution: "We developed a customized integrated system for booking beds, HR operations handling ins and outs of management employee management, handling consumables and stocks etc.",
        result: "It effectively maintained all records related to patients, doctor’s schedules and appointments, accounting process and HR matters that help curtailed back end man power cost.",
        challenge: "To establish a competitive cost system that will offer all in one operational support for multiple tasks in multiple departments.",
        techstack: [".Net", "SQL server 2016"],
        media: {
            img: [hospitalimg, hospitalimg],
        },
        tags: ["All", "Web"]
    },
    {
        name: "AMM Project ",
        solution: "Developed a platform for people to review including an option to reward with tips using an online payment system. ",
        result: "A unique and fresh take on review system for people which can be used for professional settings and can be shared on different platforms. Also, allowing people to appreciate an individual by rewarding them.   ",
        challenge: "A review system with integrated payment gateway",
        techstack: ["Vue JS", " Laravel", "MongoDB"],
        media: {
            img: [amm1, amm2],
        },
        tags: ["All", "Web"]
    },
    {
        name: "Family Court Law  ",
        solution: "Developed user-friendly app for Family Court Law discussions, including registration, support groups, admin dashboard, and security compliance. ",
        result: "Successfully created an intuitive platform for discussing Family Court Law, with robust security and administrative capabilities. ",
        challenge: " Rating platform for individuals and professionals involved family court law  ",
        techstack: [" Node JS", " Flutter", " Next JS", "MongoDB"],
        media: {
            img: [familylaw1, familylaw2],
        },
        tags: ["All", "Web", "Mobile"]
    }
]

export const ourPartners=[
    { icon: googleIcon },
    { icon: microsoftlogo },
    { icon: aws },
]



export const serviceCards=[
    {
        name: "Software Development ",
        content: "Are you worried about your software development projects? Let our dedicated team of tech savvy, innovative software professionals take care of all your mobile, desktop, web applications development, design and testing needs.  ",
        bgImage: itilus,
        link: "/services/#itsolutions"
    },
    {
        name: "Digital Marketing",
        content: " We provide exclusive digital marketing services, including SEO, SMM, PPC, email marketing, social media marketing, complete social media plans, eCommerce strategy, and more.",
        bgImage: digitalMarketingIllus,
        link: "/services/#digitalmarketing"

    },
    {
        name: "Business Consultation",
        content: "Looking for authentic business consultation services? Your search ends here. We offer result driven business consulting services across various strategies, technologies, operations and digital transformations for businesses of different scales and verticals.   ",
        bgImage: consultingIllus,
        link: "/services/#businessconsultation"

    },

]



export const mainTeam=[
    {
        name: "Joy Roy",
        image: Joy,
        position: "Founder & CEO",
        linkedin: "https://www.linkedin.com/in/joy-roy-2b56a1290/",
        email: "joy.roy@aquaglobalsystems.com",
        about: "A visionary with a relentless drive for excellence in the IT ecosystem. As an enigmatic and hardworking professional he has more than 30 years of strategic leadership experience, with exclusive expertise in IT Consultataion, Business Analysis, and Digital Strategy."
    },
    {
        name: "Preetpal Singh",
        image: preetpal,
        position: "Full Stack Developer",
        linkedin: "https://www.linkedin.com/in/preetpal-singh-563348216/",
        email: "preetpal.singh@aquaglobalsystems.com",
        about: "As a skilled Full Stack MERN developer, I offer a fresh perspective to code. I thrive on challenges that others may shy away from, making me the ideal choice for tackling tasks deemed impossible by others."
    },
    {
        name: "Peter C Hatchett ",
        image: peter,
        position: "Management Consultant",
        linkedin: "https://www.linkedin.com/in/peterchatchett2010/",
        email: "peter.hatchett.10@gmail.com",
        about: "Peter is an advisor and consultant to the management team. At Aqua, our customers are treated like family. With his strategic approach and creativity, he spearheads initiatives to build brand awareness and drive business growth"
    },
    {
        name: "Saurav Sharma",
        image: saurav,
        position: "Asst. Operations Manager.",
        linkedin: "https://www.linkedin.com/in/saurav-sharma-b46038184/",
        email: "saurav.sharma@aquaglobalsystems.com",
        about: "Hey there! I'm Saurav Sharma, your friendly Assistant Operations Manager. I've got a knack for finding creative solutions and making things run smoother than a freshly greased wheel. My journey started with a Master's Degree in sociology, which might seem like an odd fit, but it's given me a unique perspective on how people and systems interact."
    },
]


export const links=[
    { href: "/services", text: "Services" },
    { href: "/aboutus", text: "About Us" },
    { href: "/portfolio", text: "Portfolio" },
    { href: "/careers", text: "Careers" },
    { href: "/contact", text: "Contact us" },
    { href: "/blogs", text: "Blogs" },
];


export const mobilelinks=[
    { href: "/services", text: "Services" },
    { href: "/aboutus", text: "About Us" },
    { href: "/portfolio", text: "Portfolio" },
    { href: "/careers", text: "Careers" },
    { href: "/contact", text: "Contact us" },
    { href: "/blogs", text: "Blogs" },
];


const text=`
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export const whyAquaItems=[
    {
        key: '1',
        label: <div className='flex flex-col gap-y-2'>
            <p className='text-secondary text-[24px] font-[Lora] font-[500] '>Expertise</p>
            <p className='text-secondary text-[20px] font-[Raleway] font-[500]  text-wrap max-w-[40rem]'>Benefit from our deep specialization and extensive experience across IT, consultation, and digital marketing.</p>
        </div>,
        children: <p className='max-w-[30rem]'>{text}</p>,
    },
    {
        key: '2',
        label: <div className='flex flex-col gap-y-2'>
            <p className='text-secondary text-[24px] font-[Lora] font-[500] '>Expertise</p>
            <p className='text-secondary text-[20px] font-[Raleway] font-[500] text-wrap max-w-[40rem]'>Benefit from our deep specialization and extensive experience across IT, consultation, and digital marketing.</p>
        </div>,
        children: <p className='max-w-[30rem]'>{text}</p>,
    },
    {
        key: '3',
        label: <div className='flex flex-col gap-y-2'>
            <p className='text-secondary text-[24px] font-[Lora] font-[500] '>Expertise</p>
            <p className='text-secondary text-[20px] font-[Raleway] font-[500] text-wrap max-w-[40rem]'>Benefit from our deep specialization and extensive experience across IT, consultation, and digital marketing.</p>
        </div>,
        children: <p className='max-w-[30rem]'>{text}</p>,
    },
];


export const projectCategories=["All", "Web", "Mobile"]



export const reviews=[
    {
        companyName: "Mattress Universe LLC",
        review: "I can count on Aqua Global Systems for my tech support and digital marketing. They are pioneers in the IT industry. When we partered with aqua we got high quality leads that were carefully vetted before hand, aqua made all the difference."
    },
    {
        companyName: "Srena IT Solutions Pvt Ltd",
        review: "From the very beginning, their team displayed a deep understanding of our unique business needs. They conducted a comprehensive assessment of our existing IT systems, identifying areas for improvement and opportunities for growth."
    },
    {
        companyName: "Wowstudy",
        review: "What truly sets AQUA apart is their unwavering commitment to client satisfaction. They were always available to answer our questions, address concerns, and provide regular updates on the progress of our IT projects. Their team's expertise is truly remarkable."
    },
    {
        companyName: "Aubrey Fager",
        review: "After an extensive search, Aqua Global Systems impressed with their US-based team's expertise and international reach. They exceeded expectations, offering a comprehensive suite of services beyond app development. We look forward to a long-term, successful partnership."
    }
]



export const openPositions=[
    {
        _id: '1',
        position: "Full Stack Developer",
        location: "Remote",
        heading: "Aqua global systems Is Looking For Full Stack Developer Developers Having Below Mentioned Competencies:",
        description: "We are looking for skilled MERN Full Stack Developers who can bring their expertise and passion for web development to our vibrant team. We are eagerly looking for someone who not only possesses the technical prowess required for the role but also embodies the collaborative spirit and innovative mindset that defines our dynamic work environment.",
        responsibilities: ["Spearheaded the development and maintenance of web applications utilizing the MERN stack.", "Building modular and reusable components and libraries", "Ensure the technical feasibility and seamless integration of UI/UX designs.", "Database Management", "Construct robust and scalable RESTful APIs leveraging Node.js", "Create intuitive and responsive user interfaces using React.js.", "Communicate technical concepts clearly and effectively to both technical and non-technical stakeholders."],
        requirements: ["Bachelor’s/Master’s degree in computer science.", "Strong command of React.js, Node.js, Express.js, and MongoDB.", "Design and develop innovative web applications that draw the user’s attention.", "Write reusable, effective, and scalable JavaScript code.", "Exceptional problem-solving skills coupled with strategic thinking."],
        status: "Open"
    },
    {
        _id: '2',
        position: "Digital Marketing Executive",
        location: "Remote",
        heading: "Aqua global systems Is Looking For experienced Digital Marketing Executive Having Below Mentioned Competencies:",
        description: "We are looking for a full-time Digital Marketing Executive who will oversee and execute digital marketing initiatives, including social media, , email marketing, and Reels. They will also be responsible for creating and managing digital content and conducting market research to identify opportunities for growth and optimization of digital marketing campaigns.",
        responsibilities: ["Create & execute strategies to build a lasting digital connection with consumers", "Plan, Create content and monitor the ongoing company presence on social media (Instagram, Facebook etc.)", "Launch optimized online adverts through Google Adwords, Facebook etc. to increase company and brand awareness", "Provide creative ideas for content marketing and update the website", "Measure performance of digital marketing efforts using Facebook Dashboard/Instagram App insights", "Maintain partnerships with media agencies and vendors"],
        requirements: ["Proven experience as Digital Marketing Executive or similar role.", "Excellent understanding of digital marketing concepts and best practices", "Experience with B2C & B2B social media", "Skills and experience in creative content writing. ", "Analytical mindset and critical thinking", "Excellent communication and presentation skills", ""],
        status: "Open"
    },
    {
        _id: '3',
        position: "It Sales Consultant",
        location: "Remote",
        heading: "Aqua global systems Is Looking For It Sales Consultant Having Below Mentioned Competencies:",
        description: "We are looking for a experienced and dynamic It Sales Consultant to join our growing team. The ideal candidate should have a proven track record in both inbound and outbound sales, with a background in web development (IT) and digital marketing. The successful candidate will play a key role in driving business growth by identifying new opportunities, building client relationships, and achieving sales targets.",
        responsibilities: ["Lead Generation: Identify and pursue new business opportunities through proactive outbound efforts, including cold calling, email campaigns, and networking.", "Client Engagement: Manage inbound inquiries, engage with potential clients, and understand their business needs to provide tailored solutions.", "Sales Strategy: Develop and execute effective sales strategies to meet and exceed sales targets, including creating and delivering compelling sales presentations.", "Market Research: Stay informed about industry trends, competitor activities, and market conditions to identify opportunities and potential challenges."],
        requirements: ["Experience: 2-5 years of proven experience in inbound and outbound sales, preferably in the IT and digital marketing agency space.", "At least 3-5+ years of experience in Vue.js and object-oriented programming.",
            "Communication Skills: Fluent in English with strong interpersonal skills, with the ability to articulate complex ideas clearly and concisely."
            , "Industry Knowledge: Strong understanding of web development and digital marketing concepts, trends, and solutions.", `Proactive Attitude: A "can-do" attitude with a proactive approach to problem-solving and achieving goals.`],
        status: "Open"
    }
];