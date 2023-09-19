## 10 Principles for building and scaling feature flag systems

Feature flags, sometimes called feature toggles or feature switches, are a software development technique that allows engineering teams to decouple the release of new functionality from software deployments. With feature flags, developers can turn specific features or code segments on or off at runtime, without the need for a code deployment.  Organizations who adopt feature flags see improvements in all key operational metrics for DevOps: Lead time to changes, mean-time-to-recovery, deployment frequency, change failure rate.

There are 10 principles for building a large-scale feature flag system. These principles have their roots in distributed systems architecture and pay particular attention to security, privacy and scale that is required by most enterprise systems. If you follow these principles, your feature flag system is less likely to break under load and will be easier to evolve and maintain.

These principles are:

1. Run-time control. Control flags dynamically, not using config files.
2.  Design for failure. Favor availability over consistency.
3. Unique names across all applications. Enforce naming conventions.
4. Local evaluation. Evaluate valuate flags as close to the user as possible.	
5. Short-lived feature flags. Do not confuse flags with application configuration.
6. Horizontal scaling. Decouple writing and reading flags.
7. Limit payloads. Feature flag payload should be as small as possible.
8. Open by default. Democratize feature flag access.	
9. Do no harm. Prioritize consistent user experience.
10. Traceability. Make it easy to understand flag evaluation.

#### Background

Feature flags have become a central part of the DevOps toolbox along with Git, CI/CD and microservices. You can write modern software without all of these things, but it sure is a lot harder, and a lot less fun.  

And just like the wrong Git repo design can cause interminable headaches, getting the details wrong when first building a feature flag system can be very costly.

This set of principles for building a large-scale feature management platform is the result of thousands of hours of work building and scaling Unleash, an open-source feature management solution used by thousands of organizations.  

Before Unleash was a community and a company, it was an internal project, written by [one dev](https://github.com/ivarconr), for one company. As the community behind Unleash scaled, patterns and anti-patterns of large scale feature flag systems emerged that are essential to understand if you don’t like spending your weekends debugging the production system that is supposed to make debugging in production easier.


“Large scale” means ability to support millions of flags served to end-users with minimal latency or impact on application uptime or performance. That is the type of system most large enterprises are building today. That is the type of feature flag system that this guide focuses on.

Our motivation for writing these principles is to share what we’ve learned building a large-scale feature flag solution with other architects and engineers solving similar challenges. Unleash is open-source, and so are these principles. Have something to contribute? [Open a PR](https://github.com/Unleash/unleash/pulls) or [discussion](https://github.com/orgs/Unleash/discussions) on our Github.
