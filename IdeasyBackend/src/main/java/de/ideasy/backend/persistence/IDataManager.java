package de.ideasy.backend.persistence;

import de.ideasy.backend.persistence.exception.UserNotFoundException;

import java.util.Set;

/**
 * Created by sandro on 10.08.17.
 */
public interface IDataManager {

    User getUserById(int id) throws UserNotFoundException;

    User getUserByEmail(final String email) throws UserNotFoundException;

}
