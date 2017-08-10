package de.ideasy.backend;

import de.ideasy.backend.persistence.DataManager;
import de.ideasy.backend.persistence.IDataManager;
import de.ideasy.backend.persistence.User;
import de.ideasy.backend.persistence.exception.UserNotFoundException;
import de.ideasy.backend.persistence.mysql.MySQLInfo;

import java.util.Scanner;

/**
 * Created by sandro on 10.08.17.
 */
public final class IdeasyBackendRuntime {

    private final IDataManager dataManager;

    public IdeasyBackendRuntime() {
        this.dataManager = new DataManager(new MySQLInfo(
                "",
                "",
                "ideasy",
                "", 3306));
    }

    public static void main(String[] args) {
        new IdeasyBackendRuntime();
    }


    /*public void inputTest() {
        System.out.println("please enter an userId:");
        Scanner input = new Scanner(System.in);
        int userId = input.nextInt();

        try {
            User user = this.dataManager.getUserById(userId);
            System.out.println(user.toString() + "\n");
        } catch (UserNotFoundException e) {
            e.printStackTrace();
        }

    }*/

}
