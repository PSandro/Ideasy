package de.ideasy.backend.persistence.exception;

import java.io.IOException;

/**
 * Created by sandro on 10.08.17.
 */
public abstract class IdeasyPersistenceException extends IOException {
    public IdeasyPersistenceException() {
        super();
    }

    public IdeasyPersistenceException(String message) {
        super(message);
    }
}
