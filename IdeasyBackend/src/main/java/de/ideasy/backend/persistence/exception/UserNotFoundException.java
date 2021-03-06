package de.ideasy.backend.persistence.exception;

import de.ideasy.backend.business.information.HomeAddress;

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

    public UserNotFoundException(final HomeAddress homeAddress) {
        super("No user with the homeAddres (city=" + homeAddress.getCityName() + ",...) was found!");
    }

}
