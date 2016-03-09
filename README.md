# Example OSGi Webapp

# To Build and Deply
```
mvn clean install
cp war-example/target/war-example-1.0-SNAPSHOT.war <KARAF_HOME>/deploy
cp whiteboard-example/target/whiteboard-example-1.0-SNAPSHOT.jar <KARAF_HOME>/deploy
```

# From Karaf CLI

Run the following commands

```
war:list
http:list
```

## war:list output

```
ID  | State       | Web-State   | Level | Web-ContextPath | Name
-------------------------------------------------------------------------------------------------------------
51  | Active      | Deployed    | 80    | /               | Brooklyn REST JavaScript Web GUI (0.9.0.SNAPSHOT)
164 | Active      | Deployed    | 80    | /war-example    | war-example (1.0.0.SNAPSHOT)
```

## http:list output
```
ID  | Servlet             | Servlet-Name               | State       | Alias           | Url
-----------------------------------------------------------------------------------------------------------------------------------------------------
72  | CXFNonSpringServlet | cxf-osgi-transport-servlet | Deployed    | /v1             | [/v1/*]
164 | ResourceServlet     | default                    | Deployed    | /               | [/]
164 | JspServletWrapper   | jsp                        | Deployed    |                 | [*.jsp, *.jspx, *.jspf, *.xsp, *.JSP, *.JSPX, *.JSPF, *.XSP]
```

Note that whiteboard app has not been started as it is waiting on configuration (this would be usually supplied in a cfg file)

## Configure whiteboard example
```
config:edit ie.markmckenna
config:property-set ui.path /whiteboard-example
config:update
```

Re run `http:list` notice the whiteboard-example has now deployed at http://localhost:8181/whiteboard-example/index.html


You can change the path of whiteboard example by re configuring the pid `ie.markmckenna`