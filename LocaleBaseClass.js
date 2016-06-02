import { Platform, NativeModules } from 'react-native';
const NativeLocale = NativeModules.Locale;
const warning = require('fbjs/lib/warning');

class LocaleBaseClass {

	static constants() {
		return NativeLocale;
	}

	static numberFromDecimalString(number : string) {
		return NativeLocale.numberFromDecimalString(number);
	}

	static decimalStyle(number : number) {
		return NativeLocale.decimalStyle(number);
	}

	static validateDateFormatStyle(style : string) {
		let valid = ['full', 'long', 'medium', 'short', 'none'];
		if(Platform.OS == 'ios')
			valid.push('default');
		return valid.indexOf(style) >= 0;
	}

	static dateFormat(date, dateStyle : string, timeStyle : string) {
		warning(LocaleBaseClass.validateDateFormatStyle(dateStyle), 'Locale: DateStyle must be one of [full/long/medium/short/none]');
		warning(LocaleBaseClass.validateDateFormatStyle(timeStyle), 'Locale: TimeStyle must be one of [full/long/medium/short/none]');
		return NativeLocale.dateFormat(date, dateStyle, timeStyle);
	}

}

module.exports = LocaleBaseClass;
