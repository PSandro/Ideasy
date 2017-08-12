package de.ideasy.backend.business.httpserver.httphandler;

import com.google.gson.JsonObject;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import de.ideasy.backend.business.IdGenerator;
import de.ideasy.backend.business.httpserver.QueryUtil;

import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.util.Map;

/**
 * Created by sandro on 11.08.17.
 */
public abstract class AbstractHttpHandler implements HttpHandler {


    public AbstractHttpHandler() {

    }


    @Override
    public void handle(HttpExchange exchange) throws IOException {
        final String query = exchange.getRequestURI().getQuery();
        final InetSocketAddress address = exchange.getRemoteAddress();
        final JsonObject response = new JsonObject();
        if (query == null) {
            response.addProperty("success", "false");
            response.addProperty("message", "no parameters given");
            this.respond(response, exchange);
        }
        final Map<String, String> propertyMap = QueryUtil.queryToMap(query);

        final JsonObject handlingResponse = this.handleRequest(propertyMap, address);

        if (handlingResponse == null || handlingResponse.isJsonNull()) {
            JsonObject errorObject = new JsonObject();
            errorObject.addProperty("success", "false");
            errorObject.addProperty("message", "Handler did not accept the request!");
            this.respond(errorObject, exchange);
        } else {
            this.respond(handlingResponse, exchange);
        }


    }

    public JsonObject buildErrorObject(final String message) {
        final JsonObject jsonObject = new JsonObject();
        jsonObject.addProperty("success", "false");
        jsonObject.addProperty("message", message);
        return jsonObject;
    }


    public abstract JsonObject handleRequest(Map<String, String> propertyMap, InetSocketAddress inetSocketAddress);

    private void respond(final JsonObject response, HttpExchange exchange) throws IOException {
        final String rawResponse = response.toString();
        exchange.sendResponseHeaders(200, rawResponse.length());
        final OutputStream os = exchange.getResponseBody();
        os.write(rawResponse.getBytes());
        os.close();
    }
}
