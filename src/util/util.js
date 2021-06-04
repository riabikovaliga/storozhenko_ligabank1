export const extend = (a, b) => {
	return Object.assign({}, a, b);
};

export const valueMask = (value) => {
	if (value === `Некорректное значение`) return value;
	return value.toLocaleString() + ` рублей`;
};

export const yearsMask = (years) => {
	return years + ` лет`;
};

export const valueFloorPenny = (value) => {
	return Math.floor(value * 100) / 100;
};

export const shakeEffect = (element) => {
	element.style.animation = `shake ${600 / 1000}s`;
	setTimeout(() => {
		element.style.animation = ``;
	}, 600);
}
