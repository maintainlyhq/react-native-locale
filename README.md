# react-native-locale

Formats data based on locale settings.

https://developer.apple.com/library/ios/documentation/MacOSX/Conceptual/BPInternational/InternationalizingLocaleData/InternationalizingLocaleData.html

## Installation

`npm install react-native-locale --save`

(Ensure you rely on npm versioning via https://www.npmjs.com/package/react-native-locale - not the github releases tab.)

For iOS: Add RCTLocale.xcodeproj to Libraries and add libRCTLocale.a to Link Binary With Libraries under Build Phases.

For Android:

```
// file: android/settings.gradle
...

include ':RCTLocale', ':app'
project(':RCTLocale').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-locale/android')
```

```
// file: android/app/build.gradle
...

dependencies {
    ...
    compile project(':RCTLocale')
}
```

```
// file: android/app/source/main/java/com/{projectName}.MainActivity.java
...
import fixd.io.rctlocale.RCTLocalePackage;
...
.addPackage(new RNSimpleAlertDialogPackage(this))
...
```

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
Locale.decimalStyle(12501.50).then((response) => {
	console.log(response);
});
Locale.numberFromDecimalString('125.01,10').then((response) => {
	console.log('then', response);
});

// ios only
Locale.currencyStyle(12501.50).then((response) => {
	console.log(response);
});
Locale.percentStyle(125.50).then((response) => {
	console.log(response);
});
Locale.scientificStyle(12501.50).then((response) => {
	console.log(response);
});
Locale.spelloutStyle(12501.50).then((response) => {
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
125010.1
```
