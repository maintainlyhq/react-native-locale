# react-native-locale

Formats data based on locale settings.

https://developer.apple.com/library/ios/documentation/MacOSX/Conceptual/BPInternational/InternationalizingLocaleData/InternationalizingLocaleData.html

### RN < 0.40.0

Please use `0.0.13` for any version of RN before `0.40.0` 

`npm install react-native-locale@0.0.13 --save` 

## Installation

- `npm install react-native-locale --save`
- `react-native link react-native-locale`

### Add libraries manually

#### iOS

- Link manually
  - Add RCTLocale.xcodeproj to Libraries and add libRCTLocale.a to Link Binary With Libraries under Build Phases.
- Cocoapods
  - Add following to your `Podfile`

```ruby
# Podfile
pod 'react-native-locale', :path => './node_modules/react-native-locale'
```

#### Android

```
// file: android/settings.gradle
...

include ':react-native-locale'
project(':react-native-locale').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-locale/android')
```

```
// file: android/app/build.gradle
...

dependencies {
    ...
    compile project(':react-native-locale')  // <- Add this
}
```

```
// file: android/app/source/main/java/com/{projectName}.MainApplication.java
...
import io.fixd.rctlocale.RCTLocalePackage;
...
public class MainApplication extends Application implements ReactApplication {
    // ...
    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new RCTLocalePackage() // add package
      );
    }
...
```

## Usage

For locale information:

`var Locale = require('react-native-locale');`

### Constants

`Locale.constants()` Returns an object of (Danish locale):

```js
{
	"localeIdentifier":"en_DK",
	"decimalSeparator":",",
	"quotationBeginDelimiterKey":"“",
	"quotationEndDelimiterKey":"”",
	"currencySymbol":"DKK",
	"currencyCode":"DKK",
	"groupingSeparator":".",
	// ios only:
	"usesMetricSystem":true,
	"localeLanguageCode":"en",
	"countryCode":"DK",
	"calendar":"gregorian",
	"collatorIdentifier":"en-DK",
	"alternateQuotationBeginDelimiterKey":"‘",
	"alternateQuotationEndDelimiterKey":"’",
	"measurementSystem":"Metric",
	"preferredLanguages":["en-DK"]
}
```

USA Locale:

```js
{
	"localeIdentifier":"en_US",
	"decimalSeparator":".",
	"quotationBeginDelimiterKey":"“",
	"quotationEndDelimiterKey":"”",
    "currencySymbol":"$",
	"currencyCode":"USD",
	// ios only:
	"usesMetricSystem":false,
	"localeLanguageCode":"en",
	"countryCode":"US",
	"calendar":"gregorian",
	"groupingSeparator":",",
	"collatorIdentifier":"en-US",
	"alternateQuotationBeginDelimiterKey":"‘",
	"alternateQuotationEndDelimiterKey":"’",
	"measurementSystem":"U.S.",
	"preferredLanguages":["en-US"]
	
```

### Numerical formatting


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

### Date formatting

Note: iOS will allow `timestamp` to be either a timestamp, or an ISO-8601 string, the Android java however, won't. The module will try to handle this for you.

```js
l.dateFormat(DateObject, DateFormatStyle, TimeFormatStyle)
l.dateFormat(Date, enum('full', 'long', 'medium', 'short', 'none'), enum('full', 'long', 'medium', 'short', 'none'))
``

Danish:
```js
let date = new Date(2016, 4, 26, 16, 38, 22);
l.dateFormat(date.getTime(), 'full', 'full').then((date) => { // Thursday 26 May 2016 at 16 h 38 min 22 s Central European Summer Time
	console.log(date);
});

l.dateFormat(date.getTime(), 'long', 'long').then((date) => { // 26 May 2016 at 16:38:22 GMT+2
	console.log(date);
});

l.dateFormat(date.getTime(), 'medium', 'medium').then((date) => { //26 May 2016 16:38:22
	console.log(date);
});

l.dateFormat(date.getTime(), 'short', 'short').then((date) => { // 26/05/16 16:38
	console.log(date);
});

l.dateFormat(date.getTime(), 'short', 'none').then((date) => { // 26/05/16
	console.log(date);
});
```

USA:
```
Thursday, May 26, 2016 at 4:38:22 PM Central European Summer Time
May 26, 2016 at 4:38:22 PM GMT+2
May 26, 2016, 4:38:22 PM
5/26/16, 4:38 PM
5/26/16
```

Android in 24hr Denmark with timezone set to EDT:

```
Thursday, May 26, 2016 3:38:22 PM Eastern Daylight Time
May 26, 2016 3:38:22 PM EDT
May 26, 2016 15:38:22
5/26/16 15:38
5/26/16
```
