package de.ideasy.backend.business.httpserver;

import com.sun.net.httpserver.HttpServer;
import de.ideasy.backend.business.httpserver.httphandler.IDGenerateHandler;

import java.io.IOException;
import java.net.InetSocketAddress;

/**
 * Created by sandro on 11.08.17.
 */
public class IdeasyHttpServer implements IHttpServer {


    private final HttpServer httpServer;

    public IdeasyHttpServer(int port) throws IOException {
        this.httpServer = HttpServer.create(new InetSocketAddress(port), 0);
        this.initHandlers();
    }

    private void initHandlers() {
        this.httpServer.createContext("/generate", new IDGenerateHandler());
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
