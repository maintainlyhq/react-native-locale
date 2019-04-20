import LocaleBaseClass from './LocaleBaseClass';

export default class Locale extends LocaleBaseClass {

	/**
	 * Android can't pass Long's as ReactMethod arguments so send a string that is parsed
	 */
	static dateFormat(date, dateStyle, timeStyle) {
		return LocaleBaseClass.dateFormat(''+date.getTime(), dateStyle, timeStyle);
	}

}
