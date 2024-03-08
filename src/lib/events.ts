import game from '../../public/event/game.jpg'
import gamePoster from '../../public/event/arcadeArenaPoster.png'
import teizarHeist from '../../public/event/treasure.jpg'
import teizarHeistPoster from '../../public/event/tezarHeistPoster.jpeg'
import codeKalpana from '../../public/event/code.jpg'
import codeKalpanaPoster from '../../public/event/codeKalpanaPoster.jpeg'
import digidino from '../../public/event/digital_marketing.jpg'
import digidinoPoster from '../../public/event/clipclashPoster.jpg'
import innovasion from '../../public/event/innovasion.jpg'
import innovasionPoster from '../../public/event/innovision5Poster.png'
import quiz from '../../public/event/quiz.jpg'
import quizPoster from '../../public/event/quizTechnopediaPoster.jpeg'
import ui from '../../public/event/ui.jpg'
import uiPoster from '../../public/event/uiUniversePoster.jpeg'

export const events = [
    {
        name: 'tezar heist',
        imageSrc: teizarHeist.src,
        posterSrc:teizarHeistPoster.src,
        caption: "Find fortune, forge legends",
        description: "The participants should have good thinking capability and they should be quick enough to figure out the clues given in the form of the riddles.",
        rules: [
            "2 players per team is allowed",
            'Registration fee Rs 200/- per team will be charged',
            "Registration opens till 14 March 2024 4pm.On the spot event registration till fixed time",
            'There will be 3 rounds in total.',
            'Rules for each round will be shared before the round starts.',
            'Players have to keep the clues with them until the game finish.',
            'Each qualified team should play the whole game.',
            'Players cannot quit the game in between the rounds.',
            'Any misbehaviour or any kind of property damage will lead to direct disqualification and mandatory disciplinary actions will be taken.',
            'Decision taken by the coordinators will be final and binding.',

            "ROUND 1- QUIZ QUEST (1 HOUR)",
            "-> Each team will be allotted a QR code which will redirect to google form.",
            "-> Questions will be shown on the screen and the team has to fill the answer in platform/ form within the time limit.",
            "-> Maximum correct answers will lead you to the next round.",
            "-> Points will be given according to each correct answer. Qualification for the next round will be based on the points.",
            "-> Quiz will be conducted through google form / Online Platform. You must have a good data and network connectivity.",
            "-> Team have to submit the answers online in Google Form. Also, only single submission should be there of each team otherwise they will be disqualified.",
            "-> Only Top 15 teams that will have maximum points will be qualified for the second round.",

            "ROUND 2: PERFORMING THEME BASED TASK ROUND (30 MIN)",
            "-> In this round, selected 15 teams will have to search the perform the given tasks list in stipulated time.",
            "-> Points will be allotted on the basis of first returning team and number if successful task completion.",
            "-> Qualification for the final round will be based on the performance and time by the judges.",
            "-> Top 5 qualifying teams that will be decided by the coordinators and will be selected for the final round.",

            "ROUND 3: CASH HUNT ROUND VIA CLUES (30 MIN)",
            "-> 8 clues will be provided in total.",
            "-> The answer of the first clue will direct you to the second clue and so on till the last one.",
            "-> The first team which solves all the clues and reaches to the Final clue will be declared as a winner.",
            "-> Timing is a crucial factor in this hunt! May the fastest team win! Let the hunt begin!"

        ],
        teacherCoordinators:" DR. HARSHA RATNANI & MRS. MINAL MAHESHWARI",
        studentCoordinators:" DHIRAJ KUMAR YADAV, AKSHITA KADYAN, RISHANT SAINI (IT CLUB), ANSHIKA (IT CLUB), ANSH MAKKAR, ARNAV GEHLOT, PARIDHI GUPTA",

        timing: '10:00 Am'
    },
    {
        name: 'ui universe',
        imageSrc: ui.src,
        posterSrc:uiPoster.src,
        caption: "Designing Dreams, pixels by pixels",
        description: "Calling all design wizards! Dive into the world of UI design with our Figma UI Design Battle. Show off your creativity and skills as you craft stunning user interfaces under pressure. Whether you're a seasoned designer or just starting out, this competition is your chance to shine. Compete solo or in teams, and unleash your design prowess for a shot at glory. Ready, set, design!",
        rules: [
            "PARTICIPATION CRITERIA: Individual participation only.",

            "COMPETITION FORMAT: The contest consists of only One Round. ",

            "DESIGN PROMPT: A specific website design prompt will be revealed at the start of the competition. This prompt will include details about the website's functionalities or features.",

            "DELIVERABLES: By the end of (25) minute, participants must submit a high-fidelity mock-up of the website's homepage in Figma, including:",
            "-> Logo prominently displayed",
            "-> Header section",
            "-> Navigation menu",
            "-> At least one section with content",
            "-> Footer section",
            "-> Incorporate a cohesive color combination throughout the design.",

            "Prizes: Exciting prizes await the winners!",

            "ADDITIONAL RULES:",
            "-> Participants must ensure that the design includes a prominent display of the logo.",
            "-> A header section must be included, showcasing key elements or information.",
            "-> Navigation should be clearly visible and functional.",
            "-> At least one section with content must be present, demonstrating the layout and presentation of information.",
            "-> A footer section is required, containing essential links or information.",
            "-> Designs must incorporate a cohesive color combination that enhances the overall aesthetic appeal.",
            "-> Don't miss this chance to showcase your talent and creativity in a thrilling design competition! Mark your calendars and get ready to design your way to victory!",

            "JUDGING CRITERIA (Weighted Scoring System - Total 100 points):",
            "-> Use of color, typography, and imagery that aligns with the target audience and website purpose (20 points).",
            "-> Overall balance, layout, and white space utilization (10 points).",
            "-> Creativity and originality in the visual design (10 points).",
            "-> User Interface (UI) Functionality (30 points)",
            "-> Placement and functionality of call-to-action buttons (10 points).",
            "-> User-friendliness and intuitiveness of the interface (10 points). ",
            "-> Accessibility considerations for various user needs (10 points)."
        ],
        teacherCoordinators:" Ms. NEHA",
        studentCoordinators:"KANHA YADAV, DEEPTI RAWAT, MEHAK",
        timing: '10:00 AM'
    },
    {
        name: 'arcade arena',
        imageSrc: game.src,
        posterSrc:gamePoster.src,
        caption: "Game on, World off",
        description: "Get ready to unleash your gaming prowess at ArcadeArena, the electrifying hub of CYNET24, proudly presented by JAGANNATH INTERNATIONAL MANAGEMENT SCHOOL, VASANT KUNJ! Step into a world where adrenaline meets pixels, where every click, every move, and every strategy matters! Dive into the heart-pounding action of gaming-related events and tournaments that will leave you on the edge of your seat, craving for more! Are you a sharpshooter? A master tactician? Or perhaps a button-mashing champion? Whatever your gaming style, we've got you covered with an array of thrilling competitions featuring popular titles like Valorant, BGMI (BattleGrounds Mobile India), Tekken 7, and the hilarious chaos of Stumble Guys! Join us for an epic showdown where skills clash, strategies collide, and champions emerge victorious! Whether you're a seasoned gamer or just starting your journey, there's something for everyone at ArcadeArena. So, gather your squad, fuel your passion, and let the games begin! Don't miss out on the excitement – mark your calendars and be a part of the gaming revolution at ArcadeArena, where the thrill never ends!",
        rules: ["Valorant","Tekken","Stumble guys","Bgmi"],
        teacherCoordinators:"MR. RAHUL V ANAND & MR. ABHISHEK",
        studentCoordinators:"MR. HARDIK SOLANKI, MR. DIPESH SHARMA, MR. PARTH BHATNAGAR",
        timing: '10:00 Am'
    },
    {
        name: 'quiz technopedia',
        imageSrc: quiz.src,

        posterSrc:quizPoster.src,
        caption: "Test your tech savvy!",
        description: "Think you know IT inside out? Prove it in our high-octane IT Quiz Showdown! Test your tech knowledge against the best and brightest in a series of rapid-fire rounds covering everything from coding to cybersecurity. Grab your team or go solo – victory awaits the sharpest minds. Join us for an adrenaline-fueled battle for tech supremacy!",
        rules: [
                "Participation is allowed for a team consist of 2 members.",
                "The decision of the coordinator will be final and will not be subjective to any change.",
                "Usage of other devices by the participants is prohibited.",
                "The questions shall be in the form of multiple choice, true/false, specific answer question, image recognition etc.",
                "If Participants are found violating the rules, they will be disqualified immediately.",
                "There will be 2 rounds in event.",

                "FIRST ROUND",
                "-> The team will be given a set of 25 multiple choice questions.",
                "-> This round will be conducted on google form, link will be provided when the First round commences.",
                "-> Time limit = 10 min.",
                "-> The top 2 scoring teams will be qualified for Final Round.",
                "-> In case of a tie between 2 or more candidates, a tiebreaker round will be conducted for them only.",

                "FINAL ROUND",
                "-> Number of team: 02",
                "-> Each team would be asked 10 questions each. (MCQS)",
                "-> In case of a tie , a tiebreaker round will be conducted for them only."
                ],
        teacherCoordinators:"Mr. Umesh Gupta",
        studentCoordinators:"Himanshu Anand, Vanshika Vats",
        timing: '10:00 Am'
    },
    {
        name: 'innovision 5.0',
        imageSrc: innovasion.src,
        posterSrc:innovasionPoster.src,
        caption: "Inspire, invent, ignite",
        description: "“If you look at history, innovation doesn’t come just from giving people incentives; it comes from creating environments where connect.” Innovision 5.0 ignites a competitive spirit among students from varied academic backgrounds, encouraging them to shatter the status quo and devise unprecedented, creative solutions. Guided by the principles of sustainability, Innovision 5.0 emphasizes the integration of solutions that align SDG’s, propelling participants towards a transformative journey of ingenuity and social responsibility. It provides a stage for demonstrating technical expertise and strategic insight, inspiring participants to address practical problems. This occasion promotes cooperation, empowering university students to utilize their abilities in inventive manners. By fostering imagination and collaboration, Innovision aspires to nurture the leaders and entrepreneurs of tomorrow, instilling a spirit of innovation.",
        rules: [
                "The maximum number of participants in a team should be three or less.",
                "Before starting with the topic, members of the team must give a brief introduction about themselves, which includes:",
                "-> Name of the member",
                "-> Name of the college",
                "-> Department",

                "Teams will be disqualified if not following any of the given rules",
                "All the members of the team must wear formals during the event.",
                "Key points for the selection process are:",
                "-> Innovation",
                "-> Methodology",
                "-> Social and environmental impact",
                "-> Market Potential •Feasibility",
                "-> Presentation",
                "-> A brief explanation of the problem",
                "-> Solution to the problem",

                "The judge’s decision will be the final decision.",
                "Project ideas must be given to provide a solution for the problem using the following technologies, but are not limited to these only:",
                "-> Blockchain",
                "-> Robotics and Drones",
                "-> Virtual Reality and Augmented Reality",
                "-> Chat GPT/OpenAI and Chat GPT Technology",
                "-> Gamma AI",
                "-> 6G Network",
                "-> Cognitive Computing: Enhancing Decision-Making Processes",
                "-> Quantum Technology",
                "-> Green Technology Innovations",
                "-> Medtech/Biotech/ Healthtech",
                "-> Nanotechnology Applications in Medicine and Electronics",
                "-> Any other innovative or business idea",
                "Each team will be allotted 8–10 minutes for its presentation and 2 minutes for the questionnaire round with the audience and judges.",
                "The presentation should comprise 8–10 slides.",
                "The arrangement of slides (.ppt) in the form of a soft copy needs to be submitted two days before the event."
,
            ],
         teacherCoordinators:"DR. ABHA PANDEY & DR. ANISHA TANDON",
        studentCoordinators:"VANSHIKA, ARSH (IT CLUB), AKASH(IT CLUB), ANSHIKA M., DISHA SHARMA",
        
        timing: '10:00 Am'
    },
    {
        name: 'Code Kalpana',
        imageSrc: codeKalpana.src,
        posterSrc:codeKalpanaPoster.src,
        caption: "Decipher, Code, Conquer!",
        description: "Code Kalpana:Ribbonathon is the event in which participants coding knowledge and their coordination qualities are examined.",
        rules: [
                "Only Four players per team is allowed.",
                "There will be two rounds (Round 1 -> 30 minutes & Round 2 -> 25 minutes)",
                "In the first round, each team will be divided into the two sub teams by itself the team will be given with the program name on the spot and first 1st sub team will come forward and write the instructions and after 15 minutes bell will ring and 2nd sub team will have to come forward and have to complete the remaining code.",
                "Top 6 teams will be qualified for the second round. (Judging criteria will be disclosed on that day only)",
                "In second round, each team will be divided into the two sub teams by itself and program and different programming language will be given on the spot, first sub team will have to come forward and select the ribbons (each ribbon will contain some instruction) from the “Ribbon Market Box” within 15 minutes. After that second sub-team will have to arrange the codes and paste them on chart paper in sequential manner within 10 minutes.",
                "Using mobile phone or communication with others except your own team members will directly disqualify you.",
                "Players cannot quit the game in between the rounds.",

                "NOTE",
                "Teams can choose any software that support the programming language asked in Round 1 (online compiler is not allowed)",
                "In Round 1, C Programming language should be used to implement the program.",
                "In Round 2, Programming language will be provided on the spot."
            ],
         teacherCoordinators:"MR LAKSHAY SAINI",
        studentCoordinators:"Jatinder, Megha, Shubham, Hitesh",
        
        timing: '10:00 Am'
    },
    {
        name: 'clipclash',
        imageSrc: digidino.src,
        posterSrc:digidinoPoster.src,
        caption: "Digital Mastery Unleashed",
        description: "The “Clip Clash ” is an reel making event for the storytellers, filmmakers and visionaries. In this event participants are given 1 hour to make a cinematic beauty capturing The Cynet 2024 and make a reel out of it. The best reel wins the cool and exciting prizes. Participants can work as individuals or in team of two.",
        rules: [
                "Each round allows only individual participation.",
                "Before presenting the clip or the reel, participants need to introduce themselves with their name, college, and department.",
                "Participants who do not adhere to the rules be disqualified.",

                "There will be 2 rounds:",

                "Round 1:SCREENING FOR SOCIAL CHANGE",
                "-> Elimination round",
                "-> Time limit: 1 hour",
                "-> Topics given on the spot",

                "Round 2:FROM REEL TO REAL",
                "-> Time limit: 2 hour",
                "-> Allowed to use personal devices like phones, cameras, and laptops",

                "Selection and grading based on:",
                "-> Creativity",
                "-> Innovation",
                "-> Methodology",
                "-> Social and environmental impact",
                "-> Market potential",
                "-> Feasibility",
                "-> Presentation",
                "-> Explanation of problem",
                "-> Solution",
            ],
         teacherCoordinators:"DR. PRITI SHARMA & Ms. NEHA CHHABRA",
         studentCoordinators:"PRASANNA PAWAN(IT CLUB), TUSHAR ARORA (IT CLUB), LAKSHYA (IT CLUB), MEHAK ARORA, GURNOOR, SURAJ KUSHWAHA",
        
        timing: '10:00 Am'
    },
]



// import game from '../../public/event/game.jpg'
// import gamePoster from '../../public/event/arcadeArenaPoster.png'
// import teizarHeist from '../../public/event/treasure.jpg'
// import teizarHeistPoster from '../../public/event/tezarHeistPoster.jpeg'
// import codeKalpana from '../../public/event/code.jpg'
// import codeKalpanaPoster from '../../public/event/codeKalpanaPoster.jpeg'
// import digidino from '../../public/event/digital_marketing.jpg'
// import digidinoPoster from '../../public/event/clipclashPoster.jpg'
// import innovasion from '../../public/event/innovasion.jpg'
// import innovasionPoster from '../../public/event/innovision5Poster.png'
// import quiz from '../../public/event/quiz.jpg'
// import quizPoster from '../../public/event/quizTechnopediaPoster.jpeg'
// import ui from '../../public/event/ui.jpg'
// import uiPoster from '../../public/event/uiUniversePoster.jpeg'

// export const events = [
//     {
//         name: 'tezar heist',
//         imageSrc: teizarHeist.src,
//         posterSrc:teizarHeistPoster.src,
//         caption: "Find fortune, forge legends",
//         description: "खोज-ए-खास In treasure hunt participants are given some riddles which they need to solve and find the treasure. The participants should have good thinking capability and they should be quick enough to figure out the clues given in the form of the riddles.",
//         rules: ["2 players per team is allowed",
//         "Registration opens till 14 March 2024 4pm.On the spot event registration till fixed time",
//         'Registration fee Rs 200/- per team will be charged',
//         'There will be three rounds in total.',
//         ' Rules for each round will be shared before the round starts.',
//         'Players have to keep the clues with them until the game finish.',
//         'Each qualified team should play the whole game.',
//         ' Players cannot quit the game in between the rounds.',
//         'Any misbehaviour or any kind of property damage will lead to direct disqualification and mandatory disciplinary actions will be taken.',
//         'Total time for the event would be 5-6 hrs.',
//         'Decision taken by the coordinators will be final and binding.'
//         ],
//         teacherCoordinators:" DR. HARSHA & DR. MINAL MAHESHWARI",
//         studentCoordinators:" DHIRAJ KUMAR YADAV, AKSHITA, RISHANT SAINI (IT CLUB), ANSHIKA (IT CLUB), ANSH MATHUR, ARNAV GEHLOT, PARIDHI GUPTA",

//         timing: '10:00 Am'
//     },
//     {
//         name: 'ui universe',
//         imageSrc: ui.src,
//         posterSrc:uiPoster.src,
//         caption: "Designing Dreams, pixels by pixels",
//         description: "Welcome to Ui Universe Where Creativity Meets Competition! Compete to craft a stellar website on a specific topic within a set timeframe. Harness your design prowess to create captivating sites aligned with the theme. With the clock ticking, dive into creativity, pushing boundaries for exceptional results. Ready to claim the title of website design champion? Join Designer Hub and let your creativity shine!",
//         rules: ["Individual participation only.",
//             "The contest consists of only One Round. ",
//             "Design Prompt: A specific website design prompt will be revealed at the start of the competition. This prompt will include details about the website's functionalities or features.",
//             "Deliverables: By the end of (25) minute, participants must submit a high-fidelity mock-up of the website's homepage in Figma.",
//             "Judging Criteria (Weighted Scoring System - Total 100 points):",
//             "Use of color, typography, and imagery that aligns with the target audience and website purpose (20 points).",
//             "Overall balance, layout, and white space utilization (10 points).",
//             "Creativity and originality in the visual design (10 points).",
//             "User Interface (UI) Functionality (30 points)",
//             "Placement and functionality of call-to-action buttons (10 points).",
//             "User-friendliness and intuitiveness of the interface (10 points). ",
//             "Accessibility considerations for various user needs (10 points)."
//         ],
//         teacherCoordinators:" Ms. NEHA",
//         studentCoordinators:"KANHA YADAV, DEEPTI RAWAT, MEHAK",
//         timing: '10:00 AM'
//     },
//     {
//         name: 'arcade arena',
//         imageSrc: game.src,
//         posterSrc:gamePoster.src,
//         caption: "Game on, World off",
//         description: "Step into a world where adrenaline meets pixels, where every click, every move, and every strategy matters! Dive into the heart-pounding action of gaming-related events and tournaments that will leave you on the edge of your seat, craving for more!In gaming there will be multiple games which are going to be played by the participants",
//         rules: ["Valorant","Tekken","Stumble guys","Bgmi"],
//          teacherCoordinators:"DR. RAHUL V ANAND & DR. ABHISHEK",
//         studentCoordinators:"Harshit Kapur (BCA 4M),Parth Gaba (BCA 6M),Parth Bhatnagar (BCA 6M),Deepesh Sharma (BCA 4E),Ronit (BCA 6M),Hardik Solanki (BCA 4M),Rachit Kalra (BCA 4E),Ayush Mehta (BCA 4E),Sagar Bisht (IT CLUB)",
        
//         timing: '10:00 Am'
//     },
//     {
//         name: 'quiz technopedia',
//         imageSrc: quiz.src,

//         posterSrc:quizPoster.src,
//         caption: "Test your tech savvy!",
//         description: "Think you know IT inside out? Prove it in our high-octane IT Quiz Showdown! Test your tech knowledge against the best and brightest in a series of rapid-fire rounds covering everything Grab your team or go solo – victory awaits the sharpest minds. Join us for an adrenaline-fueled battle for tech supremacy!from coding to cybersecurity.",
//         rules: [
//                 "Participation is allowed for a team consist of 2 members.",
//                 "The decision of the coordinator will be final and will not be subjective to any change.",
//                 "Usage of other devices by the participants is prohibited.",
//                 "The questions shall be in the form of multiple choice, true/false, specific answer question, image recognition etc.",
//                 "If Participants are found violating the rules, they will be disqualified immediately.",
//                 "There will be 2 rounds in event.",
//                 "FIRST ROUND",
//                 "The team will be given a set of 25 multiple choice questions.",
//                 "This round will be conducted on google form, link will be provided when the First round commences.",
//                 "Time limit = 10 min.",
//                 "The top 2 scoring teams will be qualified for Final Round.",
//                 "In case of a tie between 2 or more candidates, a tiebreaker round will be conducted for them only.",
//                 "FINAL ROUND",
//                 "Number of team: 02",
//                 "Each team would be asked 10 questions each. (MCQS)",
//                 "In case of a tie , a tiebreaker round will be conducted for them only."
//                 ],
//          teacherCoordinators:"Mr. Umesh Gupta",
//         studentCoordinators:"Himanshu Anand, Vanshika Vats",
//         timing: '10:00 Am'
//     },
//     {
//         name: 'innovision 5.0',
//         imageSrc: innovasion.src,
//         posterSrc:innovasionPoster.src,
//         caption: "Inspire, invent, ignite",
//         description: "“If you look at history, innovation doesn’t come just from giving people incentives; it comes from creating environments where connect.”Innovision 5.0 ignites a competitive spirit among students from varied academic backgrounds, encouraging them to shatter the status quo and devise unprecedented, creative solutions. Guided by the principles of sustainability, Innovision 5.0 emphasizes the integration of solutions that align SDG’s, propelling participants towards a transformative journey of ingenuity and social responsibility It provides a stage for demonstrating technical expertise and strategic insight, inspiring participants to address practical problems. This occasion promotes cooperation, empowering university students to utilize their abilities in inventive manners. By fostering imagination and collaboration, Innovision aspires to nurture the leaders and entrepreneurs of tomorrow, instilling a spirit of innovation.",
//         rules: [
//                 "The maximum number of participants in a team should be three or less.",
//                 "Before starting with the topic, members of the team must give a brief introduction about themselves, which includes: •Name of the member •Name of the college •Department",
//                 "Teams will be disqualified if not following any of the given rules",
//                 " All the members of the team must wear formals during the event.",
//                 "Key points for the selection process are: •Innovation •Methodology •Social and environmental impact •Market Potential •Feasibility •Presentation •A brief explanation of the problem •Solution to the problem",
//                 "The judge’s decision will be the final decision."
//             ],
//          teacherCoordinators:"DR. ABHA PANDEY & DR. ANISHA TANDON",
//         studentCoordinators:"VANSHIKA, ARSH (IT CLUB), AKASH(IT CLUB), ANSHIKA M., DISHA SHARMA",
        
//         timing: '10:00 Am'
//     },
//     {
//         name: 'Code Kalpana',
//         imageSrc: codeKalpana.src,
//         posterSrc:codeKalpanaPoster.src,
//         caption: "Decipher, Code, Conquer!",
//         description: "Dive into the realm of code without sight – challenge your coding prowess in  Blind Coding Event where participants navigate challenges solely through their coding instincts.",
//         rules: [
//                 "Only Four players per team is allowed.",
//                 "There will be two rounds.",
//                 "In the first round the team will be given with the program name on the spot and they have to implement it on the computer.",
//                 "Top 6 teams will be qualified for the second round. (Judging criteria will be disclosed on that day only)",
//                 " In second round, each team will be divided into the two sub teams by itself and same program as in Round 1 but different programming language will be given, first sub team will have to come forward and select the ribbons (each ribbon will contain some instruction) from the “Ribbon Market Box”. After that second sub-team will have to arrange the codes and paste them on chart paper in sequential manner.",
//                 "Using mobile phone or communication with others except your own team members will directly disqualify you.",
//                 "Players cannot quit the game in between the rounds.",
//                 "Teams can choose any software that support the programming language asked in Round1.",
//                 "In Round 1, C Programming language should be used to implement the program.",
//                 " In Round 2, Programming language will be provided on the spot."
//             ],
//          teacherCoordinators:"MR LAKSHAY SAINI",
//         studentCoordinators:"Jatinder, Megha, Shubham, Hitesh",
        
//         timing: '10:00 Am'
//     },
//     {
//         name: 'clipclash',
//         imageSrc: digidino.src,
//         posterSrc:digidinoPoster.src,
//         caption: "Digital Mastery Unleashed",
//         description: "The “Clip Clash” is a reel making event for the storytellers, filmmakers and visionaries. In this event participants are given 1 hour to make a cinematic beauty capturing The Cynet 2024 and make a reel out of it. The best reel wins the cool and exciting prizes. Participants can work as individuals or in team of two.",
//         rules: [
//                 "Each round allows only individual participation.",
//                 "Before presenting the clip or the reel, participants need to introduce themselves with their name, college, and department.",
//                 "Participants who do not adhere to the rules be disqualified.",
//                 "There will be 2 rounds:",
//                 "ROUND-1: Screening for Social Change",
//                 "ROUND-2: From Reel to Real",
//                 "Round 1",
//                 "--SCREENING FOR SOCIAL CHANGE",
//                 "--Elimination round",
//                 "--Time limit: 1 hour",
//                 "--Topics given on the spot",
//                 "Round 2:",
//                 "--FROM REEL TO REAL",
//                 "--Time limit: 2 hour",
//                 "Allowed to use personal devices like phones, cameras, and laptops",
//                 "Selection and grading based on:",
//                 "--Creativity",
//                 "--Innovation",
//                 "--Methodology",
//                 "--Social and environmental impact",
//                 "--Market potential",
//                 "--Feasibility",
//                 "--Presentation",
//                 "--Explanation of problem",
//                 "--Solution",
//                 "The judges' decision is final."
//             ],
//          teacherCoordinators:"DR. PRITI SHARMA & NEHA CHABRA",
//         studentCoordinators:"PRASANNA (IT CLUB), TUSHAR ARORA (IT CLUB), LAKSHYA (IT CLUB), MEHAK ARORA, GURNOOR,SURAJ KUSHWAHA",
        
//         timing: '10:00 Am'
//     },
// ]
