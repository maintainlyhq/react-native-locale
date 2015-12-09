# react-native-locale

Formats data based on locale settings.

https://developer.apple.com/library/ios/documentation/MacOSX/Conceptual/BPInternational/InternationalizingLocaleData/InternationalizingLocaleData.html

## Installation

`npm install react-native-locale --save`

Add RCTLocale.xcodeproj to Libraries and add libRCTLocale.a to Link Binary With Libraries under Build Phases.

## Usage

For locale information:

`require('react-native').NativeModules.Locale`

Returns an object of:

```js
{
  locale: "en_DK",
  decimalSeparator: ",",
  quotationBeginDelimiterKey: "“",
  quotationEndDelimiterKey: "”"
}
```

Methods exported by module:


```js
Locale.decimalStyle(12501.50, (response) => {
	console.log(response);
});
Locale.currencyStyle(12501.50, (response) => {
	console.log(response);
});
Locale.percentStyle(1251.50, (response) => {
	console.log(response);
});
Locale.scientificStyle(12501.50, (response) => {
	console.log(response);
});
Locale.spelloutStyle(12501.50, (response) => {
	console.log(response);
});
Locale.numberFromDecimalString('125.01010', (response) => {
	console.log(response);
});
```

In Danish locale this returns:

```
12.501,5
12.501,50 DKK
12.550 %
1,25015E4
twelve thousand five hundred one point five
12501010
```
