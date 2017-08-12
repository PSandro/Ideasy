package de.ideasy.backend.business.httpserver;

import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpsConfigurator;
import com.sun.net.httpserver.HttpsParameters;
import com.sun.net.httpserver.HttpsServer;
import de.ideasy.backend.business.httpserver.httphandler.CheckForAuthHandler;
import de.ideasy.backend.business.httpserver.httphandler.LoginHandler;
import de.ideasy.backend.business.httpserver.httphandler.VerifyHandler;
import de.ideasy.backend.business.information.IInformationManager;
import de.ideasy.backend.persistence.IDataManager;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.net.ssl.*;
import java.io.FileInputStream;
import java.io.IOException;
import java.net.InetSocketAddress;
import java.security.*;
import java.security.cert.CertificateException;

/**
 * Created by sandro on 11.08.17.
 */
public class IdeasyHttpServer implements IHttpServer {

    //to generate certificate: keytool -genkey -keyalg RSA -alias selfsigned -keystore testkey.jks -storepass password -validity 360 -keysize 2048


    private final HttpsServer httpsServer;
    private final IDataManager dataManager;
    private final IInformationManager informationManager;
    private static final Logger LOGGER = LoggerFactory.getLogger("Http-Server");

    public IdeasyHttpServer(int port, final String password, IDataManager dataManager, IInformationManager informationManager) throws Exception {
        this.dataManager = dataManager;
        this.informationManager = informationManager;
        this.httpsServer = HttpsServer.create(new InetSocketAddress(port), 0);
        final SSLContext sslContext = this.buildSSLContext(password);
        this.httpsServer.setHttpsConfigurator(this.buildHttpsConfiguration(sslContext));
        this.initHandlers();
    }

    private SSLContext buildSSLContext(final String sslPassword) throws NoSuchAlgorithmException, KeyManagementException, KeyStoreException, UnrecoverableKeyException, IOException, CertificateException {
        SSLContext sslContext = SSLContext.getInstance("TLS");

        // initialise the keystore
        char[] password = sslPassword.toCharArray();
        KeyStore ks = KeyStore.getInstance("JKS");
        FileInputStream fis = new FileInputStream("testkey.jks");
        ks.load(fis, password);

        // setup the key manager factory
        KeyManagerFactory kmf = KeyManagerFactory.getInstance("SunX509");
        kmf.init(ks, password);

        // setup the trust manager factory
        TrustManagerFactory tmf = TrustManagerFactory.getInstance("SunX509");
        tmf.init(ks);

        // setup the HTTPS context and parameters
        sslContext.init(kmf.getKeyManagers(), tmf.getTrustManagers(), null);

        return sslContext;
    }

    private HttpsConfigurator buildHttpsConfiguration(final SSLContext sslContext) {
        return new HttpsConfigurator(sslContext) {
            public void configure(HttpsParameters params) {
                try {
                    // initialise the SSL context
                    SSLContext c = SSLContext.getDefault();
                    SSLEngine engine = c.createSSLEngine();
                    params.setNeedClientAuth(false);
                    params.setCipherSuites(engine.getEnabledCipherSuites());
                    params.setProtocols(engine.getEnabledProtocols());

                    // get the default parameters
                    SSLParameters defaultSSLParameters = c.getDefaultSSLParameters();
                    params.setSSLParameters(defaultSSLParameters);

                } catch (Exception ex) {
                    LOGGER.error("Failed to create HTTPS port");
                    ex.printStackTrace();
                }
            }
        };
    }


    private void initHandlers() {
        this.httpsServer.createContext("/verify", new VerifyHandler(this.informationManager));
        this.httpsServer.createContext("/login", new LoginHandler(this.dataManager));
        this.httpsServer.createContext("/checkForAuth", new CheckForAuthHandler(this.informationManager));
    }

    @Override
    public void start() {
        LOGGER.info("Starting httpserver...");
        this.httpsServer.start();
        LOGGER.info("httpserver started!");
    }

    @Override
    public void close() throws IOException {
        LOGGER.info("Stopping httpserver...");
        this.httpsServer.stop(0);
        LOGGER.info("httpserver stopped!");
    }


}
