package de.ideasy.backend.persistence.exception;

/**
 * Created by sandro on 11.08.17.
 */
public class CustomerNotFoundException extends IdeasyPersistenceException {

    public CustomerNotFoundException(final String key) {
        super("No customer with this security key was found!");
    }
}
