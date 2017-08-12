package de.ideasy.backend;

import de.ideasy.backend.business.console.IdeasyConsole;
import de.ideasy.backend.business.httpserver.IHttpServer;
import de.ideasy.backend.business.httpserver.IdeasyHttpServer;
import de.ideasy.backend.business.information.IInformationManager;
import de.ideasy.backend.business.information.InformationManager;
import de.ideasy.backend.persistence.DataManager;
import de.ideasy.backend.persistence.IDataManager;
import de.ideasy.backend.persistence.mysql.MySQLInfo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.util.Scanner;

/**
 * Created by sandro on 10.08.17.
 */
public final class IdeasyBackendRuntime {

    private static final String LOGO = "\n_________ ______   _______  _______  _______          \n" +
            "\\__   __/(  __  \\ (  ____ \\(  ___  )(  ____ \\|\\     /|\n" +
            "   ) (   | (  \\  )| (    \\/| (   ) || (    \\/( \\   / )\n" +
            "   | |   | |   ) || (__    | (___) || (_____  \\ (_) / \n" +
            "   | |   | |   | ||  __)   |  ___  |(_____  )  \\   /  \n" +
            "   | |   | |   ) || (      | (   ) |      ) |   ) (   \n" +
            "___) (___| (__/  )| (____/\\| )   ( |/\\____) |   | |   \n" +
            "\\_______/(______/ (_______/|/     \\|\\_______)   \\_/   \n" +
            "                                                      ";

    private final IDataManager dataManager;
    private final IHttpServer httpServer;
    private final IInformationManager informationManager;
    private final Logger logger;

    public IdeasyBackendRuntime() throws Exception {
        this.logger = LoggerFactory.getLogger(IdeasyBackendRuntime.class);
        this.logger.info(LOGO);
        this.getLogger().info("Initialising...");
        this.dataManager = new DataManager(new MySQLInfo(
                "psandro.de",
                "cd",
                "ideasy",
                "codedesign"
                , 3306));
        this.informationManager = new InformationManager(dataManager);
        this.httpServer = new IdeasyHttpServer(8000, "test", dataManager, informationManager);
        this.getLogger().info("starting console...");
        new IdeasyConsole(new Scanner(System.in), this.dataManager, this.httpServer);
        this.getLogger().info("starting websocket...");
        this.httpServer.start();
        this.getLogger().info("initialisation finished! write ’help’ to see available commands");
    }

    public static void main(String[] args) {
        try {
            new IdeasyBackendRuntime();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public Logger getLogger() {
        return logger;
    }


}
