package de.ideasy.backend.business.httpserver;

import com.google.common.base.Preconditions;
import de.ideasy.backend.business.httpserver.httphandler.CheckForAuthHandler;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Map;

/**
 * Created by sandro on 12.08.17.
 */
public final class AuthAnswerSender {

    private static final String USER_AGENT = "Mozilla/5.0";
    private static final Logger LOGGER = LoggerFactory.getLogger("AuthAnswerSender");

    private final String urlBase;

    public AuthAnswerSender(final String urlBase) {
        Preconditions.checkNotNull(urlBase, "The urlBase cannot be null");
        this.urlBase = urlBase;
    }

    public URL buildURL(Map<String, String> fields) throws MalformedURLException {

        String[] url = {this.urlBase};
        int[] order = {1};
        fields.forEach((field, value) -> {

            boolean first = order[0] == 1;
            String operator = first ? "?" : "&";
            if (first) {
                order[0] = 0;
            }

            url[0] += operator + field + "=" + value;

        });

        return new URL(url[0]);
    }

    private String sendRequest(final URL url) throws IOException {
        final HttpURLConnection con = (HttpURLConnection) url.openConnection();

        con.setRequestMethod("GET");
        con.setRequestProperty("User-Agent", AuthAnswerSender.USER_AGENT);

        int responseCode = con.getResponseCode();

        AuthAnswerSender.LOGGER.info("OUTGOING REQUEST to " + url.getHost() + ": " + url.getQuery().toString());

        BufferedReader in = new BufferedReader(
                new InputStreamReader(con.getInputStream()));
        String inputLine;
        StringBuffer response = new StringBuffer();

        while ((inputLine = in.readLine()) != null) {
            response.append(inputLine);
        }
        in.close();

        return response.toString();
    }

    public String sendGETRequest(Map<String, String> properties) throws IOException {
        return this.sendRequest(this.buildURL(properties));
    }


}
