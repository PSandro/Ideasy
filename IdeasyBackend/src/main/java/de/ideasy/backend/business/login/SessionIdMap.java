package de.ideasy.backend.business.login;

import com.google.common.base.Preconditions;
import com.google.common.cache.Cache;
import com.google.common.cache.CacheBuilder;
import de.ideasy.backend.business.information.ThirdPartyInformation;

import java.util.concurrent.TimeUnit;

/**
 * Created by sandro on 11.08.17.
 */
public class SessionIdMap {

    private static final Cache<String, ThirdPartyInformation> CACHE = CacheBuilder.newBuilder()
            .expireAfterWrite(10, TimeUnit.MINUTES)
            .build();

    public static void put(final String key, final ThirdPartyInformation thirdPartyInformation) {
        Preconditions.checkNotNull(key, "The key cannot be null!");
        Preconditions.checkNotNull(thirdPartyInformation, "The information cannot be null!");
        SessionIdMap.CACHE.put(key, thirdPartyInformation);
    }

    public static ThirdPartyInformation get(final String key) {
        Preconditions.checkNotNull(key, "The key cannot be null!");
        return SessionIdMap.CACHE.getIfPresent(key);
    }

    public static void remove(final String key) {
        Preconditions.checkNotNull(key, "The key cannot be null!");
        SessionIdMap.CACHE.invalidate(key);
    }

}
