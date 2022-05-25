package com.digitalinnovationone.springbootconfig;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AppController {

    @Value("${app.message}")
    private String appMessage;

    //This Method will display the message on the Spring splash screen
    @GetMapping("/")
    public String getAppMessage() {
        return appMessage;
    }
}
