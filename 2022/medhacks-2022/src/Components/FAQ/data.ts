export default [
  [
    'What is a hackathon?',
    'Broadly defined, a hackathon is a multi-day event where people across all backgrounds come together to ideate, create, and collaborate on cool new software or hardware by the end of the event, sometimes even tackling real-world issues! It is a place where people learn, play, and create, and perform superhuman feats in short periods of time!',
  ],

  [
    'Why MedHacks?',
    "MedHacks focuses on innovating at the crossroads of medical entrepreneurship and technological development. By working together for the weekend, hackers at MedHacks will gain unique opportunities to learn from each other and from experts at the forefront of medicine and technology – integrating their learning into real solutions to pressing medical challenges. What if I have no experience in healthcare or coding? If you don't know much about health or engineering, don’t worry - learning is a huge part of the MedHacks experience. We will have workshops on a variety of topics and subjects with mentors throughout the event to answer questions and provide guidance to teams! Come with an open mind; you'll work with a great team, learn a lot, and most importantly, meet new people and have fun!",
  ],

  [
    'Who can participate?',
    'Any student, anywhere. Anyone can make an impact - hackathons produce "hackers", not the other way around. Students - both at the undergraduate and graduate level - with engineering, medical, and entrepreneurial backgrounds are encouraged to apply for a spot at MedHacks 2022, as long as they are at least 18 years old.',
  ],

  [
    'How do I apply?',
    'Just hit the apply button at the top right when applications open! You will receive an email confirming your application has been submitted and received, and you will receive another email once your application has been reviewed. If you are accepted, you will then be asked to confirm your spot at MedHacks 2022. Remember to check your spam mail!',
  ],

  [
    'Who else will be there?',
    'Students, industry professionals, clinicians, and more! We will be uploading a full list of judges, mentors, and companies closer to the event. ',
  ],

  [
    "What's the cost?",
    'Admission is free for everyone! As long as you have confirmed your spot at MedHacks 2022, you will have access to mentors, workshops, $W4G, resources, and a memorable experience– all for free! ',
  ],

  [
    'Can I be reimbursed for travel?',
    'Unfortunately, Johns Hopkins University has changed their reimbursement policies and we can no longer reimburse for aviation fees. We would still highly encourage you to come join us as the experience, resources, and $W4G is definitely worth it!',
  ],

  [
    "Will this year's hackathon be virtual?",
    'MedHacks 2022 will be fully in-person! We are still planning on offering the same perks that we have in previous in-person MedHacks events such as fun games, workshops, speakers, social media activities, mentorship, and merch. Details regarding day-of-event logistics will be sent out to all participants closer to the event. ',
  ],

  [
    "What if I don't have a team?",
    'We will set up events and times for communication within tracks and moderate pitch sessions for you to meet potential teammates, but you are also welcome to use your own way to meet the participants!',
  ],

  [
    'Does MedHacks have a code of conduct?',
    `Yes we do! All participants must follow our ${getAnchor(
      'Code of Conduct',
      'https://docs.google.com/document/d/1cOO6rDV2nfbasEU5GdgVDdXgnwMzmXaRxJFecYlZPIo/edit?usp=sharing',
    )} at MedHacks. Additionally, as a member of MLH, all participants must also follow the ${getAnchor(
      'MLH Code of Conduct',
      'https://static.mlh.io/docs/mlh-code-of-conduct.pdf'
    )}.`,
  ],

  [
    'But I have more questions!',
    `For any other questions not answered here, please contact ${getAnchor(
      'info@medhacks.io',
      'mailto:info@medhacks.io',
    )}`,
  ],
];

function getAnchor(text: string, url: string) {
  return `<a target="_blank" rel="noopener noreferrer" href="${url}" style="color: blue;">${text}</a>`;
}
