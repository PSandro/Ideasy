package de.ideasy.backend.business.information;

import com.google.common.base.Preconditions;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import de.ideasy.backend.business.customer.SecurityCustomer;
import de.ideasy.backend.persistence.IDataManager;
import de.ideasy.backend.persistence.User;
import de.ideasy.backend.persistence.exception.CustomerNotFoundException;
import de.ideasy.backend.persistence.exception.UserNotFoundException;

import java.sql.SQLException;
import java.util.Map;

/**
 * Created by sandro on 11.08.17.
 */
public class InformationManager implements IInformationManager {

    private static final Gson GSON = new GsonBuilder()
            .registerTypeAdapter(HomeAddress.class, new HomeAddressSerializer())
            .create();

    private final IDataManager dataManager;

    public InformationManager(IDataManager dataManager) {
        Preconditions.checkNotNull(dataManager, "The Datamanager cannot be null!");
        this.dataManager = dataManager;
    }


    @Override
    public boolean checkEmail(final String email) throws SQLException {
        try {
            return this.dataManager.getUserByEmail(email) != null;
        } catch (UserNotFoundException e) {
            return false;
        }
    }

    @Override
    public boolean checkAddress(final FormattedAddress address) throws SQLException {
        try {
            return this.dataManager.getUserByAddress(address) != null;
        } catch (UserNotFoundException e) {
            return false;
        }
    }

    @Override
    public SecurityCustomer getCustomer(String key) throws CustomerNotFoundException, SQLException {
        return this.dataManager.getSecurityCustomer(key);
    }

    @Override
    public ValidationResult validateUser(int id, final Map<UserAttribut, String> userInforamtion) throws UserNotFoundException, SQLException {
        final User user = this.dataManager.getUserById(id);
        return this.validateUser(user, userInforamtion);
    }

    @Override
    public ValidationResult validateUser(final String email, final Map<UserAttribut, String> userInforamtion) throws UserNotFoundException, SQLException {
        final User user = this.dataManager.getUserByEmail(email);
        return this.validateUser(user, userInforamtion);
    }

    private ValidationResult validateUser(User user, Map<UserAttribut, String> userInformation) {
        for (Map.Entry entry : userInformation.entrySet()) {
            UserAttribut attribut = (UserAttribut) entry.getKey();
            String value = (String) entry.getValue();
            String realValue = String.valueOf(user.getUserInformation().get(attribut));

            if (attribut.getType() == String.class) {
                if (!value.equals(realValue))
                    return new ValidationResult(false, attribut.getFieldName() + " does not match");
            } else if (attribut.getType() == Long.class) {
                if (!(Long.parseLong(value) == (Long.valueOf(realValue))))
                    return new ValidationResult(false, attribut.getFieldName() + " does not match");
            } else return new ValidationResult(false, "type not found");
        }
        return new ValidationResult(true);
    }

    public static Gson getGSON() {
        return GSON;
    }
}
