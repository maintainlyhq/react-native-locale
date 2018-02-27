import { NativeEventEmitter, NativeModules } from 'react-native';
const RCTLocale = NativeModules.Locale;
const warning = require('fbjs/lib/warning');

export default class LocaleBaseClass {

	static constants() {
		return RCTLocale;
	}

	static numberFromDecimalString(number) {
		return RCTLocale.numberFromDecimalString(number);
	}

	static decimalStyle(number) {
		return RCTLocale.decimalStyle(number);
	}

	static validateDateFormatStyle(style) {
		let valid = ['full', 'long', 'medium', 'short', 'none'];
		if(Platform.OS == 'ios')
			valid.push('default');
		return valid.indexOf(style) >= 0;
	}

	static dateFormat(date, dateStyle, timeStyle) {
		warning(LocaleBaseClass.validateDateFormatStyle(dateStyle), 'Locale: DateStyle must be one of [full/long/medium/short/none]');
		warning(LocaleBaseClass.validateDateFormatStyle(timeStyle), 'Locale: TimeStyle must be one of [full/long/medium/short/none]');
		return RCTLocale.dateFormat(date, dateStyle, timeStyle);
	}

}
