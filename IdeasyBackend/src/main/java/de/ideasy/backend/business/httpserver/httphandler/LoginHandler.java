package de.ideasy.backend.business.httpserver.httphandler;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonPrimitive;
import de.ideasy.backend.business.httpserver.HashCompareUtil;
import de.ideasy.backend.business.information.ThirdPartyInformation;
import de.ideasy.backend.business.login.SessionIdMap;
import de.ideasy.backend.persistence.AuthLog;
import de.ideasy.backend.persistence.AuthStatus;
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

        final JsonArray authWays = new JsonArray();
        authWays.add(new JsonPrimitive("password"));
        final String authWay = authWays.toString();
        /* AUTHENTICATION */

        if (!HashCompareUtil.checkPassword(hashedPassword, user.getPassword())) {
            //if (!hashedPassword.equals(user.getPassword())) {
            //TODO add more authentication thingies bla bla
            final AuthLog authFailLog = new AuthLog(user.getId(), thirdPartyInformation.getSecurityCustomer().getId(), System.currentTimeMillis(), authWay, thirdPartyInformation.getPriority(), "", AuthStatus.FAIL);
            try {
                this.dataManager.saveAuthLog(authFailLog);
            } catch (SQLException e) {
                e.printStackTrace();
            }
            return super.buildErrorObject("wrong password!");
        }
        final AuthLog authLog = new AuthLog(user.getId(), -1, System.currentTimeMillis(), authWay, thirdPartyInformation.getPriority(), "", AuthStatus.SUCCESS);
        try {
            this.dataManager.saveAuthLog(authLog);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        //TODO priority check

        SessionIdMap.remove(sessionId);
        JsonObject response = new JsonObject();


        response.addProperty("success", "true");
        response.addProperty("link", thirdPartyInformation.getRedirectLink());
        response.addProperty("customer", thirdPartyInformation.getSecurityCustomer().getCompanyName());
        response.addProperty("message", "Access granted!");

        //TODO send information back to third party
        return response;
    }

}
