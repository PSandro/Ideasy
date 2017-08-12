package de.ideasy.backend.business.httpserver.httphandler;

import com.google.gson.JsonObject;
import de.ideasy.backend.business.IdGenerator;
import de.ideasy.backend.business.customer.SecurityCustomer;
import de.ideasy.backend.business.information.IInformationManager;
import de.ideasy.backend.business.information.ThirdPartyInformation;
import de.ideasy.backend.business.information.UserAttribut;
import de.ideasy.backend.business.login.SessionIdMap;
import de.ideasy.backend.persistence.exception.CustomerNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.net.InetSocketAddress;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by sandro on 11.08.17.
 */
public class VerifyHandler extends AbstractHttpHandler {

    private final IInformationManager informationManager;
    private static final Logger LOGGER = LoggerFactory.getLogger("VerifyHandler");

    public VerifyHandler(IInformationManager informationManager) {
        this.informationManager = informationManager;
    }


    @Override
    public JsonObject handleRequest(Map<String, String> propertyMap, InetSocketAddress inetSocketAddress) {

        LOGGER.info("INCOMING REQUEST from " + inetSocketAddress.getHostName() + ": " + propertyMap.toString());

        if (!propertyMap.containsKey("skey") || !propertyMap.containsKey("link") || !propertyMap.containsKey("priority")) {
            return super.buildErrorObject("Missing parameters!");
        }
        final JsonObject response = new JsonObject();
        final String securityKey = propertyMap.get("skey");
        final String redirectLink = propertyMap.get("link");
        final String rawPriority = propertyMap.get("priority");
        int priority = 1;

        try {
            priority = Integer.parseInt(rawPriority);
        } catch (NumberFormatException e) {
            return super.buildErrorObject("The priority is not a valid integer!");
        }

        //removing unnecessary entrys
        propertyMap.remove("link");
        propertyMap.remove("priority");
        propertyMap.remove("skey");

        SecurityCustomer customer;
        try {

            customer = this.informationManager.getCustomer(securityKey);
        } catch (CustomerNotFoundException e) {
            return super.buildErrorObject("the given security does not match to any of our customers or is expired!");
        } catch (SQLException e) {
            e.printStackTrace();
            return super.buildErrorObject("error with mysql connection!");
        }

        final Map<UserAttribut, String> userInformation = new HashMap<>();
        for (Map.Entry entry : propertyMap.entrySet()) {
            String rawUserAttribut = (String) entry.getKey();
            String value = (String) entry.getValue();

            UserAttribut match = UserAttribut.fetchByFieldName(rawUserAttribut);
            if (match == null) {
                return super.buildErrorObject(String.format("No UserAttribut for field '%s' was found", rawUserAttribut));
            } else {
                userInformation.put(match, value);
            }
        }

        final String sessionId = IdGenerator.generate();
        final ThirdPartyInformation thirdPartyInformation = new ThirdPartyInformation(redirectLink, priority, sessionId, customer, userInformation);


        SessionIdMap.put(sessionId, thirdPartyInformation);
        response.addProperty("success", "true");
        response.addProperty("message", "");
        response.addProperty("id", sessionId);
        return response;
    }
}
