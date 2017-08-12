package de.ideasy.backend.persistence;

import com.google.common.base.Preconditions;

/**
 * Created by sandro on 12.08.17.
 */
public final class AuthLog {

    private final int userId;
    private final int customerId;
    private final long timeStamp;
    private final String authWays;
    private final int priority;
    private final String addition;
    private final AuthStatus status;

    public AuthLog(int userId, int customerId, long timeStamp, String authWays, int priority, String addition, AuthStatus status) {

        Preconditions.checkNotNull(authWays);
        Preconditions.checkNotNull(status);
        this.userId = userId;
        this.customerId = customerId;
        this.timeStamp = timeStamp;
        this.authWays = authWays;
        this.priority = priority;
        this.addition = addition;
        this.status = status;
    }

    public int getUserId() {
        return userId;
    }

    public int getCustomerId() {
        return customerId;
    }

    public long getTimeStamp() {
        return timeStamp;
    }

    public String getAuthWays() {
        return authWays;
    }

    public int getPriority() {
        return priority;
    }

    public String getAddition() {
        return addition;
    }

    public AuthStatus getStatus() {
        return status;
    }
}
