package de.ideasy.backend.persistence.mysql;

import com.google.common.base.Preconditions;
import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import de.ideasy.backend.business.customer.SecurityCustomer;
import de.ideasy.backend.persistence.AuthLog;
import de.ideasy.backend.persistence.User;
import de.ideasy.backend.persistence.UserInformation;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by sandro on 10.08.17.
 */
public class MySQLClient {
    private final HikariDataSource hikariDataSource;
    private static final String TABLE_IDEASY_USER = "ideasyUser";
    private static final String TABLE_IDEASY_USER_DATA = "ideasyUserData";


    public MySQLClient(final String host, final String user, int port, final String password, final String database) {
        Preconditions.checkNotNull(host, "The host cannot be null");
        Preconditions.checkNotNull(user, "The user cannot be null");
        Preconditions.checkNotNull(password, "The password cannot be null");
        Preconditions.checkNotNull(database, "The database cannot be null");

        Preconditions.checkArgument(!host.isEmpty(), "The host cannot be empty!");
        Preconditions.checkArgument(!user.isEmpty(), "The user cannot be empty!");
        Preconditions.checkArgument(!database.isEmpty(), "The database cannot be empty!");
        HikariConfig hikariConfig = new HikariConfig();
        hikariConfig.setMaximumPoolSize(10);
        hikariConfig.setConnectionTimeout(5000);
        hikariConfig.addDataSourceProperty("user", user);
        hikariConfig.addDataSourceProperty("password", password);
        hikariConfig.addDataSourceProperty("url", "jdbc:mysql://" + host + ":" + port + "/" + database);
        hikariConfig.setDataSourceClassName("com.mysql.jdbc.jdbc2.optional.MysqlDataSource");
        hikariDataSource = new HikariDataSource(hikariConfig);
    }

    public MySQLClient(final MySQLInfo mySQLInfo) {
        this(mySQLInfo.getHost(), mySQLInfo.getUser(), mySQLInfo.getPort(), mySQLInfo.getPassword(), mySQLInfo.getDatabase());
    }

    public User getById(int id) throws SQLException {
        try (Connection connection = this.hikariDataSource.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement("SELECT ideasyUserData.*, ideasyUser.email, ideasyUser.password FROM `ideasyUserData` LEFT JOIN `ideasyUser` ON ideasyUserData.id = ideasyUser.id WHERE " + TABLE_IDEASY_USER + ".id = ?;")) {
            preparedStatement.setInt(1, id);
            ResultSet resultSet = preparedStatement.executeQuery();
            if (!resultSet.next()) return null;
            final String email = resultSet.getString(TABLE_IDEASY_USER + ".email");
            final String password = resultSet.getString(TABLE_IDEASY_USER + ".password");

            final String firstName = resultSet.getString("firstName");
            final String lastName = resultSet.getString("lastName");
            final long birth = resultSet.getLong("birth");
            final String placeOfBirth = resultSet.getString("placeOfBirth");
            final String nationality = resultSet.getString("nationality");
            final String address = resultSet.getString("address");
            final String idCardId = resultSet.getString("idCardId");
            final String eyeColor = resultSet.getString("eyeColor");
            final long idCardExpiration = resultSet.getLong("idCardExpiration");
            resultSet.close();
            final UserInformation userInformation = new UserInformation(
                    id,
                    firstName,
                    lastName,
                    birth,
                    placeOfBirth,
                    nationality,
                    idCardId,
                    eyeColor,
                    address, idCardExpiration);

            return new User(id, email, password, userInformation);
        }
    }

    public SecurityCustomer getCustomerByKey(final String key) throws SQLException {
        try (Connection connection = this.hikariDataSource.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement("SELECT * FROM ideasyCustomer WHERE securityKey = ?;")) {
            preparedStatement.setString(1, key);
            ResultSet resultSet = preparedStatement.executeQuery();
            if (!resultSet.next()) return null;
            final int id = resultSet.getInt("id");
            final String companyName = resultSet.getString("companyName");
            final String securityKey = resultSet.getString("securityKey");
            final String apiResponseLink = resultSet.getString("apiLink");
            final long registration = resultSet.getLong("registration");
            final long expiration = resultSet.getLong("expiration");
            resultSet.close();
            return new SecurityCustomer(id, companyName, securityKey, apiResponseLink, registration, expiration);
        }
    }

    public User getByEmail(final String email) throws SQLException {
        Preconditions.checkNotNull(email, "The email cannot be null");
        try (Connection connection = this.hikariDataSource.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement("SELECT ideasyUserData.*, ideasyUser.password FROM `ideasyUserData` LEFT JOIN `ideasyUser` ON ideasyUserData.id = ideasyUser.id WHERE " + TABLE_IDEASY_USER + ".email LIKE ?;")) {
            preparedStatement.setString(1, email);
            ResultSet resultSet = preparedStatement.executeQuery();
            if (!resultSet.next()) return null;
            final int id = resultSet.getInt("id");
            final String password = resultSet.getString(TABLE_IDEASY_USER + ".password");

            final String firstName = resultSet.getString("firstName");
            final String lastName = resultSet.getString("lastName");
            final long birth = resultSet.getLong("birth");
            final String placeOfBirth = resultSet.getString("placeOfBirth");
            final String nationality = resultSet.getString("nationality");
            final String address = resultSet.getString("address");
            final String idCardId = resultSet.getString("idCardId");
            final String eyeColor = resultSet.getString("eyeColor");
            final long idCardExpiration = resultSet.getLong("idCardExpiration");
            resultSet.close();
            final UserInformation userInformation = new UserInformation(
                    id,
                    firstName,
                    lastName,
                    birth,
                    placeOfBirth,
                    nationality,
                    idCardId,
                    eyeColor,
                    address, idCardExpiration);

            return new User(id, email, password, userInformation);
        }
    }

    public User getByAddress(String address) throws SQLException {
        Preconditions.checkNotNull(address, "The email cannot be null");
        try (Connection connection = this.hikariDataSource.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement("SELECT ideasyUserData.*, ideasyUser.password FROM `ideasyUserData` LEFT JOIN `ideasyUser` ON ideasyUserData.id = ideasyUser.id WHERE " + TABLE_IDEASY_USER_DATA + ".address LIKE ?;")) {
            preparedStatement.setString(1, address);
            ResultSet resultSet = preparedStatement.executeQuery();
            if (!resultSet.next()) return null;
            final int id = resultSet.getInt("id");
            final String password = resultSet.getString(TABLE_IDEASY_USER + ".password");

            final String firstName = resultSet.getString("firstName");
            final String lastName = resultSet.getString("lastName");
            final long birth = resultSet.getLong("birth");
            final String placeOfBirth = resultSet.getString("placeOfBirth");
            final String nationality = resultSet.getString("nationality");
            final String email = resultSet.getString("email");
            final String idCardId = resultSet.getString("idCardId");
            final String eyeColor = resultSet.getString("eyeColor");
            final long idCardExpiration = resultSet.getLong("idCardExpiration");
            resultSet.close();
            final UserInformation userInformation = new UserInformation(
                    id,
                    firstName,
                    lastName,
                    birth,
                    placeOfBirth,
                    nationality,
                    idCardId,
                    eyeColor,
                    address, idCardExpiration);

            return new User(id, email, password, userInformation);
        }
    }

    public void saveAuthLog(AuthLog authLog) throws SQLException {
        Preconditions.checkNotNull(authLog, "The authLog cannot be null!");
        try (Connection connection = this.hikariDataSource.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement("INSERT INTO `ideasyAuthenticationLog`" +
                     "(`userId`, `customerId`, `timeStamp`, `authWay`, `priority`, `addition`, `status`) VALUES (?,?,?,?,?,?,?)")) {
            preparedStatement.setInt(1, authLog.getUserId());
            preparedStatement.setInt(2, authLog.getCustomerId());
            preparedStatement.setLong(3, authLog.getTimeStamp());
            preparedStatement.setString(4, authLog.getAuthWays());
            preparedStatement.setInt(5, authLog.getPriority());
            preparedStatement.setString(6, authLog.getAddition());
            preparedStatement.setString(7, authLog.getStatus().toString());
            preparedStatement.executeUpdate();
        }
    }
}
