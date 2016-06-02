const LocaleBaseClass = require('./LocaleBaseClass');

class Locale extends LocaleBaseClass {

	/**
	 * Android can't pass Long's as ReactMethod arguments so send a string that is parsed
	 */
	static dateFormat(date : Date, dateStyle : string, timeStyle : string) {
		return LocaleBaseClass.dateFormat(''+date.getTime(), dateStyle, timeStyle);
	}

}

module.exports = Locale;
