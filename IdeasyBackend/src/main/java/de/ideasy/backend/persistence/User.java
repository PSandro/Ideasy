package de.ideasy.backend.persistence;

/**
 * Created by sandro on 10.08.17.
 */
public final class User {

    private final int id;
    private final String email;
    private final String password;
    private final UserInformation userInformation;

    public User(int id, final String email, final String password, final UserInformation userInformation) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.userInformation = userInformation;
    }

    public int getId() {
        return id;
    }

    public final String getEmail() {
        return email;
    }

    public final String getPassword() {
        return password;
    }

    public final UserInformation getUserInformation() {
        return userInformation;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", userInformation=" + userInformation +
                '}';
    }
}
