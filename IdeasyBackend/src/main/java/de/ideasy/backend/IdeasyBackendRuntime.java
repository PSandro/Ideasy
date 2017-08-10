package de.ideasy.backend;

import de.ideasy.backend.business.console.IdeasyConsole;
import de.ideasy.backend.persistence.DataManager;
import de.ideasy.backend.persistence.IDataManager;
import de.ideasy.backend.persistence.User;
import de.ideasy.backend.persistence.exception.UserNotFoundException;
import de.ideasy.backend.persistence.mysql.MySQLInfo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.slf4j.Marker;

import java.sql.SQLException;
import java.util.Scanner;

/**
 * Created by sandro on 10.08.17.
 */
public final class IdeasyBackendRuntime {

    private final IDataManager dataManager;

    private final Logger logger;

    public IdeasyBackendRuntime() {
        this.logger = LoggerFactory.getLogger(IdeasyBackendRuntime.class);
        this.getLogger().info("Initialising...");
        this.dataManager = new DataManager(new MySQLInfo(
                "psandro.de",
                "codeunddesign",
                "ideasy",
                "codeunddesign"
                , 3306));
        this.getLogger().info("starting console...");
        new IdeasyConsole(new Scanner(System.in), this.dataManager);
        this.getLogger().info("initialisation finished! write ’help’ to see available commands");
    }

    public static void main(String[] args) {
        new IdeasyBackendRuntime();
    }

    public Logger getLogger() {
        return logger;
    }


}
