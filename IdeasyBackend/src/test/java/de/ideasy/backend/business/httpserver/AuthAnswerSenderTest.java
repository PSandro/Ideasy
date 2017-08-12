package de.ideasy.backend.business.httpserver;

import org.junit.Test;

import java.net.URL;
import java.util.HashMap;
import java.util.Map;

import static org.junit.Assert.*;

/**
 * Created by sandro on 12.08.17.
 */
public class AuthAnswerSenderTest {


    @Test
    public void buildURL() throws Exception {
        final AuthAnswerSender answerSender = new AuthAnswerSender("http://example.com/test");
        final Map<String, String> properties = new HashMap<>();
        properties.put("name", "Sandro");
        properties.put("hello", "world");
        properties.put("foo", "bar");

        URL url = answerSender.buildURL(properties);

        String rawUrl = url.getQuery();

        String originalUrl = "foo=bar&name=Sandro&hello=world";

        assertEquals(originalUrl, rawUrl);

    }

}