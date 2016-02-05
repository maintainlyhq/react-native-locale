//
//  RCTLocale.m
//  RCTLocale
//

#import "RCTLocale.h"

@interface RCTLocale ()
-(NSString*) getCurrentLocale;
-(NSString*) getDecimalSeparator;
-(NSString*) getQuotationBeginDelimiterKey;
-(NSString*) getQuotationEndDelimiterKey;
@end

@implementation RCTLocale
RCT_EXPORT_MODULE();

-(NSString*) getCurrentLocale{
    return [[NSLocale currentLocale] objectForKey:NSLocaleIdentifier];
}
            
-(NSString*) getDecimalSeparator{
    return [[NSLocale currentLocale] objectForKey:NSLocaleDecimalSeparator];
}
            
-(NSString*) getQuotationBeginDelimiterKey{
    return [[NSLocale currentLocale] objectForKey:NSLocaleQuotationBeginDelimiterKey];
}
            
-(NSString*) getQuotationEndDelimiterKey{
    return [[NSLocale currentLocale] objectForKey:NSLocaleQuotationEndDelimiterKey];
}

RCT_EXPORT_METHOD(decimalStyle:(nonnull NSNumber *)myNumber
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject){
    resolve([NSNumberFormatter localizedStringFromNumber:myNumber numberStyle:NSNumberFormatterDecimalStyle]);
}

RCT_EXPORT_METHOD(currencyStyle:(nonnull NSNumber *)myNumber
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject){
    resolve([NSNumberFormatter localizedStringFromNumber:myNumber numberStyle:NSNumberFormatterCurrencyStyle]);
}

RCT_EXPORT_METHOD(percentStyle:(nonnull NSNumber *)myNumber
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject){
    resolve([NSNumberFormatter localizedStringFromNumber:myNumber numberStyle:NSNumberFormatterPercentStyle]);
}

RCT_EXPORT_METHOD(scientificStyle:(nonnull NSNumber *)myNumber
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject){
    resolve([NSNumberFormatter localizedStringFromNumber:myNumber numberStyle:NSNumberFormatterScientificStyle]);
}

RCT_EXPORT_METHOD(spelloutStyle:(nonnull NSNumber *)myNumber
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject){
    resolve([NSNumberFormatter localizedStringFromNumber:myNumber numberStyle:NSNumberFormatterSpellOutStyle]);
}

RCT_EXPORT_METHOD(numberFromDecimalString:(NSString *)inputString
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject){
    NSNumberFormatter *numberFormatter = [NSNumberFormatter new];
    numberFormatter.numberStyle = NSNumberFormatterDecimalStyle;
    numberFormatter.lenient = YES;
    NSNumber *number = [numberFormatter numberFromString:inputString];
    if(number) {
        resolve(number);
    } else {
        reject(nil, nil, nil);
    }
}
            
- (NSDictionary *)constantsToExport
{
    return @{
             @"locale": [self getCurrentLocale],
             @"decimalSeparator": [self getDecimalSeparator],
             @"quotationBeginDelimiterKey": [self getQuotationBeginDelimiterKey],
             @"quotationEndDelimiterKey": [self getQuotationEndDelimiterKey]
    };
}
@end
