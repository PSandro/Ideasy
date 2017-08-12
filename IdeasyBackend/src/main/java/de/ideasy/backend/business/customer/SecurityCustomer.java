package de.ideasy.backend.business.customer;

import com.google.common.base.Preconditions;

/**
 * Created by sandro on 11.08.17.
 */
public final class SecurityCustomer {
    private final int id;
    private final String companyName;
    private final String securityKey;
    private final long registration;
    private final long expiration;

    public SecurityCustomer(int id, String companyName, String securityKey, long registration, long expiration) {
        Preconditions.checkNotNull(id, "The id cannot be null!");
        Preconditions.checkNotNull(companyName, "The companyName cannot be null!");
        Preconditions.checkNotNull(securityKey, "The securityKey cannot be null!");
        Preconditions.checkNotNull(registration, "The registration cannot be null!");
        Preconditions.checkNotNull(expiration, "The expiration cannot be null!");
        this.id = id;
        this.companyName = companyName;
        this.securityKey = securityKey;
        this.registration = registration;
        this.expiration = expiration;
    }

    public int getId() {
        return id;
    }

    public long getExpiration() {
        return expiration;
    }

    public long getRegistration() {
        return registration;
    }

    public String getCompanyName() {
        return companyName;
    }

    public String getSecurityKey() {
        return securityKey;
    }
}
