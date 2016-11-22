//
//  RCTLocale.h
//  RCTLocale
//

#import <Foundation/Foundation.h>
#import "RCTBridgeModule.h"
#import "RCTLog.h"
#import "RCTConvert.h"

@interface RCTConvert (NSDateFormatterStyle)
    + (NSDateFormatterStyle)NSDateFormatterStyle:(id)json;
@end

@interface RCTLocale : NSObject <RCTBridgeModule>
@end
