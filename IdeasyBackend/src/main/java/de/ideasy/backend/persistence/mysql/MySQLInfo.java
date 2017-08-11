package de.ideasy.backend.persistence.mysql;

/**
 * Created by sandro on 10.08.17.
 */
public final class MySQLInfo {
    private final String host;
    private final String user;
    private final String database;
    private final String password;
    private final int port;

    public MySQLInfo(String host, String user, String database, String password, int port) {
        this.host = host;
        this.user = user;
        this.database = database;
        this.password = password;
        this.port = port;
    }

    public String getHost() {
        return host;
    }

    public String getUser() {
        return user;
    }

    public String getDatabase() {
        return database;
    }

    public String getPassword() {
        return password;
    }

    public int getPort() {
        return port;
    }
}
