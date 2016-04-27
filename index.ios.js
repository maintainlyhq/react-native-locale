const React = require('react-native');
const { Platform, NativeModules } = React;
const NativeLocale = NativeModules.Locale;
const LocaleBaseClass = require('./LocaleBaseClass');

class Locale extends LocaleBaseClass {
	static currencyStyle(number : number) {
		return NativeLocale.currencyStyle(number);
	}
	static percentStyle(number : number) {
		return NativeLocale.percentStyle(number);
	}
	static scientificStyle(number : number) {
		return NativeLocale.scientificStyle(number);
	}
	static spelloutStyle(number : number) {
		return NativeLocale.scientificStyle(number);
	}
}

module.exports = Locale;
