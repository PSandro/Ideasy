package de.ideasy.backend.business.httpserver;

import com.google.common.base.Preconditions;
import de.ideasy.backend.business.httpserver.httphandler.CheckForAuthHandler;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.BufferedReader;
import java.io.DataOutputStream;
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

    private final URL urlBase;

    public AuthAnswerSender(final URL urlBase) {
        Preconditions.checkNotNull(urlBase, "The urlBase cannot be null");
        this.urlBase = urlBase;
    }

    public String buildURLParams(Map<String, String> fields) throws MalformedURLException {

        String[] url = {""};
        fields.forEach((field, value) -> {
            url[0] += "&" + field + "=" + value;
        });

        return url[0];
    }

    private String sendRequest(final URL url, final String urlParameters) throws IOException {
        final HttpURLConnection con = (HttpURLConnection) url.openConnection();

        con.setRequestMethod("POST");
        con.setRequestProperty("User-Agent", USER_AGENT);
        con.setRequestProperty("Accept-Language", "en-US,en;q=0.5");

        AuthAnswerSender.LOGGER.info("OUTGOING REQUEST to " + url.getHost() + ": " + url.getQuery().toString());

        con.setDoOutput(true);
        DataOutputStream wr = new DataOutputStream(con.getOutputStream());
        wr.writeBytes(urlParameters);
        wr.flush();
        wr.close();

        int responseCode = con.getResponseCode();
        System.out.println("\nSending 'POST' request to URL : " + url);
        System.out.println("Post parameters : " + urlParameters);
        System.out.println("Response Code : " + responseCode);

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
        return this.sendRequest(this.urlBase, this.buildURLParams(properties));
    }


}
