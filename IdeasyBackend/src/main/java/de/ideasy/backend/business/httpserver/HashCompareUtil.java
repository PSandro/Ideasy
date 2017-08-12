package de.ideasy.backend.business.httpserver;


import com.google.common.base.Preconditions;
import com.sun.org.apache.regexp.internal.RE;
import org.mindrot.jbcrypt.BCrypt;

/**
 * Created by sandro on 12.08.17.
 */
public class HashCompareUtil {

    public static boolean checkPassword(String password_plaintext, String stored_hash) {
        Preconditions.checkNotNull(password_plaintext);
        Preconditions.checkNotNull(password_plaintext);
        String copied = stored_hash;
        if (copied.startsWith("$2y$")) {
            copied = copied.replace("$2y$", "$2a$");
        }
        return BCrypt.checkpw(password_plaintext, copied);
    }
}
