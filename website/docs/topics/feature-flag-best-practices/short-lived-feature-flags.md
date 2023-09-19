### 5. Short-lived feature flags. Do not confuse flags with application configuration. 

Feature flags have a life-cycle that is shorter than application lifecycle. The most common use case for feature flags is to protect new functionality. That means that when the roll-out of new functionality is complete, the old code path should be deleted and the feature flag should be archived.

Feature flags should not be used for static application configuration. Application configuration is expected to be consistent, long lived and read when launching an application. Using feature flags to configure an application can lead to inconsistencies between different instances of the same application. Feature flags on the other hand are designed to be short-lived, dynamic and changed at runtime. They are expected to be read and updated at runtime, and need to favor availability over consistency.

In order to succeed with feature flags in a large organization you should:

  - **Use flag expiration dates**: By setting expiration dates for your feature flags you make it easier to keep track of old feature flags that are no longer needed. A proper feature flag solution will inform you about potentially expired flags.
  - **Treat feature flags like technical debt.**: You must plan for cleaning up old feature branches into sprint or project planning, the same way you plan for cleaning up technical debt in your code. This is because they add complexity to your codebase. Over time, it becomes impossible for a human to understand what old feature flags do, which makes turning off a feature flag when a problem arises in production challenging. Which feature flag? 
   - **Archive old flags**: Feature flags that are no longer in use should be archived, after their usage has been removed from the codebase. The archive serves as an important audit log of feature flags that are no longer in use, and allows you to revive them if you would need to install an older version of your application.

There are valid exceptions to short-lived features, flags. In general you should try to limit the amount of long-lived feature flags. Some examples include: 
Kill-switches - these work like an inverted feature flag and are used to gracefully disable part of a system with known weak spots. 
Internal flags used to enable additional debugging, tracing and metrics at runtime, which are too costly to run all the time. This will be used by software engineers while debugging issues.
