const mobs = {
  gargoyle1: {
    // общая информация
    name: 'Горгулья',
    nameR: 'Горгульи',
    nameD: 'Горгулье',
    nameV: 'Горгулью',
    nameT: 'Горгульей',
    nameP: 'Горгулье',
    ifAlive: 'Горгулья стоит здесь, готовая наброситься на чужаков',
    ifDead: 'Окаменелые останки Горгульи валяются на полу',
    description:
      'Жестокое существо, призванное Графом Дракулой в этот мир, чтобы служить ему. По легенде, у каждой Горгульи есть магическое кольцо, благодаря которому она становится неуязвимой для противника. Но готов ли ты к бою с ней?',
    agro: true,
    killed: false,
    items: ['gargoyleRing'],
    // уникальный текст в бою для существа
    heWord: 'она',
    hitWord: 'хлестнула',
    tryWord: 'попыталась хлестнуть',
    dodgeWord: 'уклонилась',
    blockWord: 'блокировала',
    gotupWord: 'оправилась от удара и поднялась с пола',
    // боевые характеристики
    curHP: 100,
    maxHP: 100,
    minDamage: 5,
    maxDamage: 10,
    dodge: 0.8,
    block: 0,
    bashed: false,
    lag: 0,
  },

  gargoyle2: {
    // общая информация
    name: 'Горгулья',
    nameR: 'Горгульи',
    nameD: 'Горгулье',
    nameV: 'Горгулью',
    nameT: 'Горгульей',
    nameP: 'Горгулье',
    ifAlive: 'Горгулья стоит здесь, готовая наброситься на чужаков',
    ifDead: 'Окаменелые останки Горгульи валяются на полу',
    description:
      'Жестокое существо, призванное Графом Дракулой в этот мир, чтобы служить ему. По легенде, у каждой Горгульи есть магическое кольцо, благодаря которому она становится неуязвимой для противника. Но готов ли ты к бою с ней?',
    agro: true,
    killed: false,
    items: ['gargoyleBoots'],
    // уникальный текст в бою для существа
    heWord: 'она',
    hitWord: 'хлестнула',
    tryWord: 'попыталась хлестнуть',
    dodgeWord: 'уклонилась',
    blockWord: 'блокировала',
    gotupWord: 'оправилась от удара и поднялась с пола',
    // боевые характеристики
    curHP: 100,
    maxHP: 100,
    minDamage: 5,
    maxDamage: 10,
    dodge: 0.8,
    block: 0,
    bashed: false,
    lag: 0,
  },

  gargoyle3: {
    // общая информация
    name: 'Горгулья',
    nameR: 'Горгульи',
    nameD: 'Горгулье',
    nameV: 'Горгулью',
    nameT: 'Горгульей',
    nameP: 'Горгулье',
    ifAlive: 'Горгулья стоит здесь, готовая наброситься на чужаков',
    ifDead: 'Окаменелые останки Горгульи валяются на полу',
    description:
      'Жестокое существо, призванное Графом Дракулой в этот мир, чтобы служить ему. По легенде, у каждой Горгульи есть магическое кольцо, благодаря которому она становится неуязвимой для противника. Но готов ли ты к бою с ней?',
    agro: true,
    killed: false,
    items: [],
    // уникальный текст в бою для существа
    heWord: 'она',
    hitWord: 'хлестнула',
    tryWord: 'попыталась хлестнуть',
    dodgeWord: 'уклонилась',
    blockWord: 'блокировала',
    gotupWord: 'оправилась от удара и поднялась с пола',
    // боевые характеристики
    curHP: 100,
    maxHP: 100,
    minDamage: 5,
    maxDamage: 10,
    dodge: 0.8,
    block: 0,
    bashed: false,
    lag: 0,
  },

  livingArmor1: {
    // общая информация
    name: 'Ожившие рыцарские доспехи',
    nameR: 'Оживших рыцарских доспехов',
    nameD: 'Ожившим рыцарским доспехам',
    nameV: 'Ожившие рыцарские доспехи',
    nameT: 'Ожившими рыцарскими доспехами',
    nameP: 'Оживших рыцарских доспехах',
    ifAlive: 'Ожившие рыцарские доспехи летают здесь',
    ifDead: 'Дух оживших рыцарских доспехов покоится здесь',
    description:
      'Доспехи смельчаков некогда пытавшихся победить графа Дракулу. Этот призрак безопасен, если его не трогать, но было бы неплохо заполучить какой-то доспех для себя, не правда ли?',
    agro: false,
    killed: false,
    items: ['armbands'],
    // уникальный текст в бою для существа
    heWord: 'они',
    hitWord: 'стукнули',
    tryWord: 'попытались стукнуть',
    dodgeWord: 'уклонились',
    blockWord: 'блокировали',
    gotupWord: 'оправились от удара и поднялись',
    // боевые характеристики
    curHP: 300,
    maxHP: 300,
    minDamage: 10,
    maxDamage: 20,
    dodge: 0,
    block: 0.5,
    bashed: false,
    lag: 0,
  },

  livingArmor2: {
    // общая информация
    name: 'Ожившие рыцарские доспехи',
    nameR: 'Оживших рыцарских доспехов',
    nameD: 'Ожившим рыцарским доспехам',
    nameV: 'Ожившие рыцарские доспехи',
    nameT: 'Ожившими рыцарскими доспехами',
    nameP: 'Оживших рыцарских доспехах',
    ifAlive: 'Ожившие рыцарские доспехи летают здесь',
    ifDead: 'Дух оживших рыцарских доспехов покоится здесь',
    description:
      'Доспехи смельчаков некогда пытавшихся победить графа Дракулу. Этот призрак безопасен, если его не трогать, но было бы неплохо заполучить какой-то доспех для себя, не правда ли?',
    agro: false,
    killed: false,
    items: ['legbands'],
    // уникальный текст в бою для существа
    heWord: 'они',
    hitWord: 'ударили',
    tryWord: 'попытались ударить',
    dodgeWord: 'уклонились',
    blockWord: 'блокировали',
    gotupWord: 'оправились от удара и поднялись',
    // боевые характеристики
    curHP: 300,
    maxHP: 300,
    minDamage: 10,
    maxDamage: 20,
    dodge: 0,
    block: 0.5,
    bashed: false,
    lag: 0,
  },

  livingArmor3: {
    // общая информация
    name: 'Ожившие рыцарские доспехи',
    nameR: 'Оживших рыцарских доспехов',
    nameD: 'Ожившим рыцарским доспехам',
    nameV: 'Ожившие рыцарские доспехи',
    nameT: 'Ожившими рыцарскими доспехами',
    nameP: 'Оживших рыцарских доспехах',
    ifAlive: 'Ожившие рыцарские доспехи летают здесь',
    ifDead: 'Дух оживших рыцарских доспехов покоится здесь',
    description:
      'Доспехи смельчаков некогда пытавшихся победить графа Дракулу. Этот призрак безопасен, если его не трогать, но было бы неплохо заполучить какой-то доспех для себя, не правда ли?',
    agro: false,
    killed: false,
    items: [],
    // уникальный текст в бою для существа
    heWord: 'они',
    hitWord: 'ударили',
    tryWord: 'попытались ударить',
    dodgeWord: 'уклонились',
    blockWord: 'блокировали',
    gotupWord: 'оправились от удара и поднялись',
    // боевые характеристики
    curHP: 300,
    maxHP: 300,
    minDamage: 10,
    maxDamage: 20,
    dodge: 0,
    block: 0.5,
    bashed: false,
    lag: 0,
  },

  bat1: {
    // общая информация
    name: 'Огромная летучая мышь',
    nameR: 'Огромной летучей мыши',
    nameD: 'Огромной летучей мыши',
    nameV: 'Огромную летучую мышь',
    nameT: 'Огромной летучей мышью',
    nameP: 'Огромной летучей мыши',
    ifAlive: 'Огромная летучая мышь свисает с потолка',
    ifDead: 'Труп огромной летучей мыши лежит здесь',
    description: 'Выросшее до огромных размеров существо с большими острыми когтями и, похоже, крепкой кожей. Можно пройти мимо неё, а можно убить и забрать её шкуру.',
    agro: false,
    killed: false,
    items: ['gloves'],
    // уникальный текст в бою для существа
    heWord: 'она',
    hitWord: 'ободрала',
    tryWord: 'попыталась вонзить свои когти в',
    dodgeWord: 'уклонилась',
    blockWord: 'блокировала',
    gotupWord: 'оправилась от удара и взвилась вверх',
    // боевые характеристики
    curHP: 600,
    maxHP: 600,
    minDamage: 20,
    maxDamage: 40,
    dodge: 0.5,
    block: 0,
    bashed: false,
    lag: 0,
  },

  bat2: {
    // общая информация
    name: 'Огромная летучая мышь',
    nameR: 'Огромной летучей мыши',
    nameD: 'Огромной летучей мыши',
    nameV: 'Огромную летучую мышь',
    nameT: 'Огромной летучей мышью',
    nameP: 'Огромной летучей мыши',
    ifAlive: 'Огромная летучая мышь свисает с потолка',
    ifDead: 'Труп огромной летучей мыши лежит здесь',
    description: 'Выросшее до огромных размеров существо с большими острыми когтями и, похоже, крепкой кожей. Можно пройти мимо неё, а можно убить и забрать её шкуру.',
    agro: false,
    killed: false,
    items: [],
    // уникальный текст в бою для существа
    heWord: 'она',
    hitWord: 'ободрала',
    tryWord: 'попыталась вонзить в тебя свои когти',
    dodgeWord: 'уклонилась',
    blockWord: 'блокировала',
    gotupWord: 'оправилась от удара и взвилась вверх',
    // боевые характеристики
    curHP: 600,
    maxHP: 600,
    minDamage: 20,
    maxDamage: 40,
    dodge: 0.5,
    block: 0,
    bashed: false,
    lag: 0,
  },

  stoneStatue1: {
    // общая информация
    name: 'Ожившая статуя горгульи',
    nameR: 'Ожившей статуи горгульи',
    nameD: 'Ожившей статуи горгульи',
    nameV: 'Ожившую статую горгульи',
    nameT: 'Ожившей статуей горгульи',
    nameP: 'Ожившей статуи горгульи',
    ifAlive: 'Ожившая статуя горгульи внимательно осматривает все здесь',
    ifDead: 'Камни и плотный, тяжелый слой пыли на полу напоминают о тяжелой битве…',
    description:
      'Ожившая каменная статуя, защищающая покои Графа Дракулы озлобленно смотрит на тебя. На ее груди заметен таинственный мифический кристалл, о котором ты слышал байки в трактирах от местных завсегдатаев. Ходят слухи о том, что магические свойства кристалла способны значительно усилить мощь его обладателя. Будь осторожен, когда находишься рядом с этим существом!',
    agro: true,
    killed: false,
    items: ['crystal'],
    // уникальный текст в бою для существа
    heWord: 'она',
    hitWord: 'огрела',
    tryWord: 'попыталась огреть',
    dodgeWord: 'уклонилась',
    blockWord: 'блокировала',
    gotupWord: 'оправилась от удара и поднялась с пола',
    // боевые характеристики
    curHP: 1000,
    maxHP: 1000,
    minDamage: 10,
    maxDamage: 60,
    dodge: 0,
    block: 0.7,
    bashed: false,
    lag: 0,
  },

  stoneStatue2: {
    // общая информация
    name: 'Ожившая статуя горгульи',
    nameR: 'Ожившей статуи горгульи',
    nameD: 'Ожившей статуи горгульи',
    nameV: 'Ожившую статую горгульи',
    nameT: 'Ожившей статуей горгульи',
    nameP: 'Ожившей статуи горгульи',
    ifAlive: 'Ожившая статуя горгульи внимательно осматривает все здесь',
    ifDead: 'Камни и плотный, тяжелый слой пыли на полу напоминают о тяжелой битве…',
    description:
      'Ожившая каменная статуя, защищающая покои Графа Дракулы озлобленно смотрит на тебя. На ее груди заметен таинственный мифический кристалл, о котором ты слышал байки в трактирах от местных завсегдатаев. Ходят слухи о том, что магические свойства кристалла способны значительно усилить мощь его обладателя. Будь осторожен, когда находишься рядом с этим существом!',
    agro: true,
    killed: false,
    items: [],
    // уникальный текст в бою для существа
    heWord: 'она',
    hitWord: 'огрела',
    tryWord: 'попыталась огреть',
    dodgeWord: 'уклонилась',
    blockWord: 'блокировала',
    gotupWord: 'оправилась от удара и поднялась с пола',
    // боевые характеристики
    curHP: 1000,
    maxHP: 1000,
    minDamage: 10,
    maxDamage: 60,
    dodge: 0,
    block: 0.7,
    bashed: false,
    lag: 0,
  },

  dracula: {
    // общая информация
    name: 'Граф Дракула',
    nameR: 'Графа Дракулы',
    nameD: 'Графу Дракуле',
    nameV: 'Графа Дракулу',
    nameT: 'Графом Дракулой',
    nameP: 'Графе Дракуле',
    ifAlive: 'Граф Дракула стоит здесь',
    ifDead: '',
    description:
      'Аристократ, с превосходными манерами и пытливым умом, владеющий этим замком и прилегающими к нему территориями стоит перед тобой. Известно, что в прошлом граф отличился как храбрый и смелый воевода, государственный деятель и даже практик алхимии — вершиной научных знаний в эти времена. Однако наряду с его заслугами, в народе ходили слухи и о его связях с темными силами.',
    agro: false,
    killed: false,
    items: [],
    // уникальный текст в бою для существа
    heWord: 'он',
    hitWord: 'ударил',
    tryWord: 'попытался ударить',
    dodgeWord: 'уклонился',
    blockWord: 'блокировал',
    gotupWord: 'оправился от удара и поднялся',
    // боевые характеристики
    curHP: 1500,
    maxHP: 1500,
    minDamage: 30,
    maxDamage: 70,
    dodge: 0.5,
    block: 0.5,
    bashed: false,
    lag: 0,
    isDracula: true,
  },
};

export default mobs;
