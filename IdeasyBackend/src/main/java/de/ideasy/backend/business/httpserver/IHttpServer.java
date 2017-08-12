package de.ideasy.backend.business.httpserver;

import java.io.Closeable;

/**
 * Created by sandro on 10.08.17.
 */
public interface IHttpServer extends Closeable {

    void start();

}
