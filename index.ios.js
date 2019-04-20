import { NativeModules } from 'react-native';
import LocaleBaseClass from './LocaleBaseClass';
const RCTLocale = NativeModules.Locale;

export default class Locale extends LocaleBaseClass {
	static currencyStyle(number) {
		return RCTLocale.currencyStyle(number);
	}
	static percentStyle(number) {
		return RCTLocale.percentStyle(number);
	}
	static scientificStyle(number) {
		return RCTLocale.scientificStyle(number);
	}
	static spelloutStyle(number) {
		return RCTLocale.scientificStyle(number);
	}
}
