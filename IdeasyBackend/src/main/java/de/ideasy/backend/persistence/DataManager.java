package de.ideasy.backend.persistence;

import com.google.common.base.Preconditions;
import de.ideasy.backend.persistence.exception.UserNotFoundException;
import de.ideasy.backend.persistence.mysql.MySQLClient;
import de.ideasy.backend.persistence.mysql.MySQLInfo;

/**
 * Created by sandro on 10.08.17.
 */
public class DataManager implements IDataManager {

    private final MySQLClient mySQLClient;

    public DataManager(final MySQLInfo mySQLInfo) {
        Preconditions.checkNotNull(mySQLInfo, "The MySQLInfo cannot be null");
        this.mySQLClient = new MySQLClient(mySQLInfo);
    }

    @Override
    public User getUserById(int id) throws UserNotFoundException {
        final User user = this.getUserById(id);
        if (user == null) throw new UserNotFoundException(id);
        return user;
    }

    @Override
    public User getUserByEmail(String email) throws UserNotFoundException {
        final User user = this.getUserByEmail(email);
        if (user == null) throw new UserNotFoundException(email);
        return user;
    }
}
