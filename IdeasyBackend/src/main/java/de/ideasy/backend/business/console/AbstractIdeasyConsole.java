package de.ideasy.backend.business.console;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Scanner;

/**
 * Created by sandro on 10.08.17.
 */
public abstract class AbstractIdeasyConsole {

    private final Scanner scanner;
    private final Logger logger;

    public AbstractIdeasyConsole(Scanner scanner) {
        this.logger = LoggerFactory.getLogger("console");
        this.scanner = scanner;

        new Thread(() -> {
            while (this.scanner.hasNext()) {
                String rawLine = scanner.nextLine().trim();
                String response = this.nextCommand(rawLine.split(" "));
                this.getLogger().info("Response: " + response);
            }
        }).start();
    }

    public Logger getLogger() {
        return logger;
    }

    public Scanner getScanner() {
        return scanner;
    }

    public abstract String nextCommand(String[] args);
}
