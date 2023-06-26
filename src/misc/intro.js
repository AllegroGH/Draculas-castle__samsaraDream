import color from 'bash-color';

const intro = () => {
  console.log(
    color.red(
      `
    Приветствую тебя, «герой»!
    Говорят, что ты – великий воин, сразивший не одну сотню жутких существ. Предлагаю тебе проверить это утверждение.

    Я – граф Дракула, величайший и ужаснейший из всех вампиров, и мое могущество настолько велико, что я не только сумел перенести тебя в свой замок, но и погрузить тебя в сон.
    Пока ты спал, мои верные слуги забрали у тебя все твое легендарное снаряжение. 

    Сможешь ли ты освободиться и доказать, что ты и правда великий воин? Имей в виду, только победа надо мной может принести тебе титул величайшего.
    Впрочем, я думаю, что мои могущественные слуги не позволят тебе и комнаты пройти… 

    Напомню, что выбраться из замка можно только после победы надо мной, без этого ты никогда не вызовешь заклинание, которое сможет вернуть тебя обратно.
    Выбирай – сражение или вечное блуждание по коридорам моего замка… 
  `,
      'light',
    ),
  );

  console.log(`Ну что? Пора выбираться отсюда...
Для начала было бы неплохо ознакомиться с тем, как здесь все устроено.
${color.green('(рекомендуется ввести команду "справка")', 'light')}
`);
};

export default intro;
