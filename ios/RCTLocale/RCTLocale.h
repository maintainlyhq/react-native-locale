//
//  RCTLocale.h
//  RCTLocale
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"
#import "React/RCTLog.h"
#import "React/RCTConvert.h"

@interface RCTConvert (NSDateFormatterStyle)
    + (NSDateFormatterStyle)NSDateFormatterStyle:(id)json;
@end

@interface RCTLocale : NSObject <RCTBridgeModule>
@end
