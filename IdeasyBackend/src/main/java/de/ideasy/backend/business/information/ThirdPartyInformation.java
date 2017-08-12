package de.ideasy.backend.business.information;

import com.google.common.base.Preconditions;
import de.ideasy.backend.business.customer.SecurityCustomer;

import java.util.Map;

/**
 * Created by sandro on 11.08.17.
 */
public final class ThirdPartyInformation {
    private final String redirectLink;
    private final int priority;
    private final String sessionId;
    private final SecurityCustomer securityCustomer;
    private final Map<UserAttribut, String> properties;

    public ThirdPartyInformation(String redirectLink, int priority, String sessionId, SecurityCustomer securityCustomer, Map<UserAttribut, String> properties) {
        Preconditions.checkNotNull(redirectLink, "The redirectLink cannot be null!");
        Preconditions.checkNotNull(sessionId, "The sessionId cannot be null!");
        Preconditions.checkNotNull(properties, "The properties cannot be null!");
        Preconditions.checkNotNull(securityCustomer, "The securityCustomer cannot be null!");
        this.redirectLink = redirectLink;
        this.priority = priority;
        this.sessionId = sessionId;
        this.properties = properties;
        this.securityCustomer = securityCustomer;
    }


    public SecurityCustomer getSecurityCustomer() {
        return securityCustomer;
    }

    public String getRedirectLink() {
        return redirectLink;
    }

    public int getPriority() {
        return priority;
    }

    public String getSessionId() {
        return sessionId;
    }

    public Map<UserAttribut, String> getProperties() {
        return properties;
    }
}
