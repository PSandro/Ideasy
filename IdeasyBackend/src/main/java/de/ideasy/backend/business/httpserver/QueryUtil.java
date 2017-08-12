package de.ideasy.backend.business.httpserver;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by sandro on 11.08.17.
 */
public class QueryUtil {

    public static Map<String, String> queryToMap(String query) {
        Map<String, String> result = new HashMap<String, String>();
        for (String param : query.split("&")) {
            String pair[] = param.split("=");
            if (pair.length > 1) {
                result.put(pair[0], pair[1]);
            } else {
                result.put(pair[0], "");
            }
        }
        return result;
    }
}
