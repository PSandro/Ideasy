package de.ideasy.backend.persistence;

import de.ideasy.backend.business.customer.SecurityCustomer;
import de.ideasy.backend.business.information.FormattedAddress;
import de.ideasy.backend.business.information.HomeAddress;
import de.ideasy.backend.persistence.exception.CustomerNotFoundException;
import de.ideasy.backend.persistence.exception.UserNotFoundException;

import java.sql.SQLException;
import java.util.Set;

/**
 * Created by sandro on 10.08.17.
 */
public interface IDataManager {

    User getUserById(int id) throws UserNotFoundException, SQLException;

    User getUserByEmail(final String email) throws UserNotFoundException, SQLException;

    User getUserByAddress(FormattedAddress homeAddress) throws SQLException, UserNotFoundException;

    SecurityCustomer getSecurityCustomer(String key) throws SQLException, CustomerNotFoundException;

    void saveAuthLog(AuthLog authLog) throws SQLException;

}
