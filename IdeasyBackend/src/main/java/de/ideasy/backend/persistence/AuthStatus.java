package de.ideasy.backend.persistence;

/**
 * Created by sandro on 12.08.17.
 */
public enum AuthStatus {
    SUCCESS,
    FAIL,
    NO_RESPONSE;


    @Override
    public String toString() {
        return this.name().toLowerCase();
    }
}
