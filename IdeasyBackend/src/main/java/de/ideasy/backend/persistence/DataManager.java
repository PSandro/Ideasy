package de.ideasy.backend.persistence;

import com.google.common.base.Preconditions;
import de.ideasy.backend.business.customer.SecurityCustomer;
import de.ideasy.backend.business.information.FormattedAddress;
import de.ideasy.backend.business.information.HomeAddress;
import de.ideasy.backend.persistence.exception.CustomerNotFoundException;
import de.ideasy.backend.persistence.exception.UserNotFoundException;
import de.ideasy.backend.persistence.mysql.MySQLClient;
import de.ideasy.backend.persistence.mysql.MySQLInfo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.sql.SQLException;

/**
 * Created by sandro on 10.08.17.
 */
public class DataManager implements IDataManager {

    private final MySQLClient mySQLClient;
    private final Logger logger;

    public DataManager(final MySQLInfo mySQLInfo) {
        Preconditions.checkNotNull(mySQLInfo, "The MySQLInfo cannot be null");
        this.logger = LoggerFactory.getLogger(DataManager.class);
        this.logger.info("connecting to mysql server...");
        this.mySQLClient = new MySQLClient(mySQLInfo);
        this.logger.info("connected!");
    }

    @Override
    public User getUserById(int id) throws UserNotFoundException, SQLException {
        final User user = this.mySQLClient.getById(id);
        if (user == null) throw new UserNotFoundException(id);
        return user;
    }

    @Override
    public User getUserByEmail(String email) throws UserNotFoundException, SQLException {
        final User user = this.mySQLClient.getByEmail(email);
        if (user == null) throw new UserNotFoundException(email);
        return user;
    }

    @Override
    public User getUserByAddress(FormattedAddress homeAddress) throws SQLException, UserNotFoundException {
        final User user = this.mySQLClient.getByAddress(homeAddress.format());
        if (user == null) throw new UserNotFoundException((HomeAddress) homeAddress);
        return user;
    }

    @Override
    public SecurityCustomer getSecurityCustomer(String key) throws SQLException, CustomerNotFoundException {
        Preconditions.checkNotNull(key, "The key cannt be null!");
        final SecurityCustomer securityCustomer = this.mySQLClient.getCustomerByKey(key);
        if (securityCustomer == null) throw new CustomerNotFoundException(key);
        return securityCustomer;
    }

    @Override
    public void saveAuthLog(AuthLog authLog) throws SQLException {
        Preconditions.checkNotNull(authLog, "The authLog cannot be null!");
        this.mySQLClient.saveAuthLog(authLog);
    }
}
