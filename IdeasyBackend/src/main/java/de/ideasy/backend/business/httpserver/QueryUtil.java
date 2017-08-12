package de.ideasy.backend.business.httpserver;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by sandro on 11.08.17.
 */
public class QueryUtil {

    public static Map<String, String> parseQuery(String query) throws UnsupportedEncodingException {
        final Map<String, String> map = new HashMap<>();
        QueryUtil.parseQuery(query, map);
        return map;
    }

    public static void parseQuery(String query, Map<String,
            String> parameters) throws UnsupportedEncodingException {

        if (query != null) {
            String pairs[] = query.split("[&]");
            for (String pair : pairs) {
                String param[] = pair.split("[=]");
                String key = null;
                String value = null;
                if (param.length > 0) {
                    key = URLDecoder.decode(param[0],
                            System.getProperty("file.encoding"));
                }

                if (param.length > 1) {
                    value = URLDecoder.decode(param[1],
                            System.getProperty("file.encoding"));
                }
                parameters.put(key, value);
            }
        }
    }
}
