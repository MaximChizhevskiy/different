const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
      languages: ['ru', 'eng'],
      programmingLangs: {
          js: '20%',
          php: '10%'
      },
      exp: '1 month'
  }
};

/* Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными 
и возвращать строку с опытом.
Пример:
showExperience(personalPlanPeter) => '1 month'
P.S. желательно использовать деструктуризацию, но не обязательно */

function showExperience(plan) {
  const {exp} = plan.skills;
  return exp;
  }