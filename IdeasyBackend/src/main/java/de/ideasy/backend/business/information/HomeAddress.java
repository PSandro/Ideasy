package de.ideasy.backend.business.information;

import com.google.common.base.Preconditions;

/**
 * Created by sandro on 11.08.17.
 */
public final class HomeAddress implements FormattedAddress {

    private final int postcode;
    private final String streetName;
    private final String homeNumber;
    private final String addition;
    private final String cityName;


    public HomeAddress(int postcode, String streetName, String homeNumber, String addition, String cityName) {
        Preconditions.checkNotNull(postcode, "The postcode cannot be null!");
        Preconditions.checkNotNull(homeNumber, "The homeNumber cannot be null!");
        Preconditions.checkNotNull(streetName, "The streetName cannot be null!");
        Preconditions.checkNotNull(cityName, "The cityName cannot be null!");

        this.postcode = postcode;
        this.streetName = streetName;
        this.homeNumber = homeNumber;
        this.addition = addition;
        this.cityName = cityName;
    }


    @Override
    public String format() {
        return InformationManager.getGSON().toJson(this);
    }

    public String getAddition() {
        return addition;
    }

    public int getPostcode() {
        return postcode;
    }

    public String getStreetName() {
        return streetName;
    }

    public String getHomeNumber() {
        return homeNumber;
    }

    public String getCityName() {
        return cityName;
    }
}
