package de.ideasy.backend.persistence.configuration;

import de.ideasy.backend.persistence.mysql.MySQLInfo;
import org.junit.Test;

import static org.junit.Assert.*;

/**
 * Created by sandro on 13.08.17.
 */
public class PropertiesManagerTest {
    @Test
    public void getMySQLInfo() throws Exception {

        PropertiesManager propertiesManager = new PropertiesManager();
        final MySQLInfo mySQLInfo = propertiesManager.getMySQLInfo();

        assertEquals("mysql.ideasy.de", mySQLInfo.getHost());
        assertEquals("ideasy", mySQLInfo.getUser());
        assertEquals("ideasy", mySQLInfo.getDatabase());
        assertEquals("", mySQLInfo.getPassword());
        assertEquals(3306, mySQLInfo.getPort());
    }

}