package io.fixd.rctlocale;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;

import java.lang.String;
import java.text.DateFormat;
import java.util.Map;
import java.util.HashMap;
import java.util.Locale;
import java.util.Date;
import java.text.DecimalFormatSymbols;
import java.text.NumberFormat;
import java.text.DecimalFormat;
import java.lang.Long;

public class RCTLocaleModule extends ReactContextBaseJavaModule {

    private ReactApplicationContext mContext;

    public RCTLocaleModule(ReactApplicationContext reactContext) {
        super(reactContext);
        mContext = reactContext;
    }

    @Override
    public String getName() {
        return "RCTLocale";
    }

    @Override
    public Map<String, Object> getConstants() {

        Locale current = getLocale();
        DecimalFormatSymbols formatterSymbols = getDecimalFormat().getDecimalFormatSymbols();

        final Map<String, Object> constants = new HashMap<>();
        constants.put("localeIdentifier", current.toString());
        constants.put("decimalSeparator", String.valueOf(formatterSymbols.getDecimalSeparator()));
        constants.put("groupingSeparator", String.valueOf(formatterSymbols.getGroupingSeparator()));
        return constants;
    }

    @ReactMethod
    public void decimalStyle(Double number, Promise promise) {
        try {
            NumberFormat nf = NumberFormat.getNumberInstance(getLocale());
            nf.setGroupingUsed(true);
            promise.resolve(nf.format(number));
        } catch (Exception e) {
            promise.reject(e.getMessage());
        }
    }

    @ReactMethod
    public void numberFromDecimalString(String numberString, Promise promise) {
        try {
            NumberFormat nf = NumberFormat.getInstance(getLocale());
            promise.resolve(nf.parse(numberString));
        } catch (Exception e) {
            promise.reject(e.getMessage());
        }
    }

    @ReactMethod
    public void dateFormat(String timestamp, String dateStyle, String timeStyle, Promise promise) {
        try {
            Date date = new Date(Long.parseLong(timestamp));

            int dateStyleInt = this.getDateFormatIntFromString(dateStyle);
            int timeStyleInt = this.getDateFormatIntFromString(timeStyle);

            DateFormat dateFormatter;
            if(!dateStyle.equals("none") && !timeStyle.equals("none")) {
                Log.d("RCTLocale", "format 1");
                dateFormatter = DateFormat.getDateTimeInstance(dateStyleInt, timeStyleInt, getLocale());
            } else if(!dateStyle.equals("none") && timeStyle.equals("none")) {
                Log.d("RCTLocale", "format 2");
                dateFormatter = DateFormat.getDateInstance(dateStyleInt, getLocale());
            } else {
                Log.d("RCTLocale", "format 3");
                dateFormatter = DateFormat.getTimeInstance(timeStyleInt, getLocale());
            }

            promise.resolve(dateFormatter.format(date));

        } catch (Exception e) {
            promise.reject(e.getMessage());
        }
    }
    
    private int getDateFormatIntFromString(String stringStyle) {
        int dateFormatStyleint;
        switch(stringStyle) {
            case "long":
                dateFormatStyleint = DateFormat.LONG;
                break;
            case "medium":
                dateFormatStyleint = DateFormat.MEDIUM;
                break;
            case "short":
                dateFormatStyleint = DateFormat.SHORT;
                break;
            case "default":
                dateFormatStyleint = DateFormat.DEFAULT;
                break;
            default:
                dateFormatStyleint = DateFormat.FULL;
                break;
        }
        return dateFormatStyleint;
    }

    private Locale getLocale() {
        Locale current = mContext.getResources().getConfiguration().locale;
        return current;
    }

    private DecimalFormat getDecimalFormat() {
        DecimalFormat formatter = (DecimalFormat) DecimalFormat.getInstance(getLocale());
        return formatter;
    }
}