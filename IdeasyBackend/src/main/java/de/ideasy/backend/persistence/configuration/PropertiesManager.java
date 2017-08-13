package de.ideasy.backend.persistence.configuration;

import de.ideasy.backend.persistence.mysql.MySQLInfo;

import java.io.*;
import java.util.Properties;

/**
 * Created by sandro on 13.08.17.
 */
public class PropertiesManager {

    private static final String PROPERTIES_NAME = "ideasy.properties";

    private static final Properties DEFAULT_PROPERTIES = new Properties();

    static {
        DEFAULT_PROPERTIES.setProperty("mysql.host", "mysql.ideasy.de");
        DEFAULT_PROPERTIES.setProperty("mysql.user", "ideasy");
        DEFAULT_PROPERTIES.setProperty("mysql.database", "ideasy");
        DEFAULT_PROPERTIES.setProperty("mysql.password", "");
        DEFAULT_PROPERTIES.setProperty("mysql.port", "3306");
    }

    private final Properties properties;

    public PropertiesManager() throws IOException {
        this.createIfNotExists();
        this.properties = this.loadProperties();
    }

    public MySQLInfo getMySQLInfo() {
        final String host = this.properties.getProperty("mysql.host");
        final String user = this.properties.getProperty("mysql.user");
        final String database = this.properties.getProperty("mysql.database");
        final String password = this.properties.getProperty("mysql.password");
        final int port = Integer.parseInt(this.properties.getProperty("mysql.port"));

        return new MySQLInfo(host, user, database, password, port);
    }


    private Properties loadProperties() throws IOException {
        final FileInputStream inputStream = new FileInputStream(PROPERTIES_NAME);
        final Properties properties = new Properties();
        properties.load(inputStream);
        return properties;
    }


    private void createProperties() throws IOException {
        FileOutputStream outputStream = new FileOutputStream(PROPERTIES_NAME);
        DEFAULT_PROPERTIES.store(outputStream, "init default properties");
        outputStream.close();
    }


    private void createIfNotExists() throws IOException {
        final File file = new File(PROPERTIES_NAME);
        if (!file.exists()) {
            this.createProperties();
        }
    }


}
