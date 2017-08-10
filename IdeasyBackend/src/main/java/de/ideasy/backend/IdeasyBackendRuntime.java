package de.ideasy.backend;

import de.ideasy.backend.persistence.DataManager;
import de.ideasy.backend.persistence.IDataManager;
import de.ideasy.backend.persistence.User;
import de.ideasy.backend.persistence.exception.UserNotFoundException;
import de.ideasy.backend.persistence.mysql.MySQLInfo;

import java.sql.SQLException;
import java.util.Scanner;

/**
 * Created by sandro on 10.08.17.
 */
public final class IdeasyBackendRuntime {

    private final IDataManager dataManager;

    public IdeasyBackendRuntime() {
        this.dataManager = new DataManager(new MySQLInfo(
                "psandro.de",
                "*",
                "ideasy",
                "*"
                , 3306));

        this.inputTest();
    }

    public static void main(String[] args) {
        new IdeasyBackendRuntime();
    }


    public void inputTest() {
        new Thread(() -> {
            Scanner input = new Scanner(System.in);
            System.out.println("please enter an email:");
            while (input.hasNext()) {

                String email = input.nextLine();
                try {
                    User user = this.dataManager.getUserByEmail(email);
                    System.out.println(user.toString() + "\n");
                } catch (UserNotFoundException e) {
                    e.printStackTrace();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
                System.out.println("please enter an email:");
            }
        }).start();

    }

}
