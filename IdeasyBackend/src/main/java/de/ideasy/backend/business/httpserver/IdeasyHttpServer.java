package de.ideasy.backend.business.httpserver;

import com.sun.net.httpserver.HttpServer;
import de.ideasy.backend.business.httpserver.httphandler.LoginHandler;
import de.ideasy.backend.business.httpserver.httphandler.VerifyHandler;
import de.ideasy.backend.business.information.IInformationManager;
import de.ideasy.backend.persistence.IDataManager;

import java.io.IOException;
import java.net.InetSocketAddress;

/**
 * Created by sandro on 11.08.17.
 */
public class IdeasyHttpServer implements IHttpServer {


    private final HttpServer httpServer;
    private final IDataManager dataManager;
    private final IInformationManager informationManager;

    public IdeasyHttpServer(int port, IDataManager dataManager, IInformationManager informationManager) throws IOException {
        this.httpServer = HttpServer.create(new InetSocketAddress(port), 0);
        this.dataManager = dataManager;
        this.informationManager = informationManager;
        this.initHandlers();
    }

    private void initHandlers() {
        this.httpServer.createContext("/verify", new VerifyHandler(this.informationManager));
        this.httpServer.createContext("/login", new LoginHandler(this.dataManager));
    }

    @Override
    public void start() {
        this.httpServer.start();
    }

    @Override
    public void close() throws IOException {
        this.httpServer.stop(0);
    }


}
