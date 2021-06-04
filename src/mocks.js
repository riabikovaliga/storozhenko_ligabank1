import {START_OWN_VALUE, START_CAR_VALUE, MIN_OWN_LOAN_TERMS, MIN_CAR_LOAN_TERMS} from './const';

export const SLIDES = [
	{
		title: `Лига Банк`,
		text: `Кредиты на любой случай`,
		buttonText: `Рассчитать кредит`,
		modificator: `credit`,
		href: `#creditCalculator`,
	},
	{
		title: `Лига Банк`,
		text: `Ваша уверенность в завтрашнем дне`,
		buttonText: ``,
		modificator: `confidence`,
	},
	{
		title: `Лига Банк`,
		text: `Всегда рядом`,
		buttonText: `Найти отделение`,
		modificator: `always-near`,
		href: `#map`,
	},
];

export const SERVICES = [
	{
		modificator: `deposits`,
		tabTitle: `Вклады`,
		title: `Вклады Лига Банка – это выгодная инвестиция в свое будущее`,
		optoins: [
			`Проценты по вкладам до 7%`,
			`Разнообразные условия`,
			`Возможность ежемесячной капитализации или вывод процентов на банковскую карту`,
		],
		buttonText: `Узнать подробнее`,
	},
	{
		modificator: `credit`,
		tabTitle: `Кредиты`,
		title: `Лига Банк выдает кредиты под любые цели`,
		optoins: [
			`Ипотечный кредит`,
			`Автокредит`,
			`Потребительский кредит`,
		],
		offer: `credit`,
	},
	{
		modificator: `insurance`,
		tabTitle: `Страхование`,
		title: `Лига Страхование — застрахуем все что захотите`,
		optoins: [
			`Автомобильное страхование`,
			`Страхование жизни и здоровья`,
			`Страхование недвижимости`,
		],
		buttonText: `Узнать подробнее`,
	},
	{
		modificator: `app`,
		tabTitle: `Онлайн-сервисы`,
		title: `Лига Банк — это огромное количество онлайн-сервисов для вашего удобства`,
		optoins: [
			`Мобильный банк,
			который всегда под рукой`,
			`Приложение Лига-проездной позволит вам оплачивать билеты по всему миру`,
		],
		buttonText: `Узнать подробнее`,
	},
];


export const CREDITS_TYPE_INFO = [
	{
		type: `mortgage`,
		isMaternalCapitalUsed: false,
		ownValue: START_OWN_VALUE,
		initialFee: START_OWN_VALUE / 10,
		loanTerms: MIN_OWN_LOAN_TERMS,
	},
	{
		type: `car`,
		isLifeInsuranceWanted: false,
		isKaskoWanted: false,
		ownValue: START_CAR_VALUE,
		initialFee: START_CAR_VALUE / 5,
		loanTerms: MIN_CAR_LOAN_TERMS,
	}
];
