package de.ideasy.backend.business;

import java.util.UUID;

/**
 * Created by sandro on 11.08.17.
 */
public class IdGenerator {

    public static final String generate() {
        return UUID.randomUUID().toString();
    }


}
