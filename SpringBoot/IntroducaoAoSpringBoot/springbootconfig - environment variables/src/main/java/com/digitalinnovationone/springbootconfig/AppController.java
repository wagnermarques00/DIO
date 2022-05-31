package com.digitalinnovationone.springbootconfig;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AppController {

    @Value("${app.message}")
    private String appMessage;

    @Value("${ENV_DV_URL: ENVIROMENT MESSAGE}")
    private String dbEnvironmentVariable;

    @GetMapping("/envVariable")
    public String getDbEnvironmentVariable() {
        return "This is the Environment variable: " + dbEnvironmentVariable;
    }


    //This Method will display the message on the Spring splash screen
    @GetMapping("/")
    public String getAppMessage() {
        return appMessage;
    }
}
