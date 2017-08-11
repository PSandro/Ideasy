package de.ideasy.backend.business.information;

import com.google.gson.*;

import java.lang.reflect.Type;

/**
 * Created by sandro on 11.08.17.
 */
public class HomeAddressSerializer implements JsonSerializer<HomeAddress>, JsonDeserializer<HomeAddress> {

    @Override
    public JsonElement serialize(HomeAddress homeAddress, Type type, JsonSerializationContext jsonSerializationContext) {
        JsonObject result = new JsonObject();
        result.addProperty("postcode", homeAddress.getPostcode());
        result.addProperty("streetName", homeAddress.getStreetName());
        result.addProperty("homeNumber", homeAddress.getHomeNumber());
        result.addProperty("addition", homeAddress.getAddition());
        result.addProperty("cityName", homeAddress.getCityName());
        return result;
    }

    @Override
    public HomeAddress deserialize(JsonElement jsonElement, Type type, JsonDeserializationContext jsonDeserializationContext) throws JsonParseException {
        JsonObject jsonObject = jsonElement.getAsJsonObject();
        final int postcode = jsonObject.get("postcode").getAsInt();
        final String streetName = jsonObject.get("streetName").getAsString();
        final String homeNumber = jsonObject.get("homeNumber").getAsString();
        final String addition = jsonObject.get("addition").getAsString();
        final String cityName = jsonObject.get("cityName").getAsString();
        return new HomeAddress(postcode, streetName, homeNumber, addition, cityName);
    }


}
