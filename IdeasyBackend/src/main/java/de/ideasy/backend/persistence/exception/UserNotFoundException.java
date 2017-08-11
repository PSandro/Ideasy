package de.ideasy.backend.persistence.exception;

import java.io.IOException;

/**
 * Created by sandro on 10.08.17.
 */
public class UserNotFoundException extends IdeasyPersistenceException {

    public UserNotFoundException(final int id) {
        super("No user with the user id " + id + " was found!");
    }

    public UserNotFoundException(final String email) {
        super("No user with the email " + email + " was found!");
    }
}
