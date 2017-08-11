package de.ideasy.backend.persistence;

/**
 * Created by sandro on 10.08.17.
 */

public final class UserInformation {



    private final int id;
    private final String firstName;
    private final String lastName;
    private long birth;
    private final String placeOfBirth;
    private final String nationality;
    private final String idCardId;
    private final String eyeColor;
    private final String address;
    private long idCardExpiration;

    public UserInformation(int id, final String firstName, final String lastName, long birth, final String placeOfBirth, final String nationality, final String idCardId, final String eyeColor, final String address, long idCardExpiration) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birth = birth;
        this.placeOfBirth = placeOfBirth;
        this.nationality = nationality;
        this.idCardId = idCardId;
        this.eyeColor = eyeColor;
        this.address = address;
        this.idCardExpiration = idCardExpiration;
    }

    public int getId() {
        return id;
    }

    public final String getFirstName() {
        return firstName;
    }

    public final String getLastName() {
        return lastName;
    }

    public long getBirth() {
        return birth;
    }

    public final String getPlaceOfBirth() {
        return placeOfBirth;
    }

    public final String getNationality() {
        return nationality;
    }

    public final String getIdCardId() {
        return idCardId;
    }

    public final String getEyeColor() {
        return eyeColor;
    }

    public long getIdCardExpiration() {
        return idCardExpiration;
    }

    public String getAddress() {
        return address;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        UserInformation that = (UserInformation) o;

        if (id != that.id) return false;
        if (birth != that.birth) return false;
        if (idCardExpiration != that.idCardExpiration) return false;
        if (firstName != null ? !firstName.equals(that.firstName) : that.firstName != null) return false;
        if (lastName != null ? !lastName.equals(that.lastName) : that.lastName != null) return false;
        if (placeOfBirth != null ? !placeOfBirth.equals(that.placeOfBirth) : that.placeOfBirth != null) return false;
        if (nationality != null ? !nationality.equals(that.nationality) : that.nationality != null) return false;
        if (idCardId != null ? !idCardId.equals(that.idCardId) : that.idCardId != null) return false;
        return eyeColor != null ? eyeColor.equals(that.eyeColor) : that.eyeColor == null;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (firstName != null ? firstName.hashCode() : 0);
        result = 31 * result + (lastName != null ? lastName.hashCode() : 0);
        result = 31 * result + (int) (birth ^ (birth >>> 32));
        result = 31 * result + (placeOfBirth != null ? placeOfBirth.hashCode() : 0);
        result = 31 * result + (nationality != null ? nationality.hashCode() : 0);
        result = 31 * result + (idCardId != null ? idCardId.hashCode() : 0);
        result = 31 * result + (eyeColor != null ? eyeColor.hashCode() : 0);
        result = 31 * result + (int) (idCardExpiration ^ (idCardExpiration >>> 32));
        return result;
    }

    @Override
    public String toString() {
        return "UserInformation{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", birth=" + birth +
                ", placeOfBirth='" + placeOfBirth + '\'' +
                ", nationality='" + nationality + '\'' +
                ", idCardId='" + idCardId + '\'' +
                ", eyeColor='" + eyeColor + '\'' +
                ", address='" + address + '\'' +
                ", idCardExpiration=" + idCardExpiration +
                '}';
    }
}
