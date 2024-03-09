import bgmiImage from '../../public/event/game/bgmi.jpg'
import stubleImage from '../../public/event/game/stumle.jpg'
import tekkenImage from '../../public/event/game/tekken.jpg'
import valorantImage from '../../public/event/game/valorant.jpg'
export const games = [
    {
        name: 'stumle guys',
        Game_Details: [
            "Game will be played on your personal device(mobile).",
        ],
        Eligibility: [
            "Open For ALL",
        ],
        Account_rule: [''
        ],
        teamRoaster: [''
        ],
        match_rules: [
            "There will be a group of 32 players in the first round from which 16 Player will be go to the second round then further 8 players will go to the third(final) round in which there will be one ultimate winner.",
        ],
        during_Match_rules: [
        ],
        after_match_rules: [
            "Once the game is over and the winner is decided they must provide their contact details so that they can be called at the time of final showdown.",
        ],
        punishment: [
            "* Using mod version",
            "* Creating commotion and not listening to the OC",
        ],
        pointSystem: [''],
        imageSrc: stubleImage.src,
        timing: '10:00 Am'
    },
    {
        name: 'BGMI',
        Game_Details: [
            "Game will be played on personal device (mobile).",
        ],
        Eligibility: [
            "Any player from any college can participate.",
        ],
        Account_rule: [''
        ],
        teamRoaster: [''
        ],
        match_rules: [
            "* It is a 4 player team tournament. A 4 man roster.",
            "* Emulators are not allowed in any game mode organized.",
            "* The player will be disqualified if found using any kind of emulator or cheating.",
            "* Any game modifying tools except ‘GFX tool’ is not allowed.",
            "* Players can play on android/ios tablets/phones only.",
            "* Only in-game voice chat should be used after the game is started till its completion.",
            "* Any use of unfair means such as aimbot, trigger bot, ESP will be disqualified.",
            "* Should a team/player fail to join the room in time, their squad/they will be given 0 points for it.",
            "* The exploitation of bugs that hinders fair play will result in disqualification.",
            "* For the tiebreaker of the points, total team/solo kills will be considered for breaking the tie.",
            "* For the further tiebreaker, number of chicken dinners will be considered.",
            "* Organizers would not be held responsible for connectivity issues on the participant's side.",
            "* The registration fee is non refundable",
            "* Participants are requested to remain ready at least 15 minutes prior to the start of any match. Late entries would not be allowed."
        ],
        during_Match_rules: [
            "* Players will participate as a 4 person-squad.",
            "* Up to 64 players will be playing in a lobby.",
            "* Maps selected will be notified to the participants before the match.",
            "* The group stage is a 3-map series."
        ],
        after_match_rules: [
            ''],
        punishment: [''],
        pointSystem: [
            "Kill - 1 point.",
            "1st - 15 points.",
            "2nd - 12 points.",
            "3rd - 10 points.",
            "4th - 8 points.",
            "5th - 6 points.",
            "6th - 4 points.",
            "7th - 2 points.",
            "8th - 12th - 1 point.",
            "13th - 16th - 0 point."
        ],
        imageSrc: valorantImage.src,
        timing: '11:00 Am'
    },
    {
        name: 'tekken 7',
        Game_Details: [
            "Game will be played on Desktop.",
        ],
        Eligibility: [
            "Any player from any college can participate.",
        ],
        Account_rule: [
        ],
        teamRoaster: [
        ],
        match_rules: [
            "* 60 second per round, 1v1, real time battle on a gaming system",
            "* There will be instant elimination after one lose",
            "* Rounds will be conducted per match (Basic tekken 7 rule)",
            "* One slot will contain 6 people.",
            "* Total 3 slots will be conducted in one zone (9 winners)",
            "* Those 9 winners then will be grouped in 3 matches where 3 contestants will fight each other in 1V1 (9 players -> 3 mini slots -> 3 winners)",
            "* Finals will be conducted the same way with those 3 winners from the semis (3 players 1 winner)",
            "* That is what will happen in 1 zone",
        ],
        during_Match_rules: [
            "* 2 players will play at a time.",
            "* Characters will be selected with no customization to their appearance (base character).",
            "* Random levels on each map; no players will be favored in level selection.",
            "* Pausing the game and pressing the home button is not permitted once the match starts (it will only be considered in case of keyboard or system malfunction).",
            "* Stalling, or intentionally making the game unplayable, is banned and will be considered as a forfeit for the player that initiates the action.",
            "* In case of a draw (double K.O) the game will not be scored and the players will have to play again with the same character selections.",
            "* Anyone who is not present at the time of their match or doesn’t appear there by 5 minutes will be given a direct disqualification.",
        ],
        after_match_rules: [
            "* Once a zone is over and the winner is decided they must provide their contact details so that they can be called at the time of final showdown.",
            "* Once all the zones are completed the winners of each zone are going to battle in the final zone."
        ],
        punishment: [
            "* Once a zone is over and the winner is decided they must provide their contact details so that they can be called at the time of final showdown.",
            "* Once all the zones are completed the winners of each zone are going to battle in the final zone."
        ],
        pointSystem: [''],
        imageSrc: valorantImage.src,
        timing: '11:00 Am'
    },
    {
        name: 'valorant',
        Game_Details: [
            "Game will be played on Desktop.",
        ],
        Eligibility: [
            "Any player from any college can participate.",
        ],
        Account_rule: [
            "* A player is allowed to have only one (1) Valorant Account.Valorant nickname has to be in formatRiot ID#Tagline. (Example:Mrsmith#EUNE). Any other format will be invalid.",
            "* You are not allowed to share or use another person’s game account.Your account is for your use, and your use alone.",
        ],
        teamRoaster: [
            '* Each team’s roster must consist of at least 5 players.',
            '* Each team’s roster will be allowed to have 5 main players . Once the tournament starts, you cannot replaceany player.',
            '* A player cannot be part of any other team’s roster which is participating or has participated in the same tournament.',
            '* Match has to be played in the following format: 5v5.',
            '* A player is allowed to represent only one (1) team’s roster in the same tournament.'
        ],
        match_rules: [
            "* Both the teams will be invited for the toss. The winner of the toss will be selecting the map to be played.",
            "* Another toss will be done to choose the Attacker and Defender side.",
        ],
        during_Match_rules: [
            "* Each team is allowed to use 3 timeouts only and more than 3 will be disqualified.",
            "* If any player got disconnected during the match. Only team leader will inform the event coordinator.",
        ],
        after_match_rules: [
            "Once the match finishes, both team captains have to take a screenshot of the results and post it in the WhatsApp Group.",
        ],
        punishment: [
            "* Using a player, not in the roster",
            "* Usage of a glitch/bug",
            "* Inappropriate/disruptive behavior",
            "* Match-fixing/teaming",
            "* Using cheats(aimbot , etc.)"
        ],
        pointSystem: [''], // violation
        imageSrc: valorantImage.src,
        timing: '11:00 Am'
    }
]



// import bgmiImage from '../../public/event/game/bgmi.jpg'
// import stubleImage from '../../public/event/game/stumle.jpg'
// import tekkenImage from '../../public/event/game/tekken.jpg'
// import valorantImage from '../../public/event/game/valorant.jpg'
// export const games = [
//     {
//         name: 'stumle guys',
//         rules: [
//             "Game will be played on your personal device(mobile).",
//             "Open For ALL",
//             "There will be a group of 32 players in the first round from which 16 Player will be go to the second round then further 8 players will go to the third(final) round in which there will be one ultimate winner.",
//             "Once the game is over and the winner is decided they must provide their contact details so that they can be called at the time of final showdown.",
//         ],

//         punishment: [
//             "Stalling",
//             "Using mod version",
//             "Creating commotion and not listening to the OC",
//             "Sabotaging other player(s)",
//         ],
//         teamRoaster: [''],
//         pointSystem: [""],
//         imageSrc: stubleImage.src,
//         timing: '10:00 Am'
//     },
//     {
//         name: 'bgmi',
//         rules: [
//             "It is a 4 player team tournament. A 4 man roster.",
//             "Emulators are not allowed in any gamemode organized. The player will be Disqualified if found using any kind of emulator or cheating.",
//             "Any game modifying tools except ‘GFX tool’ is not allowed.",
//             "Players can play on android/ios tablets/phones only.",
//             "Only in-game voice chat should be used after the game is started till its completion.",
//             "Any use of unfair means such as aimbot, trigger bot, ESP will be disqualified.",
//             "Should a team/player fail to join the room in time, their squad/they will be given 0 points for it.",
//             "Waiting time is at most 10 minutes between games.",
//             "If u exit the game we will be not responsible for that.",
//             "The exploitation of bugs that hinders fair play will result in disqualification.",
//             "For the tiebreaker of the points, total team/solo kills will be considered for breaking the tie.",
//             "For the further tiebreaker, number of chicken dinners will be considered.",
//             "Organizers would not be held responsible for connectivity issues on the participant's side.",
//             "The entry fee would not be refunded under any circumstances.",
//             "Organizers reserve the right to accept or reject any entry without stating a reason thereof.",
//             "Participants are requested to remain ready at least 15 minutes prior to the start of any match. Late entries would not be allowed. Tournament Guidelines:",
//             "Players will participate as a 4 man-squad.",
//             "Up to 64 players will be playing in a lobby.",
//             "Maps selected will be notified to the participants before the match.",
//             "The group stage is a 3-map series.",
//         ],
//         punishment: [""],
//         teamRoaster: [""],
//         pointSystem: [
//             "Kill - 1 point.",
//             "1st - 15 points.",
//             "2nd - 12 points.",
//             "3rd - 10 points.",
//             "4th - 8 points.",
//             "5th - 6 points.",
//             "6th - 4 points.",
//             "7th - 2 points.",
//             "8th - 12th - 1 point.",
//             "13th - 16th - 0 point.",
//         ],
//         imageSrc: bgmiImage.src,
//         timing: '10:00 Am'
//     },
//     {
//         name: 'tekken 7',
//         rules: [
//             "Game will be played on Desktop.",
//             "Open For All",
//             "No system requirements are needed as the OC will provide with the system",
//             "60 second per round, 1v1, real time battle on a gaming system",
//             "There will be instant elimination after one lose",
//             "3 rounds will be conducted per match.(Basic tekken 7 rule)",
//             "One slot will contain 6 people.",
//             "Total 6 slots will be conducted in on zone(18 winners)",
//             "Qualifiers will battle each other on 1v1 basis(9 matches, 9 winners)",
//             "Those 9 winners then will be grouped in 3 matches where 3 contestants will fight each other in 1V1 (9 players -> 3 mini slots -> 3 winners)",
//             "Finals will be conducted the same way with those 3 winners form the semis(3 players 1 winner)",
//             "That is what will happen in 1 zone",

//             "2 players will play at a time.",
//             "Characters will be selected with no customization to their appearance(base character).",
//             "Random levels on each map; no players will be favored in level selection.",
//             "Pausing the game and pressing the home button is not permitted once the match starts(it will only be considered in case of keyboard or system malfunction).",
//             "Stalling, or intentionally making the game unplayable, is banned and will be considered as a forfeit for the player that initiates the action",
//             "In case of a draw (double K.O) the game will not be scored and the players will have to play again with the same character selections.",
//             "Anyone who is not present at the time of their match or doesn’t appear there by 5 minutes will be given a direct disqualification.",
//             "Causing commotion is unacceptable and action will be taken if caused.",
//             "Once a zone is over and the winner is decided they must provide their contact details so that they can be called at the time of final showdown",
//             "Once all the zones are completed the winners of each zone are going to battle in the final zone.",
//         ],
//         punishment: [
//             "Stalling",
//             "Pressing home button",
//             "Creating commotion and not listening to the OC",
//             "Sabotaging other player(s)",
//         ],
//         pointSystem: [''],
//         teamRoaster: [""],
//         imageSrc: tekkenImage.src,
//         timing: '10:00 Am'
//     },
//     {
//         name: 'valorant',
//         rules: [
//             "Game will be played on Desktop.",
//             "One Player of the team should be of the college.",
//             "A player is allowed to have only one (1) Valorant Account.Valorant nickname has to be in formatRiot ID#Tagline. (Example:Mrsmith#EUNE). Any other format will be invalid.",
//             "You are not allowed to share or use another person’s game account.Your account is for your use, and your use alone.",
//             "Both the teams will be invited for the toss. The winner of the toss will be selecting the map to be played.",
//             "Another toss will be done to choose theAttacker and Defender side.",
//             "If any of the players are not connected to the game before the counter reaches 0, the team can call a remake and the game has to be remade",
//             "Once the match finishes, both team captains have to take a screenshot of the results and post it in the WhatsApp Group."
//         ],
//         teamRoaster: [
//             'Each team’s roster must consist of at least 5 players.',
//             'Each team’s roster will be allowed to have 5 main players . Once the tournament starts, you cannot replaceany player.',
//             'A player cannot be part of any other team’s roster which is participating or has participated in the same tournament.',
//             'Match has to be played in the following format: 5v5.',
//             'A player is allowed to represent only one (1) team’s roster in the same tournament.'
//         ],
//         punishment: [
//             "Usinga player, not in the roster",
//             "Playing with the wrong game account",
//             "Usage of a glitch/bug",
//             "Stream Sniping",
//             "Inappropriate/disruptive behavior",
//             "Match-fixing/teaming",
//             "Using cheats(aimbot , etc.)"
//         ],
//         pointSystem: [''],
//         imageSrc: valorantImage.src,
//         timing: '10:00 Am'
//     }
// ]