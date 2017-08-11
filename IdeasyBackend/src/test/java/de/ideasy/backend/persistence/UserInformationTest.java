package de.ideasy.backend.persistence;

import org.junit.Test;

import static org.junit.Assert.*;

/**
 * Created by sandro on 10.08.17.
 */
public class UserInformationTest {

    @Test
    public void validateUserInformation() {
        final int id = 1;
        final String firstName = "Sandro";
        final String lastName = "P";
        long birth = 16551654684L;
        final String placeOfBirth = "fdsapjk";
        final String nationality = "DE";
        final String idCardId = "sdfdsaf454";
        final String eyeColor = "LOL";
        final String address = "54fdsa";
        long idCardExpiration = 546564668465L;

        UserInformation userInformation = new UserInformation(
                id, firstName, lastName, birth, placeOfBirth, nationality, idCardId, eyeColor, address, idCardExpiration
        );

        assertEquals(userInformation.getId(), id);
        assertEquals(userInformation.getFirstName(), firstName);
        assertEquals(userInformation.getLastName(), lastName);
        assertEquals(userInformation.getBirth(), birth);
        assertEquals(userInformation.getPlaceOfBirth(), placeOfBirth);
        assertEquals(userInformation.getNationality(), nationality);
        assertEquals(userInformation.getIdCardId(), idCardId);
        assertEquals(userInformation.getEyeColor(), eyeColor);
        assertEquals(userInformation.getAddress(), address);
        assertEquals(userInformation.getIdCardExpiration(), idCardExpiration);


    }

}