package de.ideasy.backend.business.httpserver;

import org.junit.Test;

import static org.junit.Assert.*;

/**
 * Created by sandro on 12.08.17.
 */
public class HashCompareUtilTest {
    @Test
    public void checkPassword() throws Exception {
        String api_hashedPassword = "test";
        String orig_hashedPassword = "$2y$10$ZfFODMM0/jMGmWmllUNGwejS87Zx0bnsFt1aOEaKUiq5vcgr6TYCW";

        assertTrue(HashCompareUtil.checkPassword(api_hashedPassword, orig_hashedPassword));

    }

}