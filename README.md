BOOKSTORE-PROJECT  / PMD47 CODING THE FUTURE(CTF-01) CODE CTF010246
NAME: SUPHAN SURNAME: KHAOMOON

1.FRONT-END

Angular CLI: 13.0.4
Node: 16.13.0
Package Manager: npm 8.1.0
OS: win32 x64

Angular: 13.0.3
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router     

Package                         Version
---------------------------------------------------------  
@angular-devkit/architect       0.1300.4
@angular-devkit/build-angular   13.0.4
@angular-devkit/core            13.0.4
@angular-devkit/schematics      13.0.4
@angular/cdk                    13.0.2
@angular/cli                    13.0.4
@angular/material               13.0.2
@schematics/angular             13.0.4
rxjs                            7.4.0
typescript                      4.4.4

2.BACK-END : SPRING BOOT

 .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::                (v2.6.1)

2021-12-27 04:51:41.265  INFO 876 --- [           main] c.b.bookstore.BookstoreApplication       : Starting BookstoreApplication using Java 16.0.2 on DESKTOP-V40UVJK with PID 876 (C:\Users\jacks\Desktop\Suphan\CTF\book-store-project\bookstore\target\classes started by jacks in C:\Users\jacks\Desktop\Suphan\CTF\book-store-project\bookstore)
2021-12-27 04:51:41.270  INFO 876 --- [           main] c.b.bookstore.BookstoreApplication       : No active profile set, falling back to default profiles: default
2021-12-27 04:51:41.920  INFO 876 --- [           main] .s.d.r.c.RepositoryConfigurationDelegate : Bootstrapping Spring Data JPA repositories in DEFAULT mode.
2021-12-27 04:51:41.970  INFO 876 --- [           main] .s.d.r.c.RepositoryConfigurationDelegate : Finished Spring Data repository scanning in 41 ms. Found 2 JPA repository interfaces.
2021-12-27 04:51:42.515  INFO 876 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port(s): 8080 (http)
2021-12-27 04:51:42.528  INFO 876 --- [           main] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
2021-12-27 04:51:42.528  INFO 876 --- [           main] org.apache.catalina.core.StandardEngine  : Starting Servlet engine: [Apache Tomcat/9.0.55]
2021-12-27 04:51:42.646  INFO 876 --- [           main] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring embedded WebApplicationContext
2021-12-27 04:51:42.647  INFO 876 --- [           main] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 1322 ms
2021-12-27 04:51:42.857  INFO 876 --- [           main] o.hibernate.jpa.internal.util.LogHelper  : HHH000204: Processing PersistenceUnitInfo [name: default]
2021-12-27 04:51:42.942  INFO 876 --- [           main] org.hibernate.Version                    : HHH000412: Hibernate ORM core version 5.6.1.Final
2021-12-27 04:51:43.177  INFO 876 --- [           main] o.hibernate.annotations.common.Version   : HCANN000001: Hibernate Commons Annotations {5.1.2.Final}
2021-12-27 04:51:43.297  INFO 876 --- [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Starting...
2021-12-27 04:51:43.660  INFO 876 --- [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Start completed.
2021-12-27 04:51:43.705  INFO 876 --- [           main] org.hibernate.dialect.Dialect            : HHH000400: Using dialect: org.hibernate.dialect.MySQL8Dialect
2021-12-27 04:51:44.487  INFO 876 --- [           main] o.h.e.t.j.p.i.JtaPlatformInitiator       : HHH000490: Using JtaPlatform implementation: [org.hibernate.engine.transaction.jta.platform.internal.NoJtaPlatform]
2021-12-27 04:51:44.496  INFO 876 --- [           main] j.LocalContainerEntityManagerFactoryBean : Initialized JPA EntityManagerFactory for persistence unit 'default'
2021-12-27 04:51:44.872  WARN 876 --- [           main] JpaBaseConfiguration$JpaWebConfiguration : spring.jpa.open-in-view is enabled by default. Therefore, database queries may be performed during view rendering. Explicitly configure spring.jpa.open-in-view to disable this warning
2021-12-27 04:51:45.227  INFO 876 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 8080 (http) with context path ''
2021-12-27 04:51:45.237  INFO 876 --- [           main] c.b.bookstore.BookstoreApplication       : Started BookstoreApplication in 4.391 seconds (JVM running for 5.303)

3.Database : MYSQL(Maria-DB)
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 8
Server version: 8.0.27 MySQL Community Server - GPL

Copyright (c) 2000, 2021, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.
+--------------------+
| Database           |
+--------------------+
| bookstore          |
| information_schema |
| mysql              |
| performance_schema |
| sakila             |
| sys                |
| test               |
| user               |
| world              |
+--------------------+
9 rows in set (0.06 sec)

mysql> show tables;
+---------------------+
| Tables_in_bookstore |
+---------------------+
| book                |
| hibernate_sequence  |
| user                |
+---------------------+
3 rows in set (0.00 sec)
