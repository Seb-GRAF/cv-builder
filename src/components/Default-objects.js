const defaultPersonalInfo = {
  firstName: "John",
  lastName: "Doe",
  phoneNumber: "123 456 78 90",
  email: "john.doe@email.com",
  website: "www.john-doe.com",
  jobTitle: "MyFutureJob",
  street: "Main street 10",
  postcode: "12345",
  city: "City",
  profile:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum temporibus iusto consectetur, repellendus repellat est, quae et sapiente similique asperiores odio fugit expedita distinctio sunt quas! Et obcaecati cum reprehenderit placeat voluptatum ad sit, nisi id sed at quibusdam. ",
};
const defaultEducation = [
  {
    id: "kz1vzb97",
    degreeName: "Web dev cursus",
    schoolName: "The Odin Project",
    from: "2021",
    to: "2022",
  },
];

const defaultExperience = [
  ({
    id: "kz1vzb98",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum temporibus iusto consectetur, repellendus repellat est, quae et sapiente similique asperiores odio fugit expedita distinctio sunt quas! Et obcaecati cum reprehenderit placeat voluptatum ad sit, nisi id sed at quibusdam. Repudiandae?",
    positionTitle: "MyCurrentJob",
    companyName: "Company2",
    from: "2021",
    to: "2022",
  },
  {
    id: "kz1vzg9j",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum temporibus iusto consectetur, repellendus repellat est, quae et sapiente similique asperiores odio fugit expedita distinctio sunt quas! Et obcaecati cum reprehenderit placeat voluptatum ad sit, nisi id sed at quibusdam. Repudiandae?",
    positionTitle: "MyLastJob",
    from: "2020",
    to: "2021",
    companyName: "Company1",
  }),
];

const defaultSkills = [
  ({
    id: "kz1vzb99",
    skill: "ReactJS",
  },
  {
    id: "kz1w0orh",
    skill: "Javascript",
  },
  {
    id: "kz1w0s6q",
    skill: "CSS3 / SASS",
  },
  {
    id: "kz1w0xfp",
    skill: "HTML5",
  }),
];

const defaultLanguages = [
  ({
    id: "kz1vzb9a",
    language: "English - C2",
  },
  {
    id: "kz1w14pb",
    language: "French - C2",
  },
  {
    id: "kz1w180v",
    language: "German - B1",
  }),
];

export {
  defaultPersonalInfo,
  defaultEducation,
  defaultExperience,
  defaultSkills,
  defaultLanguages,
};
