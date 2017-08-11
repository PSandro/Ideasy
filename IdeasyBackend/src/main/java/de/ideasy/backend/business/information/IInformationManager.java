package de.ideasy.backend.business.information;


import de.ideasy.backend.persistence.exception.UserNotFoundException;

import java.sql.SQLException;
import java.util.Map;

/**
 * Created by sandro on 11.08.17.
 */
public interface IInformationManager {

    boolean checkEmail(String email) throws SQLException;

    boolean checkAddress(FormattedAddress address) throws SQLException;

    ValidationResult validateUser(int id, Map<UserAttribut, String> userInforamtion) throws UserNotFoundException, SQLException;

    ValidationResult validateUser(String email, Map<UserAttribut, String> userInforamtion) throws UserNotFoundException, SQLException;

}
