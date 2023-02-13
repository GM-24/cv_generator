const CV_DATA = {
  name: sessionStorage.getItem("firstName"),
  surname: sessionStorage.getItem("lastName"),
  email: sessionStorage.getItem("Email"),
  phone_number: sessionStorage.getItem("Num"),
  experiences: [
    {
      position: sessionStorage.getItem("POSITION"),
      employer: sessionStorage.getItem("COMP_NAME"),
      start_date: sessionStorage.getItem("START_DATE"),
      due: sessionStorage.getItem("END_DATE"),
      description: sessionStorage.getItem("JOB_DESC"),
    },
  ],
  education: [
    {
      institute: sessionStorage.getItem("UNI_NAME"),
      degree: sessionStorage.getItem("SELECTED"),
      due_date: sessionStorage.getItem("UNI_END_DATE"),
      description: sessionStorage.getItem("UNI_DESC"),
    },
  ],

  image: sessionStorage.getItem("image"),
  about_me: sessionStorage.getItem("AboutMe"),
};
