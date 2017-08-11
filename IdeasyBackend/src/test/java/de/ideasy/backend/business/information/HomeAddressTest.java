package de.ideasy.backend.business.information;

import org.junit.Test;

import static org.junit.Assert.*;

/**
 * Created by sandro on 11.08.17.
 */
public class HomeAddressTest {


    @Test
    public void successfullSerialisationTest() {
        final int postcode = 56542;
        final String streetName = "testStraße";
        final String homeNumber = "5a";
        final String addition = "Keine Ahnung";
        final String cityName = "Lollywood";

        final HomeAddress homeAddress = new HomeAddress(
                postcode,
                streetName,
                homeNumber,
                addition,
                cityName
        );

        final String json = InformationManager.getGSON().toJson(homeAddress);

        HomeAddress deserializedHomeAdress = InformationManager.getGSON().fromJson(json, HomeAddress.class);

        assertEquals(postcode, deserializedHomeAdress.getPostcode());
        assertEquals(streetName, deserializedHomeAdress.getStreetName());
        assertEquals(homeNumber, deserializedHomeAdress.getHomeNumber());
        assertEquals(addition, deserializedHomeAdress.getAddition());
        assertEquals(cityName, deserializedHomeAdress.getCityName());


    }

}