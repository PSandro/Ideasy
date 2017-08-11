package de.ideasy.backend.business.information;

import de.ideasy.backend.persistence.User;

/**
 * Created by sandro on 11.08.17.
 */
public enum UserAttribut {
    FIRST_NAME(String.class, "firstName"),
    LAST_NAME(String.class, "lastName"),
    BIRTH(Long.class, "birth"),
    PLACE_OF_BIRTH(String.class, "placeOfBirth"),
    ADDRESS(String.class, "address"),
    NATIONALITY(String.class, "nationality"),
    ID_CARD_ID(Long.class, "idCardId"),
    EYE_COLOR(String.class, "eyeColor"),
    ID_CARD_EXPIRATION(Long.class, "idCardExpiration");


    private final Class<?> type;
    private final String fieldName;

    UserAttribut(Class<?> type, String fieldName) {
        this.type = type;
        this.fieldName = fieldName;
    }

    public Class<?> getType() {
        return type;
    }

    public String getFieldName() {
        return fieldName;
    }

    public static UserAttribut fetchByFieldName(final String fieldName) {
        for (UserAttribut userAttribut : UserAttribut.values()) {
            if (fieldName.equalsIgnoreCase(userAttribut.getFieldName()))
                return userAttribut;
        }
        return null;
    }
}
