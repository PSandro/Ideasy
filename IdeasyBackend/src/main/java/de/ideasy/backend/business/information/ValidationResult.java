package de.ideasy.backend.business.information;

/**
 * Created by sandro on 11.08.17.
 */
public final class ValidationResult {

    private final boolean result;
    private final String error;

    public ValidationResult(boolean result, String error) {
        this.result = result;
        this.error = error;
    }

    public ValidationResult(boolean result) {
        this.result = result;
        this.error = null;
    }

    public String getError() {
        return error;
    }

    public boolean getResult() {
        return result;
    }
}
