package de.ideasy.backend.business.httpserver.httphandler;

import com.google.gson.JsonObject;
import com.google.gson.JsonParseException;
import de.ideasy.backend.business.information.HomeAddress;
import de.ideasy.backend.business.information.IInformationManager;
import de.ideasy.backend.business.information.InformationManager;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.net.InetSocketAddress;
import java.sql.SQLException;
import java.util.Map;

/**
 * Created by sandro on 11.08.17.
 */
public class CheckForAuthHandler extends AbstractHttpHandler {

    private static Logger LOGGER = LoggerFactory.getLogger("CheckForAuthHandler");

    private final IInformationManager informationManager;

    public CheckForAuthHandler(IInformationManager informationManager) {
        this.informationManager = informationManager;
    }


    @Override
    public JsonObject handleRequest(Map<String, String> propertyMap, InetSocketAddress inetSocketAddress) {
        CheckForAuthHandler.LOGGER.info("INCOMING REQUEST from " + inetSocketAddress.getHostName() + ": " + propertyMap.toString());

        if (propertyMap.containsKey("address")) {
            return this.checkAddress(propertyMap);
        } else if (propertyMap.containsKey("email")) {
            return this.checkEmail(propertyMap);
        } else
            return super.buildErrorObject("Missing parameters!");

    }


    private JsonObject checkEmail(Map<String, String> propertyMap) {
        final String email = propertyMap.get("email");
        final JsonObject response = new JsonObject();
        try {
            if (this.informationManager.checkEmail(email)) {
                response.addProperty("success", "true");
                response.addProperty("message", "email address exists in database an needs an authentication!");
            } else {
                return super.buildErrorObject("User does not exist in database");
            }
        } catch (SQLException e) {
            e.printStackTrace();
            return super.buildErrorObject("mysql error");
        }

        return response;
    }

    private JsonObject checkAddress(Map<String, String> propertyMap) {
        final String rawAddress = propertyMap.get("address");
        final HomeAddress homeAddress;
        try {
            homeAddress = InformationManager.getGSON().fromJson(rawAddress, HomeAddress.class);
        } catch (JsonParseException e) {
            return super.buildErrorObject("Address Syntax: " + e.getMessage());
        }
        final JsonObject response = new JsonObject();
        try {
            if (this.informationManager.checkAddress(homeAddress)) {
                response.addProperty("success", "true");
                response.addProperty("message", "address exists in database an needs an authentication!");
            } else {
                return super.buildErrorObject("address does not exist in database");
            }
        } catch (SQLException e) {
            e.printStackTrace();
            return super.buildErrorObject("mysql error");
        }

        return response;
    }
}
