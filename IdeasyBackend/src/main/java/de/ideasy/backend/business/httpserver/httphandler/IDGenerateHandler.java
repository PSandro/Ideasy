package de.ideasy.backend.business.httpserver.httphandler;

import com.google.gson.JsonObject;
import de.ideasy.backend.business.IdGenerator;

import java.net.InetSocketAddress;
import java.util.Map;

/**
 * Created by sandro on 11.08.17.
 */
public class IDGenerateHandler extends AbstractHttpHandler {


    @Override
    public JsonObject handleRequest(Map<String, String> properties, InetSocketAddress inetSocketAddress) {
        final JsonObject response = new JsonObject();
        if (properties.containsKey("skey")) {
            String skey = properties.get("skey");
            //TODO validate skey
            if (skey.equals("lol")) {
                response.addProperty("success", "true");
                response.addProperty("message", "");
                response.addProperty("id", IdGenerator.generate());
            } else {
                response.addProperty("success", "false");
                response.addProperty("message", "SecurityKey is not valid!");
            }

        } else {
            response.addProperty("success", "false");
            response.addProperty("message", "no SecurityKey given!");
        }
        return response;
    }
}
