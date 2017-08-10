package de.ideasy.backend.persistence.mysql;

import org.junit.Test;

import static org.junit.Assert.*;

/**
 * Created by sandro on 10.08.17.
 */
public class MySQLInfoTest {

    @Test
    public void validateMySQLInfo() {
        final String host = "lol";
        final String user = "i_bims";
        final String password = "xxxx";
        final String database = "hahahah";
        final int port = 9999;

        final MySQLInfo mySQLInfo = new MySQLInfo(host, user, database, password, port);

        assertEquals(mySQLInfo.getHost(), host);
        assertEquals(mySQLInfo.getUser(), user);
        assertEquals(mySQLInfo.getPassword(), password);
        assertEquals(mySQLInfo.getDatabase(), database);
        assertEquals(mySQLInfo.getPort(), port);
    }

}