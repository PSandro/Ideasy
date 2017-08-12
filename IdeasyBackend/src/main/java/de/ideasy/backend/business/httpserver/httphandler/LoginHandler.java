package de.ideasy.backend.business.httpserver.httphandler;

import com.google.gson.JsonObject;
import de.ideasy.backend.business.information.ThirdPartyInformation;
import de.ideasy.backend.business.login.SessionIdMap;
import de.ideasy.backend.persistence.IDataManager;
import de.ideasy.backend.persistence.User;
import de.ideasy.backend.persistence.exception.UserNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.net.InetSocketAddress;
import java.sql.SQLException;
import java.util.Map;

/**
 * Created by sandro on 11.08.17.
 */
public class LoginHandler extends AbstractHttpHandler {

    private final IDataManager dataManager;

    private static final Logger LOGGER = LoggerFactory.getLogger("Login-Handler");

    public LoginHandler(IDataManager dataManager) {
        this.dataManager = dataManager;
    }

    @Override
    public JsonObject handleRequest(Map<String, String> propertyMap, InetSocketAddress inetSocketAddress) {

        LOGGER.info("INCOMING REQUEST from " + inetSocketAddress.getHostName() + ": " + propertyMap.toString());

        if (!propertyMap.containsKey("password") || !propertyMap.containsKey("id") || !propertyMap.containsKey("email")) {
            return super.buildErrorObject("Missing parameters!");
        }

        final String hashedPassword = propertyMap.get("password");
        final String sessionId = propertyMap.get("id");
        final String email = propertyMap.get("email");

        ThirdPartyInformation thirdPartyInformation = SessionIdMap.get(sessionId);
        if (thirdPartyInformation == null) {
            return super.buildErrorObject("Your sessionId is invalid!");
        }

        User user;
        try {

            user = this.dataManager.getUserByEmail(email);
        } catch (UserNotFoundException e) {
            return super.buildErrorObject(e.getMessage());
        } catch (SQLException e) {
            e.printStackTrace();
            return super.buildErrorObject("error with mysql connection!");
        }

        /* AUTHENTICATION */
        if (!hashedPassword.equals(user.getPassword())) {
            //TODO add more authentication thingies bla bla
            return super.buildErrorObject("wrong password!");
        }

        //TODO priority

        SessionIdMap.remove(sessionId);
        JsonObject response = new JsonObject();

        response.addProperty("success", "true");
        response.addProperty("link", thirdPartyInformation.getRedirectLink());
        response.addProperty("customer", thirdPartyInformation.getSecurityCustomer().getCompanyName());
        response.addProperty("message", "Access granted!");


        return response;
    }
}
