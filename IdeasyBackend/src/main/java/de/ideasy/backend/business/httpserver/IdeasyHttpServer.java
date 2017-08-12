package de.ideasy.backend.business.httpserver;

import com.sun.net.httpserver.HttpServer;
import de.ideasy.backend.business.httpserver.httphandler.CheckForAuthHandler;
import de.ideasy.backend.business.httpserver.httphandler.LoginHandler;
import de.ideasy.backend.business.httpserver.httphandler.VerifyHandler;
import de.ideasy.backend.business.information.IInformationManager;
import de.ideasy.backend.persistence.IDataManager;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.net.InetSocketAddress;

/**
 * Created by sandro on 11.08.17.
 */
public class IdeasyHttpServer implements IHttpServer {


    private final HttpServer httpServer;
    private final IDataManager dataManager;
    private final IInformationManager informationManager;
    private static final Logger LOGGER = LoggerFactory.getLogger("Http-Server");

    public IdeasyHttpServer(int port, IDataManager dataManager, IInformationManager informationManager) throws IOException {
        this.httpServer = HttpServer.create(new InetSocketAddress(port), 0);
        this.dataManager = dataManager;
        this.informationManager = informationManager;
        this.initHandlers();
    }

    private void initHandlers() {
        this.httpServer.createContext("/verify", new VerifyHandler(this.informationManager));
        this.httpServer.createContext("/login", new LoginHandler(this.dataManager));
        this.httpServer.createContext("/checkForAuth", new CheckForAuthHandler(this.informationManager));
    }

    @Override
    public void start() {
        LOGGER.info("Starting httpserver...");
        this.httpServer.start();
        LOGGER.info("httpserver started!");
    }

    @Override
    public void close() throws IOException {
        LOGGER.info("Stopping httpserver...");
        this.httpServer.stop(0);
        LOGGER.info("httpserver stopped!");
    }


}
