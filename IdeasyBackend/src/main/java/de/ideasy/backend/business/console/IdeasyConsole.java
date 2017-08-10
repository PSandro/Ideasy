package de.ideasy.backend.business.console;

import de.ideasy.backend.persistence.IDataManager;
import de.ideasy.backend.persistence.User;
import de.ideasy.backend.persistence.exception.UserNotFoundException;

import javax.swing.*;
import java.sql.SQLException;
import java.util.Scanner;

/**
 * Created by sandro on 11.08.17.
 */
public class IdeasyConsole extends AbstractIdeasyConsole {

    private static final String HELP = "These commands are supported: " +
            "\n  help - shows this help page" +
            "\n  fetch id <ID> - fetches a user by its id" +
            "\n  fetch email <email> - fetches a user by its email";
    private static final String ERROR = "An error occurred";
    private final IDataManager dataManager;

    public IdeasyConsole(Scanner scanner, IDataManager dataManager) {
        super(scanner);
        this.dataManager = dataManager;
    }

    @Override
    public String nextCommand(String[] args) {
        if (args.length < 1) {
            return "The command was not found. Try 'help' ";
        }
        String param = args[0].toLowerCase();

        if (param.equals("help")) {
            return IdeasyConsole.HELP;
        }

        if (args.length == 3 && param.equals("fetch")) {
            if ("id".equals(args[1])) {
                int id;
                try {
                    id = Integer.parseInt(args[2]);
                } catch (NumberFormatException exc) {
                    return "please use a valid Integer as id";
                }
                try {
                    User user = this.dataManager.getUserById(id);
                    return user.toString();
                } catch (UserNotFoundException e) {
                    return e.getMessage();
                } catch (SQLException e) {
                    e.printStackTrace();
                    return IdeasyConsole.ERROR;
                }
            } else if ("email".equals(args[1])) {
                String email = args[2];
                try {
                    User user = this.dataManager.getUserByEmail(email);
                    return user.toString();
                } catch (UserNotFoundException e) {
                    return e.getMessage();
                } catch (SQLException e) {
                    e.printStackTrace();
                    return IdeasyConsole.ERROR;
                }
            } else return IdeasyConsole.HELP;
        }

        return IdeasyConsole.HELP;
    }
}
